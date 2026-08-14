import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { site } from "@/lib/site-data";

export function WhatsappFloat() {
  return <a href={site.whatsapp} className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Falar com a Santa Rita pelo WhatsApp"><WhatsappLogo size={27} weight="fill" /></a>;
}
