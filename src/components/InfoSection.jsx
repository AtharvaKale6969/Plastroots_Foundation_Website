import React from 'react';
import { motion } from 'framer-motion';
import styles from './InfoSection.module.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    }
  }
};

const childVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const InfoSection = () => {
  const writeVariants = {
    hidden: { clipPath: 'inset(0 100% 0 0)', WebkitClipPath: 'inset(0 100% 0 0)' },
    visible: { 
      clipPath: 'inset(0 0 0 0)', 
      WebkitClipPath: 'inset(0 0 0 0)',
      transition: { duration: 2.5, ease: "linear" } 
    }
  };
  
  return (
    <section className={styles.infoSection}>
      <div className="container">
        
        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.imageContainer}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className={styles.showcaseStage}>
              <div className={styles.staticCard}>
                <img src="/Images/Header/PF_LOGO.png" alt="Plastroots Foundation Logo" className={styles.premiumLogo} />
              </div>
              <div className={styles.cardShadow}></div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2>Empowering Change from the Ground Up</h2>
            <p>
              Plastroots Foundation is dedicated to addressing environmental challenges through
              community-driven initiatives. We believe that sustainable change begins with education
              and actionable steps taken at the local level.
            </p>
            <p>
              Since our inception, we have partnered with schools, corporate entities, and local 
              governments to spearhead recycling drives, tree plantations, and sustainability 
              awareness programs across the country.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className={styles.quoteSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.h3 
            className={styles.quoteText}
            variants={writeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            Change Starts Here....
          </motion.h3>
        </motion.div>

      </div>
    </section>
  );
};

export default InfoSection;
