import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coralab.dev/sitemap.xml",
    host: "https://coralab.dev",
  };
}
