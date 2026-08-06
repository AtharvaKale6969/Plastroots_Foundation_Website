import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Trash2, Recycle, Leaf, Factory, Droplets, LineChart, Globe, Truck, Package, CheckCircle, Layers } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import CircularEconomyLoop from '../components/CircularEconomyLoop';
import styles from './InitiativeDetail.module.css';

import AnimatedCounter from '../components/AnimatedCounter';
import InViewChart from '../components/InViewChart';

const impactStats = [
  { end: 7000, suffix: '+', label: 'Tonnes Waste Collected' },
  { end: 6500, suffix: '+', label: 'Tonnes Plastic Recycled' },
  { end: 390000, suffix: '+', label: 'Citizens Engaged' }
];

const focusAreas = [
  { 
    title: 'Source Segregation',
    desc: 'Implementing strict waste segregation practices at the household and community level.',
    extraDesc: 'By separating wet, dry, and hazardous waste at the source, we significantly reduce the burden on landfills and ensure recyclable materials remain uncontaminated and ready for processing.',
    bullets: [
      'Providing color-coded bins to households and institutions',
      'Conducting door-to-door awareness on segregation techniques',
      'Establishing community collection hubs for hazardous waste'
    ],
    img: '/Images/Source Segregation.jpeg'
  },
  { 
    title: 'Organic Composting',
    desc: 'Transforming wet waste into nutrient-rich organic compost for local agriculture.',
    extraDesc: 'We set up decentralized composting units in neighborhoods and villages, turning food scraps and agricultural residue into valuable fertilizer, promoting a closed-loop organic ecosystem.',
    bullets: [
      'Building community vermicomposting pits',
      'Training locals in aerobic and anaerobic composting methods',
      'Supplying organic compost to local farmers at subsidized rates'
    ],
    img: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80'
  }
];

const wasteActivities = [
  {
    title: 'Clean-up Drives',
    desc: 'Organizing massive volunteer-led clean-ups of public spaces, beaches, and rivers.',
    icon: Trash2
  },
  {
    title: 'Upcycling Workshops',
    desc: 'Teaching communities how to turn discarded materials into usable, sellable products.',
    icon: Recycle
  },
  {
    title: 'E-Waste Management',
    desc: 'Setting up specialized collection drives for electronic waste to prevent toxic runoff.',
    icon: Factory
  },
  {
    title: 'Plastic Alternatives',
    desc: 'Promoting the use of cloth bags, bamboo products, and biodegradable packaging.',
    icon: Leaf
  },
  {
    title: 'Waterbody Restoration',
    desc: 'Removing solid waste from lakes and ponds to restore natural aquatic ecosystems.',
    icon: Droplets
  },
  {
    title: 'Circular Economy Education',
    desc: 'Educating businesses on zero-waste models and sustainable supply chains.',
    icon: Globe
  }
];

const successStories = [
  {
    quote: "Our neighborhood used to have a massive garbage dump. With the new segregation and collection system, it's now a beautiful community park.",
    author: "Kavita Rao",
    img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The composting unit we set up processes all the organic waste from 50 houses. We use the compost for our rooftop gardens!",
    author: "Vikram Singh",
    img: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Learning to upcycle old clothes into durable bags has given me a new source of income while reducing textile waste.",
    author: "Pooja Desai",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
  }
];

