import type { MetadataRoute } from "next";
import { site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/solucoes", "/solucoes/armazenagem", "/solucoes/distribuicao", "/solucoes/servicos-extras", "/infraestrutura", "/diferenciais", "/grupo-santa-rita", "/localizacao", "/contato"];
  return paths.map((path, index) => ({ url: `${site.url}${path}`, lastModified: new Date(), changeFrequency: index === 0 ? "weekly" as const : "monthly" as const, priority: index === 0 ? 1 : 0.8 }));
}
