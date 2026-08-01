import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, Anchor } from 'lucide-react';
import styles from './Partners.module.css';

const partners = [
  {
    name: "Plastroots Waste Management & Solutions Pvt Ltd",
    url: "https://www.plastroots.com",
    logo: "/Images/Strategic Partners/PWMSPL_LOGO-removebg-preview.png",
    info: "Leading the transition to a circular economy through innovative waste management and recycling solutions."
  },
  {
    name: "Geoclaim Energy Private Limited",
    url: "https://www.geoclaimenergy.com",
    logo: "/Images/Strategic Partners/Geoclaim_1.png",
    info: "Pioneering sustainable energy solutions and renewable technologies for a greener, cleaner tomorrow."
  },
  {
    name: "Shetahit Farm Solution Private Limited",
    url: "https://shetahit.com",
    logo: "/Images/Strategic Partners/Shetahit.webp",
    info: "Empowering farmers with sustainable agricultural practices and eco-friendly farming innovations."
  }
];

const Partners = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Our Strategic Partners</h2>
        <p className={styles.subtitle}>
          Collaborating with industry leaders who share our commitment to sustainability, innovation, and lasting environmental impact.
        </p>
      </div>
      
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {/* Quadrupled the array to ensure seamless infinite rotation on large screens */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <a 
              key={index} 
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.partnerCard}
            >
              <div className={styles.logoWrapper}>
                <img src={partner.logo} alt={partner.name} className={styles.logo} />
              </div>
              <h4>{partner.name}</h4>
              <p>{partner.info}</p>
              
              <div className={styles.hoverOverlay}>
                <span>Visit Website</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
