"use client";

import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";

/** Token colors — tuned to read on the `bg-code` surface in both light and dark. */
const C = {
  comment: "text-code-foreground/45 italic",
  string: "text-emerald-600 dark:text-emerald-400",
  number: "text-orange-600 dark:text-orange-400",
  keyword: "text-primary", // brand amber
  type: "text-sky-600 dark:text-sky-400",
  annotation: "text-violet-600 dark:text-violet-400",
};

const KOTLIN_KEYWORDS = new Set([
  "fun", "val", "var", "if", "else", "when", "return", "for", "while", "do", "break",
  "continue", "is", "as", "in", "by", "object", "class", "interface", "enum", "sealed",
  "data", "companion", "init", "constructor", "private", "public", "internal", "protected",
  "override", "open", "abstract", "final", "suspend", "inline", "import", "package", "true",
  "false", "null", "this", "super", "vararg", "lateinit", "const", "typealias", "try",
  "catch", "finally", "throw", "operator", "infix", "out", "reified",
]);

function span(key: number, className: string, text: string) {
  return (
    <span key={key} className={className}>
      {text}
    </span>
  );
}

/** Minimal, dependency-free highlighter for the Kotlin/TS snippets we ship. */
function highlight(code: string, language: string): ReactNode[] {
  const out: ReactNode[] = [];
  let key = 0;

  if (language === "bash" || language === "sh") {
    const re = /(#[^\n]*)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(code))) {
      if (m.index > last) out.push(code.slice(last, m.index));
      out.push(span(key++, m[1] ? C.comment : C.string, m[0]));
      last = m.index + m[0].length;
    }
    if (last < code.length) out.push(code.slice(last));
    return out;
  }

  const re =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(@\w+)|("(?:[^"\\]|\\.)*"|`[^`]*`|'(?:[^'\\]|\\.)*')|(\b\d[\d_]*\.?\d*[fFlLdD]?\b)|([A-Za-z_]\w*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const [full, comment, annotation, str, num, ident] = m;
    if (comment) out.push(span(key++, C.comment, full));
    else if (annotation) out.push(span(key++, C.annotation, full));
    else if (str) out.push(span(key++, C.string, full));
    else if (num) out.push(span(key++, C.number, full));
    else if (ident) {
      if (KOTLIN_KEYWORDS.has(ident)) out.push(span(key++, C.keyword, full));
      else if (/^[A-Z]/.test(ident)) out.push(span(key++, C.type, full));
      else out.push(full);
    }
    last = m.index + full.length;
  }
  if (last < code.length) out.push(code.slice(last));
  return out;
}

/**
 * Themed code surface with copy-to-clipboard. Renders lightweight, theme-colored syntax
 * highlighting for Kotlin/TS (and a minimal pass for bash). Client-only; static-friendly.
 */
export function CodeBlock({ code, language = "kotlin" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="relative overflow-hidden rounded-lg border bg-code">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-code-foreground/60">
          {language}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-code-foreground/70 transition hover:bg-foreground/10 hover:text-code-foreground"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 text-sm leading-relaxed text-code-foreground">
        <code className="font-mono">{highlight(code, language)}</code>
      </pre>
    </div>
  );
}
