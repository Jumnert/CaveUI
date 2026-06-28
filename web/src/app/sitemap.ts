import type { MetadataRoute } from "next";
import { categories, variantParams } from "@/lib/registry";

const BASE = "https://caveui.dev";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, priority: 1 },
    { url: `${BASE}/components/`, lastModified: now, priority: 0.9 },
    ...categories.map((c) => ({
      url: `${BASE}/components/${c.slug}/`,
      lastModified: now,
      priority: 0.8,
    })),
    ...variantParams().map((p) => ({
      url: `${BASE}/components/${p.category}/${p.id}/`,
      lastModified: now,
      priority: 0.6,
    })),
  ];
}
