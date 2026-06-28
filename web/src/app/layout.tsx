import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { GithubIcon } from "@/components/site/github-icon";
import { SearchCommand } from "@/components/site/search-command";
import { Separator } from "@/components/ui/separator";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
// Display serif used by the hero (font-serif), paired with Geist for body/UI.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const SITE_URL = "https://ui.jumnert.dev";

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
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
                  🪨 caveui
                </Link>
                <div className="hidden items-center gap-1 md:flex">
                  <Button variant="ghost" asChild className="text-[15px]">
                    <Link href="/">Home</Link>
                  </Button>
                  <Button variant="ghost" asChild className="text-[15px]">
                    <Link href="/docs/introduction/">Docs</Link>
                  </Button>
                  <Button variant="ghost" asChild className="text-[15px]">
                    <Link href="/components/">Components</Link>
                  </Button>
                  <Button variant="ghost" asChild className="text-[15px]">
                    <Link href="/blocks/">Blocks</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <SearchCommand />
                <Separator orientation="vertical" className="mx-1 h-5" />
                <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                  <a href="https://github.com/Jumnert/CaveUI" target="_blank" rel="noreferrer">
                    <GithubIcon className="size-4" />
                  </a>
                </Button>
                <Separator orientation="vertical" className="mx-1 h-5" />
                <ThemeToggle />
              </div>
            </nav>
          </header>

          <main className="flex-1">{children}</main>

          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
