"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

/**
 * Dark code surface with a copy-to-clipboard button. Used on detail pages to show the
 * Kotlin/Compose source and the install command. Client-only so the site stays static.
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
    <div className="relative overflow-hidden rounded-lg border bg-zinc-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wider text-zinc-400">{language}</span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-zinc-300 transition hover:bg-white/10"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-4 text-sm leading-relaxed text-zinc-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}
