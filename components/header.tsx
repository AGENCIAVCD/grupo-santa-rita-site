"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { navigation } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell header-inner">
        <Link href="/" className="logo-link" aria-label="Grupo Santa Rita — início">
          <Image src="/logo-SantaRita.svg" alt="Grupo Santa Rita" width={196} height={55} priority />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>{item.label}</Link>;
          })}
        </nav>

        <Link href="/contato" className="header-cta">
          Fale com um especialista <ArrowUpRight size={17} weight="bold" />
        </Link>

        <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fechar menu" : "Abrir menu"}>
          {open ? <X size={27} /> : <List size={29} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div id="mobile-menu" className="mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.25 }}>
            <nav className="shell" aria-label="Navegação mobile">
              {[{ label: "Início", href: "/" }, ...navigation, { label: "Contato", href: "/contato" }].map((item, index) => (
                <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
