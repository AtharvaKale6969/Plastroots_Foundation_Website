import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, HandCoins, Building2, Store, HeartHandshake, LineChart } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './InitiativeDetail.module.css';

const impactStats = [
  { value: '500+', label: 'SHGs Formed' },
  { value: '5,000+', label: 'Women Empowered' },
  { value: '200+', label: 'Micro-Enterprises' }
];

const focusAreas = [
  { 
    title: 'Self-Help Groups (SHGs)',
    desc: 'Forming and training Self-Help Groups (SHGs) to lead micro-enterprises in waste recovery, driving both ecological and economic empowerment.',
    extraDesc: 'By organizing women into SHGs, we create a strong support system that fosters financial independence and leadership skills.',
    bullets: [
      'Establishing self-sustaining community groups',
      'Training in group dynamics and financial management',
      'Fostering a supportive network of women entrepreneurs'
    ],
    img: '/Images/SHG_1.jpg'
  },
  { 
    title: 'Waste Recovery Micro-Enterprises',
    desc: 'Equipping women with the skills and resources to turn waste into wealth.',
    extraDesc: 'Our training programs focus on practical skills in recycling, upcycling, and sustainable product creation, turning environmental challenges into economic opportunities.',
    bullets: [
      'Hands-on training in waste segregation and processing',
      'Support in setting up small-scale recycling units',
      'Market linkage for selling upcycled products'
    ],
    img: '/Images/SHG_2.jpg'
  }
];

const shgActivities = [
  {
    title: 'Financial Literacy',
    desc: 'Training women in budgeting, saving, and managing group finances.',
    icon: HandCoins
  },
  {
    title: 'Skill Development',
    desc: 'Providing vocational training in sustainable crafts and upcycling.',
    icon: Building2
  },
  {
    title: 'Leadership Workshops',
    desc: 'Empowering women to take active roles in community decision-making.',
    icon: Users
  },
  {
    title: 'Market Access',
    desc: 'Connecting SHG products with local and regional markets.',
    icon: Store
  },
  {
    title: 'Business Planning',
    desc: 'Helping women draft viable plans for their micro-enterprises.',
    icon: TrendingUp
  },
  {
    title: 'Mentorship Programs',
    desc: 'Providing ongoing support from experienced entrepreneurs.',
    icon: HeartHandshake
  }
];

const successStories = [
  {
    quote: "Joining the SHG gave me the confidence to start my own upcycling business. I am now financially independent.",
    author: "Lakshmi Devi",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Our waste recovery enterprise not only keeps our village clean but also pays for our children's education.",
    author: "Meera Bai",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The financial literacy training taught us how to save and invest together. Our group fund is now helping other women start businesses.",
    author: "Anita Sharma",
    img: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=100&q=80"
  }
];

const WomenChart = () => {
  const data = [
    { name: 'SHGs Formed', actualValue: '500+', visualValue: 35, color: '#c2185b' },
    { name: 'Women Empowered', actualValue: '5,000+', visualValue: 50, color: '#7b1fa2' },
    { name: 'Micro-Enterprises', actualValue: '200+', visualValue: 15, color: '#d81b60' }
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
            innerRadius={80}
            outerRadius={120}
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

const WomenDevelopment = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Women Development - Plastroots Foundation</title>
        <meta name="description" content="Empowering women through skill development, financial independence, and entrepreneurial support programs." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(to bottom, rgba(31, 44, 51, 0.7), rgba(9, 102, 153, 0.8)), url("https://images.unsplash.com/photo-1605333396914-231362e31e51?auto=format&fit=crop&q=80")' }}>
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
          <h1 className={styles.heroTitle}>Women Development Programs</h1>
          <p className={styles.heroSubtitle}>
            Empowering Women. Transforming Communities.
          </p>
          <p className={styles.heroDesc}>
            Through the formation of Self-Help Groups, we drive ecological and economic empowerment by enabling women to lead micro-enterprises in waste recovery and sustainable livelihoods.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Empowerment Metrics</h2>
              <p className={styles.dashboardSubtitle}>Tracking the economic and social upliftment of our SHGs.</p>
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
                    <div className={styles.statValue}>{stat.value}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div className={styles.statTrend}>
                    <LineChart size={20} className={styles.trendIcon} /> +15%
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
                <h3 className={styles.chartTitle}>SHG Income Growth</h3>
              </div>
              <WomenChart />
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
            <h2 className={styles.splitTitle}>Why Focus on Women?</h2>
            <p className={styles.splitDesc}>
              When you empower a woman, you empower an entire community. Women play a crucial role in household and community management, making them the ideal leaders for grassroots environmental initiatives.
            </p>
            <p className={styles.splitDesc}>
              By intertwining ecological goals like waste recovery with economic opportunities, our programs ensure that sustainability is both a priority and a viable source of livelihood for families.
            </p>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src="/Images/SHG_3.png" alt="Women Empowerment" className={styles.splitImage} />
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

      {/* Activities Grid */}
      <section className={styles.educationSection}>
        <h2 className={styles.sectionTitle}>Capacity Building</h2>
        <p className={styles.eduIntro}>
          Providing the essential tools, skills, and knowledge required to run successful and sustainable enterprises.
        </p>
        <div className={styles.eduGrid}>
          {shgActivities.map((activity, idx) => {
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
        <h2 className={styles.sectionTitle}>Voices of Change</h2>
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
          <h2 className={styles.ctaTitle}>Empower a Community</h2>
          <p className={styles.ctaDesc}>
            Your support helps us provide critical training and seed funding for women-led micro-enterprises. Together, we can build a more sustainable and equitable future.
          </p>
          <button className={styles.ctaBtn} onClick={() => navigate('/collaborate')}>Support SHGs</button>
        </motion.div>
      </section>
    </div>
  );
};

export default WomenDevelopment;
