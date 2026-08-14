import type { Metadata } from "next";
import { site } from "@/lib/site-data";

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      locale: "pt_BR",
      type: "website",
      images: [{ url: "/images/hero-logistics.png", width: 1920, height: 1080, alt: "Complexo logístico contemporâneo" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, images: ["/images/hero-logistics.png"] },
  };
}
