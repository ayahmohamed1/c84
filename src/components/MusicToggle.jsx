import { useEffect, useRef, useState } from 'react'

export default function MusicToggle({ src }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!src) return
    const audio = new Audio(src)
    audio.loop = true
    audio.volume = 0.45
    audioRef.current = audio

    audio.addEventListener('canplaythrough', () => setReady(true))
    audio.load()

    return () => {
      audio.pause()
      audio.src = ''
    }
  }, [src])

  if (!src) return null

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {})
    }
  }

  return (
    <button
      onClick={toggle}
      title={playing ? 'Pause music' : 'Play music'}
      style={{
        position: 'fixed',
        bottom: '1.2rem',
        right: '1.2rem',
        zIndex: 9999,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1.5px solid var(--red)',
        background: 'var(--paper)',
        color: 'var(--text)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1rem',
        boxShadow: '0 2px 10px rgba(139,26,26,0.15)',
        transition: 'all 0.2s ease',
        opacity: ready ? 1 : 0.5,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--red)'
        e.currentTarget.style.color = 'white'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'var(--paper)'
        e.currentTarget.style.color = 'var(--text)'
      }}
    >
      {playing ? '⏸' : '♪'}
    </button>
  )
}
