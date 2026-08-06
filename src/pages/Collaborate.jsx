import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import styles from './Collaborate.module.css';

const Collaborate = () => {
  const navigate = useNavigate();

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
            <span style={{ color: 'white' }}>COLLABORATE</span> <span style={{ color: '#4ade80' }}>WITH US</span>
          </h1>
          <p className={styles.heroDesc}>
            Join our mission to create a sustainable, empowered future. Whether you want to contribute financially, dedicate your time, or align your corporate goals with our grassroots efforts, there's a place for you here.
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          
          {/* CSR Partnership Section */}
          <motion.div 
            className={styles.block}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/Images/CSR_Partnership_new.svg" alt="CSR Partnerships" className={`${styles.image} ${styles.csrImage}`} />
            </div>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <Briefcase size={32} />
              </div>
              <h2 className={styles.title}>CSR Partnerships</h2>
              <p className={styles.text}>
                Fulfill your Corporate Social Responsibility (CSR) mandates with transparent, high-impact projects. Plastroots Foundation offers end-to-end management for sustainability and social upliftment initiatives, providing detailed reporting and measurable outcomes that align with your corporate values and ESG goals.
              </p>
              <button className={styles.ctaBtn} onClick={() => navigate('/collaborate/csr-partnership')}>
                Partner With Us
              </button>
            </div>
          </motion.div>

          {/* Volunteer Section */}
          <motion.div 
            className={`${styles.block} ${styles.blockReverse}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.imageWrapper}>
              <img src="/Images/Volunteer_Cover.svg" alt="Become a Volunteer" className={styles.image} style={{ objectFit: 'contain', paddingTop: '40px', paddingBottom: '0', paddingLeft: '20px', paddingRight: '20px' }} />
            </div>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <Users size={32} />
              </div>
              <h2 className={styles.title}>Become a Volunteer</h2>
              <p className={styles.text}>
                We believe in the power of community action. As a volunteer, you will be at the forefront of our campaigns—leading cleanliness drives, educating students in eco-clubs, and working side-by-side with our Self-Help Groups. Gain invaluable grassroots experience while making a lasting impact in your community.
              </p>
              <button className={styles.ctaBtn} onClick={() => navigate('/collaborate/volunteer')}>
                Join Our Team
              </button>
            </div>
          </motion.div>

          {/* Donate Section */}
          <motion.div 
            className={styles.block}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.imageWrapper} style={{ overflow: 'hidden' }}>
              <img src="/Images/Donation_cover.svg" alt="Make a Donation" className={styles.image} style={{ objectFit: 'contain', transform: 'scale(1.5)' }} />
            </div>
            <div className={styles.content}>
              <div className={styles.iconWrapper}>
                <HeartHandshake size={32} />
              </div>
              <h2 className={styles.title}>Make a Donation</h2>
              <p className={styles.text}>
                Your financial contributions are the lifeblood of our initiatives. By donating to the Plastroots Foundation, you directly fund our waste management drives, rural education programs, and women empowerment micro-enterprises. Every rupee goes towards creating tangible, ecological, and economic upliftment on the ground.
              </p>
              <button className={styles.ctaBtn} onClick={() => navigate('/donate')}>
                Donate Now
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Collaborate;
