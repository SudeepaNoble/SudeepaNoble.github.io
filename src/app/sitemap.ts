import type { MetadataRoute } from "next";

const siteUrl = "https://sudeepanoble.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects/", "/writing/"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
