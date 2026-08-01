import React from 'react';
import { motion } from 'framer-motion';
import styles from './WeCareAbout.module.css';

const features = [
  {
    image: "/Images/What%20we%20care%20about/wecare_awareness.png",
    title: "Spreading Social and Environmental awareness",
    desc: "Our mission is to empower individuals with the knowledge and understanding to make informed choices that positively affect our society and the environment."
  },
  {
    image: "/Images/What%20we%20care%20about/wecare_informal.png",
    title: "Formalizing informal sector",
    desc: "Integrating individuals into mainstream industries by providing them access to formal employment and skill development for a dignified livelihood."
  },
  {
    image: "/Images/What%20we%20care%20about/School.webp",
    title: "Promoting Health and Education for All",
    desc: "We believe that access to quality health and education is the foundation of empowered communities. Through awareness programs and hygiene initiatives, we work to ensure informed citizens are supported."
  }
];

const WeCareAbout = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>What we care about</h2>
        
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div 
                className={styles.cardImage} 
                style={{ backgroundImage: `url('${feature.image}')` }} 
              />
              <div className={styles.cardOverlay}>
                <div className={styles.cardContent}>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeCareAbout;
