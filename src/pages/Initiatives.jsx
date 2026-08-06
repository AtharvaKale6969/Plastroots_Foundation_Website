import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import styles from './Initiatives.module.css';

const initiatives = [
  {
    title: 'IEC (Information, Education & Communication)',
    desc: 'Empowering communities with the right knowledge to make informed decisions about waste segregation, recycling, and sustainable living practices.',
    img: '/Images/IEC_Cover.webp',
    link: '/initiatives/iec'
  },
  {
    title: 'Farmer Stewardship Program / Farmer Empowerment',
    desc: 'Equipping farmers with modern, sustainable agricultural practices, reducing plastic usage in farming, and enhancing rural livelihoods.',
    img: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?auto=format&fit=crop&q=80',
    link: '/initiatives/farmer-stewardship'
  },
  {
    title: 'Waste Management Projects',
    desc: 'Establishing grassroots material recovery facilities and comprehensive door-to-door collection systems to build a circular economy.',
    img: '/Images/Waste_Manage_cover.webp',
    link: '/initiatives/waste-management',
    objectPosition: 'center 25%'
  },
  {
    title: 'HealthEd Activities',
    desc: 'Providing health checkups, sanitation workshops, and protective gear for our informal sector workers and rural communities.',
    img: '/Images/Health_New.jpg',
    link: '/initiatives/health-activities',
    objectPosition: 'center 50%'
  },
  {
    title: 'Educational Activities',
    desc: 'Reaching out to schools and institutions to integrate environmental awareness and practical sustainability into their curriculum.',
    img: '/Images/School_activity.webp',
    link: '/initiatives/education-activities',
    objectPosition: 'center 20%'
  },
  {
    title: 'Women Development',
    desc: 'Forming and training Self-Help Groups (SHGs) to lead micro-enterprises in waste recovery, driving both ecological and economic empowerment.',
    img: '/Images/WDG_new.png',
    link: '/initiatives/women-development'
  }
];

const Initiatives = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Our Initiatives - Plastroots Foundation</title>
        <meta name="description" content="Explore our grassroots initiatives ranging from farmer stewardship and waste management to women development and education." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className={styles.heroTitle}>
            <span style={{ color: 'white' }}>Our</span> <span style={{ color: '#4ade80' }}>Initiatives</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Transforming grassroots challenges into sustainable opportunities across multiple dimensions of environmental and social impact.
          </p>
          <motion.button 
            className="btn-primary"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ padding: '16px 36px', fontSize: '1.1rem' }}
            onClick={() => navigate('/collaborate')}
          >
            Support Our Cause
          </motion.button>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className={styles.initiativesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Core Programs</h2>
          <p>Discover the 6 key areas where we actively intervene to create a sustainable future.</p>
        </div>

        <div className={styles.gridContainer}>
          {initiatives.map((item, idx) => (
            <motion.div 
              key={idx}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 2) * 0.2 }}
            >
              <div className={styles.cardImageWrapper}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={styles.cardImage} 
                  style={item.objectPosition ? { objectPosition: item.objectPosition } : {}}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.desc}</p>
                <button 
                  className={styles.readMoreBtn}
                  onClick={() => item.link ? navigate(item.link) : null}
                >
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Initiatives;
