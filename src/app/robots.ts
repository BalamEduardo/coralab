import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coralab.vercel.app/sitemap.xml",
    host: "https://coralab.vercel.app",
  };
}
