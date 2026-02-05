"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function SiriGlow() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        // El efecto dura 5 segundos y luego desaparece suavemente
        const timer = setTimeout(() => {
            setShow(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="fixed inset-0 z-[100] pointer-events-none"
                >
                    {/* El brillo rotatorio */}
                    <div className="siri-glow-container">
                        <div className="siri-glow-border" />
                    </div>

                    {/* La máscara para que solo se vea el borde */}
                    <div className="siri-mask" />

                    {/* Un resplandor extra en las esquinas */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10" />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
