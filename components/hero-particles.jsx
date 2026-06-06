"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"

function ParticleField(props) {
    const ref = useRef()
    const sphere = useMemo(() => {
        const points = new Float32Array(5000)
        const radius = 1.5
        for (let i = 0; i < 5000; i += 3) {
            const u = Math.random()
            const v = Math.random()
            const theta = 2 * Math.PI * u
            const phi = Math.acos(2 * v - 1)
            const r = Math.cbrt(Math.random()) * radius
            points[i] = r * Math.sin(phi) * Math.cos(theta)
            points[i + 1] = r * Math.sin(phi) * Math.sin(theta)
            points[i + 2] = r * Math.cos(phi)
        }
        return points
    }, [])

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#a855f7"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}

export default function HeroParticles() {
    const [mounted, setMounted] = useState(false)
    const [canvasKey, setCanvasKey] = useState(0)

    useEffect(() => {
        setMounted(true)
        // Remount the Canvas after 500ms, once the parent's 400ms fade-in transition is fully complete
        const timer = setTimeout(() => {
            setCanvasKey(prev => prev + 1)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    if (!mounted) {
        return <div className="absolute inset-0 w-full h-full z-0 opacity-40 bg-gray-950/10" />
    }

    return (
        <div className="absolute inset-0 w-full h-full z-0 opacity-40">
            <Canvas key={canvasKey} camera={{ position: [0, 0, 1] }}>
                <ParticleField />
            </Canvas>
        </div>
    )
}
