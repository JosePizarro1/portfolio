"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Solutions from "@/components/solutions"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="editorial-content">
        <Solutions />
        <About />
        <Skills />
        <Certifications />
        <Contact />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}

