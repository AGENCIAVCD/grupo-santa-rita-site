import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { navigation, site, solutions } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="route-line" aria-hidden="true" />
      <div className="shell footer-top">
        <div className="footer-brand">
          <Image src="/logo-SantaRita.svg" alt="Santa Rita" width={210} height={59} />
          <p>Infraestrutura, inteligência operacional e proximidade para operações logísticas de alta complexidade.</p>
        </div>
        <div>
          <p className="footer-label">Navegue</p>
          <div className="footer-links">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Soluções</p>
          <div className="footer-links">
            {solutions.map((item) => <Link key={item.href} href={item.href}>{item.title}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Contato</p>
          <div className="footer-contact">
            <a href={site.phoneHref}><Phone size={18} />{site.phone}</a>
            <a href={`mailto:${site.email}`}><EnvelopeSimple size={18} />{site.email}</a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer"><MapPin size={18} />{site.city}<ArrowUpRight size={14} /></a>
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Santa Rita. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
