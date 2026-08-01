import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionCards.module.css';

const cards = [
  {
    title: "Our Mission",
    image: "/Images/Our Mission.svg",
    bullets: [
      "Improving working conditions, promoting gender equality & women’s empowerment with environmental awareness & health.",
      "Preserving nature’s diversity and promoting upcycled/recycled products for a circular economy.",
      "Seeking collaborations for mutual support and resources."
    ]
  },
  {
    title: "Our Vision",
    image: "/Images/Our_Vision.svg",
    bullets: [
      "Empowering marginalized communities and fostering inclusivity.",
      "Paving the way for a sustainable and equitable future."
    ]
  },
  {
    title: "Our Purpose",
    image: "/Images/Our_Purpose.svg",
    bullets: [
      "Bridging the gap between environmental sustainability and social equity.",
      "Driving grassroots initiatives to uplift communities and protect the planet.",
      "Championing a circular economy for long-term ecological balance."
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const MissionCards = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cards.map((card, index) => (
            <motion.div key={index} className={styles.card} variants={cardVariants}>
              <div 
                className={styles.cardImage}
                style={{ backgroundImage: `url("${card.image}")` }}
              >
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <ul className={styles.bulletList}>
                  {card.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionCards;
