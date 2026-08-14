import type { Metadata } from "next";
import { CheckCircle, Package, PlugsConnected, Strategy } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { extraServices } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Serviços e Atividades Extras", "Palletização, montagem de kits, etiquetagem, coletas, integração de sistemas e consultoria logística.", "/solucoes/servicos-extras");

export default function ExtraServicesPage() {
  return <>
    <PageHero eyebrow="Soluções / Atividades extras" title="Mais etapas resolvidas dentro da mesma operação." intro="Serviços complementares que reduzem interfaces, simplificam fluxos e preparam a carga para o próximo movimento." image="/images/operations-team.jpg" imageAlt="Equipe editorial colaborando no planejamento de uma operação" />
    <section className="page-intro shell"><SectionHeading eyebrow="Operação ampliada" title="Capacidades que aproximam a logística do seu processo de negócio." text="As atividades extras são dimensionadas conforme a demanda e podem ser integradas ao projeto operacional do cliente." /></section>
    <section className="temperature-grid shell">
      {[[<Package key="i" />,"Preparação de produtos","Palletização, kits, etiquetagem, selagem e linhas dedicadas."],[<PlugsConnected key="i" />,"Integração","Conexão de sistemas e informações para reduzir etapas manuais."],[<Strategy key="i" />,"Consultoria logística","Experiência operacional aplicada ao desenho e à evolução dos fluxos."]].map(([icon,title,text],i)=><Reveal className="temperature-card" delay={i*.08} key={String(title)}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
    </section>
    <SplitFeature image="/images/cold-storage.jpg" imageAlt="Operação editorial em centro de armazenagem" eyebrow="Sob medida" title="Uma extensão da operação do cliente." text="Equipe, espaço e processo podem ser dedicados a atividades específicas, com treinamento alinhado às particularidades de cada projeto.">
      <ul className="check-list">{extraServices.map((item)=><li key={item}><CheckCircle size={20} weight="fill" />{item}</li>)}</ul>
    </SplitFeature>
    <CtaBand />
  </>;
}
