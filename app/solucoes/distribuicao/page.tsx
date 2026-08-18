import type { Metadata } from "next";
import { CheckCircle, Crosshair, Gauge, Truck } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { distributionFeatures } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Distribuição", "Veículos com placa eutética e entregas para varejo, atacado, food service e franquias.", "/solucoes/distribuicao");

export default function DistributionPage() {
  return <>
    <PageHero eyebrow="Soluções / Distribuição" title="Precisão para movimentar. Visibilidade para decidir." intro="Veículos com placa eutética e distribuição coordenada para varejo, atacado, food service e franquias." image="/images/distribution.jpg" imageAlt="Caminhões refrigerados em operação editorial de docas" />
    <section className="page-intro shell"><SectionHeading eyebrow="Fluxo coordenado" title="Da programação da coleta ao acompanhamento da entrega." text="A operação combina planejamento, flexibilidade e controle para atender diferentes perfis de carga, destinos e restrições." /></section>
    <section className="temperature-grid shell">
      {[[<Truck key="i" />,"Fracionada e fechada","Modelos de carga adequados ao volume e à dinâmica da operação."],[<Crosshair key="i" />,"Agendamento e monitoramento","Coordenação dos marcos da entrega e acompanhamento da carga."],[<Gauge key="i" />,"Análise de performance","Relatórios que apoiam a visibilidade e a evolução operacional."]].map(([icon,title,text],i)=><Reveal className="temperature-card" delay={i*.08} key={String(title)}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
    </section>
    <SplitFeature image="/images/hero-logistics.jpg" imageAlt="Complexo logístico editorial com docas e caminhões" eyebrow="Distribuição flexível" title="Planejada para o destino. Ajustada à operação." text="Agendamentos, entregas com restrições e cross-docking podem fazer parte de um desenho operacional orientado à agilidade e ao controle.">
      <ul className="check-list">{distributionFeatures.map((item)=><li key={item}><CheckCircle size={20} weight="fill" />{item}</li>)}</ul>
    </SplitFeature>
    <CtaBand />
  </>;
}
