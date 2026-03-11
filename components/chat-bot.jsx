"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Bot, Sparkles } from "lucide-react"

export default function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [text, setText] = useState("")
    const fullText = "¡Hola! Soy Jose. ¿En qué puedo ayudarte hoy?"

    useEffect(() => {
        // Show a greeting message after 2 seconds
        const timer = setTimeout(() => {
            if (!isOpen) setShowMessage(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [isOpen])

    useEffect(() => {
        if (showMessage && !isOpen) {
            let i = 0
            setText("")
            const interval = setInterval(() => {
                setText(fullText.slice(0, i + 1))
                i++
                if (i >= fullText.length) clearInterval(interval)
            }, 50)
            return () => clearInterval(interval)
        }
    }, [showMessage, isOpen])

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Speech Bubble */}
            <AnimatePresence>
                {showMessage && !isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="mb-4 mr-2 p-4 bg-gray-900/80 backdrop-blur-xl border border-purple-500/30 rounded-2xl rounded-br-none shadow-2xl max-w-[250px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <p className="text-sm text-gray-200 relative z-10 font-medium leading-relaxed">
                            {text}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 ml-1 bg-purple-500 align-middle"
                            />
                        </p>
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                setShowMessage(false)
                            }}
                            className="absolute top-1 right-1 p-1 text-gray-500 hover:text-white transition-colors"
                        >
                            <X size={12} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Bot Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                    setIsOpen(!isOpen)
                    setShowMessage(false)
                }}
                className="relative group w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shadow-purple-500/30 overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated Orbits */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-white/20 rounded-full scale-125"
                />

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="text-white w-6 h-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="bot"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="relative"
                        >
                            <Bot className="text-white w-7 h-7" />
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles className="text-yellow-300 w-3 h-3 fill-yellow-300" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Mini Chat Window (Placeholder for future functionality) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, blur: "10px" }}
                        animate={{ opacity: 1, y: 0, scale: 1, blur: "0px" }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[320px] h-[400px] bg-gray-900/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                <Bot size={18} className="text-white" />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-white">Jose AI Assistant</h4>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] text-gray-400">Online</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4">
                            <div className="bg-gray-800/50 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300 border border-white/5">
                                ¡Hola! Soy el asistente virtual de Jose. ¿Quieres saber sobre sus proyectos o contactarlo?
                            </div>
                            <div className="flex flex-col gap-2">
                                {[{ name: "Ver Proyectos", href: "#projects" }, { name: "Contactar", href: "#contact" }, { name: "Descargar CV", href: "/pdf/CV_JOSE_PIZARRO.pdf", download: true }].map((option) => (
                                    <a
                                        key={option.name}
                                        href={option.href}
                                        download={option.download}
                                        onClick={() => setIsOpen(false)}
                                        className="text-left px-4 py-2 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-xs text-purple-300 transition-all cursor-pointer"
                                    >
                                        {option.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 border-top border-white/10">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Escribe un mensaje..."
                                    className="w-full bg-gray-800/50 border border-white/10 rounded-xl px-4 py-2 text-xs focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-500 hover:text-purple-400">
                                    <MessageSquare size={14} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
