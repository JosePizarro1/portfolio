"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import { useEffect, useRef, useState } from "react"
import { ArrowLeft, ArrowUpRight, Pause, Play, ArrowDown, Copy, Check } from "lucide-react"
import { FaSteam } from "react-icons/fa"
import { useLanguage } from "@/context/LanguageContext"
import './gaming.css'

const Scene = dynamic(() => import('@/components/gaming/Scene'), { ssr: false })

export default function Gaming() {
  const { language, setLanguage } = useLanguage()
  const es = language === 'es'
  const [paused, setPaused] = useState(true)
  const [copyState, setCopyState] = useState('idle')
  const copyTimer = useRef(null)
  useEffect(() => () => clearTimeout(copyTimer.current), [])
  async function copySteamId() {
    clearTimeout(copyTimer.current)
    try {
      await navigator.clipboard.writeText('347868527')
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }
    copyTimer.current = setTimeout(() => setCopyState('idle'), 3500)
  }
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setPaused(media.matches)
    update(); media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])
  return (
    <main className="gaming-page" data-motion={paused ? "paused" : "playing"}>
      <nav className="gaming-nav" aria-label={es ? 'Navegación de gaming' : 'Gaming navigation'}>
        <Link href="/#about" className="back-link"><ArrowLeft size={16} /> {es ? 'Portafolio' : 'Portfolio'}</Link>
        <span className="gaming-wordmark">JP <span>/</span> OFFLINE</span>
        <button className="language-button" onClick={() => setLanguage(es ? 'en' : 'es')} aria-label={es ? 'Switch to English' : 'Cambiar a español'}>{es ? 'EN' : 'ES'} <ArrowUpRight size={13} /></button>
      </nav>

      <header className="gaming-intro">
        <p className="gaming-eyebrow"><span /> {es ? 'FUERA DEL EDITOR' : 'BEYOND THE EDITOR'}</p>
        <h1>{es ? 'Otra forma de' : 'Another way to'}<br /><em>{es ? 'pensar la jugada.' : 'think ahead.'}</em></h1>
        <p className="gaming-lead">{es ? 'A veces cierro el código y abro otra partida. Dos mundos distintos, las mismas ganas de encontrar la siguiente buena idea.' : 'Sometimes I close the code and start another game. Two different worlds, the same curiosity for the next good idea.'}</p>
        <a href="#games" className="explore-link">{es ? 'MI LADO GAMER' : 'MY GAMING SIDE'} <ArrowDown size={14} /></a>
      </header>

      <section id="games" className="game-gallery" aria-label={es ? 'Mis juegos favoritos' : 'My favorite games'}>
        <article className="game-panel chess-panel">
          <div className="panel-top"><span>01 / {es ? 'EL TABLERO' : 'THE BOARD'}</span><span>64 {es ? 'CASILLAS' : 'SQUARES'}</span></div>
          <div className="object-stage"><div className="chess-grid" aria-hidden="true" /><Scene type="knight" paused={paused} label={es ? 'Caballo de ajedrez 3D de mármol claro' : 'Light marble 3D chess knight'} /></div>
          <div className="game-copy"><p className="game-kicker">{es ? 'CALMA. VISIÓN. ESTRATEGIA.' : 'CALM. VISION. STRATEGY.'}</p><h2>{es ? 'Ajedrez' : 'Chess'}<span>♟</span></h2><p>{es ? 'Un tablero, muchas posibilidades. Me gusta esa pausa antes de mover: observar, anticipar y descubrir un camino que no era evidente.' : 'One board, so many possibilities. I enjoy that pause before a move: observing, anticipating, and finding a path that was not obvious.'}</p><div className="game-tags"><span>{es ? 'Estrategia' : 'Strategy'}</span><span>{es ? 'Paciencia' : 'Patience'}</span></div></div>
        </article>
        <article className="game-panel dota-panel">
          <div className="panel-top"><span>02 / {es ? 'LA ARENA' : 'THE ARENA'}</span><span>DEFENSE OF THE ANCIENTS</span></div>
          <div className="object-stage"><div className="dota-aura" aria-hidden="true" /><Scene type="dota" paused={paused} label={es ? 'Emblema de Dota 2 tridimensional en rojo' : 'Red three-dimensional Dota 2 emblem'} /></div>
          <div className="game-copy"><p className="game-kicker">{es ? 'EQUIPO. INSTINTO. ADAPTACIÓN.' : 'TEAMWORK. INSTINCT. ADAPTATION.'}</p><h2>Dota 2<span>↗</span></h2><p>{es ? 'Cada partida cuenta una historia diferente. Me atrae combinar decisiones rápidas con estrategia y encontrar el momento de jugar en equipo.' : 'Every match tells a different story. I love combining quick decisions with strategy and finding the right moment to play as a team.'}</p><div className="game-tags"><span>MOBA</span><span>{es ? 'Juego en equipo' : 'Team play'}</span></div></div>
        </article>
      </section>

      <div className="motion-controls"><span>{es ? 'Dos formas de disfrutar la estrategia.' : 'Two ways to enjoy strategy.'}</span><button onClick={() => setPaused(!paused)} aria-pressed={paused}>{paused ? <Play size={14} /> : <Pause size={14} />}{paused ? (es ? 'Activar movimiento' : 'Enable motion') : (es ? 'Pausar movimiento' : 'Pause motion')}</button></div>

      <section className="player-profile" aria-labelledby="player-heading">
        <div className="medal-display">
          <div className="medal-halo" aria-hidden="true" />
          <div className="medal-sparks" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <span key={i} style={{ '--spark-x': `${12 + ((i * 37) % 78)}%`, '--spark-delay': `${-(i * .37)}s`, '--spark-duration': `${2.5 + (i % 4) * .4}s`, '--spark-drift': `${(i % 2 ? 1 : -1) * (16 + i * 2)}px` }} />)}</div>
          <img src="/gaming/ancient.png" alt={es ? 'Medalla Ancestral de Dota 2' : 'Dota 2 Ancient medal'} width="256" height="256" loading="lazy" />
        </div>
        <div className="player-details">
          <p className="gaming-eyebrow">DOTA 2 / {es ? 'MI PERFIL' : 'MY PROFILE'}</p>
          <h2 id="player-heading">{es ? 'Ancestral' : 'Ancient'}<span>.</span></h2>
          <p>{es ? 'Estrategia, microcontrol y una partida más.' : 'Strategy, micro-control, and one more game.'}</p>
          <div className="steam-id"><FaSteam size={28} aria-hidden="true" /><div><span>STEAM ID</span><strong>347868527</strong></div><button onClick={copySteamId} aria-label={es ? 'Copiar Steam ID 347868527' : 'Copy Steam ID 347868527'}>{copyState === 'copied' ? <Check size={18} /> : <Copy size={18} />}</button></div>
          <p className="copy-status" role="status" aria-live="polite">{copyState === 'copied' ? (es ? 'ID copiado' : 'ID copied') : copyState === 'error' ? (es ? 'No se pudo copiar. Selecciona el ID para copiarlo manualmente.' : 'Could not copy. Select the ID to copy it manually.') : ''}</p>
        </div>
      </section>

      <section className="favorite-heroes" aria-labelledby="heroes-heading">
        <div className="section-heading"><div><p className="gaming-eyebrow">{es ? 'MI SELECCIÓN' : 'MY PICKS'}</p><h2 id="heroes-heading">{es ? 'Héroes' : 'Favorite'} <span>{es ? 'favoritos' : 'heroes'}</span></h2></div><p>{es ? 'Me gustan los retos que exigen un poco más.' : 'I enjoy challenges that ask a little more.'}</p></div>
        <div className="heroes-grid">{[
          { name: 'Meepo', image: 'meepo.png', detail: es ? 'Microcontrol · Presencia en el mapa' : 'Micro-control · Map presence' },
          { name: 'Arc Warden', image: 'arc-warden.png', detail: es ? 'Doble control · Precisión' : 'Dual control · Precision' },
          { name: 'Visage', image: 'visage.png', detail: es ? 'Familiares · Coordinación' : 'Familiars · Coordination' },
        ].map(hero => <article className="hero-card" key={hero.name}><div className="hero-art"><img src={`/gaming/${hero.image}`} alt={hero.name} width="256" height="144" loading="lazy" /></div><div className="hero-description"><h3>{hero.name}</h3><p>{hero.detail}</p><div className="hero-complexity"><span>{es ? 'Complejidad alta' : 'High complexity'}</span><span className="complexity-diamonds" aria-hidden="true"><i /><i /><i /></span></div></div></article>)}</div>
      </section>

      <section className="meepo-feature" aria-labelledby="meepo-heading">
        <div className="meepo-art"><div className="meepo-orbit" aria-hidden="true" /><img src="/gaming/meepo-render.png" alt={es ? 'Meepo, el Geomante' : 'Meepo, the Geomancer'} width="1000" height="1000" loading="lazy" /></div>
        <div className="meepo-message"><p className="gaming-eyebrow">MEEPO / THE GEOMANCER</p><h2 id="meepo-heading" aria-label={es ? "Divide y vencerás." : "Divide and conquer."}>{es ? 'Divide y' : 'Divide and'}<br /><span className="vhs-word" data-text={es ? 'vencerás.' : 'conquer.'}>{es ? 'vencerás.' : 'conquer.'}</span></h2><p>{es ? 'Más de una unidad. Un mismo objetivo. El gusto por coordinar cada movimiento, estar en varios lugares y hacer que todo funcione junto.' : 'More than one unit. One shared goal. Coordinating every move, being in several places, and making it all work together.'}</p><div className="retro-label" aria-hidden="true"><span /> PLAY — MICROCONTROL</div></div>
      </section>

      <section className="gaming-outro" aria-label={es ? 'Más allá del juego' : 'Beyond the game'}>
        <Scene type="stars" paused={paused} label={es ? 'Cinco estrellas decorativas 3D doradas' : 'Five decorative golden 3D stars'} />
        <p className="gaming-eyebrow">{es ? 'SIEMPRE HAY UNA SIGUIENTE JUGADA' : 'THERE IS ALWAYS A NEXT MOVE'}</p>
        <h2>{es ? 'La curiosidad no se desconecta.' : 'Curiosity never logs off.'}</h2>
        <Link href="/#projects">{es ? 'Volver a lo que construyo' : 'Back to what I build'} <ArrowUpRight size={16} /></Link>
      </section>
      <footer className="gaming-footer"><span>JOSE PIZARRO / GAMING CORNER</span><p>{es ? 'Caballo' : 'Knight'}: <a href="https://polyhaven.com/a/chess_set" target="_blank" rel="noreferrer">Riley Queen · Poly Haven (CC0)</a><br />Dota 2 © Valve. {es ? 'Página personal de un fan, sin afiliación con Valve.' : 'Personal fan page, not affiliated with Valve.'}</p></footer>
    </main>
  )
}
