import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}><span />{children}</p>;
}

export function SectionHeading({ eyebrow, title, text, light = false, align = "left" }: { eyebrow: string; title: string; text?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <Reveal className={`section-heading ${light ? "light" : ""} ${align === "center" ? "center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </Reveal>
  );
}

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link href={href} className={`text-link ${light ? "light" : ""}`}>{children}<ArrowRight size={18} weight="bold" /></Link>;
}

export function PageHero({ eyebrow, title, intro, image, imageAlt }: { eyebrow: string; title: string; intro: string; image: string; imageAlt: string }) {
  return (
    <section className="page-hero">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="cover-image" />
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <Reveal>
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
      </div>
      <p className="editorial-note">Imagem editorial ilustrativa</p>
    </section>
  );
}

export function SplitFeature({ image, imageAlt, eyebrow, title, text, children, reverse = false }: { image: string; imageAlt: string; eyebrow: string; title: string; text: string; children?: ReactNode; reverse?: boolean }) {
  return (
    <section className={`split-feature ${reverse ? "reverse" : ""}`}>
      <Reveal className="split-image">
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 900px) 100vw, 52vw" className="cover-image" />
        <span className="image-index">SR / OP</span>
      </Reveal>
      <Reveal className="split-copy">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
        <p>{text}</p>
        {children}
      </Reveal>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="shell cta-band-inner">
        <Reveal>
          <Eyebrow light>Vamos desenhar sua operação</Eyebrow>
          <h2>Logística que acompanha a complexidade do seu negócio.</h2>
        </Reveal>
        <Link href="/contato" className="round-cta" aria-label="Conversar com a Santa Rita">
          <ArrowUpRight size={32} />
          <span>Fale com a<br />Santa Rita</span>
        </Link>
      </div>
    </section>
  );
}
