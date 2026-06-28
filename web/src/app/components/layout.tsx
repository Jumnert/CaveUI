import { CategorySidebar } from "@/components/site/category-sidebar";

export default function ComponentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex w-full max-w-7xl gap-10 px-6 py-10">
      <CategorySidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
