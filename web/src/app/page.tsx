import Link from "next/link";
import { Code, Layers, Smartphone, Sparkles, Sun, Terminal } from "lucide-react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import CTASection from "@/components/watermelon-ui/cta-2";
import Integrations from "@/components/watermelon-ui/integrations-1";
import Testimonials from "@/components/watermelon-ui/testimonials-4";
import { Faq4 } from "@/components/watermelon-ui/faq-4";
import { getVariant, totalVariants } from "@/lib/registry";

const featured: { category: string; id: string }[] = [
  { category: "buttons", id: "button-gradient" },
  { category: "cards", id: "card-stat" },
  { category: "loaders", id: "loader-ring" },
  { category: "toggles", id: "toggle-ios" },
  { category: "badges", id: "badge-gradient" },
  { category: "inputs", id: "input-search" },
  { category: "icons", id: "icon-heartbeat" },
  { category: "buttons", id: "button-shimmer" },
];

function HeaderCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-wrap items-center justify-center gap-3 rounded-lg bg-muted/40 p-4">
      {children}
    </div>
  );
}

export default function Home() {
  const total = totalVariants();
  const preview = (category: string, id: string) => getVariant(category, id)?.preview ?? null;

  return (
    <div className="w-full">
      {/* Hero (watermelon cta-2) */}
      <CTASection
        badge={`Open source · ${total}+ components`}
        headingLine1="Copy-paste Compose components."
        headingHighlight="confidence."
        subtext="caveui is an open-source catalog of beautifully designed, fully animated Jetpack Compose components. Preview in light & dark, then copy the Kotlin or install via the CLI."
        primaryCTA={{ label: "Browse components", href: "/components/" }}
        secondaryCTA={{ label: "View on GitHub", href: "https://github.com/caveui/caveui" }}
      />

      {/* Integrations */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <Integrations />
      </section>

      {/* Featured custom Compose components */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">A taste of the library</h2>
          <p className="mt-2 text-muted-foreground">
            A handful of our custom Jetpack Compose components — click any to grab the code.
          </p>
        </div>
        <div className="stagger-children grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((f) => {
            const v = getVariant(f.category, f.id);
            if (!v) return null;
            return (
              <Link
                key={`${f.category}-${f.id}`}
                href={`/components/${f.category}/${f.id}/`}
                className="group flex flex-col overflow-hidden rounded-xl border bg-card transition-colors hover:border-primary/50 hover:bg-accent/30"
              >
                <div className="flex min-h-[150px] flex-1 items-center justify-center p-6">
                  {v.preview}
                </div>
                <div className="border-t px-4 py-2.5 text-sm font-medium">{v.name}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Bento grid of features */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Why caveui</h2>
          <p className="mt-2 text-muted-foreground">Everything you need to ship Compose UI faster.</p>
        </div>

        <BentoGrid>
          <BentoGridItem
            className="md:col-span-2"
            title={`${total}+ animated components`}
            description="Buttons, cards, inputs, loaders, toggles, badges and icons — all motion-ready."
            icon={<Sparkles className="size-5 text-primary" />}
            header={
              <HeaderCanvas>
                {preview("buttons", "button-gradient")}
                {preview("loaders", "loader-ring")}
                {preview("toggles", "toggle-ios")}
              </HeaderCanvas>
            }
          />
          <BentoGridItem
            title="Light & dark"
            description="Every component themed for both."
            icon={<Sun className="size-5 text-primary" />}
            header={
              <div className="flex flex-1 overflow-hidden rounded-lg border">
                <div className="flex-1 bg-white" />
                <div className="flex-1 bg-stone-900" />
              </div>
            }
          />
          <BentoGridItem
            title="Copy the Kotlin"
            description="Real Jetpack Compose source on every page."
            icon={<Code className="size-5 text-primary" />}
            header={
              <HeaderCanvas>
                <code className="rounded bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-100">
                  {'CaveButton(text = "Go", onClick = {})'}
                </code>
              </HeaderCanvas>
            }
          />
          <BentoGridItem
            title="Install via CLI"
            description="Add a component straight into your project."
            icon={<Terminal className="size-5 text-primary" />}
            header={
              <HeaderCanvas>
                <code className="rounded bg-zinc-950 px-3 py-2 font-mono text-xs text-zinc-100">
                  npx caveui add button-neon
                </code>
              </HeaderCanvas>
            }
          />
          <BentoGridItem
            title="Built on shadcn/ui"
            description="Radix + Tailwind foundations you know."
            icon={<Layers className="size-5 text-primary" />}
            header={
              <HeaderCanvas>
                {preview("badges", "badge-gradient")}
                {preview("inputs", "input-search")}
              </HeaderCanvas>
            }
          />
          <BentoGridItem
            className="md:col-span-2"
            title="Material 3 + Jetpack Compose"
            description="Designed for modern Android, with animated icons and micro-interactions baked in."
            icon={<Smartphone className="size-5 text-primary" />}
            header={
              <HeaderCanvas>
                {preview("icons", "icon-heartbeat")}
                {preview("icons", "icon-spinner")}
                {preview("loaders", "loader-dots")}
                {preview("badges", "badge-new-pulse")}
              </HeaderCanvas>
            }
          />
        </BentoGrid>
      </section>

      {/* Trusted by / testimonials */}
      <section className="py-12">
        <Testimonials />
      </section>

      {/* FAQ */}
      <Faq4
        badge="FAQ"
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
    </div>
  );
}
