"use client"

import Image from "next/image"
import { Clock3 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Certifications() {
  const { t } = useLanguage()
  const list = t("certifications.list")
  const certifications = Array.isArray(list) ? list : []

  return (
    <section id="certifications" className="credentials-section" aria-labelledby="credentials-title">
      <div className="credentials-container">
        <header className="credentials-header">
          <h2 id="credentials-title">{t("certifications.title")} {t("certifications.highlight")}</h2>
        </header>
        <ul className="credentials-grid">
          {certifications.map(item => (
            <li key={item.id} className="credential-tile">
              <Image src={item.badge} alt={item.title} width={144} height={144} className="credential-badge" />
              {item.status === "in-progress" && (
                <span className="credential-progress"><Clock3 size={13} aria-hidden="true" />{item.statusLabel}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
