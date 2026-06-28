import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { GithubIcon } from "@/components/site/github-icon";
import { Footer5 } from "@/components/watermelon-ui/footer-5";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Display serif used by the hero (font-serif), paired with Geist for body/UI.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://caveui.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "caveui — Jetpack Compose component catalog",
    template: "%s — caveui",
  },
  description:
    "A community catalog of beautiful, copy-friendly Jetpack Compose components — built on shadcn-style design. Buttons, cards, inputs, loaders and animated icons in light & dark.",
  keywords: ["Jetpack Compose", "Android UI", "Compose components", "caveui", "Kotlin", "shadcn"],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "caveui — Jetpack Compose component catalog",
    description:
      "Beautiful, copy-friendly Jetpack Compose components. Browse, preview in light & dark, copy the Kotlin.",
    siteName: "caveui",
  },
  twitter: {
    card: "summary_large_image",
    title: "caveui — Jetpack Compose component catalog",
    description: "Beautiful, copy-friendly Jetpack Compose components.",
  },
};

const noFlashScript = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <TooltipProvider delayDuration={200}>
          <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
              <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                🪨 caveui
              </Link>
              <div className="flex items-center gap-1">
                <Button variant="ghost" asChild>
                  <Link href="/components/buttons/">Components</Link>
                </Button>
                <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                  <a href="https://github.com/caveui/caveui" target="_blank" rel="noreferrer">
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <Footer5
            brandName="🪨 caveui"
            brandWatermark="caveui"
            copyright={`© ${new Date().getFullYear()} caveui · MIT licensed`}
            socialLinks={[
              {
                icon: <GithubIcon className="size-4" />,
                href: "https://github.com/caveui/caveui",
                label: "GitHub",
              },
            ]}
            linkGroups={[
              {
                title: "Components",
                links: [
                  { label: "Buttons", href: "/components/buttons/" },
                  { label: "Cards", href: "/components/cards/" },
                  { label: "Loaders", href: "/components/loaders/" },
                  { label: "Icons", href: "/components/icons/" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { label: "All components", href: "/components/" },
                  { label: "GitHub", href: "https://github.com/caveui/caveui" },
                ],
              },
            ]}
            legalLinks={[{ label: "License", href: "https://github.com/caveui/caveui" }]}
          />
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
