"use client"

import { useRef, useEffect, useState } from "react"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaNpm, FaFire, FaProjectDiagram, FaSalesforce, FaSlack, FaWhatsapp, FaSearch, FaCloud } from "react-icons/fa"
import { TbBrandFlutter } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiRedux,
  SiJest,
  SiWebpack,
  SiVercel,
  SiFirebase,
  SiFramer,
  SiSass,
  SiDjango,
  SiBootstrap,
  SiMysql,
  SiSqlite,
  SiFlutter,
  SiFastapi,
  SiPostgresql,
  SiGooglecloud,
  SiDocker
} from "react-icons/si"
import { PiMicrosoftPowerpointLogo } from "react-icons/pi";

import { TbBrandReactNative } from "react-icons/tb"
import { MdDesignServices } from "react-icons/md"

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

  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" size={36} /> },
    { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" size={36} /> },
    { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" size={36} /> },
    { name: "React", icon: <FaReact className="text-[#61DAFB]" size={36} /> },
    { name: "Next.js", icon: <SiNextdotjs size={36} /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" size={36} /> },
    { name: "Django", icon: <SiDjango className="text-white" size={36} /> },
    { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" size={36} /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" size={36} /> },
    { name: "LangGraph", icon: <FaProjectDiagram className="text-gray-400" size={36} /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#1572B6]" size={36} /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" size={36} /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#4479A1]" size={36} /> },

  ]

  const technologies = [
    { name: "Git", icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { name: "GitHub", icon: <FaGithub size={24} /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" size={24} /> },
    // { name: "React Native", icon: <TbBrandReactNative className="text-[#61DAFB]" size={24} /> },
    // { name: "GraphQL", icon: <SiGraphql className="text-[#E10098]" size={24} /> },
    //{ name: "Redux", icon: <SiRedux className="text-[#764ABC]" size={24} /> },
    // { name: "Jest", icon: <SiJest className="text-[#C21325]" size={24} /> },
    //{ name: "Webpack", icon: <SiWebpack className="text-[#8DD6F9]" size={24} /> },
    { name: "npm", icon: <FaNpm className="text-[#CB3837]" size={24} /> },
    { name: "Vercel", icon: <SiVercel size={24} /> },
    // { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" size={24} /> },
     { name: "Framer", icon: <SiFramer size={24} /> },
     { name: "Power BI", icon: <PiMicrosoftPowerpointLogo className="text-[#F2C811]" size={24} /> }, 
     { name: "Looker Studio", icon: <FaSearch className="text-[#4285F4]" size={24} /> }, 
     { name: "Salesforce CRM", icon: <FaSalesforce className="text-[#00A1E0]" size={24} /> }, 
     { name: "WhatsApp API", icon: <FaWhatsapp className="text-[#25D366]" size={24} /> }, 
     { name: "Slack Apps", icon: <FaSlack className="text-[#4A154B]" size={24} /> }, 
     { name: "Webhooks", icon: <svg className="text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg> }, 
     { name: "WebSockets", icon: <svg className="text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="m17 2 4 4-4 4" /><path d="M3 6h18" /><path d="m7 22-4-4 4-4" /><path d="M21 18H3" /></svg> }, 
     { name: "SSE (Server-Sent Events)", icon: <svg className="text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 24, height: 24 }}><path d="M4 11a9 9 0 0 1 9 9" /><path d="M4 4a16 16 0 0 1 16 16" /><circle cx="5" cy="19" r="1" /></svg> }, 
     { name: "SQLite", icon: <SiSqlite className="text-[#07405E]" size={24} /> },
     { name: "Docker", icon: <SiDocker className="text-[#2496ED]" size={24} /> },
     { name: "Google Cloud", icon: <SiGooglecloud className="text-[#4285F4]" size={24} /> },
     { name: "Azure DevOps", icon: <FaCloud className="text-[#0078D7]" size={24} /> },
    { name: "FlutterFlow", icon: <TbBrandFlutter className="text-[#800080]" size={24} /> },
    ]
    

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("skills.title")}{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">{t("skills.highlight")}</span>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="relative flex flex-col items-center justify-center p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Flame icon for Django */}
                  {skill.name === 'Django' || skill.name === 'FastAPI' || skill.name === 'PostgreSQL' ? (
                    <FaFire className="absolute top-2 right-2 text-red-500 animate-pulse duration-900" size={22} />
                  ) : null}

                  <div className="mb-4">{skill.icon}</div>
                  <h4 className="font-medium text-center">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          {/* Other technologies */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-8 text-center">{t("skills.tools")}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="mb-2">{tech.icon}</div>
                  <span className="text-sm text-center">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


