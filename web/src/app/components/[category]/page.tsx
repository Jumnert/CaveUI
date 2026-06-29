import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryParams, getCategory, getVariants } from "@/lib/registry";
import { PaginatedGallery } from "@/components/site/paginated-gallery";
import { PreviewCard } from "@/components/site/preview-card";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return {};
  return {
    title: c.name,
    description: `${c.description} ${getVariants(category).length} copy-ready Jetpack Compose variants.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();
  const variants = getVariants(category);

  return (
    <div>
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">{c.name}</h1>
        <p className="mt-2 text-muted-foreground">{c.description}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {variants.length} variants · tap any tile for the full Compose code
        </p>
      </header>
      {variants.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
          <p className="text-base font-medium">Coming soon</p>
          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            This category is scaffolded, polished, animated <span className="font-medium">{c.name}</span>{" "}
            components are on the way.
          </p>
        </div>
      ) : (
        <PaginatedGallery>
          {variants.map((v) => (
            <PreviewCard key={v.id} variant={v} />
          ))}
        </PaginatedGallery>
      )}
    </div>
  );
}
