import React from 'react';
import styles from './WeCareAbout.module.css';

const features = [
  {
    image: "/Images/IEC_Cover.webp",
    title: "Spreading Social & Environmental Awareness through IEC",
    desc: "Empowering individuals with knowledge for informed, impactful choices."
  },
  {
    image: "/Images/Waste_Manage_cover.webp",
    title: "Waste Management",
    desc: "End-to-end solutions for responsible waste collection, segregation, and processing."
  },
  {
    image: "/Images/Upcycling_1.png",
    title: "Sustainability",
    desc: "Promoting a circular economy where resources are reused and recycled."
  },
  {
    image: "/Images/Empowering_Women_1.jpg",
    title: "Empowering Women",
    desc: "Skill development and formal employment for a dignified livelihood."
  },
  {
    image: "/Images/Health_New.jpg",
    title: "Health & Education for all",
    desc: "Hygiene initiatives, health camps, and education programs for all."
  },
  {
    image: "/Images/Rural area development.jpg",
    title: "Rural Area Development",
    desc: "Fostering inclusive growth by bridging the gap between local bodies and rural communities."
  }
];

const WeCareAbout = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>How We Are Changing the Narrative</h2>
          <p className={styles.subtitle}>Our action plan for driving lasting impact</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
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
