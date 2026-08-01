import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, HeartPulse, ShieldPlus, BookOpen, Stethoscope, LineChart, Syringe, GraduationCap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './InitiativeDetail.module.css';

const impactStats = [
  { value: '100+', label: 'Health Camps' },
  { value: '10,000+', label: 'Lives Impacted' },
  { value: '50+', label: 'Schools Reached' }
];

const focusAreas = [
  { 
    title: 'Health & Hygiene Initiatives',
    desc: 'Our health-oriented programs are designed to support and promote essential hygiene and well-being within local communities.',
    extraDesc: 'By providing access to basic health resources and conducting targeted awareness campaigns, we aim to prevent disease and foster a culture of wellness among vulnerable populations.',
    bullets: [
      'Conducting targeted health awareness campaigns',
      'Supporting community hygiene initiatives to prevent disease',
      'Ensuring vulnerable populations have access to basic health resources'
    ],
    img: '/Images/Health_1.jpeg'
  },
  { 
    title: 'Educational Activities',
    desc: 'We conduct comprehensive educational activities tailored for students as well as government and private sector staff, providing them with critical awareness and tools.',
    extraDesc: 'Education is the foundation for lasting change. We believe that empowering individuals with the right resources can inspire them to become self-driven volunteers in their own communities.',
    bullets: [
      'Workshops designed specifically for school and college students',
      'Training sessions for government and private sector employees',
      'Equipping individuals with resources to become self-driven volunteers'
    ],
    img: '/Images/Edu_act.jpg'
  }
];

const healthEdActivities = [
  {
    title: 'Medical Camps',
    desc: 'Organizing free health checkups and providing basic medical resources to underserved areas.',
    icon: Stethoscope
  },
  {
    title: 'Hygiene Workshops',
    desc: 'Teaching essential sanitation practices to prevent common diseases in rural communities.',
    icon: ShieldPlus
  },
  {
    title: 'School Programs',
    desc: 'Integrating health and wellness education into school curriculums.',
    icon: BookOpen
  },
  {
    title: 'Vaccination Drives',
    desc: 'Supporting local authorities in immunizing vulnerable populations.',
    icon: Syringe
  },
  {
    title: 'Mental Health Awareness',
    desc: 'Breaking stigmas and providing psychological support systems for youth.',
    icon: HeartPulse
  },
  {
    title: 'Professional Training',
    desc: 'Conducting capacity-building sessions for private and government sector employees.',
    icon: GraduationCap
  }
];

const successStories = [
  {
    quote: "The free health camp helped my family get the medical attention we couldn't afford. It changed our lives.",
    author: "Ramesh Kumar",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Through the educational workshops, our school now has a dedicated health and hygiene committee run by students.",
    author: "Sneha Patel",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The professional training sessions empowered our team to lead wellness initiatives within our own organization.",
    author: "Priya Sharma",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  }
];

const HealthChart = () => {
  const data = [
    { name: 'Health Camps', actualValue: '100+', visualValue: 70, color: '#096699' },
    { name: 'Lives Impacted', actualValue: '10,000+', visualValue: 100, color: '#0284c7' },
    { name: 'Schools Reached', actualValue: '50+', visualValue: 55, color: '#0369a1' }
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
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <YAxis hide={true} domain={[0, 110]} />
          <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9' }} />
          <Bar dataKey="visualValue" radius={[6, 6, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const HealthActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Health Activities - Plastroots Foundation</title>
        <meta name="description" content="Improving community health through regular medical camps, hygiene awareness, and accessible healthcare initiatives driven by Plastroots Foundation." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(to bottom, rgba(31, 44, 51, 0.7), rgba(9, 102, 153, 0.8)), url("https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80")' }}>
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
          <h1 className={styles.heroTitle}>HealthEd Activity</h1>
          <p className={styles.heroSubtitle}>
            Focusing on two key areas: health and education.
          </p>
          <p className={styles.heroDesc}>
            We are committed to providing health-oriented programs and equipping individuals with the resources they need to uplift their own lives through education and holistic well-being.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Impact & Reach</h2>
              <p className={styles.dashboardSubtitle}>Monitoring the progress of our health and education initiatives.</p>
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
                    <LineChart size={20} className={styles.trendIcon} /> +8%
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
                <h3 className={styles.chartTitle}>Lives Touched Over Time</h3>
              </div>
              
              <HealthChart />

            </motion.div>
          </div>
        </div>
      </section>

      {/* The Need for HealthEd (Split Layout) */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <motion.div 
            className={styles.splitText}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.splitTitle}>Why Health & Education?</h2>
            <p className={styles.splitDesc}>
              A healthy community is an empowered community. Without basic health and hygiene, true progress stalls. We focus on bridging the gap between healthcare resources and those who need them most.
            </p>
            <p className={styles.splitDesc}>
              Simultaneously, our educational initiatives aim to sustain this progress. By equipping the younger generation and working professionals with the right knowledge, we create a ripple effect of well-being and self-sufficiency that lasts generations.
            </p>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src="/Images/Health_Ed.jpg" alt="Healthcare Education" className={styles.splitImage} />
          </motion.div>
        </div>
      </section>

      {/* Campaign Highlights (Alternating Layout) */}
      <section className={styles.focusSection}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '5rem' }}>Our Key Focus Areas</h2>
        <div style={{ padding: '0 5%' }}>
          {focusAreas.map((area, idx) => {
            const isReverse = idx % 2 !== 0;
            return (
              <motion.div 
                key={idx}
                className={`${styles.featureRow} ${isReverse ? styles.featureRowReverse : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.featureText}>
                  <h3 className={styles.featureTitle}>{area.title}</h3>
                  <p className={styles.featureDesc}>{area.desc}</p>
                  {area.extraDesc && (
                    <p className={styles.featureDesc} style={{ marginTop: '1rem' }}>
                      {area.extraDesc}
                    </p>
                  )}
                  {area.bullets && (
                    <ul style={{ marginTop: '1.5rem', paddingLeft: '1.5rem', color: 'var(--text-dark)' }}>
                      {area.bullets.map((bullet, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.featureImageWrapper}>
                  <img src={area.img} alt={area.title} className={styles.featureImg} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Educational Activities */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Activities & Programs</h2>
        <p className={styles.eduIntro}>
          Delivering critical care and awareness through diverse, high-impact activities.
        </p>
        <div className={styles.eduGrid}>
          {healthEdActivities.map((activity, idx) => {
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
          <h2 className={styles.ctaTitle}>Support Our Mission</h2>
          <p className={styles.ctaDesc}>
            Join us in building a healthier, more educated community. Your contribution can provide critical resources to those in need.
          </p>
          <button className={styles.ctaBtn}>Get Involved</button>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthActivities;

