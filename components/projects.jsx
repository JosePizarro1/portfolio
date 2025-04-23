"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const projects = [
    {
      title: "Caja System",
      description:
        "A comprehensive system for managing income and expense flows, personnel, an expense calendar, and full accounting of payments.",
      image: "/img/imagen2.png",
      tags: ["Django", "Bootstrap", "Tailwind CSS", "Gmail API", "Google Drive API", "SQLite3"],
      liveUrl: "https://cajaegatur.pythonanywhere.com/",
      githubUrl: "https://github.com/JosePizarro1/cajachica",
      youtubeUrl: "",
    },
    {
      title: "GTI Internal Process Management Egatur",
      description:
        "An end-to-end internal workflow system for administrative documents, featuring digital signatures and role-based access control.",
      image: "/img/imagen1.png",
      tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3", "Gmail API", "Google Drive API"],
      liveUrl: "https://gti.egatur.edu.pe/",
      githubUrl: "https://github.com/JosePizarro1/gti",
      youtubeUrl: "",
    },
    {
      title: "Gym Management/Academy System",
      description:
        "A responsive gym management /Academy platform with QR-based attendance, client management, payment processing, and membership tracking.",
      image: "/img/imagen3.png",
      tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
      liveUrl: "https://demogym.pythonanywhere.com/",
      githubUrl: "https://github.com/JosePizarro1/Gym",
      youtubeUrl: "",
    },
    {
      title: "NFT Chest Adventure Game MEDIEVAL",
      description:
        "A responsive NFT-based game with chest mechanics and character logic for gold creation. Reached over 1,800 active users during its peak phase.",
      image: "/img/imagen4.png",
      tags: ["Django", "Bootstrap", "Tailwind CSS", "SQLite3"],
      liveUrl: "https://medievalnft.pythonanywhere.com/login/?next=/",
      githubUrl: "",
      youtubeUrl: "https://youtu.be/Cg1xWz0_uwk",
    },
  ];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project showcases different skills and technologies I've worked
            with.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Source Code
                  </a>

                  {project.youtubeUrl && (
                    <a
                      href={project.youtubeUrl}
                      className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRight size={16} />
                      YouTube
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            More projects in progress
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

