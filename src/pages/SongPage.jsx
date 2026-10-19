import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './SongPage.module.css'

function VinylSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1a1a1a" stroke="#333" strokeWidth="1.5"/>
      <circle cx="40" cy="40" r="28" fill="#111" stroke="#2a2a2a" strokeWidth="1"/>
      <circle cx="40" cy="40" r="18" fill="#1a1a1a" stroke="#222" strokeWidth="1"/>
      <circle cx="40" cy="40" r="5" fill="#c0392b"/>
      <circle cx="40" cy="40" r="2" fill="#fff" opacity="0.6"/>
      {[8,14,20,26].map((r, i) => (
        <circle key={i} cx="40" cy="40" r={r} fill="none" stroke="#2a2a2a" strokeWidth="0.5"/>
      ))}
    </svg>
  )
}

export default function SongPage({ back, content }) {
  const s = content.song
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)

  // تهيئة الأغنية وتشغيلها أوتوماتيكياً
  useEffect(() => {
    if (!s.audioSrc) return
    const audio = new Audio(s.audioSrc)
    audioRef.current = audio
    audio.volume = 0.6

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration)
    })

    audio.addEventListener('timeupdate', () => {
      setProgress((audio.currentTime / audio.duration) * 100)
    })

    // حاول التشغيل أوتوماتيكياً
    audio.play().then(() => setPlaying(true)).catch(() => {})

    return () => { 
      audio.pause()
      audio.src = '' 
    }
  }, [s.audioSrc])

  const togglePlay = () => {
    if (playing) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch(() => {})
    }
    setPlaying(!playing)
  }

  const handleSeek = (e) => {
    if (!audioRef.current.duration) return
    const newTime = (e.target.value / 100) * audioRef.current.duration
    audioRef.current.currentTime = newTime
    setProgress(e.target.value)
  }

  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.dashedTop} />

        <div className={styles.content}>
          <p className={styles.remindsText} dir="auto">{s.remindsText}</p>

          <div className={styles.mainContent}>
            {/* الأسطوانة */}
            <motion.div
              className={styles.vinyl}
              animate={{ rotate: playing ? 360 : 0 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <VinylSVG />
            </motion.div>

            {/* مشغل الموسيقى "الشيك" اللي في الصورة */}
            <div className={styles.playerContainer}>
              <div className={styles.playerBar}>
                {/* زرار التشغيل/التوقيف */}
                <button className={styles.playBtn} onClick={togglePlay}>
                  {playing ? '⏸' : '♪'}
                </button>

                {/* بيانات الأغنية جوه الشريط */}
                <div className={styles.metadata}>
                  <div className={styles.songTitle} dir="auto">{s.songTitle}</div>
                  <div className={styles.artist} dir="auto">{s.artist}</div>
                </div>

                {/* شريط التقديم والتأخير */}
                <input 
                  type="range" min="0" max="100" value={progress} onChange={handleSeek}
                  className={styles.seekbar}
                />
              </div>
            </div>
          </div>

          {/* نص الـ Highlight */}
          <p className={styles.highlight} dir="auto">{s.highlight}</p>
        </div>

        <div className={styles.dashedBottom} />

        <motion.div
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {/* العنوان الكبير المايل */}
          <h2 className={styles.title} dir="auto">{s.title}</h2>
          <button className="btn-return" onClick={back}>{s.returnButton}</button>
        </motion.div>
      </div>
    </div>
  )
}