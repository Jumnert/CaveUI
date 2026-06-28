import { Footer5 } from "@/components/watermelon-ui/footer-5";
import { GithubIcon } from "./github-icon";

const REPO_URL = "https://github.com/Jumnert/CaveUI";

/** Site footer. Rendered on every page except component detail pages. */
export function SiteFooter() {
  return (
    <Footer5
      brandName="🪨 caveui"
      brandWatermark="caveui"
      copyright={`© ${new Date().getFullYear()} caveui · MIT licensed`}
      socialLinks={[
        {
          icon: <GithubIcon className="size-4" />,
          href: REPO_URL,
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
            { label: "Docs", href: "/docs/introduction/" },
            { label: "GitHub", href: REPO_URL },
          ],
        },
      ]}
      legalLinks={[{ label: "License", href: REPO_URL }]}
    />
  );
}
