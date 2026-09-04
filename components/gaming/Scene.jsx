"use client"

import { Component, Suspense, useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF, Center } from "@react-three/drei"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js"
import { Box3, ExtrudeGeometry, MathUtils, Shape } from "three"

class SceneBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? this.props.fallback : this.props.children }
}

function Motion({ children, paused, rotation = 0 }) {
  const ref = useRef()
  useFrame(({ pointer, clock }, delta) => {
    if (!ref.current || paused) return
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, rotation + pointer.x * .22, 4, delta)
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, -pointer.y * .1, 4, delta)
    ref.current.position.y = Math.sin(clock.elapsedTime * .75) * .07
  })
  return <group ref={ref} rotation={[0, rotation, 0]}>{children}</group>
}

function Knight({ paused }) {
  const { scene } = useGLTF('/gaming/knight.glb')
  return <Motion paused={paused} rotation={-.6}><Center><primitive object={scene} scale={32} /></Center></Motion>
}

function Dota({ paused }) {
  const svg = useLoader(SVGLoader, '/gaming/dota-symbol.svg')
  const geometry = useMemo(() => {
    const shapes = svg.paths.flatMap(path => SVGLoader.createShapes(path))
    const result = new ExtrudeGeometry(shapes, { depth: 22, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: .8, bevelThickness: 1, curveSegments: 5 })
    result.center()
    return result
  }, [svg])
  useEffect(() => () => geometry.dispose(), [geometry])
  return <Motion paused={paused} rotation={-.17}>
    <mesh geometry={geometry} scale={[.008, -.008, .008]}>
      <meshStandardMaterial color="#b92c20" metalness={.55} roughness={.3} />
    </mesh>
  </Motion>
}

function Stars({ paused }) {
  const geometry = useMemo(() => {
    const shape = new Shape()
    for (let i = 0; i < 10; i++) {
      const angle = Math.PI / 2 + i * Math.PI / 5
      const radius = i % 2 === 0 ? .46 : .21
      const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius
      if (!i) shape.moveTo(x, y); else shape.lineTo(x, y)
    }
    shape.closePath()
    const result = new ExtrudeGeometry(shape, { depth: .12, bevelEnabled: true, bevelThickness: .025, bevelSize: .025, bevelSegments: 2, steps: 1 })
    result.center()
    return result
  }, [])
  useEffect(() => () => geometry.dispose(), [geometry])
  return <Motion paused={paused}>{[-2, -1, 0, 1, 2].map((n) => (
    <mesh key={n} geometry={geometry} position={[n * 1.05, Math.abs(n) * -.09, 0]} rotation={[.12, n * .17, n * -.08]} scale={n === 0 ? 1 : .78}>
      <meshStandardMaterial color={n === 0 ? '#e0bb7a' : '#9d8061'} roughness={.26} metalness={.7} />
    </mesh>
  ))}</Motion>
}

export default function Scene({ type, paused, label }) {
  const holder = useRef()
  const [visible, setVisible] = useState(false)
  const [onScreen, setOnScreen] = useState(true)
  const [foreground, setForeground] = useState(true)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting)
      if (entry.isIntersecting) setVisible(true)
    }, { rootMargin: '80px' })
    observer.observe(holder.current)
    const change = () => setForeground(!document.hidden)
    document.addEventListener('visibilitychange', change)
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', change) }
  }, [])
  const fallback = <div className={`scene-fallback ${type}`} aria-hidden="true">{type === 'dota' ? <img src="/gaming/dota-symbol.svg" alt="" /> : type === 'knight' ? '♞' : '✦ ✦ ✦'}</div>
  const still = paused || !onScreen || !foreground
  return <div ref={holder} className={`gaming-scene ${type}`} role="img" aria-label={label}>
    {fallback}
    {visible && <SceneBoundary fallback={null}>
      <Canvas dpr={[1, 1.5]} frameloop={still ? 'demand' : 'always'} camera={{ position: [0, .2, type === 'stars' ? 7 : 5.8], fov: type === 'stars' ? 32 : 34 }} gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }} fallback={null}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 5]} intensity={3.5} color={type === 'dota' ? '#ffb49b' : '#fff3df'} />
        <directionalLight position={[-4, 1, 2]} intensity={2} color={type === 'dota' ? '#e64632' : '#a4bde0'} />
        <directionalLight position={[0, 3, -3]} intensity={4} color="#f2d7aa" />
        <Suspense fallback={null}>
          <Loaded type={type} paused={still} holder={holder} />
        </Suspense>
      </Canvas>
    </SceneBoundary>}
  </div>
}

function Loaded({ type, paused, holder }) {
  // Mount only after the selected asset has resolved, so its fallback stays visible while loading.
  return <><Ready holder={holder} />{type === 'knight' ? <Knight paused={paused} /> : type === 'dota' ? <Dota paused={paused} /> : <Stars paused={paused} />}</>
}
function Ready({ holder }) {
  useEffect(() => {
    const element = holder.current
    element?.classList.add('ready')
    return () => element?.classList.remove('ready')
  }, [holder])
  return null
}
