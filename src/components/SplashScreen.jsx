import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('logo'); // 'logo', 'tagline', or 'done'

  useEffect(() => {
    // Sequence Timings
    const logoTimer = setTimeout(() => {
      setPhase('tagline');
    }, 2800); // Start dissolving logo

    const exitTimer = setTimeout(() => {
      setPhase('done');
    }, 5500); // Start dissolving tagline

    const endTimer = setTimeout(() => {
      onComplete(); // Remove splash screen entirely
    }, 6000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(exitTimer);
      clearTimeout(endTimer);
    };
  }, [onComplete]);

  return (
    <div className={styles.splashContainer}>
      <AnimatePresence mode="wait">
        
        {/* Phase 1: Logo and Name */}
        {phase === 'logo' && (
          <motion.div
            key="logo-phase"
            className={styles.logoContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              // Subtle pulse effect (the "effect" requested)
              filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
            }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.5 } }}
            transition={{ 
              duration: 2.5, // 2.5 seconds total for entry
              filter: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <img src="/Images/Header/PF_LOGO.png" alt="Plastroots Logo" className={styles.logoImg} />
            <img src="/Images/Header/PF_Name.png" alt="Plastroots Name" className={styles.nameImg} />
          </motion.div>
        )}

        {/* Phase 2: Tagline */}
        {phase === 'tagline' && (
          <motion.div
            key="tagline-phase"
            className={styles.taglineContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <h1 className={styles.tagline}>Change Starts Here....</h1>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
};

export default SplashScreen;
