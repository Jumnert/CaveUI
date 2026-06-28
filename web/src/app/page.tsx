import Link from "next/link";
import { Code, Layers, Smartphone, Sparkles, Sun, Terminal } from "lucide-react";
import { FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import Integrations from "@/components/watermelon-ui/integrations-1";
import Testimonials from "@/components/watermelon-ui/testimonials-4";
import { Faq4 } from "@/components/watermelon-ui/faq-4";
import { PerformanceOverview } from "@/components/watermelon-ui/cta-4";
import Announcement4 from "@/components/watermelon-ui/announcement-4";
import { SiteFooter } from "@/components/site/site-footer";
import { AndroidFrame } from "@/components/site/android-frame";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PhoneMessages, PhoneNowPlaying, PhoneWeather } from "@/components/site/hero-phones";
import { HomeAnimations } from "@/components/site/home-animations";
import { getVariant, totalVariants } from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "caveui — Copy-paste Jetpack Compose components" },
  description:
    "An open-source catalog of beautiful, animated Jetpack Compose components built on Material 3. Preview in light & dark, then copy the Kotlin into your Android project.",
  alternates: { canonical: "/" },
};

function CardBg({ children }: { children: React.ReactNode }) {
  return (
    <div className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-6 opacity-60 transition-opacity duration-300 group-hover:opacity-40 [mask-image:linear-gradient(to_bottom,white_20%,transparent_85%)]">
      {children}
    </div>
  );
}

