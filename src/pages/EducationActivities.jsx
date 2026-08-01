import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, GraduationCap, Leaf, Lightbulb, Users, LineChart, School, BookMarked } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts';
import styles from './InitiativeDetail.module.css';

const impactStats = [
  { value: '120+', label: 'Partner Schools' },
  { value: '36,000+', label: 'Students Reached' },
  { value: '270+', label: 'Awareness Sessions' }
];

const focusAreas = [
  { 
    title: 'Curriculum Integration',
    desc: 'Reaching out to schools and institutions to integrate environmental awareness and practical sustainability into their curriculum.',
    extraDesc: 'We work closely with educators to weave ecological concepts into daily lesson plans, ensuring that sustainability becomes a core part of a child’s education rather than an afterthought.',
    bullets: [
      'Collaborating with school boards for syllabus updates',
      'Creating engaging, age-appropriate educational materials',
      'Implementing practical, hands-on environmental science projects'
    ],
    img: '/Images/School_2.jpg'
  },
  { 
    title: 'Eco-Clubs & Campus Initiatives',
    desc: 'Empowering students to take charge of sustainability within their own schools through active, student-led eco-clubs.',
    extraDesc: 'By fostering leadership skills in young students, we create a generation of proactive environmental stewards who drive change not just in school, but at home and in their communities.',
    bullets: [
      'Setting up school-wide recycling and composting systems',
      'Organizing student-led environmental awareness drives',
      'Hosting annual sustainability science fairs and competitions'
    ],
    img: '/Images/School_3.png'
  }
];

const eduActivities = [
  {
    title: 'Teacher Training',
    desc: 'Equipping educators with the knowledge and tools to effectively teach sustainability.',
    icon: GraduationCap
  },
  {
    title: 'Interactive Workshops',
    desc: 'Conducting fun, hands-on workshops that make learning about the environment engaging.',
    icon: Lightbulb
  },
  {
    title: 'Green Campus Audits',
    desc: 'Students lead audits on school energy use and waste generation to find areas for improvement.',
    icon: School
  },
  {
    title: 'Nature Camps',
    desc: 'Organizing outdoor experiential learning trips to connect students directly with nature.',
    icon: Leaf
  },
  {
    title: 'Resource Library',
    desc: 'Providing schools with books, digital resources, and toolkits on climate action.',
    icon: BookOpen
  },
  {
    title: 'Peer-to-Peer Education',
    desc: 'Training older students to mentor younger grades on ecological responsibility.',
    icon: Users
  }
];

const successStories = [
  {
    quote: "Thanks to the new curriculum, my students are now actively protesting single-use plastics in the cafeteria. The change in their mindset is phenomenal.",
    author: "Mr. Sharma, Principal",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "I learned how to make compost from food scraps in our school's Eco-Club, and now we do it at home too!",
    author: "Aarav, 6th Grade Student",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "The teacher training workshops gave me so many creative ideas to bring environmental science to life for my class.",
    author: "Ms. Iyer, Science Teacher",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  }
];

const EducationChart = () => {
  const data = [
    { name: 'Partner Schools', actualValue: '120+', visualValue: 65, color: '#ea580c' },
    { name: 'Students Reached', actualValue: '36,000+', visualValue: 100, color: '#3b82f6' },
    { name: 'Awareness Sessions', actualValue: '270+', visualValue: 75, color: '#10b981' }
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
          <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
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

const EducationActivities = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Education Activities - Plastroots Foundation</title>
        <meta name="description" content="Empowering the next generation through environmental education, school drives, and grassroots learning initiatives." />
      </Helmet>

      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: 'linear-gradient(to bottom, rgba(31, 44, 51, 0.7), rgba(9, 102, 153, 0.8)), url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80")' }}>
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
          <h1 className={styles.heroTitle}>Educational Activities</h1>
          <p className={styles.heroSubtitle}>
            Inspiring the Next Generation of Environmental Stewards.
          </p>
          <p className={styles.heroDesc}>
            We reach out to schools and institutions to integrate environmental awareness and practical sustainability directly into their curriculum, shaping the minds that will shape our future.
          </p>
        </motion.div>
      </section>

      {/* Premium Interactive Dashboard */}
      <section className={styles.dashboardSection}>
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardHeader}>
            <div>
              <h2 className={styles.dashboardTitle}>Educational Reach</h2>
              <p className={styles.dashboardSubtitle}>Monitoring our impact across schools and institutions.</p>
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
                    <LineChart size={20} className={styles.trendIcon} /> +20%
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
                <h3 className={styles.chartTitle}>Student Engagement Growth</h3>
              </div>
              <EducationChart />
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
            <h2 className={styles.splitTitle}>Why Target Schools?</h2>
            <p className={styles.splitDesc}>
              Habits formed in childhood last a lifetime. By integrating sustainability into early education, we aren't just teaching a subject; we are instilling a core value system.
            </p>
            <p className={styles.splitDesc}>
              Students are also incredibly effective advocates within their own families. A child who learns about the dangers of plastic pollution in school is highly likely to encourage recycling and eco-friendly choices at home, creating a powerful ripple effect throughout the community.
            </p>
          </motion.div>
          <motion.div 
            className={styles.splitImageWrapper}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src="/Images/School_1.webp" alt="Students in Classroom" className={styles.splitImage} />
          </motion.div>
        </div>
      </section>

      {/* Focus Areas (Alternating Layout) */}
      <section className={styles.focusSection}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '5rem' }}>Core Educational Pillars</h2>
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
        <h2 className={styles.sectionTitle}>Engagement Methods</h2>
        <p className={styles.eduIntro}>
          Employing diverse, interactive methods to make sustainability a compelling subject for students of all ages.
        </p>
        <div className={styles.eduGrid}>
          {eduActivities.map((activity, idx) => {
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
        <h2 className={styles.sectionTitle}>Stories from the Classroom</h2>
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
          <h2 className={styles.ctaTitle}>Partner With Us</h2>
          <p className={styles.ctaDesc}>
            Are you an educator or school administrator? Join hands with us to bring practical sustainability education to your institution.
          </p>
          <button className={styles.ctaBtn}>Become a Partner School</button>
        </motion.div>
      </section>
    </div>
  );
};

export default EducationActivities;
