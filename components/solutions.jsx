"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import * as Dialog from "@radix-ui/react-dialog"
import { useLanguage } from "@/context/LanguageContext"
import { ChevronRight, X, Cpu, Layers } from "lucide-react"
import { SiSalesforce, SiSlack, SiMeta, SiLooker } from "react-icons/si"

const ICON_MAP = {
    "sf-shield": SiSalesforce,
    "webhook-leads": SiMeta,
    "slack-ticketing": SiSlack,
    "sf-looker": SiLooker,
}

function TerminalConsole({ solutionId, flow }) {
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
                    cmdCharIndex++
                    setCommand(fullCommand.slice(0, cmdCharIndex))
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
                                <span className="ed-log-tag font-semibold shrink-0">{tag}</span>
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
    const { t, language } = useLanguage()
    const es = language === "es"
    const opener = useRef(null)
    const [selectedSolution, setSelectedSolution] = useState(null)
    const solutionsList = t("solutions.list") || []

    return (
        <section id="solutions" className="ed-section" aria-labelledby="solutions-title">
            <div className="container">
                <header className="ed-intro ed-intro--split">
                    <h2 id="solutions-title" className="ed-heading">
                        {t("solutions.title")} {t("solutions.highlight")}
                    </h2>
                    <p>{t("solutions.description")}</p>
                </header>
                <div className="ed-solution-list">
                    {solutionsList.map(solution => {
                        const Icon = ICON_MAP[solution.id] || Cpu
                        return (
                            <article key={solution.id} className="ed-solution-case">
                                <div className="ed-solution-mark"><Icon size={26} aria-hidden="true" /></div>
                                <div className="ed-solution-copy">
                                    <p className="ed-solution-category">{solution.subtitle}</p>
                                    <h3>{solution.title}</h3>
                                    <p className="ed-solution-description">{solution.description}</p>
                                </div>
                                <div className="ed-solution-meta">
                                    <ul className="ed-tags">
                                        {solution.tech.slice(0, 3).map(tech => <li key={tech}>{tech}</li>)}
                                    </ul>
                                    <button type="button" className="ed-case-button" onClick={event => {
                                        opener.current = event.currentTarget
                                        setSelectedSolution(solution)
                                    }}
                                        aria-label={`${t("solutions.viewFlow")}: ${solution.title}`}>
                                        {t("solutions.viewFlow")} <ChevronRight size={16} aria-hidden="true" />
                                    </button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>

            <Dialog.Root open={Boolean(selectedSolution)} onOpenChange={open => { if (!open) setSelectedSolution(null) }}>
                <Dialog.Portal>
                    <Dialog.Overlay className="ed-case-overlay" />
                    {selectedSolution && (
                        <Dialog.Content className="ed-case-dialog" onCloseAutoFocus={event => {
                            event.preventDefault()
                            opener.current?.focus()
                        }}>
                            <Dialog.Close className="ed-case-close" aria-label={es ? "Cerrar detalles" : "Close details"}>
                                <X size={20} aria-hidden="true" />
                            </Dialog.Close>
                            <header className="ed-case-header">
                                <p className="ed-solution-category">{selectedSolution.subtitle}</p>
                                <Dialog.Title>{selectedSolution.title}</Dialog.Title>
                                <Dialog.Description>{selectedSolution.description}</Dialog.Description>
                            </header>
                            <div className="ed-case-overview">
                                <div>
                                    <h4>{es ? "El reto" : "The challenge"}</h4>
                                    <ul>{selectedSolution.challenge.map(item => <li key={item}>{item}</li>)}</ul>
                                </div>
                                <div>
                                    <h4>{es ? "La solución" : "The solution"}</h4>
                                    <ul>{selectedSolution.solution.map(item => <li key={item}>{item}</li>)}</ul>
                                </div>
                            </div>
                            <div className="ed-case-console">
                                <h4><Layers size={15} aria-hidden="true" />{es ? "Simulación del flujo" : "Workflow simulation"}</h4>
                                <TerminalConsole solutionId={selectedSolution.id} flow={selectedSolution.flow} />
                            </div>
                            <footer className="ed-case-stack">
                                <h4>{es ? "Tecnologías" : "Technologies"}</h4>
                                <ul className="ed-tags">{selectedSolution.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
                            </footer>
                        </Dialog.Content>
                    )}
                </Dialog.Portal>
            </Dialog.Root>
        </section>
    )
}
