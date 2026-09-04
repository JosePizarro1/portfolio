"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Solutions from "@/components/solutions"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import SiriGlow from "@/components/siri-glow"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="min-h-screen">
      <SiriGlow />
      <Navbar />
      <div className={`transition-opacity duration-400 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Solutions />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

