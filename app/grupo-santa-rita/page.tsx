import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand, Eyebrow, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Santa Rita", "Conheça a história, a cultura e o posicionamento da Santa Rita em soluções logísticas customizadas.", "/grupo-santa-rita");

export default function AboutPage() {
  return <>
    <PageHero eyebrow="Santa Rita · 25 anos de mercado" title="Experiência operacional com a proximidade de quem constrói junto." intro="Há 25 anos, a Santa Rita oferece um serviço logístico personalizado, com seriedade, comprometimento e parceria." image="/images/operations-team.jpg" imageAlt="Equipe editorial de operações reunida" />
    <section className="story shell">
      <Reveal className="story-title"><Eyebrow>Nossa história</Eyebrow><h2>Uma origem empreendedora. Uma visão orientada ao cliente.</h2></Reveal>
      <Reveal className="story-copy"><p>A Santa Rita foi fundada pelos irmãos Butori, profissionais com ampla experiência no mercado de logística e transporte, com o objetivo de prestar um serviço personalizado aos seus clientes.</p><p>A empresa passou a se destacar pela seriedade, pelo comprometimento e pela capacidade de construir alternativas operacionais em conjunto, considerando as particularidades de cada negócio.</p><p>Essa essência permanece no centro da Santa Rita: reunir experiência humana, tecnologia, equipamentos e processos para atender necessidades logísticas diversas com proximidade e consistência.</p></Reveal>
    </section>
    <section className="culture-photo"><Image src="/images/hero-logistics.jpg" alt="Complexo logístico em imagem editorial ilustrativa" fill sizes="100vw" className="cover-image" /><div className="shell"><Reveal><p>Nosso posicionamento</p><h2>Estrutura robusta.<br />Operação flexível.<br /><span>Relação humana.</span></h2></Reveal></div></section>
    <section className="values shell"><SectionHeading eyebrow="Cultura Santa Rita" title="A qualidade começa nas pessoas e aparece no processo." /><div className="values-grid">{[["Seriedade","Compromisso com o que foi combinado e transparência na relação."],["Flexibilidade","Capacidade de ajustar a solução à dinâmica real da operação."],["Especialização","Conhecimento prático aplicado ao controle, à qualidade e à eficiência."],["Parceria","Integração entre equipes para construir soluções sustentáveis no dia a dia."]].map(([title,text],i)=><Reveal key={title} delay={i*.06}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div></section>
    <SplitFeature image="/images/distribution.jpg" imageAlt="Operação editorial de distribuição" eyebrow="Qualidade e tecnologia" title="Investimento contínuo no que sustenta a operação." text="A Santa Rita investe em profissionais, tecnologia e equipamentos para ampliar a capacidade de resposta e manter a operação preparada para necessidades diversas." reverse />
    <CtaBand />
  </>;
}
