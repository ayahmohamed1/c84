import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import styles from './PasswordPage.module.css'

// Romantic cute padlock with heart cut-out
const LockHeartIcon = () => (
  <svg 
    width="50" height="50" viewBox="0 0 100 100" 
    fill="none" stroke="var(--text)" strokeWidth="3.5" 
    strokeLinecap="round" strokeLinejoin="round"
  >
    {/* padlock handle/shackle */}
    <path d="M35 45 V30 A15 15 0 0 1 65 30 V45" />
    {/* lock body */}
    <rect x="25" y="45" width="50" height="42" rx="10" fill="var(--paper)" stroke="var(--text)" strokeWidth="3.5" />
    {/* heart keyhole */}
    <path 
      d="M50 62 C50 58 44 56 44 61 C44 66 50 71 50 73 C50 71 56 66 56 61 C56 56 50 58 50 62 Z" 
      fill="var(--red)" 
      stroke="var(--red)" 
      strokeWidth="1.5"
    />
  </svg>
)

export default function PasswordPage({ onSuccess, content }) {
  const p = content?.password || {}
  const targetCode = String(p.code || '1106').trim()

  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef(null)

  // Auto focus input on mount
  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // Convert Arabic numerals to Western digits
  const normalizeDigits = (str) => {
    return str
      .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
      .replace(/[^0-9]/g, '')
      .slice(0, 4)
  }

  const handleVerify = (codeToVerify) => {
    const clean = normalizeDigits(codeToVerify)
    if (clean === targetCode) {
      setSuccess(true)
      setError(false)
      setErrorMessage('')
      setTimeout(() => {
        onSuccess()
      }, 550)
    } else {
      setError(true)
      setShake(true)
      setErrorMessage(p.errorMessage || 'wrong date, try again 🥺')
      setTimeout(() => setShake(false), 500)
      setTimeout(() => {
        setPin('')
      }, 700)
    }
  }

  const handleChange = (e) => {
    if (success) return
    const raw = e.target.value
    const cleaned = normalizeDigits(raw)
    setPin(cleaned)
    setError(false)
    setErrorMessage('')

    if (cleaned.length === 4) {
      handleVerify(cleaned)
    }
  }

  const handleContainerClick = () => {
    inputRef.current?.focus()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin.length === 4) {
      handleVerify(pin)
    } else {
      setError(true)
      setShake(true)
      setErrorMessage('please enter the 4 digits ♡')
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className={styles.page}>
      <motion.div 
        className={styles.inner}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.dashedTop} />

        <div className={styles.card}>
          <motion.div 
            className={styles.lockIconWrapper}
            animate={success ? { scale: [1, 1.25, 1], rotate: [0, -10, 10, 0] } : { y: [0, -3, 0] }}
            transition={{ duration: success ? 0.5 : 2.5, repeat: success ? 0 : Infinity, ease: 'easeInOut' }}
          >
            <LockHeartIcon />
          </motion.div>

          <h1 className={styles.title} dir="auto">
            {p.title || 'enter a secret date'}
          </h1>

          <p className={styles.subtitle} dir="auto">
            {p.subtitle || 'a date only we know ♡'}
          </p>

          <motion.div 
            className={styles.pinContainer}
            onClick={handleContainerClick}
            animate={shake ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
            transition={{ duration: 0.45 }}
          >
            {/* Real hidden input to capture desktop typing and mobile numeric keyboard */}
            <input
              ref={inputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              autoComplete="one-time-code"
              className={styles.hiddenInput}
              value={pin}
              onChange={handleChange}
              maxLength={4}
              autoFocus
            />

            {[0, 1, 2, 3].map((index) => {
              const char = pin[index]
              const isFilled = char !== undefined
              const isActive = pin.length === index && !success && !error

              let boxClass = styles.digitBox
              if (isActive) boxClass += ` ${styles.active}`
              if (isFilled) boxClass += ` ${styles.filled}`
              if (error) boxClass += ` ${styles.error}`
              if (success) boxClass += ` ${styles.success}`

              return (
                <div key={index} className={boxClass}>
                  {isFilled ? (
                    <motion.span
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.15 }}
                    >
                      {char}
                    </motion.span>
                  ) : isActive ? (
                    <div className={styles.cursor} />
                  ) : (
                    <div className={styles.placeholderDash} />
                  )}
                </div>
              )
            })}
          </motion.div>

          {/* Feedback message */}
          {error && (
            <motion.div 
              className={styles.errorText}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {errorMessage}
            </motion.div>
          )}

          {success && (
            <motion.div 
              className={styles.successText}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              unlocked! ♡
            </motion.div>
          )}

          {!error && !success && (
            <div className={styles.errorText} style={{ opacity: 0 }}>
              &nbsp;
            </div>
          )}

          <div className={styles.actions}>
            <button 
              type="button"
              className="btn-return" 
              onClick={handleSubmit}
            >
              {p.buttonText || 'UNLOCK ♡'}
            </button>
          </div>
        </div>

        <div className={styles.dashedBottom} />
      </motion.div>
    </div>
  )
}
