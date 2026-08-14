import type { Metadata } from "next";
import Image from "next/image";
import { ArrowsOut, FlowArrow, Snowflake, Warehouse } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, Eyebrow, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Infraestrutura", "Centro de distribuição em Jandira com soluções multitemperatura e flexibilidade para projetos logísticos customizados.", "/infraestrutura");

export default function InfrastructurePage() {
  return <>
    <PageHero eyebrow="Infraestrutura" title="Uma estrutura preparada para grandes operações." intro="Ambientes, fluxos e recursos pensados para acomodar diferentes necessidades logísticas com controle e flexibilidade." image="/images/hero-logistics.png" imageAlt="Complexo logístico contemporâneo em imagem editorial" />
    <section className="infrastructure-intro shell">
      <Reveal><Eyebrow>Centro de Distribuição</Eyebrow><h2>Escala percebida na organização de cada fluxo.</h2></Reveal>
      <Reveal><p>A infraestrutura da Santa Rita integra armazenagem multitemperatura, áreas para picking, espaços dedicados e operação de docas. O desenho é ajustável ao projeto, sem publicar capacidades não validadas.</p></Reveal>
    </section>
    <section className="infrastructure-photo shell"><Reveal><Image src="/images/hero-logistics.png" alt="Vista aérea editorial de infraestrutura logística" fill sizes="100vw" className="cover-image" /><span>Visão de escala / Imagem editorial ilustrativa</span></Reveal></section>
    <section className="infra-principles shell">
      <SectionHeading eyebrow="Arquitetura operacional" title="Infraestrutura a serviço do processo." />
      <div className="infra-principles-grid">
        {[[<Snowflake key="i"/>,"Multitemperatura","Ambientes para congelados, resfriados, climatizados e secos."],[<FlowArrow key="i"/>,"Fluxos organizados","Recebimento, estoque, picking e expedição conectados pela lógica operacional."],[<ArrowsOut key="i"/>,"Flexibilidade","Espaços e recursos dimensionados conforme a necessidade do projeto."],[<Warehouse key="i"/>,"Operações dedicadas","Possibilidade de estruturas, salas e linhas voltadas à realidade do cliente."]].map(([icon,title,text],i)=><Reveal key={String(title)} delay={i*.07}><span>{icon}</span><p>0{i+1}</p><h3>{title}</h3><small>{text}</small></Reveal>)}
      </div>
    </section>
    <SplitFeature image="/images/cold-storage.png" imageAlt="Corredor de armazenagem refrigerada em imagem editorial" eyebrow="Capacidade sob consulta" title="Pronta para receber os dados reais da sua operação." text="Volumes, temperaturas, perfis de giro e atividades adicionais são avaliados pela equipe Santa Rita para definir a melhor configuração. Não usamos números genéricos: dimensionamos a resposta a partir da demanda real." reverse />
    <CtaBand />
  </>;
}
