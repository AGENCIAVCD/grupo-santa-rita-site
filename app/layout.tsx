import type { Metadata, Viewport } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { WhatsappFloat } from "@/components/whatsapp-float";
import { site } from "@/lib/site-data";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Grupo Santa Rita | Soluções Logísticas", template: "%s | Grupo Santa Rita" },
  description: "Armazenagem multitemperatura, distribuição e projetos logísticos customizados em Jandira, na Grande São Paulo.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  category: "Logística",
  alternates: { canonical: site.url },
  openGraph: {
    title: "Grupo Santa Rita | Estrutura para armazenar. Inteligência para movimentar.",
    description: "Infraestrutura e inteligência operacional para operações logísticas de alta complexidade.",
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/hero-logistics.png", width: 1920, height: 1080, alt: "Complexo logístico contemporâneo" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/hero-logistics.png"] },
  icons: { icon: "/logo-SantaRita.svg" },
};

export const viewport: Viewport = { themeColor: "#273149", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo-SantaRita.svg`,
    email: site.email,
    telephone: "+55 11 95680-4881",
    address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: "Jandira", addressRegion: "SP", postalCode: site.postalCode, addressCountry: "BR" },
    areaServed: "Grande São Paulo",
  };

  return (
    <html lang="pt-BR" className={`${manrope.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
        <WhatsappFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}
