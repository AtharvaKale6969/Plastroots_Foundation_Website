import React from 'react';
import styles from './WeCareAbout.module.css';

const features = [
  {
    image: "/Images/IEC_Cover.webp",
    title: "Spreading Social & Environmental Awareness through IEC",
    desc: "Empowering individuals with knowledge to make informed choices that positively affect our society and environment."
  },
  {
    image: "/Images/Waste_Manage_cover.webp",
    title: "Waste Management",
    desc: "Implementing end-to-end solutions for responsible waste collection, segregation, and processing."
  },
  {
    image: "/Images/circular_economy.png",
    title: "Sustainability",
    desc: "Promoting a circular economy where resources are reused and recycled to protect ecological balance."
  },
  {
    image: "/Images/Woman_Development.jpg",
    title: "Empowering Women",
    desc: "Integrating women into mainstream industries with skill development and formal employment for a dignified livelihood."
  },
  {
    image: "/Images/Health_New.jpg",
    title: "Health & Education for all",
    desc: "Building the foundation of empowered communities through hygiene initiatives, health camps, and education programs."
  },
  {
    image: "/Images/Initivaties-2.jpeg",
    title: "Rural Area Development",
    desc: "Fostering inclusive growth by bridging the gap between local bodies and rural communities."
  }
];

const WeCareAbout = () => {
  // Duplicate features array for seamless infinite scroll
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How We Are Changing the Narrative</h2>
          <p className={styles.subtitle}>Our action plan for driving lasting impact</p>
        </div>
      </div>
      
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {duplicatedFeatures.map((feature, index) => (
            <div key={index} className={styles.card}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeCareAbout;
