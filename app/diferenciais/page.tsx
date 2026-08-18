import type { Metadata } from "next";
import { ChartLineUp, Handshake, ShieldCheck, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, PageHero, SectionHeading, SplitFeature } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { differentiators } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Diferenciais", "Projetos operacionais customizados, atendimento personalizado, flexibilidade, gestão de estoque e prevenção de perdas.", "/diferenciais");

export default function DifferentialsPage() {
  return <>
    <PageHero eyebrow="Diferenciais" title="A infraestrutura se adapta à sua operação. Não o contrário." intro="Projetos personalizados, gestão próxima e experiência operacional para transformar particularidades em processos eficientes." image="/images/operations-team.jpg" imageAlt="Equipe editorial de logística analisando uma operação" />
    <section className="page-intro shell"><SectionHeading eyebrow="Nosso jeito de operar" title="Proximidade para entender. Engenharia operacional para resolver." text="A personalização não é uma camada adicional. Ela é o ponto de partida para definir espaço, pessoas, processos e informação." /></section>
    <section className="differential-grid shell">
      {differentiators.map((item,index)=><Reveal className="differential-card" key={item.title} delay={index*.06}><span>0{index+1}</span><h2>{item.title}</h2><p>{item.text}</p></Reveal>)}
    </section>
    <section className="management-band">
      <div className="shell"><SectionHeading light eyebrow="Gestão integrada" title="Quem decide, quem opera e quem contrata na mesma conversa." text="A conexão entre equipe executiva, operação e cliente reduz distâncias e acelera respostas." />
        <div className="management-grid">{[[<UsersThree key="i"/>,"Equipe especializada","Vivência em logística e transporte aplicada à rotina."],[<ShieldCheck key="i"/>,"Qualidade e prevenção","Equipe de qualidade e prevenção de perdas acompanha os processos necessários de boas práticas para cada produto."],[<ChartLineUp key="i"/>,"Gestão visível","Relatórios operacionais e análise de performance."],[<Handshake key="i"/>,"Atendimento humano","Contato próximo, personalizado e orientado à parceria."]].map(([icon,title,text],i)=><Reveal key={String(title)} delay={i*.06}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}</div>
      </div>
    </section>
    <SplitFeature image="/images/cold-storage.jpg" imageAlt="Operação editorial de armazenagem" eyebrow="Melhoria contínua" title="Controle que se transforma em aprendizado operacional." text="Gestão de estoque, inventários, relatórios, monitoramento e integração de sistemas criam a base para acompanhar a operação e identificar oportunidades de evolução." />
    <CtaBand />
  </>;
}
