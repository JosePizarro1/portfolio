"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleRef = useRef(null)
  const { language, setLanguage, t } = useLanguage()
  useEffect(() => {
    if (!isOpen) return
    const onKey = event => { if (event.key === "Escape") { setIsOpen(false); toggleRef.current?.focus() } }
    const onResize = () => { if (window.innerWidth >= 1100) setIsOpen(false) }
    document.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)
    return () => { document.removeEventListener("keydown", onKey); window.removeEventListener("resize", onResize) }
  }, [isOpen])
  const links = [
    { key: "projects", href: "#projects" }, { key: "solutions", href: "#solutions" },
    { key: "about", href: "#about" }, { key: "skills", href: "#skills" },
    { key: "certifications", href: "#certifications" },
  ]
  const switcher = <div className="editorial-language" aria-label={t("nav.language")}>
    {["es", "en"].map(lang => <button type="button" key={lang} lang={lang} aria-label={lang === "es" ? "Español" : "English"} aria-pressed={language === lang} onClick={() => setLanguage(lang)}>{lang.toUpperCase()}</button>)}
  </div>
  return (
    <header className="editorial-nav">
      <div className="editorial-nav__inner">
        <Link href="#home" className="editorial-wordmark" onClick={() => setIsOpen(false)} aria-label={`Jose Pizarro — ${t("nav.home")}`}><span className="editorial-wordmark__monogram" aria-hidden="true">JP</span><span>Jose Pizarro<span className="editorial-wordmark__role">Software developer</span></span></Link>
        <nav className="editorial-nav__desktop" aria-label={t("nav.navigation")}>{links.map(link => <Link key={link.key} href={link.href}>{t(`nav.${link.key}`)}</Link>)}</nav>
        <div className="editorial-nav__actions">{switcher}<Link href="/cv" className="editorial-cv">{t("nav.cv")}</Link><Link href="#contact" className="editorial-button editorial-nav__contact">{t("hero.contactMe")}<ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        <button ref={toggleRef} type="button" className="editorial-nav__toggle" aria-expanded={isOpen} aria-controls="portfolio-mobile-menu" aria-label={isOpen ? t("nav.closeMenu") : t("nav.openMenu")} onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      <div id="portfolio-mobile-menu" className="editorial-mobile-menu" hidden={!isOpen}>
        <nav aria-label={t("nav.navigation")}>
          {[{ key: "home", href: "#home" }, ...links, { key: "cv", href: "/cv" }, { key: "contact", href: "#contact" }].map(link => <Link key={link.key} href={link.href} onClick={() => setIsOpen(false)}>{t(`nav.${link.key}`)}<ArrowUpRight size={17} aria-hidden="true" /></Link>)}
        </nav>
        <div className="editorial-mobile-menu__footer">{switcher}<span>Jose Pizarro · Tacna, Perú</span></div>
      </div>
    </header>
  )
}
