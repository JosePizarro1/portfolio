"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ArrowDown, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

const featuredProjects = [
  { nameKey: "hero.medieval", image: "/img/imagen4.webp", kind: "Django · SQLite", position: "left", href: "#project-medieval" },
  { name: "Control Lab", image: "/img/pagina_web_salud_laboratorio.webp", kind: "React · Python", position: "center" },
  { name: "Asistente de reservas", image: "/img/bot_reservas.webp", kind: "FastAPI · LangGraph", position: "right" },
]

export default function Hero() {
  const { t, language } = useLanguage()
  return (
    <section id="home" className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-hero__copy">
        <p className="editorial-hero__eyebrow"><span />Jose Pizarro <span className="editorial-hero__slash">/</span> FullStack Developer</p>
        <h1 id="hero-title">{t("hero.headlineFirst")}<br /><span>{t("hero.headlineSecond")}</span></h1>
        <p className="editorial-hero__description">{t("hero.editorialDescription")}</p>
        <div className="editorial-hero__actions">
          <Link href="#projects" className="editorial-button">{t("hero.viewProjects")}<ArrowUpRight size={17} aria-hidden="true" /></Link>
          <Link href="#contact" className="editorial-button editorial-button--outline">{t("hero.contactMe")}</Link>
        </div>
        <div className="editorial-hero__socials">
          <span>Tacna, {language === "es" ? "Perú" : "Peru"}</span><span className="editorial-hero__divider" />
          <a href="https://github.com/JosePizarro1/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={15} aria-hidden="true" />GitHub</a>
          <a href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={15} aria-hidden="true" />LinkedIn</a>
        </div>
      </div>
      <div className="editorial-showcase" aria-label={t("hero.featuredProjects")}>
        {featuredProjects.map(project => {
          const name = project.nameKey ? t(project.nameKey) : project.position === "right" ? t("hero.reservations") : project.name
          return (
            <Link href={project.href || "#projects"} key={project.position} className={`editorial-project editorial-project--${project.position}`} aria-label={`${t("hero.viewProjects")}: ${name}`}>
              <div className="editorial-project__bar"><span className="editorial-window-dots"><i /><i /><i /></span><span>{name}</span><ArrowUpRight size={12} aria-hidden="true" /></div>
              <div className="editorial-project__screen"><Image src={project.image} alt="" fill unoptimized sizes="(max-width: 640px) 90vw, 540px" priority={project.position === "center"} /></div>
              <div className="editorial-project__caption"><span>{project.kind}</span><span>{t("hero.realProject")}</span></div>
            </Link>
          )
        })}
      </div>
      <div className="editorial-hero__foot"><span>{t("hero.focusAreas")}</span><a href="#about">{t("nav.about")}<ArrowDown size={14} aria-hidden="true" /></a></div>
    </section>
  )
}
