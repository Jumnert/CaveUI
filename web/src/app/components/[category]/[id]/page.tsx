import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/site/code-block";
import { AndroidFrame } from "@/components/site/android-frame";
import { ComponentMinimap } from "@/components/site/component-minimap";
import { DetailActions } from "@/components/site/detail-actions";
import { InstallTabs } from "@/components/site/install-tabs";
import { getCategory, getVariant, getVariants, variantParams } from "@/lib/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return variantParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}): Promise<Metadata> {
  const { category, id } = await params;
  const v = getVariant(category, id);
  if (!v) return {};
  const description =
    v.description ?? `${v.name} — a copy-ready caveui ${category} component for Jetpack Compose.`;
  return { title: v.name, description };
}

export default async function VariantDetail({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { category, id } = await params;
  const v = getVariant(category, id);
  const c = getCategory(category);
  if (!v || !c) notFound();

  // Previous / next component within this category.
  const list = getVariants(category);
  const idx = list.findIndex((x) => x.id === v.id);
  const prev = idx > 0 ? list[idx - 1] : null;
  const next = idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null;
  const prevHref = prev ? `/components/${category}/${prev.id}/` : null;
  const nextHref = next ? `/components/${category}/${next.id}/` : null;

  // LLM-friendly markdown for the "Copy Page" action (avoid backtick escaping with a fence const).
  const fence = "```";
  const pageMarkdown = [
    `# ${v.name}`,
    "",
    v.description ?? `${v.name} — a caveui ${c.name} component for Jetpack Compose.`,
    "",
    "## Installation",
    "",
    "caveui components are copy-paste Jetpack Compose built on Material 3 — there is no caveui dependency. Make sure Material 3 (Compose BOM) is on your classpath, then copy the Usage snippet below.",
    "",
    "## Usage",
    "",
    `${fence}kotlin`,
    v.code,
    fence,
    "",
  ].join("\n");

  return (
    <div className="mx-auto flex w-full max-w-5xl gap-10">
      <div className="min-w-0 max-w-3xl flex-1">
      <Link
        href={`/components/${category}/`}
        className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ChevronLeft className="size-4" />
        {c.name}
      </Link>

      {/* Header: title + description (left) · Copy Page / </> (right) */}
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{c.name}</Badge>
            {v.tags?.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight">{v.name}</h1>
          {v.description && <p className="mt-1.5 text-muted-foreground">{v.description}</p>}
        </div>
        <DetailActions
          page={pageMarkdown}
          shareTitle={`${v.name} — caveui`}
          shareUrl={`/components/${category}/${v.id}/`}
          prevHref={prevHref}
          nextHref={nextHref}
        />
      </div>

      {/* Preview (inside an Android device mockup) */}
      <div id="preview" className="mt-6 flex scroll-mt-24 justify-center rounded-xl border bg-card p-8 sm:p-10">
        <AndroidFrame className="h-[600px]">{v.preview}</AndroidFrame>
      </div>

      {/* Installation */}
      <h2 id="installation" className="mt-12 mb-4 scroll-mt-24 text-xl font-semibold tracking-tight">
        Installation
      </h2>
      <InstallTabs />

      {/* Usage */}
      <h2 id="usage" className="mt-12 mb-4 scroll-mt-24 text-xl font-semibold tracking-tight">
        Usage
      </h2>
      <CodeBlock code={v.code} language="kotlin" />

      {/* Previous / next component */}
      {(prev || next) && (
        <nav className="mt-12 flex items-center justify-between gap-4 border-t pt-6">
          {prev ? (
            <Button variant="outline" asChild>
              <Link href={`/components/${category}/${prev.id}/`}>
                <ChevronLeft className="size-4" />
                {prev.name}
              </Link>
            </Button>
          ) : (
            <span />
          )}
          {next ? (
            <Button variant="outline" asChild>
              <Link href={`/components/${category}/${next.id}/`}>
                {next.name}
                <ChevronRight className="size-4" />
              </Link>
            </Button>
          ) : (
            <span />
          )}
        </nav>
      )}
      </div>

      <aside className="hidden w-44 shrink-0 xl:block">
        <div className="sticky top-24">
          <ComponentMinimap
            items={[
              { title: "Preview", url: "#preview" },
              { title: "Installation", url: "#installation" },
              { title: "Usage", url: "#usage" },
            ]}
          />
        </div>
      </aside>
    </div>
  );
}
