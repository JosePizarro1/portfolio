"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Projects() {
  const { t } = useLanguage()
  const list = t("projects.list")
  const projects = Array.isArray(list) ? list : []

  return (
    <section id="projects" className="ed-section" aria-labelledby="projects-title">
      <div className="container">
        <header className="ed-intro ed-intro--split">
          <h2 id="projects-title" className="ed-heading">{t("projects.title")} {t("projects.highlight")}</h2>
          <p>{t("projects.description")}</p>
        </header>
        <div className="ed-project-grid">
          {projects.map(project => (
            <article key={project.image} id={project.image === "/img/imagen4.webp" ? "project-medieval" : undefined} className="ed-project-card">
              <div className="ed-project-media">
                <Image src={project.image || "/placeholder.svg"} alt="" fill sizes="(max-width: 720px) 100vw, 580px" />
              </div>
              <div className="ed-project-detail">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="ed-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                {project.youtubeUrl && <a className="ed-text-link" href={project.youtubeUrl} target="_blank" rel="noopener noreferrer">{t("projects.youtube")}<ArrowUpRight size={16} aria-hidden="true" /></a>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
