"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import { ChevronRight, X, Cpu, Layers, AlertCircle } from "lucide-react"
import { SiSalesforce, SiSlack, SiMeta, SiLooker } from "react-icons/si"

const ICON_MAP = {
    "sf-shield": SiSalesforce,
    "webhook-leads": SiMeta,
    "slack-ticketing": SiSlack,
    "sf-looker": SiLooker,
}

const BRAND_COLORS = {
    "sf-shield": {
        text: "text-sky-400",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20",
        hoverBorder: "hover:border-sky-400/50",
        glow: "from-sky-500/10 to-transparent",
        shadow: "hover:shadow-[0_0_40px_-10px_rgba(56,189,248,0.3)]",
        topLine: "from-sky-400 to-blue-500",
    },
    "webhook-leads": {
        text: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        hoverBorder: "hover:border-blue-400/50",
        glow: "from-blue-500/10 to-transparent",
        shadow: "hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]",
        topLine: "from-blue-500 to-indigo-600",
    },
    "slack-ticketing": {
        text: "text-rose-400",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20",
        hoverBorder: "hover:border-rose-400/50",
        glow: "from-rose-500/10 to-transparent",
        shadow: "hover:shadow-[0_0_40px_-10px_rgba(244,63,94,0.3)]",
        topLine: "from-rose-500 to-pink-600",
    },
    "sf-looker": {
        text: "text-violet-400",
        bg: "bg-violet-500/10",
        border: "border-violet-500/20",
        hoverBorder: "hover:border-violet-400/50",
        glow: "from-violet-500/10 to-transparent",
        shadow: "hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.3)]",
        topLine: "from-violet-500 to-indigo-500",
    }
}