const WasteChart = () => {
  const data = [
    { name: 'Tonnes Waste Collected', actualValue: '7,000+', visualValue: 85, color: '#15803d' },
    { name: 'Tonnes Plastic Recycled', actualValue: '6,500+', visualValue: 75, color: '#3b82f6' },
    { name: 'Citizens Engaged', actualValue: '3,90,000+', visualValue: 100, color: '#f59e0b' }
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
      <InViewChart>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
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

const collectionImages = [
  '/Images/Storage/plastroots__plastrootsfoundation__mrf__matrialrec.jpg',
  '/Images/Storage/plastroots__plastrootsfoundation__mrf__matrialrec (1).jpg',
  '/Images/Storage/plastroots__plastrootsfoundation__mrf__matrialrec (2).jpg',
  '/Images/Storage/plastroots__plastrootsfoundation__mrf__matrialrec (3).jpg',
  '/Images/Storage/plastroots__plastrootsfoundation__mrf__matrialrec (4).jpg'
];

const segregationImages = [
  '/Images/Initivaties-2.jpeg',
  '/Images/07.jpg',
  '/Images/06.jpg'
];

const storageImages = [
  '/Images/Storage_rrc.png',
  '/Images/IMG_20260425_142344_496.jpg.jpeg',
  '/Images/IMG_20260425_142326_073.jpg.jpeg',
  '/Images/04.jpg'
];

const WasteManagement = () => {
  const navigate = useNavigate();

  const [currentColImage, setCurrentColImage] = useState(0);
  const [currentSegImage, setCurrentSegImage] = useState(0);
  const [currentStorageImage, setCurrentStorageImage] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentColImage((prev) => (prev + 1) % collectionImages.length);
      setCurrentSegImage((prev) => (prev + 1) % segregationImages.length);
      setCurrentStorageImage((prev) => (prev + 1) % storageImages.length);
    }, 3000); // All slide exactly at the same time
    
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Waste Management - Plastroots Foundation</title>
        <meta name="description" content="Comprehensive solid waste management projects transforming environmental liabilities into valuable resources for a circular economy." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(135deg, rgba(9, 102, 153, 0.3), rgba(6, 75, 115, 0.4)), url("/Images/Waste_Manage_Hero_section.png")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
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
          <h1 className={styles.heroTitle}>WASTE MANAGEMENT <span>PROJECTS</span></h1>
          <p className={styles.heroSubtitle}>
            Transforming Waste. Preserving the Planet.
          </p>
          <p className={styles.heroDesc}>
            Our Waste Management initiatives aim to create a circular economy by implementing sustainable segregation, recycling, and upcycling solutions across urban and rural communities.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Environmental Impact</h2>
              <p className={styles.dashboardSubtitle}>Monitoring our waste diversion and community engagement efforts.</p>
            </div>
          </div>

          <div className={styles.dashboardGrid}>
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
                    <LineChart size={20} className={styles.trendIcon} /> +25%
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className={styles.chartWrapper}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.chartHeader}>
                <h3 className={styles.chartTitle}>Waste Recovery & Community Engagement</h3>
              </div>
              <WasteChart />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Split Layout */}
      <section className={styles.splitSection}>
        <div className={styles.splitContainer}>
          <motion.div 
            className={styles.splitText}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className={styles.splitTitle}>The Circular Economy</h2>
            <p className={styles.splitDesc}>
              Waste is not a problem; it's a misplaced resource. By viewing waste through the lens of a circular economy, we can drastically reduce environmental pollution while creating new economic opportunities.
            </p>
            <p className={styles.splitDesc}>
              Our programs focus on behavioral change at the grassroots level, ensuring that individuals and businesses alike understand the value of segregating, composting, and recycling before anything ever reaches a landfill.
            </p>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <CircularEconomyLoop />
          </motion.div>
        </div>
      </section>

      {/* Focus Areas (Alternating Layout) */}
      <section className={styles.focusSection}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '5rem' }}>Strategic Initiatives</h2>
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

      {/* Resource Recovery Centres */}
      <section className={styles.recoverySection}>
        <div className={styles.recoveryCard}>
          <div className={styles.recoveryHeader}>
            <h2 className={styles.recoveryTitle}>Resource Recovery Centres</h2>
            <p className={styles.recoverySubtitle}>
              Our network of 7 state-of-the-art facilities dedicated to sorting, processing, and maximizing the value of recovered materials.
            </p>
          </div>
          
          <div className={styles.recoveryGrid}>
            <div className={styles.recoveryContent}>
              <h3>Where Magic Happens</h3>
              <p>
                Our 7 Resource Recovery Centres are the beating heart of our waste management operations. Here, mixed recyclables from our community collection drives are meticulously sorted, cleaned, and processed for their next lifecycle.
              </p>
              <div className={styles.recoveryText}>
                <p>
                By employing local residents, particularly women from marginalized backgrounds, we combine environmental sustainability with social empowerment. These centres transform "waste" into clean, segregated commodities ready for industrial recycling and upcycling.
                </p>
              </div>
              
              <div className={styles.recoveryHighlights}>
                <div className={styles.recoveryHighlightItem}>
                  <Factory size={24} className={styles.recoveryHighlightIcon} />
                  <span className={styles.recoveryHighlightText}>7 Facilities Active</span>
                </div>
                <div className={styles.recoveryHighlightItem}>
                  <Recycle size={24} className={styles.recoveryHighlightIcon} />
                  <span className={styles.recoveryHighlightText}>Zero Landfill Goal</span>
                </div>
              </div>
            </div>
            
            <div className={styles.recoveryImageWrapper}>
              <img src="/Images/03.jpg" alt="Resource Recovery Centre" />
            </div>
          </div>

          <div className={styles.workflowContainer}>
            <h3 className={styles.workflowTitle}>Operational Workflow</h3>
            <div className={styles.workflowSteps}>
              <div className={styles.workflowStep}>
                <div className={styles.stepIconWrapper}>
                  <Truck size={36} />
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>1. Collection</h4>
                  <p className={styles.stepDesc}>Waste is collected from households, institutions, and clean-up drives, then transported to our centres.</p>
                </div>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.stepIconWrapper}>
                  <Layers size={36} />
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>2. Segregation</h4>
                  <p className={styles.stepDesc}>Trained staff manually sort materials into categories like PET, HDPE, cardboard, and organics.</p>
                </div>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.stepIconWrapper}>
                  <Package size={36} />
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>3. Processing</h4>
                  <p className={styles.stepDesc}>Materials are washed, crushed, and baled to maximize efficiency for transport and recycling.</p>
                </div>
              </div>
              <div className={styles.workflowStep}>
                <div className={styles.stepIconWrapper}>
                  <CheckCircle size={36} />
                </div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>4. Upcycling</h4>
                  <p className={styles.stepDesc}>Valuable commodities are sent to certified recycling partners to create new sustainable products.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.facilityGridContainer}>
            <h3 className={styles.workflowTitle}>Inside Our Centres</h3>
            <div className={styles.facilityGrid}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentColImage}
                      src={collectionImages[currentColImage]} 
                      alt={`Collection Point ${currentColImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </AnimatePresence>
                </div>
                <div className={styles.facilityCardContent}>
                  <h4 className={styles.facilityCardTitle}>Collection Point</h4>
                  <p className={styles.facilityCardDesc}>The primary intake area where waste from various drives and households is received and weighed.</p>
                </div>
              </div>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentSegImage}
                      src={segregationImages[currentSegImage]} 
                      alt={`Segregation Line ${currentSegImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </AnimatePresence>
                </div>
                <div className={styles.facilityCardContent}>
                  <h4 className={styles.facilityCardTitle}>Segregation Line</h4>
                  <p className={styles.facilityCardDesc}>A dynamic area where mixed dry waste is meticulously categorized by material type by trained staff.</p>
                </div>
              </div>
              <div className={styles.facilityCard}>
                <div className={styles.facilityImagePlaceholder} style={{ position: 'relative', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={currentStorageImage}
                      src={storageImages[currentStorageImage]} 
                      alt={`Storage Hub ${currentStorageImage + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </AnimatePresence>
                </div>
                <div className={styles.facilityCardContent}>
                  <h4 className={styles.facilityCardTitle}>Storage Hub</h4>
                  <p className={styles.facilityCardDesc}>Secure storage for processed and baled materials awaiting dispatch to our certified recycling partners.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rrcEffectsContainer}>
            <h3 className={styles.effectsTitle}>The Impact of Resource Recovery</h3>
            <div className={styles.effectsGrid}>
              <div className={styles.effectItem}>
                <div className={styles.effectNumber}>01</div>
                <h4 className={styles.effectHeading}>Landfill Diversion</h4>
                <p className={styles.effectDesc}>We actively intercept thousands of tonnes of waste before it reaches overflowing landfills, preventing soil and groundwater contamination.</p>
              </div>
              <div className={styles.effectItem}>
                <div className={styles.effectNumber}>02</div>
                <h4 className={styles.effectHeading}>Economic Upliftment</h4>
                <p className={styles.effectDesc}>Our centres provide dignified, safe, and formal employment to marginalized waste workers, empowering them with fair wages and healthcare.</p>
              </div>
              <div className={styles.effectItem}>
                <div className={styles.effectNumber}>03</div>
                <h4 className={styles.effectHeading}>Carbon Reduction</h4>
                <p className={styles.effectDesc}>By processing and baling waste locally, we significantly reduce the carbon emissions associated with transporting raw waste to distant facilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Action on the Ground</h2>
        <p className={styles.eduIntro}>
          Deploying practical solutions to manage waste effectively and educate the public on sustainable practices.
        </p>
        <div className={styles.eduGrid}>
          {wasteActivities.map((activity, idx) => {
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

      {/* Impact Stories */}
      <section className={styles.masonrySection}>
        <h2 className={styles.sectionTitle}>Community Transformations</h2>
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
          <h2 className={styles.ctaTitle}>Be Part of the Solution</h2>
          <p className={styles.ctaDesc}>
            Whether you want to organize a clean-up drive in your neighborhood or sponsor a community composting unit, your action can help turn the tide on waste.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate('/collaborate')}>Join the Movement</button>
        </motion.div>
      </section>
    </div>
  );
};

export default WasteManagement;
