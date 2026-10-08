"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "@/context/LanguageContext"

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { t } = useLanguage()

  const list = t("certifications.list") || []
  const certification = list[0]

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

        {/* Centered Single Certification Card */}
        <div
          ref={ref}
          className={`max-w-xl mx-auto transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {certification && (
            <div className="flex flex-col bg-gray-800 rounded-xl p-6 md:p-8 border border-gray-700/60 hover:border-purple-500/40 transition-all duration-300 shadow-lg shadow-purple-500/5">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    {t("certifications.completedTitle")}
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full font-mono border border-emerald-400/20">
                  100%
                </span>
              </div>

              <div className="flex items-center gap-5 mb-5">
                <div className="w-20 h-20 flex-shrink-0 relative flex items-center justify-center bg-gray-900/80 rounded-lg p-1.5 border border-gray-700/50">
                  <Image
                    src={certification.badge}
                    alt={certification.title}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] text-gray-400 uppercase tracking-wide block mb-1">
                    {certification.issuer}
                  </span>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {certification.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {certification.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {certification.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-gray-700/70 text-gray-300 rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Completed Progress Bar */}
              <div className="w-full bg-gray-900 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-400 to-blue-500 h-full rounded-full transition-all duration-700"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
