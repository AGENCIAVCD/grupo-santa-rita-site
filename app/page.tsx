import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Buildings, MapPin, Snowflake, Truck, Warehouse } from "@phosphor-icons/react/dist/ssr";
import { CtaBand, Eyebrow, SectionHeading, SplitFeature, TextLink } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { differentiators, site, solutions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Soluções Logísticas",
  description: "Estrutura para armazenar. Inteligência para movimentar. Conheça as soluções logísticas customizadas do Grupo Santa Rita em Jandira.",
};

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <Image src="/images/hero-logistics.jpg" alt="Vista aérea editorial de um complexo logístico de grande escala" fill priority sizes="100vw" className="cover-image" />
        <div className="home-hero-overlay" />
        <div className="shell home-hero-content">
          <Reveal>
            <Eyebrow light>Grupo Santa Rita · 25 anos de mercado</Eyebrow>
            <h1>Estrutura para armazenar.<br /><em>Inteligência para movimentar.</em></h1>
            <p>Operações customizadas, armazenagem multitemperatura e distribuição com a proximidade de quem entende cada detalhe do seu negócio.</p>
            <div className="hero-actions">
              <Link href="/solucoes" className="primary-button">Conheça nossas soluções<ArrowRight size={18} weight="bold" /></Link>
              <Link href="/contato" className="ghost-button">Fale com a equipe<ArrowUpRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
        <a href="#operacao" className="scroll-cue" aria-label="Ir para o conteúdo"><ArrowDown size={18} /><span>Explore</span></a>
      </section>

      <section id="operacao" className="intro-section shell">
        <Reveal className="intro-index"><span>01</span><p>Logística integrada</p></Reveal>
        <Reveal className="intro-statement">
          <h2>Uma estrutura preparada para <span>operações exigentes.</span></h2>
          <p>A Santa Rita combina infraestrutura, processos, tecnologia e experiência humana para construir soluções logísticas alinhadas à realidade de cada cliente.</p>
        </Reveal>
      </section>

      <section className="solutions-section">
        <div className="shell">
          <SectionHeading eyebrow="Soluções integradas" title="Do estoque à entrega, uma operação coordenada." text="Capacidades que se conectam para reduzir atritos, ampliar o controle e manter o fluxo da sua cadeia." />
          <div className="solution-grid">
            {solutions.map((solution, index) => (
              <Reveal key={solution.href} className="solution-card" delay={index * 0.08}>
                <Link href={solution.href} aria-label={`Conhecer ${solution.title}`}>
                  <Image src={solution.image} alt="Operação logística em centro de distribuição" fill sizes="(max-width: 800px) 100vw, 33vw" className="cover-image" />
                  <div className="solution-overlay" />
                  <span className="solution-number">0{index + 1}</span>
                  <div className="solution-copy"><p>{solution.eyebrow}</p><h3>{solution.title}</h3><span>Conheça a solução <ArrowUpRight size={18} /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-band">
        <div className="shell capabilities-grid">
          <Reveal className="capability-lead"><Eyebrow light>Uma operação, múltiplas respostas</Eyebrow><h2>Infraestrutura que acompanha a necessidade do cliente.</h2></Reveal>
          {[
            [<Snowflake key="i" />, "Multitemperatura", "Ambientes para congelados, resfriados, climatizados e secos."],
            [<Warehouse key="i" />, "Armazenagem", "Picking, estoque endereçado e espaços dedicados para diferentes temperaturas."],
            [<Truck key="i" />, "Distribuição", "Veículos com placa eutética para varejo, atacado, food service e franquias."],
            [<Buildings key="i" />, "Projetos customizados", "Processos desenhados para a particularidade de cada operação."],
          ].map(([icon, title, text], index) => <Reveal className="capability-item" key={String(title)} delay={index * .06}><span>{icon}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
        </div>
      </section>

      <SplitFeature image="/images/operations-team.jpg" imageAlt="Equipe analisando uma operação logística em conjunto" eyebrow="Projetos customizados" title="A sua operação define o projeto." text="A Santa Rita adapta espaços, processos e recursos à realidade do cliente. O resultado é uma solução que nasce das restrições, metas e particularidades de cada cadeia.">
        <TextLink href="/diferenciais">Entenda nosso jeito de operar</TextLink>
      </SplitFeature>

      <section className="difference-section shell">
        <SectionHeading eyebrow="Diferenciais" title="Qualidade construída dentro da operação." />
        <div className="difference-list">
          {differentiators.map((item, index) => (
            <Reveal className="difference-row" key={item.title}>
              <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight size={22} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="location-teaser">
        <div className="map-pattern" aria-hidden="true"><span className="route route-a" /><span className="route route-b" /><span className="map-pin"><MapPin size={30} weight="fill" /></span></div>
        <div className="shell location-teaser-content">
          <Reveal><Eyebrow>Localização estratégica</Eyebrow><h2>No ponto certo para conectar sua operação à Grande São Paulo.</h2><p>Em Jandira, no Condomínio Polo Industrial Jandira 2, com acesso à malha viária que movimenta a principal região econômica do país.</p><TextLink href="/localizacao">Ver localização e acessos</TextLink></Reveal>
          <Reveal className="location-address"><span>SR / HUB OESTE</span><strong>{site.address}</strong><p>{site.city} · {site.postalCode}</p></Reveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
