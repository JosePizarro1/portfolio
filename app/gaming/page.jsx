"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Gamepad2, ArrowLeft, Construction } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function GamingConstruction() {
  const { language } = useLanguage()
  const isEs = language === "es"

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-mono">
      {/* Dynamic scanlines background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%] pointer-events-none z-20" />
      
      {/* Cyberpunk ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-md w-full text-center relative z-10 space-y-8">
        
        {/* Retro Game Console Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="border border-purple-500/30 bg-gray-900/50 backdrop-blur-md rounded-3xl p-8 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] relative overflow-hidden"
        >
          {/* Top colored stripes */}
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" />
          
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-purple-500/10 border border-purple-500/30 rounded-2xl flex items-center justify-center text-purple-400 shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-pulse"
            >
              <Gamepad2 size={40} />
            </motion.div>
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent uppercase mb-2">
            Gaming Corner
          </h1>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-xs text-purple-300 font-semibold mb-6 uppercase tracking-widest animate-pulse">
            <Construction size={12} />
            <span>{isEs ? "En Construcción" : "Under Construction"}</span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
            {isEs 
              ? "Estoy preparando un rincón especial para compartir mis videojuegos favoritos, estadísticas y proyectos de desarrollo de juegos. ¡Vuelve pronto!" 
              : "I am preparing a special corner to share my favorite video games, stats, and game dev projects. Check back soon!"
            }
          </p>

          {/* Interactive Loading Bar */}
          <div className="space-y-1.5 text-left mb-2">
            <div className="flex justify-between text-[10px] text-purple-400 font-semibold">
              <span>LOADING DATA...</span>
              <span>72%</span>
            </div>
            <div className="h-2 bg-gray-950 border border-white/10 rounded-full overflow-hidden p-[1px]">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "72%" }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm px-6 py-3 rounded-xl bg-gray-900/40 border border-white/5 hover:bg-gray-900/80 hover:border-white/10"
          >
            <ArrowLeft size={16} />
            <span>{isEs ? "Volver al Inicio" : "Back to Home"}</span>
          </Link>
        </motion.div>

      </div>
    </main>
  )
}
