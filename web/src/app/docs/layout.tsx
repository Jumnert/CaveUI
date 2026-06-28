import { SidebarShell } from "@/components/site/sidebar-shell";
import { SiteFooter } from "@/components/site/site-footer";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarShell>{children}</SidebarShell>
      <SiteFooter />
    </>
  );
}
