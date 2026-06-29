import type { Metadata } from "next";
import { AndroidFrame } from "@/components/site/android-frame";
import { SiteFooter } from "@/components/site/site-footer";
import { BlocksBrowser, type BlockItem } from "@/components/site/blocks-browser";
import { blocks } from "@/lib/blocks";

export const metadata: Metadata = {
  title: "Blocks",
  description:
    "Full-screen Jetpack Compose blocks (auth, chat, pricing, dashboard and more), previewed on-device and copy-ready.",
};

/** Block id to tab category. Anything not listed is an app screen (App tab). */
const CATEGORY: Record<string, string> = {
  "finance-dashboard": "App",
  "auth-register": "Auth",
  "social-discover": "App",
  "memrizz-paywall": "Commerce",
  "circleup-onboarding": "Auth",
  "app-settings": "App",
  "ai-chat-paywall": "Commerce",
  "meditation-trial": "Commerce",
  "ezfunds-wallet": "App",
  "finster-cards": "App",
  "notifications-center": "App",
  "file-storage": "App",
  "creativity-landing": "Marketing",
  "sleep-analytics": "App",
  "crypto-swap": "App",
  calculator: "App",
  "search-history": "App",
  "integration-connect": "App",
  "aevum-cars": "Marketing",
  "wallet-home": "App",
  "card-detail": "App",
  "meditate-home": "App",
  "meditate-browse": "App",
  "meditate-paywall": "Commerce",
  "crypto-account": "App",
  "wallet-james": "App",
  "spending-statistic": "App",
  "search-services": "App",
  "subscription-premium": "Commerce",
  "profile-settings": "App",
  auth: "Auth",
};

const TABS = ["App", "Marketing", "Commerce", "Auth"];

export default function BlocksPage() {
  const items: BlockItem[] = blocks.map((b) => ({
    id: b.id,
    name: b.name,
    category: CATEGORY[b.id] ?? "App",
    preview: (
      <AndroidFrame scaled className="w-full" contentClassName="p-0">
        {b.preview}
      </AndroidFrame>
    ),
  }));

  return (
    <>
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        <header className="mb-8 border-b pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">Blocks</h1>
          <p className="mt-2 text-muted-foreground">
            Full Jetpack Compose screens, previewed on-device. Tap any to grab the whole screen.
          </p>
          <p className="mt-1 text-sm text-muted-foreground tabular-nums">
            {blocks.length} screens ready to copy.
          </p>
        </header>

        <BlocksBrowser items={items} tabs={TABS} />
      </div>
      <SiteFooter />
    </>
  );
}
