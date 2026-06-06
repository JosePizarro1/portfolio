"use client"

import { useRef, useEffect, useState } from "react"
import { FileText, Mail, MapPin, Gamepad2, Headphones, BookOpen, Dumbbell, Code2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

export default function About() {
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
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => ref.current && observer.unobserve(ref.current)
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-sm uppercase tracking-wider text-purple-500 mb-2">{t("about.title")}</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              {t("about.subtitle")}
            </h3>
            <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
          </div>

          <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
            {t("about.description")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg">
              <MapPin className="text-purple-500" size={24} />
              <span className="text-gray-300">{t("about.location")}</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg w-max">
              <Mail className="text-purple-500" size={24} />
              <span className="text-gray-300">josepizarroarca@gmail.com</span>
            </div>
          </div>

          {/* Hobbies & Interests */}
          <div className="mb-12 mt-12">
            <h4 className="text-center text-xs uppercase tracking-wider text-purple-400 font-bold mb-6">
              {useLanguage().language === "es" ? "Intereses y Pasatiempos" : "Interests & Hobbies"}
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
                    <Link
                      href="/gaming"
                      key={hobby.key}
                      className="group/gaming relative p-[1px] overflow-hidden rounded-xl bg-gray-800/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer"
                    >
                      {/* Moving light border beam ray */}
                      <div className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#c084fc_0%,#a855f7_50%,transparent_100%)] opacity-70 group-hover/gaming:opacity-100 transition-opacity duration-300" style={{ animation: 'spin 5s linear infinite' }} />
                      
                      {/* Inner mask card */}
                      <div className="relative flex items-center gap-2 px-4 py-2.5 bg-gray-900 rounded-[11px] w-full h-full">
                        {cardContent}
                      </div>
                    </Link>
                  )
                }

                return (
                  <div
                    key={hobby.key}
                    className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/40 border border-white/5 rounded-xl hover:bg-gray-800/80 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_15px_-3px_rgba(168,85,247,0.2)]"
                  >
                    {cardContent}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="text-center">
            <a
              href="/pdf/CV_JOSE_PIZARRO.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-all hover:scale-105"
            >
              <FileText size={18} /> {t("about.downloadResume")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

