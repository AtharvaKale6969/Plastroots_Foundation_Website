import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('intro'); // 'intro', 'tagline', 'done'

  useEffect(() => {
    // Sequence Timings:
    // Show logo first, then slide up and show tagline, then fade out everything
    const taglineTimer = setTimeout(() => setPhase('tagline'), 2500);
    const exitTimer = setTimeout(() => setPhase('done'), 5200);
    const endTimer = setTimeout(() => onComplete(), 6000);

    return () => {
      clearTimeout(taglineTimer);
      clearTimeout(exitTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  // Generate random bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 40 + 20; // 20px to 60px
      return {
        id: i,
        size,
        left: `${Math.random() * 100}vw`,
        top: `${Math.random() * 100}vh`,
        delay: Math.random() * 0.5,
        duration: Math.random() * 2 + 2,
      };
    });
  }, []);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: { opacity: 1 },
    exit: { 
      opacity: 0, 
      scale: 1.1,
      filter: "blur(12px)",
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.5, // Start larger
      filter: "blur(20px)", // Cinematic out-of-focus start
      y: "5vh"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      y: 0,
      transition: { 
        duration: 1.8, // Slow, dramatic reveal
        ease: [0.25, 0.1, 0.25, 1], // Custom easing for smooth cinematic feel
        delay: 0.2
      } 
    },
    shiftUp: {
      y: "-15vh", // More responsive shift up to prevent overlap
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } 
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20, rotateX: 90 },
    visible: { opacity: 1, y: 0, rotateX: 0 }
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0, y: 0 },
    visible: (custom) => ({
      opacity: [0, 0.6, 0],
      scale: [0, 1.2, 1.5],
      y: -100, // Float up
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, scale: 2, transition: { duration: 0.5 } }
  };

  const taglineText = "Change Starts Here....";

  return (
    <AnimatePresence mode="wait">
      {phase !== 'done' && (
        <motion.div 
          className={styles.splashContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Bubbles Background */}
          <AnimatePresence>
            {phase === 'intro' && (
              <motion.div className={styles.bubblesContainer} exit={{ opacity: 0, transition: { duration: 0.8 } }}>
                {bubbles.map((bubble) => (
                  <motion.div
                    key={bubble.id}
                    className={styles.bubble}
                    custom={bubble}
                    variants={bubbleVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{
                      width: bubble.size,
                      height: bubble.size,
                      left: bubble.left,
                      top: bubble.top,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Logo & Name Container */}
          <motion.div
            className={styles.logoContainer}
            variants={logoVariants}
            animate={phase === 'tagline' ? "shiftUp" : "visible"}
          >
            <motion.img 
              src="/Images/Header/PF_LOGO.png" 
              alt="Plastroots Logo" 
              className={styles.logoImg}
              // Add a very slow, continuous zoom-in after the initial reveal
              animate={{ scale: [1, 1.05] }}
              transition={{ duration: 6, ease: "linear" }}
            />
            <motion.img 
              src="/Images/Header/PF_Name.png" 
              alt="Plastroots Name" 
              className={styles.nameImg} 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
            />
          </motion.div>

          {/* Tagline Container */}
          <AnimatePresence>
            {phase === 'tagline' && (
              <motion.div
                className={styles.taglineContainer}
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <h1 className={styles.tagline}>
                  {taglineText.split("").map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ 
                        delay: index * 0.04, 
                        type: "spring", 
                        damping: 12, 
                        stiffness: 150 
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
