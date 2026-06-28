"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { categories, getVariants } from "@/lib/registry";
import { docs } from "@/lib/docs";

/** ⌘K / Ctrl+K search palette for pages, docs, categories and every component. */
export function SearchCommand() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const components = useMemo(
    () =>
      categories.flatMap((c) =>
        getVariants(c.slug).map((v) => ({
          id: v.id,
          name: v.name,
          category: c.slug,
          categoryName: c.name,
        })),
      ),
    [],
  );

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="justify-start gap-2 text-[15px] text-muted-foreground sm:w-64"
        aria-label="Search"
      >
        <Search className="size-4" />
        <span className="hidden sm:inline">Search…</span>
        <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium sm:inline-flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search components, docs…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Pages">
            <CommandItem value="home" onSelect={() => go("/")}>
              Home
            </CommandItem>
            <CommandItem value="components gallery" onSelect={() => go("/components/")}>
              Components
            </CommandItem>
            <CommandItem value="blocks" onSelect={() => go("/blocks/")}>
              Blocks
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Docs">
            {docs.map((d) => (
              <CommandItem
                key={d.slug}
                value={`doc ${d.title} ${d.description}`}
                onSelect={() => go(`/docs/${d.slug}/`)}
              >
                {d.title}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Categories">
            {categories.map((c) => (
              <CommandItem
                key={c.slug}
                value={`category ${c.name}`}
                onSelect={() => go(`/components/${c.slug}/`)}
              >
                {c.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandGroup heading="Components">
            {components.map((v) => (
              <CommandItem
                key={`${v.category}-${v.id}`}
                value={`${v.name} ${v.categoryName} ${v.id}`}
                onSelect={() => go(`/components/${v.category}/${v.id}/`)}
              >
                <span>{v.name}</span>
                <span className="ml-2 text-xs text-muted-foreground">{v.categoryName}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
