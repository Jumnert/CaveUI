"use client";

import { Children, type ReactNode, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Client-side pagination over server-rendered preview cards. Receives all cards as
 * children, slices them per page, and renders shadcn-styled page controls. Keeps the
 * site static (no query params / extra routes needed). Re-keys the grid per page so the
 * entrance animation replays.
 */
export function PaginatedGallery({
  children,
  pageSize = 12,
}: {
  children: ReactNode;
  pageSize?: number;
}) {
  const items = Children.toArray(children);
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const [page, setPage] = useState(1);
  const current = Math.min(page, pageCount);
  const start = (current - 1) * pageSize;
  const slice = items.slice(start, start + pageSize);

  return (
    <div>
      <div key={current} className="stagger-children grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {slice}
      </div>

      {pageCount > 1 && (
        <div className="mt-10 flex items-center justify-center gap-1">
          <Button
            variant="outline"
            size="icon"
            aria-label="Previous page"
            disabled={current === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            <ChevronLeft className="size-4" />
          </Button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <Button
              key={n}
              variant={n === current ? "default" : "outline"}
              size="icon"
              aria-current={n === current ? "page" : undefined}
              onClick={() => setPage(n)}
            >
              {n}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            aria-label="Next page"
            disabled={current === pageCount}
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
