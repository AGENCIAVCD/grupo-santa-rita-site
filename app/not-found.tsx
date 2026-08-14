import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return <section className="not-found shell"><p className="eyebrow"><span />Erro 404</p><h1>Esta rota não chegou ao destino.</h1><p>A página que você procura não existe ou foi movida.</p><Link href="/"><ArrowLeft size={18} />Voltar ao início</Link></section>;
}
