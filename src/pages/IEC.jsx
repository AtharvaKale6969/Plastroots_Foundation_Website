import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Megaphone, GraduationCap, Home, Trash2, Users, Image, LineChart } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './InitiativeDetail.module.css';

const impactStats = [
  { value: '270+', label: 'Awareness Campaigns' },
  { value: '3,90,000+', label: 'Citizens Reached' },
  { value: '120+', label: 'Schools Engaged' }
];

const focusAreas = [
  { 
    title: 'Path Natya (Street Plays)',
    desc: 'Engaging crowds through theatrical storytelling to communicate critical environmental messages and inspire grassroots action.',
    extraDesc: 'Through vibrant performances, local actors break down complex waste management issues into relatable, everyday scenarios that resonate with rural and urban audiences alike. This highly interactive format ensures the message sticks.',
    bullets: [
      'Breaks down language and literacy barriers',
      'Transforms complex eco-topics into entertainment',
      'Encourages real-time audience participation and dialogue'
    ],
    img: '/Images/Street Play.jpeg'
  },
  { 
    title: 'School Seminars',
    desc: 'Conducting interactive workshops in schools to instill sustainable habits and ecological responsibility in the younger generation.',
    extraDesc: 'We believe that children are the best ambassadors for change. Our seminars use practical demonstrations and fun activities to teach students about waste segregation at the source, turning them into advocates at home.',
    bullets: [
      'Hands-on waste sorting demonstrations',
      'Empowers student "Eco-Warriors"',
      'Helps schools implement campus-wide recycling systems'
    ],
    img: '/Images/sch.jpg'
  },
  { 
    title: 'Spot Cleaning Drives',
    desc: 'Organizing community-led cleanups in public areas to instantly transform spaces and inspire long-term behavioral change.',
    extraDesc: 'A visual transformation is a powerful motivator. By clearing long-standing garbage dumps and beautifying the area together with locals, we restore civic pride and strongly discourage future littering.',
    bullets: [
      'Delivers immediate visual impact to neighborhoods',
      'Fosters a strong sense of community ownership',
      'Converts former dumpsites into clean, usable public spaces'
    ],
    img: '/Images/Spot_clean.webp'
  },
  { 
    title: 'Upcycling Installations',
    desc: 'Installing creative upcycled products to visually demonstrate the value of waste and encourage recycling practices.',
    extraDesc: 'Waste is just a resource in the wrong place. We install public art and functional furniture made entirely from recycled plastics and discarded materials to spark conversations and prove the circular economy works.',
    bullets: [
      'Showcases the tangible value of recycled materials',
      'Creates functional community assets like park benches',
      'Sparks curiosity and daily environmental conversations'
    ],
    img: '/Images/Upcycling.jpeg'
  },
];

const educationalActivities = [
  {
    title: 'Path Natya / Street Plays',
    desc: 'Engaging large crowds through theatrical storytelling and dramatic arts to communicate critical environmental and social messages.',
    icon: Megaphone
  },
  {
    title: 'School Seminars',
    desc: 'Conducting interactive workshops in schools to instill sustainable habits and ecological responsibility in the younger generation.',
    icon: GraduationCap
  },
  {
    title: 'Door-to-Door Awareness',
    desc: 'Personalized grassroots campaigns visiting households to educate families directly on waste segregation and best practices.',
    icon: Home
  },
  {
    title: 'Spot Cleaning Drives',
    desc: 'Organizing community-led cleanups in public areas to instantly transform spaces and inspire long-term behavioral change.',
    icon: Trash2
  },
  {
    title: 'SHG & Aasha Training',
    desc: 'Empowering Women Self-Help Groups and Aasha workers to become community leaders and sustainability ambassadors.',
    icon: Users
  },
  {
    title: 'Multimedia Campaigns',
    desc: 'Designing and distributing IEC materials, banners, pamphlets, and digital content to maintain continuous community awareness.',
    icon: Image
  }
];

const successStories = [
  {
    quote: "The street play performed in our village completely shifted how people view plastic waste. Everyone is talking about segregation now.",
    author: "Priya Sharma",
    img: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "After the door-to-door campaign, our neighborhood's recycling compliance went from 20% to nearly 90% in just two months.",
    author: "Rahul Verma",
    img: "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The school seminar was a hit! My children now actively ensure we compost our organic waste at home.",
    author: "Anjali Gupta",
    img: "https://images.unsplash.com/photo-1589923158776-cb4485d99fd6?auto=format&fit=crop&w=100&q=80"
  }
];

const IECChart = () => {
  const data = [
    { name: 'Awareness Campaigns', actualValue: '270+', visualValue: 70, color: '#ea580c' },
    { name: 'Citizens Reached', actualValue: '3,90,000+', visualValue: 100, color: '#3b82f6' },
    { name: 'Schools Engaged', actualValue: '120+', visualValue: 50, color: '#10b981' }
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
          layout="vertical"
          margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
          <XAxis hide={true} type="number" domain={[0, 110]} />
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
          <RechartsTooltip content={<CustomTooltip />} cursor={{ fill: '#f1f5f9' }} />
          <Bar dataKey="visualValue" name="Impact" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const IEC = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Information, Education & Communication (IEC) - Plastroots Foundation</title>
        <meta name="description" content="Spreading awareness about environmental sustainability and waste management through robust Information, Education, and Communication campaigns." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero}>
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
          <h1 className={styles.heroTitle}>INFORMATION, EDUCATION & COMMUNICATION (IEC)</h1>
          <p className={styles.heroSubtitle}>
            Raising Awareness. Inspiring Sustainable Change.
          </p>
          <p className={styles.heroDesc}>
            Through our IEC Initiative, we empower communities by raising awareness, promoting knowledge sharing, and facilitating behavior change on social and environmental issues using workshops, multimedia campaigns, and direct engagement.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Outreach Metrics</h2>
              <p className={styles.dashboardSubtitle}>Monitoring the impact of our community communication campaigns.</p>
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
              
              <IECChart />

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
            <h2 className={styles.splitTitle}>Why IEC Matters</h2>
            <div className={styles.approachContent}>
              <p>
              True sustainable change doesn't happen overnight, it requires a fundamental shift in behavior and mindset. Our Information, Education, and Communication campaigns are the catalyst for that change.
              </p>
              <p>
              By engaging with people where they are through lively street plays, school seminars, or direct door-to-door conversations, we dismantle old habits and seamlessly introduce modern, sustainable practices that communities can proudly adopt and champion.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src="/Images/IEC.jpg" alt="Information, Education and Communication" className={styles.splitImage} />
          </motion.div>
        </div>
      </section>

      {/* Campaign Highlights (Alternating Layout) */}
      <section className={styles.focusSection}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '5rem' }}>Campaign Highlights</h2>
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
        <h2 className={styles.sectionTitle}>Engagement Activities</h2>
        <p className={styles.eduIntro}>
          Reaching communities through diverse, high-impact communication strategies to ensure our message resonates across all demographics.
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
          <h2 className={styles.ctaTitle}>Amplify Our Message</h2>
          <p className={styles.ctaDesc}>
            Help us spread the word. Whether you want to volunteer for our door-to-door campaigns, act in a street play, or sponsor educational materials, your support creates lasting change.
          </p>
          <button className={styles.ctaBtn}>Get Involved</button>
        </motion.div>
      </section>
    </div>
  );
};

export default IEC;
