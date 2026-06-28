"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Header actions for a component detail page:
 * - "Copy Page" copies an LLM-friendly markdown summary of the page.
 * - The ‹ › buttons navigate to the previous / next component in the category.
 */
export function DetailActions({
  page,
  prevHref,
  nextHref,
}: {
  page: string;
  prevHref: string | null;
  nextHref: string | null;
}) {
  const [copied, setCopied] = useState(false);

  async function copyPage() {
    try {
      await navigator.clipboard.writeText(page);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="flex shrink-0 items-center gap-2">
      <Button variant="outline" size="sm" onClick={copyPage}>
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy Page"}
      </Button>

      {prevHref ? (
        <Button variant="outline" size="icon" asChild aria-label="Previous component">
          <Link href={prevHref}>
            <ChevronLeft className="size-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled aria-label="Previous component">
          <ChevronLeft className="size-4" />
        </Button>
      )}

      {nextHref ? (
        <Button variant="outline" size="icon" asChild aria-label="Next component">
          <Link href={nextHref}>
            <ChevronRight className="size-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" size="icon" disabled aria-label="Next component">
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
