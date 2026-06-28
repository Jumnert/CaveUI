import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/site/code-block";
import { AppleHelloCaveui } from "@/components/site/apple-hello-caveui";
import { docParams, docs, getDoc } from "@/lib/docs";

export const dynamicParams = false;

export function generateStaticParams() {
  return docParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description,
  };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  // Previous / next doc for footer navigation.
  const idx = docs.findIndex((d) => d.slug === doc.slug);
  const prev = idx > 0 ? docs[idx - 1] : null;
  const next = idx >= 0 && idx < docs.length - 1 ? docs[idx + 1] : null;

  return (
    <article className="mx-auto max-w-3xl">
      <header className="mb-8 border-b pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Docs</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">{doc.title}</h1>
        <p className="mt-2 text-muted-foreground">{doc.description}</p>
      </header>

      {doc.slug === "introduction" && (
        <div className="mb-10 flex justify-center py-6 text-primary">
          <AppleHelloCaveui className="h-28 w-auto sm:h-36" />
        </div>
      )}

      <div className="space-y-5">
        {doc.blocks.map((block, i) => {
          switch (block.type) {
            case "h2":
              return (
                <h2
                  key={i}
                  id={slugify(block.text)}
                  className="scroll-mt-24 pt-4 text-xl font-semibold tracking-tight"
                >
                  {block.text}
                </h2>
              );
            case "p":
              return (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {block.text}
                </p>
              );
            case "ul":
              return (
                <ul key={i} className="list-disc space-y-1.5 pl-5 text-muted-foreground marker:text-primary">
                  {block.items.map((item, j) => (
                    <li key={j} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            case "code":
              return <CodeBlock key={i} code={block.code} language={block.lang} />;
            default:
              return null;
          }
        })}
      </div>

      {(prev || next) && (
        <nav className="mt-12 flex items-center justify-between gap-4 border-t pt-6 text-sm">
          {prev ? (
            <a
              href={`/docs/${prev.slug}/`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              ← {prev.title}
            </a>
          ) : (
            <span />
          )}
          {next ? (
            <a
              href={`/docs/${next.slug}/`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {next.title} →
            </a>
          ) : (
            <span />
          )}
        </nav>
      )}
    </article>
  );
}
