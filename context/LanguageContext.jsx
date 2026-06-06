"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { translations } from "@/data/translations"

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("language")
    if (stored === "en" || stored === "es") {
      setLanguage(stored)
    } else {
      const systemLang = navigator.language || navigator.userLanguage
      if (systemLang && systemLang.startsWith("en")) {
        setLanguage("en")
      } else {
        setLanguage("es")
      }
    }
    setMounted(true)
  }, [])

  const changeLanguage = (lang) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang
    }
  }

  const t = (path) => {
    const keys = path.split(".")
    let current = translations[language]

    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        // Fallback to Spanish
        let fallback = translations["es"]
        for (const fKey of keys) {
          if (fallback === undefined || fallback[fKey] === undefined) return path
          fallback = fallback[fKey]
        }
        return fallback
      }
      current = current[key]
    }
    return current
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
