import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WelcomePage.module.css';

// أيقونة الدبدوب/القطة اللي في الصورة مرسومة بالكود
const CuteIcon = () => (
  <svg 
    width="55" height="55" viewBox="0 0 100 100" 
    fill="none" stroke="var(--text)" strokeWidth="3.5" 
    strokeLinecap="round" strokeLinejoin="round" 
    className={styles.cuteIcon}
  >
    <path d="M28 40 L25 10 L50 25" />
    <path d="M72 40 L75 10 L50 25" />
    <circle cx="50" cy="55" r="28" fill="var(--paper)" />
    <circle cx="40" cy="50" r="2.5" fill="var(--text)" />
    <circle cx="60" cy="50" r="2.5" fill="var(--text)" />
    <path d="M45 60 Q50 66 55 60" />
  </svg>
);

export default function WelcomePage({ go, content, name }) {
  const [flowers, setFlowers] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const newFlowers = Array.from({ length: 85 }).map((_, i) => {
      return {
        id: i,
        rotate: Math.random() * 360,
        scale: 1.2 + Math.random() * 1.5, 
        left: `${Math.random() * 120 - 10}vw`,
        top: `${Math.random() * 120 - 10}vh`,
        delay: Math.random() * 0.3 
      };
    });
    setFlowers(newFlowers);

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>
      
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className={styles.flowerIntro}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }} 
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            {flowers.map((flower) => (
              <motion.img
                key={flower.id}
                src="/images/flower.png" 
                alt="flower"
                className={styles.singleImage}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: flower.scale }}
                transition={{ duration: 1, delay: flower.delay, ease: "easeOut" }}
                style={{
                  left: flower.left,
                  top: flower.top,
                  transform: `translate(-50%, -50%) rotate(${flower.rotate}deg)`,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className={styles.contentBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: showIntro ? 0 : 1, 
          scale: showIntro ? 0.9 : 1 
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* الأيقونة الكيوت */}
        <CuteIcon />
        
        {/* تقسيم الكلام زي الصورة بالظبط */}
        <div className={styles.textGroup}>
          <h1 className={styles.helloText}>{content.welcome.greeting}</h1>
          <h1 className={styles.loveText}>{name}!</h1>
        </div>
        
        <p className={styles.question}>do you want to see your gift?</p>
        
        <div className={styles.buttons}>
          <button onClick={() => go('menu')} className="btn-return">
            {content.welcome.yesButton}
          </button>
          <button onClick={() => go('noThanks')} className="btn-return">
            {content.welcome.noButton}
          </button>
        </div>
      </motion.div>
      
    </div>
  );
}