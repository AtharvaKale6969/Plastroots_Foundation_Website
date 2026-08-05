import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

const slides = [
  {
    image: "/Images/Safai%20saathis/Door2Door%20waste.jpg",
    label: "Door-to-Door Waste Collection"
  },
  {
    image: "/Images/Safai%20saathis/Street%20Sweeping.jpg",
    label: "Street Sweeping Initiatives"
  },
  {
    image: "/Images/Hero/hero_empowering.png",
    label: "Empowering Safai Saathis"
  },
  {
    image: "/Images/Safai%20saathis/safai4.png",
    label: "Grassroots Impact"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Rotates every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      
      <div className={styles.heroBackgrounds}>
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`${styles.bgImage} ${index === currentSlide ? styles.active : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
        <div className={styles.overlay}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={styles.heroContent}>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Building a Greener, Cleaner, and <span>Sustainable Future</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Empowering communities through environmental awareness, education, and actionable grassroots initiatives across India.
          </motion.p>
          
          <motion.button 
            onClick={() => navigate('/collaborate')}
            className={`btn-primary ${styles.heroBtn}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join Our Movement
          </motion.button>
        </div>
      </div>
      
      {/* Dynamic Slide Label and Indicators */}
      <div className={styles.bottomControls}>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className={styles.slideLabel}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {slides[currentSlide].label}
          </motion.div>
        </AnimatePresence>

        <div className={styles.indicatorContainer}>
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
