import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/context/LanguageContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://portfolio-iota-rosy-30.vercel.app"),
  title: "Jose Pizarro | Software Engineer & FullStack Developer",
  description: "Desarrollador FullStack con +2 años de experiencia especializado en Python, React, Next.js y soluciones con IA (LangGraph, Automatizaciones).",
  keywords: ["Desarrollador FullStack", "Software Engineer", "React", "Next.js", "Python", "IA", "LangGraph", "Jose Pizarro"],
  openGraph: {
    title: "Jose Pizarro - Portfolio",
    description: "Ingeniero de Software especializado en aplicaciones escalables y automatización con IA.",
    url: "https://portfolio-iota-rosy-30.vercel.app/",
    siteName: "Jose Pizarro Portfolio",
    images: [
      {
        url: "/img/seguimiento_metropolitano.webp",
        width: 1200,
        height: 630,
        alt: "Jose Pizarro Portfolio Preview",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  icons: {
    icon: "/flash.png", 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${inter.className} bg-gray-950 text-gray-100 antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}