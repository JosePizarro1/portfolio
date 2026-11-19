"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer>
      <iframe
        src={`/footer-particulas.html?lang=${language}`}
        title={language === "es" ? "Pie de página de Jose Pizarro" : "Jose Pizarro’s footer"}
        loading="lazy"
        style={{ display: "block", width: "100%", height: 680, border: 0 }}
      />
    </footer>
  )
}
