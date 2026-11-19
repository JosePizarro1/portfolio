"use client"

import { useRef, useEffect, useState } from "react"
import { mcpTools } from "@/components/agent-icons"
import SkillIcon, { coreSkills } from "@/components/skill-icon"
import { technologies } from "@/components/technology-icons"
import { useLanguage } from "@/context/LanguageContext"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const skills = coreSkills



  return (
    <section id="skills" className="ed-section relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="ed-heading mb-4">
            {t("skills.title")}{" "}
            <span className="ed-heading-accent">{t("skills.highlight")}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 gap-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Core Skills with icons */}
          <div>
            <h3 className="text-xl font-semibold mb-8 text-center">{t("skills.core")}</h3>
            <div className="core-skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="core-skill">
                  <div className="core-skill__icon">
                    <SkillIcon skill={skill} />
                  </div>
                  <h4 className="core-skill__name">
                    {skill.name}
                    {skill.mostUsed && <span className="sr-only"> — {t("skills.mostUsed")}</span>}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* AI Agents & MCP Ecosystem Carousel (Framer Style) */}
          <div className="mt-4 pt-6 border-t border-gray-800/60">
            <div className="text-center mb-6">
              <span className="text-[11px] uppercase tracking-wider text-purple-400 font-bold px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full inline-block mb-2">
                Ecosistema MCP & Agentes
              </span>
              <h3 className="text-xl font-semibold text-white">{t("skills.aiAgents")}</h3>
              <p className="text-xs text-gray-400 mt-1 max-w-md mx-auto">{t("skills.aiAgentsDesc")}</p>
            </div>

            <div className="relative w-full overflow-hidden py-4">
              {/* Fade masks for infinite loop edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

              {/* Ticker marquee track */}
              <div className="animate-marquee agent-icons-track">
                {[...mcpTools, ...mcpTools].map((tool, idx) => (
                  <div
                    key={`${tool.name}-${idx}`}
                    aria-hidden={idx >= mcpTools.length ? true : undefined}
                    className="flex flex-col items-center justify-center shrink-0 min-w-[100px] sm:min-w-[110px] group cursor-default transition-transform duration-300 hover:-translate-y-1.5"
                  >
                    <div className="agent-icon-shell">
                      <SkillIcon skill={tool} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-zinc-400 group-hover:text-white transition-colors tracking-tight text-center mt-2.5">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">{t("skills.tools")}</h3>
            <div className="core-skills-grid">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="core-skill"
                >
                  <div className="core-skill__icon">
                    <SkillIcon skill={tech} />
                  </div>
                  <h4 className="core-skill__name">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


