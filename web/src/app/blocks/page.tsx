import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { AndroidFrame } from "@/components/site/android-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { blocks } from "@/lib/blocks";

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Full-screen Jetpack Compose blocks — auth, chat, onboarding, dashboard and more, previewed on-device and copy-ready.",
};

const roadmap = [
  "Feed", "Search", "Notification", "File upload", "Hero", "CTA", "Feature", "Pricing",
  "Stats", "Testimonials", "Team", "FAQ", "Integrations", "Newsletter", "Announcement",
  "Blog", "Career", "Contact", "Footer", "Navigation", "Widget",
];

export default function BlocksPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <header className="mb-10 border-b pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Blocks</h1>
          <p className="mt-2 text-muted-foreground">
            Full Jetpack Compose screens, previewed on-device. Tap any to grab the whole screen.
          </p>
        </header>

        <div className="stagger-children grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <Link key={b.id} href={`/blocks/${b.id}/`} className="group flex flex-col items-center gap-4">
              <AndroidFrame
                className="h-[540px] transition-transform duration-300 group-hover:-translate-y-1.5"
                contentClassName="p-0"
              >
                {b.preview}
              </AndroidFrame>
              <div className="text-center">
                <p className="inline-flex items-center gap-1 font-semibold">
                  {b.name}
                  <ArrowRight className="size-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                </p>
                <p className="mx-auto mt-0.5 max-w-[15rem] text-xs text-muted-foreground">{b.description}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t pt-6">
          <p className="text-sm font-medium">More on the way</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {roadmap.map((r) => (
              <span key={r} className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
