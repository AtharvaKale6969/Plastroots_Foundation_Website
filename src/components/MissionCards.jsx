import React from 'react';
import { motion } from 'framer-motion';
import styles from './MissionCards.module.css';

const cards = [
  {
    title: "Our Mission",
    image: "/Images/Our Mission.svg",
    bgSize: "140%",
    bullets: [
      <>Committed to creating <strong>sustainable villages and cleaner, greener communities</strong>, we promote responsible waste management, environmental awareness, and sustainable practices.</>,
      <>By connecting <strong>local bodies and rural communities</strong>, we support rural development while advancing <strong>women’s empowerment, health, and education</strong> to build a more inclusive and sustainable future.</>
    ]
  },
  {
    title: "Our Vision",
    image: "/Images/Our_Vision.svg",
    bgSize: "180%",
    bullets: [
      <>Envisioning a future where <strong>rural communities</strong> are fully empowered through inclusive growth, thriving ecosystems, and equal access to essential resources.</>,
      <>Paving the way for a <strong>sustainable and equitable India</strong> by integrating environmental consciousness into everyday practices, ensuring long-term prosperity for generations to come.</>
    ]
  },
  {
    title: "Our Purpose",
    image: "/Images/Our_Purpose.svg",
    bullets: [
      <>Bridging environmental sustainability and social equity through responsible <strong>waste management</strong> and grassroots initiatives.</>,
      <>Championing a <strong>circular economy</strong> to uplift local communities and ensure long-term ecological balance.</>
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
                style={{ 
                  backgroundImage: `url("${card.image}")`,
                  backgroundSize: card.bgSize || 'contain'
                }}
              >
              </div>
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                {card.bullets && (
                  <ul className={styles.bulletList}>
                    {card.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
                {card.description && (
                  <p className={styles.description}>
                    {card.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MissionCards;
