import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Buildings, MapPin, RoadHorizon } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, Eyebrow, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Localização", "Centro de Distribuição da Santa Rita em Jandira, com posição estratégica na Grande São Paulo.", "/localizacao");

export default function LocationPage() {
  return <>
    <PageHero eyebrow="Localização" title="No eixo estratégico da Grande São Paulo." intro="A partir de Jandira, a Santa Rita está posicionada para conectar operações à principal região econômica do país." image="/images/hero-logistics.jpg" imageAlt="Vista aérea editorial de um complexo logístico" />
    <section className="page-intro shell"><SectionHeading eyebrow="Jandira / SP" title="Localização que aproxima mercados, vias e operações." text="A unidade está no Condomínio Polo Industrial Jandira 2, inserida na malha urbana e rodoviária da Grande São Paulo." /></section>
    <section className="real-map shell">
      <Reveal className="map-frame"><iframe src={site.mapEmbed} title="Mapa da localização da Santa Rita em Jandira" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></Reveal>
      <Reveal className="map-info"><Eyebrow>Centro de Distribuição</Eyebrow><h2>{site.address}</h2><p>{site.city}<br />CEP {site.postalCode}</p><Link href={site.mapsUrl} target="_blank" className="primary-button">Abrir no Google Maps<ArrowUpRight size={18} /></Link></Reveal>
    </section>
    <section className="location-points shell">
      {[[<MapPin key="i"/>,"Grande São Paulo","Presença em uma região central para fluxos de abastecimento e distribuição."],[<RoadHorizon key="i"/>,"Conectividade rodoviária","Acesso à Castello Branco, Rodoanel, Anhanguera, Bandeirantes e Marginais Pinheiros e Tietê."],[<Buildings key="i"/>,"Polo industrial","Instalação no Condomínio Polo Industrial Jandira 2."]].map(([icon,title,text],i)=><Reveal key={String(title)} delay={i*.08}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
    </section>
    <CtaBand />
  </>;
}
