import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, HeartPulse, ShieldPlus, Stethoscope, LineChart, Syringe, Droplets, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './InitiativeDetail.module.css';

import AnimatedCounter from '../components/AnimatedCounter';
import InViewChart from '../components/InViewChart';

const impactStats = [
  { end: 100, suffix: '+', label: 'Health Camps' },
  { end: 100000, suffix: '+', label: 'Lives Impacted' },
  { end: 300, suffix: '+', label: 'Villages Reached' }
];

const focusAreas = [
  {
    title: 'Health & Hygiene Initiatives',
    desc: 'Our health-oriented programs are designed to support and promote essential hygiene and well-being within local communities, with a special focus on informal sector workers, waste pickers, and rural families.',
    extraDesc: 'By providing access to basic health resources, conducting targeted awareness campaigns, and organising regular medical camps, we aim to prevent disease and foster a culture of wellness among the most vulnerable populations. Our approach combines on-ground outreach with partnerships with local healthcare providers to ensure sustained impact.',
    bullets: [
      'Conducting targeted health awareness campaigns reaching thousands of families annually',
      'Supporting community hygiene initiatives including clean water and sanitation drives',
      'Ensuring vulnerable populations have access to basic health resources and protective gear',
      'Distributing hygiene kits and PPE to waste workers and sanitation staff'
    ],
    img: '/Images/Health_1.jpeg'
  },
  {
    title: 'Preventive Healthcare & Sanitation',
    desc: 'We focus on preventive health measures and sanitation infrastructure to address the root causes of illness in rural and underserved communities, rather than treating symptoms after the fact.',
    extraDesc: 'Rather than waiting for illness to strike, our programs emphasise early detection, regular checkups, and building awareness around sanitation practices that prevent disease from spreading in the first place. We work closely with local health departments and community health workers to create lasting behavioural change around hygiene and wellness.',
    bullets: [
      'Organising free health checkups, blood tests, and screening camps in rural areas',
      'Distributing protective gear, masks, and hygiene kits to informal sector workers',
      'Promoting clean water access, sanitation, and safe waste handling practices',
      'Training community health volunteers to sustain health awareness at the grassroots level'
    ],
    img: '/Images/Health_Checkup_1.webp'
  }
];

const healthActivities = [
  {
    title: 'Medical Camps',
    desc: 'Organizing free health checkups, blood pressure screenings, and basic diagnostic services in underserved rural and urban areas where healthcare access remains limited.',
    icon: Stethoscope
  },
  {
    title: 'Hygiene Workshops',
    desc: 'Conducting hands-on sanitation workshops that teach essential practices like handwashing, menstrual hygiene management, and safe food handling to prevent common diseases.',
    icon: ShieldPlus
  },
  {
    title: 'Vaccination Drives',
    desc: 'Partnering with local health authorities and NGOs to run immunization camps, ensuring vulnerable populations, especially children and the elderly, receive timely protection.',
    icon: Syringe
  },
  {
    title: 'Sanitation Awareness',
    desc: 'Promoting clean water access, open-defecation-free communities, proper waste handling, and sanitation infrastructure development across rural villages.',
    icon: Droplets
  },
  {
    title: 'Mental Health Awareness',
    desc: 'Breaking stigmas around mental health through community dialogues, counselling referrals, and awareness campaigns that help individuals seek support without shame.',
    icon: HeartPulse
  },
  {
    title: 'Health Monitoring',
    desc: 'Conducting regular follow-up checkups, maintaining health records, and tracking long-term health outcomes to measure and improve the impact of our programmes.',
    icon: Activity
  }
];

const successStories = [
  {
    quote: "The free health camp helped my family get the medical attention we couldn't afford. It changed our lives.",
    author: "Ramesh Kumar",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "After the hygiene awareness sessions, our village saw a noticeable drop in waterborne diseases within months.",
    author: "Sneha Patel",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The vaccination drive reached our remote area for the first time. Our children are now protected and healthy.",
    author: "Priya Sharma",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  }
];

const HealthChart = () => {
  const data = [
    { name: 'Health Camps', actualValue: '100+', visualValue: 70, color: '#096699' },
    { name: 'Lives Impacted', actualValue: '1,00,000+', visualValue: 100, color: '#0284c7' },
    { name: 'Villages Reached', actualValue: '300+', visualValue: 55, color: '#0369a1' }
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

  const CustomXTick = ({ x, y, payload }) => {
    const words = payload.value.split(' ');
    return (
      <g transform={`translate(${x},${y})`}>
        {words.map((word, i) => (
          <text key={i} x={0} dy={6 + i * 13} textAnchor="middle" fill="#64748b" fontSize={11}>
            {word}
          </text>
        ))}
      </g>
    );
  };

  return (
    <div style={{ width: '100%', height: 380, marginTop: '20px' }}>
      <InViewChart>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={<CustomXTick />} interval={0} height={45} />
            <YAxis hide={true} domain={[0, 110]} />
            <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9' }} />
            <Bar dataKey="visualValue" radius={[6, 6, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </InViewChart>
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
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(135deg, rgba(9, 102, 153, 0.3), rgba(6, 75, 115, 0.4)), url("/Images/HealthEd_Activity.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
          <h1 className={styles.heroTitle}>Health <span>Activities</span></h1>
          <p className={styles.heroSubtitle}>
            Providing health checkups, sanitation workshops, and protective gear for communities.
          </p>
          <p className={styles.heroDesc}>
            We are committed to providing health-oriented programs that ensure access to preventive healthcare, hygiene awareness, and essential medical resources for our informal sector workers and rural communities.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Impact & Reach</h2>
              <p className={styles.dashboardSubtitle}>Monitoring the progress of our health initiatives across communities.</p>
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
                    <div className={styles.statValue}>
                      <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                    </div>
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

      {/* The Need for Health (Split Layout) */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <motion.div 
            className={styles.splitText}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.splitTitle}>Why Health Matters</h2>
            <p className={styles.splitDesc}>
              A healthy community is an empowered community. Without basic health and hygiene, true progress stalls. We focus on bridging the gap between healthcare resources and those who need them most, particularly waste workers, daily-wage labourers, and families in remote villages with little or no access to clinics.
            </p>
            <p className={styles.splitDesc}>
              Our preventive healthcare approach addresses the root causes of illness in underserved areas. Through regular health camps, sanitation awareness, and access to protective equipment, we ensure that communities can stay healthy and productive. By training local health volunteers and partnering with government health centres, we create sustainable systems that continue to serve communities long after our camps conclude.
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
          {healthActivities.map((activity, idx) => {
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
            Join us in building a healthier community. Your contribution can provide critical healthcare resources to those in need.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate('/collaborate')}>Get Involved</button>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthActivities;

