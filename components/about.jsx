"use client"

import { useRef, useEffect, useState } from "react"
import { FileText, Mail, MapPin, Gamepad2, Headphones, BookOpen, Dumbbell, Code2, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const { t, language } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <section id="about" className="ed-section relative">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-wider text-purple-500 mb-2">{t("about.title")}</h2>
            <h3 className="ed-heading mb-6">
              {t("about.subtitle")}
            </h3>
          </div>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
            {t("about.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">{t("about.location")}</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg min-w-0">
              <Mail className="text-purple-500 shrink-0" size={24} />
              <a className="ed-about-email" href="mailto:josepizarroarca@gmail.com">josepizarroarca@gmail.com</a>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="mb-12 mt-12">
            <h4 className="text-center text-xs uppercase tracking-wider ed-about-label font-semibold mb-6">
              {language === "es" ? "Intereses y Pasatiempos" : "Interests & Hobbies"}
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { key: "coding", icon: <Code2 size={20} /> },
                { key: "gaming", icon: <Gamepad2 size={20} /> },
                { key: "music", icon: <Headphones size={20} /> },
                { key: "reading", icon: <BookOpen size={20} /> },
                { key: "fitness", icon: <Dumbbell size={20} /> },
              ].map((hobby) => {
                const isGaming = hobby.key === "gaming";
                const cardContent = (
                  <>
                    <div className="text-purple-500 shrink-0 z-10">
                      {hobby.icon}
                    </div>
                    <span className="text-xs text-gray-300 font-medium z-10">
                      {t(`about.hobbies.${hobby.key}`)}
                    </span>
                  </>
                );

                if (isGaming) {
                  return (
                    <a href="/gaming" key={hobby.key} className="ed-hobby ed-hobby--link">
                      {cardContent}
                      <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  )
                }

                return (
                  <div
                    key={hobby.key}
                    className="ed-hobby"
                  >
                    {cardContent}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-center">
            <Link
              href="/cv"
              className="editorial-button"
            >
              <FileText size={18} /> {t("about.viewResume")}
            </Link>
            <a
              href="/pdf/CV_JOSE_PIZARRO.pdf"
              download
              className="editorial-button editorial-button--outline"
            >
              <FileText size={18} /> {t("about.downloadResume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

