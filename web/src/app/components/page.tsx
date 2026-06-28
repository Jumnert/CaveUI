import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
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
      <div className="stagger-children grid gap-5 sm:grid-cols-2">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <Link key={c.slug} href={`/components/${c.slug}/`}>
              <Card className="group h-full p-6 transition-colors hover:border-primary/50 hover:bg-accent/30">
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs text-muted-foreground">{getVariants(c.slug).length}</span>
                </div>
                <h2 className="mt-4 flex items-center gap-1 font-semibold">
                  {c.name}
                  <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
