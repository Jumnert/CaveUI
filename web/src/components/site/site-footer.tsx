import { Footer3 } from "@/components/watermelon-ui/footer-3";
import { FluidGradientText } from "@/components/site/fluid-gradient-text";
import { GithubIcon } from "./github-icon";

const REPO_URL = "https://github.com/Jumnert/CaveUI";

/** Site footer (footer-3) with an interactive fluid-gradient "caveui" wordmark. */
export function SiteFooter() {
  return (
    <Footer3
      logo={<span className="text-2xl">🪨</span>}
      brandName="caveui"
      description="A community catalog of beautiful, copy-friendly Jetpack Compose components — built on Material 3. Open source, no black boxes."
      socialLinks={[{ icon: <GithubIcon className="size-4" />, href: REPO_URL }]}
      copyright={`© ${new Date().getFullYear()} caveui · MIT licensed`}
      legalLinks={[
        { label: "License", href: REPO_URL },
        { label: "GitHub", href: REPO_URL },
      ]}
      linkGroups={[
        {
          title: "Components",
          links: [
            { label: "Buttons", href: "/components/buttons/" },
            { label: "Cards", href: "/components/cards/" },
            { label: "Inputs", href: "/components/inputs/" },
            { label: "Loaders", href: "/components/loaders/" },
          ],
        },
        {
          title: "Docs",
          links: [
            { label: "Introduction", href: "/docs/introduction/" },
            { label: "Installation", href: "/docs/installation/" },
            { label: "Theming", href: "/docs/theming/" },
            { label: "CLI", href: "/docs/cli/" },
          ],
        },
        {
          title: "Resources",
          links: [
            { label: "All components", href: "/components/" },
            { label: "Blocks", href: "/blocks/" },
            { label: "GitHub", href: REPO_URL },
          ],
        },
      ]}
    >
      <div className="h-28 w-full text-foreground transition-colors duration-300 hover:text-primary sm:h-44 md:h-56">
        <FluidGradientText text="caveui" />
      </div>
    </Footer3>
  );
}
