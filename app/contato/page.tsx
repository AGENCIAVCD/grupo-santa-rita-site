import type { Metadata } from "next";
import { ArrowUpRight, EnvelopeSimple, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { ContactForm } from "@/components/contact-form";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Contato", "Fale com a equipe comercial da Santa Rita sobre sua operação logística.", "/contato");

export default function ContactPage() {
  return <section className="contact-page">
    <div className="shell contact-layout">
      <Reveal className="contact-intro">
        <Eyebrow light>Contato comercial</Eyebrow>
        <h1>Vamos entender a sua operação.</h1>
        <p>Conte o que sua cadeia precisa. Nossa equipe avalia o cenário e retorna para construir o melhor caminho em conjunto.</p>
        <div className="contact-cards">
          <a href={site.phoneHref}><Phone size={23} /><span><small>Telefone</small>{site.phone}</span></a>
          <a href={`mailto:${site.email}`}><EnvelopeSimple size={23} /><span><small>E-mail</small>{site.email}</span></a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer"><WhatsappLogo size={23} weight="fill" /><span><small>WhatsApp</small>Iniciar conversa</span><ArrowUpRight size={16} /></a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={23} /><span><small>Centro de Distribuição</small>{site.city}</span><ArrowUpRight size={16} /></a>
        </div>
      </Reveal>
      <Reveal className="contact-form-wrap"><div className="form-heading"><span>SR / COMERCIAL</span><h2>Solicite uma conversa</h2></div><ContactForm /></Reveal>
    </div>
    <div className="shell contact-map-row"><div><p>{site.address}</p><span>{site.city} · CEP {site.postalCode}</span></div><a href={site.mapsUrl} target="_blank" rel="noreferrer">Ver rota <ArrowUpRight size={17}/></a></div>
  </section>;
}
