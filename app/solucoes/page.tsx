import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageHero, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { distributionFeatures, extraServices, solutions, storageFeatures } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Soluções Logísticas", "Armazenagem multitemperatura, distribuição, cross-docking e atividades extras integradas à operação.", "/solucoes");

const featureSets = [storageFeatures, distributionFeatures, extraServices];

export default function SolutionsPage() {
  return <>
    <PageHero eyebrow="Soluções" title="Logística que acompanha a complexidade do seu negócio." intro="Uma combinação flexível de armazenagem, movimentação e serviços para construir o fluxo mais adequado a cada operação." image="/images/distribution.jpg" imageAlt="Operação editorial de distribuição em centro logístico" />
    <section className="page-intro shell"><SectionHeading eyebrow="Capacidades conectadas" title="Mais do que etapas isoladas. Uma operação pensada de ponta a ponta." text="A Santa Rita integra estrutura, equipe e informação para criar respostas operacionais coerentes com o produto, o canal e a expectativa do cliente." /></section>
    <section className="solution-detail-list shell">
      {solutions.map((solution, index) => <Reveal className="solution-detail" key={solution.href}>
        <div className="solution-detail-image"><Image src={solution.image} alt="Solução logística em operação" fill sizes="(max-width: 900px) 100vw, 45vw" className="cover-image" /><span>0{index + 1}</span></div>
        <div className="solution-detail-copy"><p className="eyebrow"><span />{solution.eyebrow}</p><h2>{solution.title}</h2><p>{solution.description}</p><div className="tag-list">{featureSets[index].slice(0, 5).map((feature) => <span key={feature}>{feature}</span>)}</div><Link href={solution.href} className="text-link">Explorar solução<ArrowUpRight size={18} /></Link></div>
      </Reveal>)}
    </section>
    <CtaBand />
  </>;
}
