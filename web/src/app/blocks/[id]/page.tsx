import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/site/code-block";
import { AndroidFrame } from "@/components/site/android-frame";
import { DetailActions } from "@/components/site/detail-actions";
import { InstallTabs } from "@/components/site/install-tabs";
import { ComponentMinimap } from "@/components/site/component-minimap";
import { blockParams, blocks, getBlock } from "@/lib/blocks";

export const dynamicParams = false;

export function generateStaticParams() {
  return blockParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const b = getBlock(id);
  if (!b) return {};
  return { title: `${b.name} block`, description: b.description };
}

export default async function BlockDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const b = getBlock(id);
  if (!b) notFound();

  const idx = blocks.findIndex((x) => x.id === b.id);
  const prev = idx > 0 ? blocks[idx - 1] : null;
  const next = idx >= 0 && idx < blocks.length - 1 ? blocks[idx + 1] : null;

  const fence = "```";
  const pageMarkdown = [
    `# ${b.name} block`,
    "",
    b.description,
    "",
    "## Installation",
    "",
    "caveui blocks are copy-paste Jetpack Compose built on Material 3, no dependency. Make sure Material 3 (Compose BOM) is on your classpath, then copy the screen below.",
    "",
    "## Usage",
    "",
    `${fence}kotlin`,
    b.code,
    fence,
    "",
  ].join("\n");

  return (
    <div className="mx-auto flex w-full max-w-5xl gap-10 px-6 py-10">
      <div className="min-w-0 max-w-3xl flex-1">
        <Link
          href="/blocks/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ChevronLeft className="size-4" />
          Blocks
        </Link>

        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold tracking-tight">{b.name}</h1>
            <p className="mt-1.5 text-muted-foreground">{b.description}</p>
          </div>
          <DetailActions
            page={pageMarkdown}
            shareTitle={`${b.name} block, caveui`}
            shareUrl={`/blocks/${b.id}/`}
            prevHref={prev ? `/blocks/${prev.id}/` : null}
            nextHref={next ? `/blocks/${next.id}/` : null}
          />
        </div>

        {/* Preview (inside the Android device mockup) */}
        <div id="preview" className="mt-6 flex scroll-mt-24 justify-center rounded-xl border bg-card p-8 sm:p-10">
          <AndroidFrame className="h-[680px]" contentClassName="p-0">
            {b.preview}
          </AndroidFrame>
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
        <CodeBlock code={b.code} language="kotlin" />

        {(prev || next) && (
          <nav className="mt-12 flex items-center justify-between gap-4 border-t pt-6">
            {prev ? (
              <Button variant="outline" asChild>
                <Link href={`/blocks/${prev.id}/`}>
                  <ChevronLeft className="size-4" />
                  {prev.name}
                </Link>
              </Button>
            ) : (
              <span />
            )}
            {next ? (
              <Button variant="outline" asChild>
                <Link href={`/blocks/${next.id}/`}>
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
