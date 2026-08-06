import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Shield, Heart } from 'lucide-react';
import styles from './CSRProjects.module.css';

const CSRProjects = () => {
  const navigate = useNavigate();

  const projects = [
    {
      id: 'bisleri',
      title: 'Bisleri - Bottles For Change',
      category: 'Plastic Waste Management & Recycling',
      description: 'A transformative initiative aimed at creating a circular economy for plastic waste, ensuring responsible disposal and maximum recycling potential across communities.',
      image: '/Images/BFC.png',
      icon: <Leaf size={24} />,
      link: '/csr-projects/bisleri'
    }
    // Future projects can be added here
  ];

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            <span style={{ color: 'white' }}>CSR</span> <span style={{ color: '#4ade80' }}>Projects</span>
          </h1>
          <p className={styles.heroDesc}>
            Showcasing our high-impact collaborations with corporate partners to drive sustainable change and environmental stewardship.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Featured Initiatives</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          
          <div className={styles.grid}>
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                className={styles.projectCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => navigate(project.link)}
              >
                <div className={styles.cardImageWrapper}>
                  <img src={project.image} alt={project.title} className={styles.cardImage} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.actionBtn}>
                    Explore Project <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSRProjects;
