import { motion } from 'framer-motion'
import styles from './NoThanksPage.module.css'

export default function NoThanksPage({ back, content }) {
  const n = content.noThanks
  return (
    <div className={styles.page}>
      <motion.div
        className={styles.card}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 130, damping: 14 }}
      >
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className={styles.emoji}
        >
          <CryingCatSVG />
        </motion.div>

        <motion.p
          className={styles.message}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {n.message}
        </motion.p>

        <motion.button
          className={styles.btn}
          onClick={back}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {n.tryAgainButton}
        </motion.button>
      </motion.div>
    </div>
  )
}

function CryingCatSVG() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="44" rx="20" ry="22" fill="#f0f0f0" stroke="#444" strokeWidth="1.5"/>
      <polygon points="16,26 12,10 23,21" fill="#f0f0f0" stroke="#444" strokeWidth="1.5"/>
      <polygon points="54,26 58,10 47,21" fill="#f0f0f0" stroke="#444" strokeWidth="1.5"/>
      {/* sad eyes */}
      <path d="M27 40 Q29 37 31 40" stroke="#444" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <path d="M39 40 Q41 37 43 40" stroke="#444" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* tears */}
      <ellipse cx="28" cy="43" rx="1.5" ry="2.5" fill="#7ec8e3" opacity="0.8"/>
      <ellipse cx="42" cy="43" rx="1.5" ry="2.5" fill="#7ec8e3" opacity="0.8"/>
      {/* mouth */}
      <path d="M31 48 Q35 45 39 48" stroke="#444" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      {/* whiskers */}
      <line x1="17" y1="42" x2="8" y2="40" stroke="#999" strokeWidth="1"/>
      <line x1="17" y1="44" x2="8" y2="44" stroke="#999" strokeWidth="1"/>
      <line x1="53" y1="42" x2="62" y2="40" stroke="#999" strokeWidth="1"/>
      <line x1="53" y1="44" x2="62" y2="44" stroke="#999" strokeWidth="1"/>
    </svg>
  )
}
