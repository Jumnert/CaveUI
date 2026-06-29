"use client";

import { Children, type ReactNode, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Client-side pagination over server-rendered preview cards. Receives all cards as
 * children, slices them per page, and renders shadcn-styled page controls. Keeps the
 * site static (no query params / extra routes needed). Re-keys the grid per page so the
 * entrance animation replays.
 *
 * The page control is windowed (first, neighbours, last with ellipses) so a busy
 * category like cards (200+ variants) never spills a long row of number buttons.
 */
export function PaginatedGallery({
  children,
  pageSize = 12,
}: {
  children: ReactNode;
  pageSize?: number;
}) {
  const items = Children.toArray(children);
  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  const current = Math.min(page, pageCount);
  const start = (current - 1) * pageSize;
  const end = Math.min(start + pageSize, total);
  const slice = items.slice(start, end);

  const go = (n: number) => {
    setPage(Math.min(Math.max(1, n), pageCount));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div>
      <div ref={topRef} className="scroll-mt-24" />
      <div
        key={current}
        className="stagger-children grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {slice}
      </div>

      {pageCount > 1 && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous page"
              disabled={current === 1}
              onClick={() => go(current - 1)}
            >
              <ChevronLeft className="size-4" />
            </Button>

            {pageWindow(current, pageCount).map((n, i) =>
              n === "ellipsis" ? (
                <span
                  key={`gap-${i}`}
                  aria-hidden
                  className="grid size-9 place-items-center text-sm text-muted-foreground"
                >
                  ...
                </span>
              ) : (
                <Button
                  key={n}
                  variant={n === current ? "default" : "outline"}
                  size="icon"
                  aria-label={`Page ${n}`}
                  aria-current={n === current ? "page" : undefined}
                  onClick={() => go(n)}
                >
                  {n}
                </Button>
              ),
            )}

            <Button
              variant="outline"
              size="icon"
              aria-label="Next page"
              disabled={current === pageCount}
              onClick={() => go(current + 1)}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground tabular-nums">
            {start + 1}-{end} of {total}
          </p>
        </div>
      )}
    </div>
  );
}

/** First page, a window around the current page, and the last page, joined by ellipses. */
function pageWindow(current: number, total: number): (number | "ellipsis")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const out: (number | "ellipsis")[] = [1];
  const left = Math.max(2, current - 1);
  const right = Math.min(total - 1, current + 1);

  if (left > 2) out.push("ellipsis");
  for (let i = left; i <= right; i++) out.push(i);
  if (right < total - 1) out.push("ellipsis");
  out.push(total);

  return out;
}