export default function Home() {
  const total = totalVariants();
  const preview = (category: string, id: string) => getVariant(category, id)?.preview ?? null;

  return (
    <div className="w-full">
      <HomeAnimations />
      {/* Announcement bar (index page only, flush under the nav) */}
      <Announcement4 />

      {/* Hero — left-aligned copy + a tower of Android phones */}
      <section className="relative isolate mx-auto flex min-h-[70vh] w-full max-w-7xl items-center overflow-hidden px-6 py-10 lg:min-h-[82vh] lg:py-12">
        <DotPattern
          width={22}
          height={22}
          cr={1.1}
          className="-z-10 text-foreground/15 [mask-image:radial-gradient(60%_60%_at_50%_45%,white,transparent)]"
        />
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col items-start text-left">
            <h1
              data-hero-item
              className="mt-6 font-serif text-5xl leading-[1.02] font-normal tracking-tight text-balance sm:text-6xl md:text-7xl"
            >
              Copy-paste Compose <span className="text-primary/80 italic">components.</span>
            </h1>

            <p
              data-hero-item
              className="mt-5 max-w-md text-lg leading-relaxed text-pretty text-muted-foreground"
            >
              An open-source catalog of beautifully designed, fully animated Jetpack Compose
              components. Preview in light &amp; dark, then copy the Kotlin into your project.
            </p>

            <div data-hero-item className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-11 gap-2 rounded-md px-6 text-base font-semibold shadow-[inset_0_0.5px_0px_rgba(255,255,255,0.5),inset_0_-0.5px_0px_rgba(0,0,0,0.3),inset_0_0.5px_10px_rgba(255,255,255,0.5),inset_0_-0.5px_4px_rgba(0,0,0,0.3)] text-shadow-2xs"
              >
                <Link href="/components/">
                  Browse components
                  <FiArrowRight className="text-base transition-all duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 rounded-md px-6 text-base font-medium"
              >
                <a href="https://github.com/Jumnert/CaveUI" target="_blank" rel="noreferrer">
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* Right: a tower of three Android phones, each a different component */}
          <div data-hero-phones className="relative hidden items-end justify-center lg:flex">
            <div
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl"
            />
            <div
              className="z-10 -mr-8"
              style={{ animation: "float-y 6s ease-in-out infinite", willChange: "transform" }}
            >
              <AndroidFrame
                className="h-[440px] translate-y-7 -rotate-[8deg]"
                contentClassName="p-0"
              >
                <PhoneWeather />
              </AndroidFrame>
            </div>
            <div
              className="z-20"
              style={{ animation: "float-y 7.6s ease-in-out -1s infinite", willChange: "transform" }}
            >
              <AndroidFrame className="h-[570px]" contentClassName="p-0">
                <PhoneNowPlaying />
              </AndroidFrame>
            </div>
            <div
              className="z-10 -ml-8"
              style={{ animation: "float-y 6.8s ease-in-out -0.5s infinite", willChange: "transform" }}
            >
              <AndroidFrame
                className="h-[440px] translate-y-7 rotate-[8deg]"
                contentClassName="p-0"
              >
                <PhoneMessages />
              </AndroidFrame>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section data-reveal className="mx-auto w-full max-w-7xl px-6 py-8">
        <Integrations />
      </section>

      {/* Bento grid of features */}
      <section data-reveal className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why caveui</h2>
          <p className="mt-2 text-muted-foreground">Everything you need to ship Compose UI faster.</p>
        </div>

        <BentoGrid>
          <BentoCard
            className="col-span-3 lg:col-span-2"
            name={`${total}+ animated components`}
            description="Buttons, cards, inputs, loaders, toggles, badges and icons — all motion-ready."
            Icon={Sparkles}
            href="/components/"
            cta="Browse components"
            background={
              <CardBg>
                {preview("buttons", "button-gradient")}
                {preview("loaders", "loader-ring")}
                {preview("toggles", "toggle-ios")}
              </CardBg>
            }
          />
          <BentoCard
            className="col-span-3 lg:col-span-1"
            name="Light & dark"
            description="Every component themed for both."
            Icon={Sun}
            href="/docs/theming/"
            cta="Theming"
            background={
              <div className="pointer-events-none absolute inset-0 flex overflow-hidden opacity-60 [mask-image:linear-gradient(to_bottom,white_20%,transparent_85%)]">
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-stone-900" />
              </div>
            }
          />
          <BentoCard
            className="col-span-3 lg:col-span-1"
            name="Copy the Kotlin"
            description="Real Jetpack Compose source on every page."
            Icon={Code}
            href="/components/"
            cta="See the code"
            background={
              <CardBg>
                <code className="rounded bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-100">
                  {'CaveButton(text = "Go", onClick = {})'}
                </code>
              </CardBg>
            }
          />
          <BentoCard
            className="col-span-3 lg:col-span-1"
            name="Install via CLI"
            description="Add a component straight into your project."
            Icon={Terminal}
            href="/docs/installation/"
            cta="Installation"
            background={
              <CardBg>
                <code className="rounded bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-100">
                  npx caveui add button-neon
                </code>
              </CardBg>
            }
          />
          <BentoCard
            className="col-span-3 lg:col-span-1"
            name="Built on shadcn/ui"
            description="Radix + Tailwind foundations you know."
            Icon={Layers}
            href="/docs/introduction/"
            cta="Learn more"
            background={
              <CardBg>
                {preview("badges", "badge-gradient")}
                {preview("inputs", "input-search")}
              </CardBg>
            }
          />
          <BentoCard
            className="col-span-3 lg:col-span-3"
            name="Material 3 + Jetpack Compose"
            description="Designed for modern Android, with animated icons and micro-interactions baked in."
            Icon={Smartphone}
            href="/components/"
            cta="Explore components"
            background={
              <div className="pointer-events-none absolute inset-0 flex flex-wrap items-center justify-center gap-8 p-8 opacity-80 transition-opacity duration-300 group-hover:opacity-60 [mask-image:linear-gradient(to_bottom,white_20%,transparent_90%)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/kotlin.svg" alt="Kotlin" className="h-16 w-16 drop-shadow-sm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/jetpackcompose.svg" alt="Jetpack Compose" className="h-16 w-16 drop-shadow-sm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/firebase.svg" alt="Firebase" className="h-16 w-16 drop-shadow-sm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/brand/androidstudio.svg" alt="Android Studio" className="h-16 w-16 drop-shadow-sm" />
              </div>
            }
          />
        </BentoGrid>
      </section>

      {/* Trusted by / testimonials */}
      <section data-reveal className="py-8">
        <Testimonials />
      </section>

      {/* FAQ */}
      <Faq4
        title="Frequently asked questions"
        description="Everything you need to know about using caveui in your Compose app."
        faqs={[
          { id: "1", question: "Is caveui free?", answer: "Yes — caveui is MIT-licensed and fully open source." },
          { id: "2", question: "How do I add a component?", answer: "Copy the Kotlin from any component's detail page, or run the install command shown there." },
          { id: "3", question: "Does it support light and dark mode?", answer: "Every component is themed for both light and dark, right out of the box." },
          { id: "4", question: "What is caveui built on?", answer: "The components target Jetpack Compose + Material 3. The docs site itself is built with shadcn/ui." },
          { id: "5", question: "Can I use it in production?", answer: "Yes. Copy the source into your project and customize it freely — you own the code." },
          { id: "6", question: "How do I contribute?", answer: "Open a pull request on GitHub. Adding a component is a single, well-defined PR." },
        ]}
      />

      {/* CTA before footer */}
      <PerformanceOverview
        title="Build Android UI"
        accentWord="without the boilerplate."
        subtitle="Browse the catalog, preview every component in light & dark, then copy the Kotlin straight into your Jetpack Compose project."
        ctaLabel="Browse components"
        ctaHref="/components/"
        defaultPeriodId="overview"
        periods={[
          {
            id: "overview",
            label: "Overview",
            metrics: [
              { id: "components", label: "Components", value: `${total}+`, changePercent: 18, icon: "product" },
              { id: "categories", label: "Categories", value: "7", changePercent: 0, icon: "chart" },
              { id: "themes", label: "Light & dark", value: "2", changePercent: 0, icon: "users" },
              { id: "license", label: "License", value: "MIT", changePercent: 0, icon: "finance" },
            ],
            activities: [
              { id: "1", title: "Gradient Button", timestamp: "Buttons", value: "copy", isPositive: true },
              { id: "2", title: "Stat Card", timestamp: "Cards", value: "copy", isPositive: true },
              { id: "3", title: "Ring Loader", timestamp: "Loaders", value: "copy", isPositive: true },
              { id: "4", title: "iOS Toggle", timestamp: "Toggles", value: "copy", isPositive: true },
            ],
          },
        ]}
      />

      <SiteFooter />
    </div>
  );
}
