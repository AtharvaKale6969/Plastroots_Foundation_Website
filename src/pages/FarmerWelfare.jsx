import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Sprout, Users, CloudSun, LineChart, Store, Building2 } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './InitiativeDetail.module.css';

const impactStats = [
  { value: '10,000+', label: 'Training Hours Delivered' },
  { value: '5,000+', label: 'Farmers Educated' },
  { value: '50+', label: 'Agricultural Experts Consulted' }
];

const focusAreas = [
  { 
    title: 'Soil Testing & Health',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Modern Crop Scheduling',
    img: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c5c13?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Organic Nutrient Management',
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Financial Literacy',
    img: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80'
  },
];

const educationalActivities = [
  {
    title: 'Soil Health Awareness',
    desc: 'Educating farmers on soil testing, nutrient management, and maintaining optimal soil structure for better yields.',
    icon: Sprout
  },
  {
    title: 'Networking Opportunities',
    desc: 'Connecting farmers with peers, agricultural experts, and buyers to share knowledge and build relationships.',
    icon: Users
  },
  {
    title: 'Climate Change Adaptability',
    desc: 'Strategies to help farmers adapt to changing weather patterns, extreme temperatures, and unpredictable rainfall.',
    icon: CloudSun
  },
  {
    title: 'Data Analytics in Farming',
    desc: 'Using farm data and modern software tools to track yields, expenses, and improve decision-making.',
    icon: LineChart
  },
  {
    title: 'Market Awareness',
    desc: 'Providing insights into current market prices, demand trends, and how to negotiate better prices for produce.',
    icon: Store
  },
  {
    title: 'Establishment of FPOs',
    desc: 'Helping farmers organize into Farmer Producer Organizations to improve bargaining power and access better resources.',
    icon: Building2
  }
];

const successStories = [
  {
    quote: "The soil testing workshops completely changed how I farm. My yields have improved and I'm spending less on unnecessary fertilizers.",
    author: "Ramesh Kumar",
    img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Learning about crop scheduling helped us survive the unpredictable rains this year. The education provided is invaluable.",
    author: "Sunita Devi",
    img: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Through the networking sessions, I finally found buyers who pay a fair price for organic produce.",
    author: "Amit Patel",
    img: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=100&q=80"
  }
];

const FarmerChart = () => {
  const data = [
    { name: 'Training Hours Delivered', actualValue: '10,000+', visualValue: 40, color: '#84cc16' },
    { name: 'Farmers Educated', actualValue: '5,000+', visualValue: 45, color: '#166534' },
    { name: 'Agri Experts Consulted', actualValue: '50+', visualValue: 15, color: '#ca8a04' }
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div style={{ background: '#fff', padding: '12px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
          <p style={{ margin: '0 0 4px 0', fontWeight: 'bold', color: '#0f172a' }}>{data.name}</p>
          <p style={{ margin: 0, color: data.color, fontWeight: '600', fontSize: '1.1rem' }}>
            {data.actualValue}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 350, marginTop: '20px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="visualValue"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <RechartsTooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const FarmerWelfare = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Farmer Stewardship - Plastroots Foundation</title>
        <meta name="description" content="Empowering rural farmers through sustainable practices, soil health optimization, and community stewardship programs." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(135deg, rgba(9, 102, 153, 0.3), rgba(6, 75, 115, 0.4)), url("/Images/Farmers_Hero_Section.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
        <button 
          onClick={() => navigate('/initiatives')} 
          className={styles.backBtn}
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={18} /> Back to Initiatives
        </button>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>FARMER STEWARDSHIP <span>PROGRAM</span></h1>
          <p className={styles.heroSubtitle}>
            Cultivating Knowledge. Empowering Rural Communities.
          </p>
          <p className={styles.heroDesc}>
            Our Farmer Stewardship Program is designed to empower farmers through education, modern practices, and community-driven agricultural training.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Program Impact Metrics</h2>
              <p className={styles.dashboardSubtitle}>Monitoring our educational outreach and farmer engagement.</p>
            </div>
          </div>

          <div className={styles.dashboardGrid}>
            {/* Left: The Stats */}
            <div className={styles.statsColumn}>
              {impactStats.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  className={styles.statCard}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                >
                  <div className={styles.statInfo}>
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div className={styles.statTrend}>
                    <LineChart size={20} className={styles.trendIcon} /> +12%
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: The Impact Chart */}
            <motion.div 
              className={styles.chartWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.chartHeader}>
                <h3 className={styles.chartTitle}>Overall Impact Growth</h3>
              </div>
              
              <FarmerChart />

            </motion.div>
          </div>
        </div>
      </section>

      {/* The Need for Education (Split Layout) */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <motion.div 
            className={styles.splitText}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.splitTitle}>Why Education Matters</h2>
            <p className={styles.splitDesc}>
              Agriculture is the backbone of our economy, yet many farmers lack access to modern, sustainable farming techniques. By focusing heavily on education and skill-building, we help bridge the gap between traditional practices and modern agricultural science.
            </p>
            <p className={styles.splitDesc}>
              Through hands-on workshops, expert consultations, and peer-to-peer networking, we empower farmers to make informed decisions that improve their crop yields, protect soil health, and secure their financial futures.
            </p>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
          </motion.div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className={styles.focusSection}>
        <h2 className={styles.sectionTitle}>Educational Focus Areas</h2>
        <div className={styles.focusGrid}>
          {focusAreas.map((area, idx) => (
            <motion.div 
              key={idx}
              className={styles.focusCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.focusImageWrapper}>
              </div>
              <div className={styles.focusCardContent}>
                <h3 className={styles.focusCardTitle}>{area.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Educational Activities */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Training & Workshops</h2>
        <p className={styles.eduIntro}>
          Empowering farmers with the knowledge and tools they need to transition toward modern, profitable, and sustainable agriculture.
        </p>
        <div className={styles.eduGrid}>
          {educationalActivities.map((activity, idx) => {
            const Icon = activity.icon;
            return (
              <motion.div 
                key={idx}
                className={styles.eduCard}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              >
                <div className={styles.iconWrapper}>
                  <Icon size={28} className={styles.eduIcon} />
                </div>
                <h3 className={styles.eduCardTitle}>{activity.title}</h3>
                <p className={styles.eduCardDesc}>{activity.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Masonry Section (Success Stories) */}
      <section className={styles.masonrySection}>
        <h2 className={styles.sectionTitle}>Impact Stories</h2>
        <div className={styles.masonryGrid}>
          {successStories.map((story, idx) => (
            <motion.div 
              key={idx}
              className={styles.masonryCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.masonryText}>{story.quote}</p>
              <div className={styles.masonryAuthor}>
                <img src={story.img} alt={story.author} className={styles.authorImg} />
                {story.author}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <motion.div 
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.ctaTitle}>Support the Stewardship Program</h2>
          <p className={styles.ctaDesc}>
            Join us in our mission to empower rural farmers through education and sustainable agricultural practices. Whether you're an expert looking to volunteer or a donor, your support matters.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate('/collaborate')}>Get Involved</button>
        </motion.div>
      </section>
    </div>
  );
};

export default FarmerWelfare;
