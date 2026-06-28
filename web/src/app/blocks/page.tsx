import type { Metadata } from "next";
import { LayoutTemplate } from "lucide-react";
import { SiteFooter } from "@/components/site/site-footer";

export const metadata: Metadata = {
  title: "Blocks",
  description: "Full-page sections composed from caveui components — heroes, CTAs, FAQs and more.",
};

const blocks = [
  { name: "Hero / CTA", description: "Centered headline, badge, dual call-to-action and social proof." },
  { name: "Announcement", description: "Flush bar under the nav for launches and updates." },
  { name: "Integrations", description: "Logo cloud / integration showcase grid." },
  { name: "Bento Grid", description: "Asymmetric feature grid with mixed tile sizes." },
  { name: "Testimonials", description: "Customer quotes with avatars and ratings." },
  { name: "FAQ", description: "Accordion of frequently asked questions." },
  { name: "Footer", description: "Link groups, social icons and a watermark." },
];

export default function BlocksPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
      <header className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Blocks</h1>
        <p className="mt-2 text-muted-foreground">
          Full-page sections composed from caveui components. Drop a block into a page and
          customize the copy — the same sections this site is built from.
        </p>
      </header>

      <div className="stagger-children grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b) => (
          <div
            key={b.name}
            className="group flex h-full flex-col rounded-xl border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-accent/30"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <LayoutTemplate className="size-5" />
            </span>
            <h2 className="mt-4 font-semibold">{b.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </div>
      <SiteFooter />
    </>
  );
}
