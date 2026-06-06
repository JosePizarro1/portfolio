"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.solutions"), href: "#solutions" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  const LanguageSwitcher = () => (
    <div className="flex items-center bg-gray-800/80 border border-gray-700/50 rounded-full p-0.5 relative select-none w-[90px] h-[30px]">
      <button
        onClick={() => setLanguage("es")}
        className={`flex-1 text-center text-[10px] font-bold rounded-full transition-all duration-300 relative z-10 ${
          language === "es" ? "text-white" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`flex-1 text-center text-[10px] font-bold rounded-full transition-all duration-300 relative z-10 ${
          language === "en" ? "text-white" : "text-gray-400 hover:text-gray-200"
        }`}
      >
        EN
      </button>
      {/* Sliding background */}
      <div
        className="absolute top-0.5 bottom-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full transition-all duration-300"
        style={{
          left: language === "es" ? "2px" : "calc(50% + 1px)",
          width: "calc(50% - 3px)"
        }}
      />
    </div>
  )

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Dev<span className="text-white">Portfolio</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link href={link.href} className="text-gray-300 hover:text-white transition-colors relative group">
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Social Icons & Language Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <LanguageSwitcher />
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/JosePizarro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/jose-alfredo-pizarro-rabanal-56aaaa189/?trk=public-profile-join-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all hover:-translate-y-1 duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-gray-900 shadow-lg transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <LanguageSwitcher />
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}


