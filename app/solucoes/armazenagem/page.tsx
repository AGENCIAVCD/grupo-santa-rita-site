import type { Metadata } from "next";
import { CheckCircle, Snowflake, ThermometerCold, Warehouse } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { storageFeatures } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Armazenagem Multitemperatura", "Soluções para produtos congelados, resfriados, climatizados e secos com FEFO/FIFO, picking e estoque endereçado.", "/solucoes/armazenagem");

export default function StoragePage() {
  return <>
    <PageHero eyebrow="Soluções / Armazenagem" title="Cada produto no ambiente certo. Cada movimento sob controle." intro="Estrutura multitemperatura e processos adaptáveis para preservar as condições de armazenagem e dar fluidez à operação." image="/images/cold-storage.jpg" imageAlt="Corredor editorial de armazém refrigerado com empilhadeira" />
    <section className="page-intro shell"><SectionHeading eyebrow="Armazenagem inteligente" title="Ambientes e processos que respeitam a particularidade da carga." text="Do recebimento à separação, a operação é organizada para oferecer visibilidade, controle e agilidade sem impor um modelo rígido ao cliente." /></section>
    <section className="temperature-grid shell">
      {[[<Snowflake key="i" />,"Congelados","Operações estruturadas para cargas que exigem ambiente congelado."],[<ThermometerCold key="i" />,"Resfriados","Fluxos dedicados à conservação de produtos sob refrigeração."],[<Warehouse key="i" />,"Climatizados e secos","Ambientes adequados às características e exigências de cada produto."]].map(([icon,title,text],i)=><Reveal className="temperature-card" delay={i*.08} key={String(title)}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
    </section>
    <SplitFeature image="/images/hero-logistics.jpg" imageAlt="Vista aérea editorial de centro de distribuição" eyebrow="Controle de estoque" title="Endereçamento, giro e separação orientados ao fluxo." text="Processos FEFO/FIFO, estoque endereçado e áreas para picking criam uma base organizada para movimentações mais claras e aderentes à necessidade do produto.">
      <ul className="check-list">{storageFeatures.map((item)=><li key={item}><CheckCircle size={20} weight="fill" />{item}</li>)}</ul>
    </SplitFeature>
    <CtaBand />
  </>;
}
