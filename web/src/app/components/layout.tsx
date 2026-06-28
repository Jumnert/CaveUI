import { SidebarShell } from "@/components/site/sidebar-shell";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return <SidebarShell>{children}</SidebarShell>;
}
