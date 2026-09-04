"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const inProgressList = t("certifications.inProgressList") || []
  const goalsList = t("certifications.goalsList") || []

  const inProgress = inProgressList[0]
  const goal = goalsList[0]

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            {t("certifications.title")}{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t("certifications.highlight")}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto text-sm md:text-base"
          >
            {t("certifications.description")}
          </motion.p>
        </div>

        {/* 2-Column Minimalist Grid */}
        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Card 1: En Progreso */}
          {inProgress && (
            <div className="flex flex-col bg-gray-800 rounded-xl p-6 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {t("certifications.inProgressTitle")}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-mono">60%</span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 flex-shrink-0 relative flex items-center justify-center bg-gray-900/80 rounded-lg p-1.5 border border-gray-700/50">
                  <Image
                    src={inProgress.badge}
                    alt={inProgress.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-gray-400 uppercase tracking-wide block">
                    {inProgress.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {inProgress.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-1">
                {inProgress.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {inProgress.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-gray-700/70 text-gray-300 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Clean Progress Bar */}
              <div className="w-full bg-gray-900 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-500 to-blue-500 h-full rounded-full transition-all duration-700"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          )}

          {/* Card 2: Objetivos (Oscurecido / Minimalista) */}
          {goal && (
            <div className="flex flex-col bg-gray-800/40 rounded-xl p-6 border border-gray-800 hover:border-gray-700/70 hover:bg-gray-800/60 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {t("certifications.goalsTitle")}
                  </span>
                </div>
                <span className="text-xs text-gray-500 px-2 py-0.5 rounded bg-gray-900/60 border border-gray-800">
                  {goal.status}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 flex-shrink-0 relative flex items-center justify-center bg-gray-900/40 rounded-lg p-1.5 border border-gray-800/60">
                  <Image
                    src={goal.badge}
                    alt={goal.title}
                    width={72}
                    height={72}
                    className="object-contain filter grayscale opacity-40 transition-all duration-300 hover:opacity-75 hover:grayscale-0"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-gray-500 uppercase tracking-wide block">
                    {goal.issuer}
                  </span>
                  <h3 className="text-lg font-bold text-gray-300 leading-snug">
                    {goal.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-500 text-sm mb-4 leading-relaxed flex-1">
                {goal.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {goal.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 bg-gray-900/60 text-gray-500 rounded-md text-xs border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Placeholder progress line */}
              <div className="w-full bg-gray-900/60 rounded-full h-1.5 overflow-hidden">
                <div className="bg-gray-700 h-full rounded-full w-0" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