function TerminalConsole({ solutionId, flow, colors }) {
    const [command, setCommand] = useState("")
    const [visibleLogs, setVisibleLogs] = useState([])
    const [isDone, setIsDone] = useState(false)
    const [step, setStep] = useState(0) // 0: typing, 1: logging, 2: success

    const fullCommand = `run-pipeline --service=${solutionId}`

    useEffect(() => {
        let isMounted = true
        setCommand("")
        setVisibleLogs([])
        setIsDone(false)
        setStep(0)

        let cmdCharIndex = 0
        let typingInterval

        const startTyping = () => {
            typingInterval = setInterval(() => {
                if (!isMounted) return
                if (cmdCharIndex < fullCommand.length) {
                    setCommand((prev) => prev + fullCommand[cmdCharIndex])
                    cmdCharIndex++
                } else {
                    clearInterval(typingInterval)
                    setTimeout(() => {
                        if (isMounted) setStep(1)
                    }, 400)
                }
            }, 30)
        }

        startTyping()

        return () => {
            isMounted = false
            clearInterval(typingInterval)
        }
    }, [solutionId])

    useEffect(() => {
        if (step !== 1) return

        let isMounted = true
        let logIndex = 0
        let logInterval

        const printNextLog = () => {
            if (!isMounted) return
            if (flow && logIndex < flow.length) {
                const currentLine = flow[logIndex]
                if (currentLine !== undefined && currentLine !== null) {
                    setVisibleLogs((prev) => [...prev, currentLine])
                }
                logIndex++
                
                // Keep scroll pinned to bottom
                const container = document.getElementById("terminal-logs-viewport")
                if (container) {
                    container.scrollTop = container.scrollHeight
                }
                
                const nextDelay = Math.random() * 250 + 300
                logInterval = setTimeout(printNextLog, nextDelay)
            } else {
                setTimeout(() => {
                    if (isMounted) {
                        setIsDone(true)
                        setStep(2)
                        const container = document.getElementById("terminal-logs-viewport")
                        if (container) {
                            container.scrollTop = container.scrollHeight
                        }
                    }
                }, 350)
            }
        }

        printNextLog()

        return () => {
            isMounted = false
            clearTimeout(logInterval)
        }
    }, [step, flow])

    const handleReRun = () => {
        setCommand("")
        setVisibleLogs([])
        setIsDone(false)
        setStep(0)
    }

    return (
        <div className="bg-black border border-white/10 rounded-2xl p-5 font-mono text-xs shadow-2xl relative overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4 select-none">
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] text-gray-500 font-sans">bash - pipeline.sh</span>
                
                {step === 2 ? (
                    <button 
                        onClick={handleReRun}
                        className="text-[10px] text-zinc-400 hover:text-white flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                    >
                        <svg className="w-3 h-3 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.306 7M7 9h8V1" />
                        </svg>
                        <span>Re-run</span>
                    </button>
                ) : (
                    <div className="w-12 h-3" />
                )}
            </div>

            {/* Console Output logs */}
            <div 
                id="terminal-logs-viewport"
                className="space-y-2.5 max-h-56 overflow-y-auto custom-scrollbar select-text pr-2 scroll-smooth"
            >
                <div className="text-zinc-500 flex items-center gap-1.5 mb-3">
                    <span className="text-green-500 font-bold">$</span> 
                    <span>
                        {command}
                        {step === 0 && <span className="inline-block w-1.5 h-3.5 ml-0.5 bg-green-500 animate-pulse" />}
                    </span>
                </div>
                
                {visibleLogs.map((line, idx) => {
                    if (typeof line !== "string") return null
                    const parts = line.split("] ")
                    let element
                    if (parts.length > 1) {
                        const tag = parts[0] + "]"
                        const msg = parts[1]
                        element = (
                            <div className="flex items-start gap-2 leading-relaxed">
                                <span className={`${colors.text} font-semibold shrink-0`}>{tag}</span> 
                                <span className="text-gray-300">{msg}</span>
                            </div>
                        )
                    } else {
                        element = (
                            <div className="leading-relaxed text-gray-300">
                                {line}
                            </div>
                        )
                    }

                    return (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {element}
                        </motion.div>
                    )
                })}

                {step === 1 && (
                    <div className="text-zinc-500 flex items-center gap-2 animate-pulse pl-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-ping" />
                        <span className="italic text-[10px]">Processing...</span>
                    </div>
                )}

                {isDone && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-emerald-500 flex items-center gap-1.5 mt-4 pt-2 border-t border-white/5"
                    >
                        <span className="font-bold">[SUCCESS]</span>
                        <span className="text-zinc-400">Process finished successfully with 0 errors.</span>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default function Solutions() {
    const { t } = useLanguage()
    const [selectedSolution, setSelectedSolution] = useState(null)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1 })

    const solutionsList = t("solutions.list") || []

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <section id="solutions" className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold mb-4"
                    >
                        {t("solutions.title")}{" "}
                        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                            {t("solutions.highlight")}
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base"
                    >
                        {t("solutions.description")}
                    </motion.p>
                </div>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {solutionsList.map((sol) => {
                        const IconComponent = ICON_MAP[sol.id] || Cpu
                        const colors = BRAND_COLORS[sol.id] || {
                            text: "text-purple-400",
                            bg: "bg-purple-500/10",
                            border: "border-purple-500/20",
                            hoverBorder: "hover:border-purple-500/30",
                            glow: "from-purple-500/5 to-transparent",
                            shadow: "hover:shadow-purple-500/20",
                            topLine: "from-purple-500 to-blue-500"
                        }
                        
                        return (
                            <motion.div
                                key={sol.id}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className={`group relative bg-gray-900/60 backdrop-blur-xl border border-white/5 rounded-2xl p-6 ${colors.hoverBorder} ${colors.shadow} transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden`}
                                onClick={() => setSelectedSolution(sol)}
                            >
                                {/* Top brand bar */}
                                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${colors.topLine} rounded-t-2xl`} />

                                {/* Subtle inner hover glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                                <div>
                                    <div className="flex items-center gap-4 mb-4 mt-2">
                                        <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent size={24} />
                                        </div>
                                        <div>
                                            <span className={`text-[10px] uppercase tracking-wider ${colors.text} font-semibold`}>
                                                {sol.subtitle}
                                            </span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                                                {sol.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-gray-400 text-xs md:text-sm mb-6 leading-relaxed text-left">
                                        {sol.description}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <div className="flex flex-wrap gap-1.5">
                                        {sol.tech.slice(0, 3).map((t) => (
                                            <span key={t} className="px-2 py-0.5 bg-gray-800/80 rounded-md text-[10px] text-gray-300 border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <span className={`text-xs font-semibold ${colors.text} flex items-center gap-1`}>
                                        {t("solutions.viewFlow")} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>

            {/* Premium Animated Overlay/Modal for Flow details */}
            <AnimatePresence>
                {selectedSolution && (() => {
                    const colors = BRAND_COLORS[selectedSolution.id] || {
                        text: "text-purple-400",
                        bg: "bg-purple-500/10",
                        border: "border-purple-500/20",
                        topLine: "from-purple-500 to-blue-500"
                    }
                    
                    return (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                            {/* Backdrop close area */}
                            <div className="absolute inset-0" onClick={() => setSelectedSolution(null)} />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                transition={{ type: "spring", damping: 25, stiffness: 350 }}
                                className="bg-gray-900 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-w-3xl relative z-10 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl"
                            >
                                {/* Top brand bar on modal */}
                                <div className={`absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r ${colors.topLine} rounded-t-3xl`} />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedSolution(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white transition-colors"
                                >
                                    <X size={18} />
                                </button>

                                {/* Header */}
                                <div className="mb-6 mt-2 flex items-start gap-4 pr-8">
                                    <div className={`w-12 h-12 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} shrink-0`}>
                                        {(() => {
                                            const IconComponent = ICON_MAP[selectedSolution.id] || Cpu
                                            return <IconComponent size={24} />
                                        })()}
                                    </div>
                                    <div>
                                        <span className={`text-xs uppercase tracking-wider ${colors.text} font-semibold`}>
                                            {selectedSolution.subtitle}
                                        </span>
                                        <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">
                                            {selectedSolution.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Challenge and Solution (Keyword Badges Layout) */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-gray-950/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <AlertCircle className="text-red-400 shrink-0" size={18} />
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                {useLanguage().language === "es" ? "El Reto" : "The Challenge"}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {selectedSolution.challenge.map((item, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-red-500/10 border border-red-500/20 text-red-300 rounded-xl text-xs font-medium flex items-center gap-1.5 select-all">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-gray-950/40 border border-white/5 rounded-2xl p-5 flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <Cpu className="text-emerald-400 shrink-0" size={18} />
                                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                                                {useLanguage().language === "es" ? "La Solución" : "The Solution"}
                                            </h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {selectedSolution.solution.map((item, idx) => (
                                                <span key={idx} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl text-xs font-medium flex items-center gap-1.5 select-all">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Integration Terminal Console Simulator */}
                                <div className="mb-6">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 flex items-center gap-1.5">
                                        <Layers size={14} className={colors.text} />
                                        {useLanguage().language === "es" ? "Consola de Integración" : "Integration Console Logs"}
                                    </h4>
                                    <TerminalConsole 
                                        solutionId={selectedSolution.id} 
                                        flow={selectedSolution.flow} 
                                        colors={colors} 
                                    />
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-white/5">
                                    <span className="text-[10px] uppercase font-bold text-gray-500 mr-2">
                                        Tech Stack:
                                    </span>
                                    {selectedSolution.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    )
                })()}
            </AnimatePresence>
        </section>
    )
}
