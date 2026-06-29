import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CategoryArt } from "@/components/site/category-art";
import { categories, getVariants, totalVariants } from "@/lib/registry";

export const metadata: Metadata = {
  title: "Components",
  description: "Browse the full caveui catalog of Jetpack Compose components.",
};

export default function ComponentsIndex() {
  return (
    <div>
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Components</h1>
        <p className="mt-2 text-muted-foreground">
          {totalVariants()} animated, copy-ready Compose components across {categories.length}{" "}
          categories.
        </p>
      </header>
      <div className="stagger-children grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.slug} href={`/components/${c.slug}/`} aria-label={c.name}>
              <Card className="group h-full overflow-hidden p-0 transition-colors hover:border-primary/50">
                <CategoryArt slug={c.slug} />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium tabular-nums text-muted-foreground">
                      {getVariants(c.slug).length}
                    </span>
                  </div>
                  <p className="mt-4 flex items-start gap-1 text-sm text-muted-foreground">
                    {c.description}
                    <ArrowRight className="mt-0.5 size-4 shrink-0 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
