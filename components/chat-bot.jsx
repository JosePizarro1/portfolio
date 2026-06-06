"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Bot, Sparkles, Send, User } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export default function ChatBot() {
    const { language, t } = useLanguage()
    const [isOpen, setIsOpen] = useState(false)
    const [showMessage, setShowMessage] = useState(false)
    const [text, setText] = useState("")
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState([
        { role: "assistant", content: "" }
    ])
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)
    
    const fullText = t("chatbot.bubbleGreeting")

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Initialize/translate initial message when language changes
    useEffect(() => {
        const initialGreeting = t("chatbot.greeting")
        if (messages.length === 1 && messages[0].content !== initialGreeting) {
            setMessages([{ role: "assistant", content: initialGreeting }])
        }
    }, [language, t, messages])

    useEffect(() => {
        if (isOpen) {
            scrollToBottom()
        }
    }, [messages, isOpen])

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
    }, [showMessage, isOpen, fullText])

    const handleSend = async () => {
        if (!input.trim() || isLoading) return

        const userMessage = { role: "user", content: input }
        setMessages(prev => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map(m => ({
                        role: m.role,
                        content: m.content
                    })),
                    language // Pass the current language to the LLM backend if it needs to adapt
                })
            })

            const data = await response.json()
            if (data.text) {
                setMessages(prev => [...prev, { role: "assistant", content: data.text }])
            } else {
                throw new Error("No response")
            }
        } catch (error) {
            console.error("Chat Error:", error)
            setMessages(prev => [...prev, { role: "assistant", content: t("chatbot.error") }])
        } finally {
            setIsLoading(false)
        }
    }

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

            {/* Mini Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-gray-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                                    <Bot size={18} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-white leading-tight">{t("chatbot.title")}</h4>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] text-gray-400">{t("chatbot.status")}</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 custom-scrollbar">
                            {messages.map((msg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={index}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div className={`flex items-end gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                                            msg.role === "user" ? "bg-blue-600" : "bg-purple-600"
                                        }`}>
                                            {msg.role === "user" ? <User size={12} className="text-white" /> : <Bot size={12} className="text-white" />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-xs leading-relaxed shadow-sm ${
                                            msg.role === "user" 
                                                ? "bg-blue-600 text-white rounded-br-none" 
                                                : "bg-gray-800/80 text-gray-200 border border-white/5 rounded-bl-none"
                                        }`}>
                                            {msg.content}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="flex items-center gap-2 bg-gray-800/80 p-3 rounded-2xl rounded-bl-none border border-white/5">
                                        <div className="flex gap-1">
                                          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }} className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }} className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Initial Options (Show only when conversation is short) */}
                        {messages.length < 3 && (
                            <div className="px-4 pb-2 flex flex-wrap gap-2">
                                {[
                                    { name: t("chatbot.options.projects"), id: "projects" }, 
                                    { name: t("chatbot.options.skills"), id: "skills" },
                                    { name: t("chatbot.options.contact"), id: "contact" }
                                ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => {
                                            setInput(
                                                language === "es"
                                                    ? `Cuéntame sobre tus ${option.name.toLowerCase()}`
                                                    : `Tell me about your ${option.name.toLowerCase()}`
                                            )
                                        }}
                                        className="px-3 py-1.5 rounded-full bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/20 text-[10px] text-purple-300 transition-all"
                                    >
                                        {option.name}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-4 bg-gray-900/50 border-t border-white/5">
                            <form 
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSend()
                                }}
                                className="relative flex items-center gap-2"
                            >
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    disabled={isLoading}
                                    type="text"
                                    placeholder={t("chatbot.placeholder")}
                                    className="w-full bg-gray-800/50 border border-white/10 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-all disabled:opacity-50"
                                />
                                <button 
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-2.5 rounded-xl bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 transition-all flex-shrink-0 shadow-lg shadow-purple-500/20"
                                >
                                    <Send size={16} />
                                </button>
                            </form>
                            <p className="text-[9px] text-center text-gray-500 mt-2">
                                {language === "es" ? "Potenciado por Gemini 1.5 Flash" : "Powered by Gemini 1.5 Flash"}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

