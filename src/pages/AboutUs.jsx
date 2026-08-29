import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Target, Lightbulb, Leaf, Recycle, Megaphone, Landmark, Home, Users, Briefcase, Check } from 'lucide-react';
import styles from './AboutUs.module.css';

const teamMembers = [
  { name: 'Kapil Jangale', role: 'Director', quote: "Our roots define our strength. Let's build a foundation for a greener tomorrow.", img: '/Images/Team%20Members/Kapil.jpeg' },
  { name: 'Dilip Jangale', role: 'Director', quote: "Change is not an event, but a continuous journey of empowering communities.", img: '/Images/Team%20Members/Dilip.jpeg' },
  { name: 'Apurva Akre', role: 'Communications Officer', quote: "Awareness is the first step towards sustainable action. We must echo our mission far and wide.", img: '/Images/Team%20Members/Apurva.jpeg' },
  { name: 'Nikita Jangale', role: 'Implementation Head', quote: "Transforming waste into opportunity requires dedication at the absolute grassroots level.", img: '/Images/Team%20Members/Nikita.jpeg' },
  { name: 'Rohit Sharma', role: 'Finance Officer', quote: "Sustainable impact is driven by transparent and responsible resource management.", img: '/Images/Team%20Members/Rohit.jpeg' }
];

const sdgs = [
  { id: 3, label: "Good Health & Well-Being", color: "#4C9F38", img: "/Images/SDG/Health.avif", align: "Community health camps, hygiene awareness & sanitation programs" },
  { id: 5, label: "Gender Equality", color: "#FF3A21", img: "/Images/SDG/Gender_Equality.webp", align: "Women empowerment, skill development & livelihood opportunities" },
  { id: 11, label: "Sustainable Cities", color: "#FD6925", img: "/Images/SDG/Sustainable_City.avif", align: "Solid waste management & cleaner, more responsible communities" },
  { id: 13, label: "Climate Action", color: "#3F7E44", img: "/Images/SDG/Climate%20action.jpg", align: "Plastic recovery, recycling & circular economy practices" },
  { id: 6, label: "Clean Water & Sanitation", color: "#26BDE2", img: "/Images/SDG/Clean_Water.jpg", align: "Water hygiene initiatives & responsible waste disposal" }
];

const focusAreas = [
  {
    number: "01",
    Icon: Recycle,
    variant: "green",
    title: "Sustainable Waste Management & Circular Economy",
    bullets: [
      "Implement waste management solutions in villages, towns and cities",
      "Promote source segregation, collection, sorting, recycling and resource recovery",
      "Operate MRF/RRC centres and plastic waste management initiatives",
      "Reduce open dumping and promote responsible food waste management",
      "Encourage reuse, recycling and recovery of materials"
    ],
    impact: "We aim to reduce waste reaching landfills, recover valuable resources and build cleaner communities through a circular economy approach."
  },
  {
    number: "02",
    Icon: Megaphone,
    variant: "blue",
    title: "Environmental Awareness & Behaviour Change (IEC)",
    bullets: [
      "Conduct IEC campaigns in schools, colleges, villages and urban communities",
      "Organise awareness sessions, workshops, street plays and cleanliness drives",
      "Promote waste segregation, plastic reduction and responsible consumption",
      "Engage students, youth, citizens and local institutions in environmental action",
      "Conduct door-to-door campaigns and community engagement activities"
    ],
    impact: "We aim to turn awareness into action by changing everyday habits and encouraging people to take responsibility for their environment."
  },
  {
    number: "03",
    Icon: Home,
    variant: "green",
    title: "Rural, Community Development & Health",
    bullets: [
      "Work with villages, local bodies and communities to address local needs",
      "Conduct health, hygiene and sanitation awareness programmes",
      "Support cleanliness, sanitation and community-development initiatives",
      "Promote tree plantation and healthy, sustainable community practices",
      "Build participation through local partnerships and grassroots initiatives"
    ],
    impact: "We aim to create cleaner, healthier and more resilient communities where environmental improvement and well-being grow together."
  },
  {
    number: "04",
    Icon: Users,
    variant: "blue",
    title: "Women Empowerment, Livelihood & Skill Development",
    bullets: [
      "Conduct skill-development and capacity-building programmes",
      "Create livelihood opportunities linked to waste management and sustainability",
      "Support women's participation in waste collection, segregation and recycling",
      "Provide training in practical, entrepreneurial and income-generating skills",
      "Encourage women's leadership, confidence and economic participation"
    ],
    impact: "We aim to create opportunities, dignity and economic independence for women, enabling them to become active contributors and leaders in their communities."
  },
  {
    number: "05",
    Icon: Briefcase,
    variant: "green",
    title: "CSR, Sustainability & Community Impact",
    bullets: [
      "Design and implement CSR projects with corporates and institutions",
      "Develop projects based on real environmental and community needs",
      "Implement initiatives in waste management, education, health and community development",
      "Build long-term partnerships for scalable and sustainable solutions",
      "Monitor, document and measure project outcomes and impact"
    ],
    impact: "We transform CSR support into meaningful, measurable impact, creating partnerships that contribute to environmental sustainability and community development."
  }
];

const journeyMilestones = [
  {
    year: "2019",
    Icon: Leaf,
    variant: "seed",
    title: "The Seed Was Planted",
    subtitle: "Parent Company Founded",
    image: "/Images/Our%20Journey/About-us-1024x587.jpeg",
    body: "Our parent company, Plastroots Waste Management & Solutions Pvt. Ltd., began working in waste management. There was no Foundation yet, but the work, the challenges, the learning and the dream of creating a cleaner and more sustainable society had already begun.",
    highlight: "We worked with communities, understood the realities of waste management and witnessed the challenges faced by villages."
  },
  {
    year: "2023",
    Icon: Leaf,
    variant: "green",
    title: "Foundation Established",
    subtitle: "RRC Experiment Begins",
    image: "/Images/Our%20Journey/About-us-1024x587.jpeg",
    body: "Plastroots Foundation officially began as a Section 8 non-profit. We established an RRC (Resource Recovery Centre) as an experimental model to understand what sustainable, community-level waste management could look like, and it became a learning ground that gave us confidence to move forward.",
    highlight: "The RRC became more than a waste centre. It became a model for what community-driven waste management could look like."
  },
  {
    year: "2024",
    Icon: Recycle,
    variant: "blue",
    title: "Rural Expansion & Women Empowerment",
    subtitle: "Zilla Parishad Partnership",
    image: "/Images/Our%20Journey/WhatsApp%20Image%202026-06-11%20at%202.55.58%20PM.jpeg",
    body: "Our work expanded into rural areas through a Zilla Parishad partnership. Recognising that women are central to sustainable waste operations, we began formal SHG programmes, regular health check-ups, ration support and safety facilities for women Safai Kamgars.",
    highlight: "We were no longer only managing waste; we were building a system where the environment and the people working for it could grow together."
  },
  {
    year: "2025",
    Icon: Megaphone,
    variant: "green",
    title: "CSR & Bottle for Change",
    subtitle: "Bisleri Partnership",
    image: "/Images/Our%20Journey/Plastroots%20Foundation%20organized%20an%20Awareness%20Rally%20at%20Z.P.U.%20Primary%20School,%20Nanda%20(Koradi)%20und.webp",
    body: "We entered the CSR space with Bisleri's Bottle for Change project. Through awareness activities and community engagement, we carried an important message: plastic waste, when managed responsibly, can be recovered and recycled.",
    highlight: "Community participation + environmental awareness + structured waste management, all at a larger scale."
  },
  {
    year: "2026",
    Icon: Landmark,
    variant: "blue",
    title: "MRF Expansion & Scaling the Mission",
    subtitle: "6 New RRC/MRF Centres Planned",
    image: "/Images/Our%20Journey/RRC.png",
    body: "Based on our RRC experience, we are now heading towards establishing six more RRC/MRF centres across Nagpur district with Zilla Parishad. Our focus is MRF operations, solid waste management, IEC programmes and tackling illegal dumping.",
    highlight: "RRC Experiment → Model → Opportunity → A larger vision of sustainable waste management across Nagpur and beyond."
  }
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('00');

  useEffect(() => {
    if (isInView) {
      let iterations = 0;
      const maxIterations = 20;
      const finalValueStr = value < 10 ? `0${value}` : `${value}`;
      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayValue(finalValueStr);
        } else {
          const randomDigit = Math.floor(Math.random() * 9) + 1;
          setDisplayValue(`${randomDigit}${randomDigit}`);
          iterations++;
        }
      }, 60);
      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>About Us - Plastroots Foundation</title>
        <meta name="description" content="Born from a 2019 dream, Plastroots Foundation is a Section 8 non-profit committed to sustainable waste management, rural development, women empowerment and environmental awareness." />
      </Helmet>

      {/* 1. Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroLeft}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.heroEyebrow}>About Us</div>
            <h1 className={styles.heroTitle}>Plastroots Foundation</h1>
            <p className={styles.heroSubtitle}>
              Born from a 2019 dream and officially established in 2023, Plastroots Foundation is a Section 8 non-profit committed to sustainable waste management, rural development, women empowerment and environmental awareness, because real change must reach the ground where people live.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn} onClick={() => navigate('/contact')}>Get In Touch</button>
              <button className={styles.secondaryBtn} onClick={() => navigate('/initiatives')}>Our Initiatives</button>
            </div>
          </motion.div>
        </div>
        <div className={styles.heroRight}>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageCrop}>
              <img src="/Images/DSC06325.JPG" alt="About Plastroots Foundation" className={styles.heroImage} />
            </div>
            <div className={styles.directorQuoteCard}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.quoteContent}>
                <p className={styles.quoteText}>Our roots define our strength. Let's build a foundation for a greener tomorrow.</p>
                <p className={styles.quoteAuthor}>Kapil Jangale, Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Origin Story */}
      <section className={styles.storySection}>
        <div className="container">
          <div className={styles.storyGrid}>
            <motion.div
              className={styles.storyLeft}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className={styles.sectionEyebrow}>Who We Are: Our Story</span>
              <h2 className={styles.storyHeadline}>
                A Movement That<br />
                <span className={styles.accentGreen}>Found Its Name</span>
              </h2>
              <p className={styles.storySubheadline}>
                Our roots go deeper than our founding date; this is where the story really began.
              </p>
              <p className={styles.storyBody}>
                If you ask us when the dream began, we would take you back to 2019, four years before we had an official name.
              </p>
              <p className={styles.storyBody}>
                Our parent company, Plastroots Waste Management & Solutions Pvt. Ltd., started working in waste management with a simple conviction: change must reach the ground where people live, not remain a conversation.
              </p>
              <p className={styles.storyBody}>
                As we worked on the ground, we realised waste management is about people: awareness, dignity, livelihoods and responsibility. That understanding gave birth to Plastroots Foundation. Today, our work goes beyond waste, from villages to cities, because the need for responsible waste management has no boundaries.
              </p>
            </motion.div>

            <motion.div
              className={styles.storyRight}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className={styles.manifestoCard}>
                <div className={styles.manifestoHeader}>
                  <div className={styles.manifestoHeaderIcon}>
                    <Leaf size={18} />
                  </div>
                  <span className={styles.manifestoLabel}>What We Stand For Today</span>
                </div>
                <ul className={styles.manifestoList}>
                  {[
                    "Create awareness in communities",
                    "Encourage responsible waste segregation",
                    "Support waste management systems",
                    "Create opportunities for communities",
                    "Empower women through skills & livelihoods",
                    "Work with local bodies for lasting solutions"
                  ].map((item, i) => (
                    <li key={i}>
                      <span className={styles.manifestoCheck}><Check size={14} /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className={styles.manifestoQuote}>
                  "Real change happens when people become a part of the solution."
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Core Focus Areas */}
      <section className={styles.focusSection}>
        <div className="container">
          <div className={styles.focusSectionHeader}>
            <h2 className={styles.sectionTitle}>Our Core Focus Areas</h2>
            <p className={styles.sectionSubtitle}>Five pillars through which we create lasting, sustainable community impact</p>
          </div>
          <div className={styles.focusGrid}>
            {focusAreas.map((area, i) => (
              <motion.div
                key={i}
                className={`${styles.focusCard} ${area.variant === 'blue' ? styles.focusCardBlue : styles.focusCardGreen}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className={styles.focusCardTop}>
                  <span className={styles.focusNumber}>{area.number}</span>
                  <div className={styles.focusIconWrap}><area.Icon size={24} /></div>
                </div>
                <h3 className={styles.focusCardTitle}>{area.title}</h3>
                <ul className={styles.focusBullets}>
                  {area.bullets.slice(0, 4).map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SDG Goals */}
      <section className={styles.sdgSection}>
        <h2 className={styles.sectionTitle}>Sustainable Development Goals</h2>
        <p className={styles.sectionSubtitle}>We are deeply committed to aligning our initiatives with the United Nations Sustainable Development Goals to create a better world.</p>
        <div className={styles.sdgGrid}>
          {sdgs.map((sdg) => (
            <motion.div
              key={sdg.id}
              className={styles.sdgItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.sdgImageWrapper}>
                <img src={sdg.img} alt={sdg.label} className={styles.sdgImage} />
              </div>
              <div className={styles.sdgContent} style={{ borderTop: `4px solid ${sdg.color}` }}>
                <p className={styles.sdgLabel} style={{ color: sdg.color }}>{sdg.label}</p>
                <p className={styles.sdgAlign}>{sdg.align}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Journey Timeline */}
      <section className={styles.journeySection}>
        <div className={styles.journeyInner}>
        <div className={styles.journeyLeft}>
          <h2 className={styles.journeyTitle}>Our Journey</h2>
          <div className={styles.journeySubtitle}>From Idea to Impact</div>
          <p className={styles.journeyText} style={{ fontStyle: 'italic', fontWeight: 500, color: 'var(--brand-green)', marginBottom: '2rem' }}>
            "Every Meaningful Change Starts With A Simple Step."
          </p>
          <div className={styles.journeyYears}>
            {journeyMilestones.map((m, i) => (
              <div key={i} className={styles.journeyYearItem}>
                <span className={`${styles.journeyYearDot} ${m.variant === 'seed' ? styles.journeyYearDotSeed : ''}`} />
                <div>
                  <span className={styles.journeyYearLabel}>{m.year}</span>
                  <span className={styles.journeyYearTitle}>{m.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.timelinePanel}>
          {journeyMilestones.map((milestone, i) => (
            <motion.div
              key={i}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
            >
              <div className={`${styles.timelineIcon} ${
                milestone.variant === 'blue' ? styles.timelineIconBlue :
                milestone.variant === 'seed' ? styles.timelineIconSeed : ''
              }`}>
                <milestone.Icon size={35} />
              </div>
              <div className={`${styles.timelineContent} ${
                milestone.variant === 'blue' ? styles.timelineContentBlue :
                milestone.variant === 'seed' ? styles.timelineContentSeed : ''
              }`}>
                <div className={styles.timelineYear}>{milestone.year}</div>
                <span className={styles.timelineSubtitleBadge}>{milestone.subtitle}</span>
                <div className={styles.timelineImageWrapper}>
                  <img src={milestone.image} alt={`${milestone.year} Journey`} className={styles.timelineImage} />
                </div>
                <div className={styles.timelineContentTitle}>{milestone.title}</div>
                <div className={styles.timelineContentText}>{milestone.body}</div>
                <div className={`${styles.timelineBubble} ${milestone.variant === 'blue' ? styles.bubbleBlue : milestone.variant === 'seed' ? styles.bubbleSeed : ''}`}>
                  {milestone.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* 7. Impact Stats */}
      <section className={styles.impactSection}>
        <h2 className={styles.sectionTitle}>Our Contribution to Society</h2>
        <p className={styles.sectionSubtitle}>
          The numbers behind our mission. Every metric represents real lives impacted and a cleaner environment.
        </p>
        <div className={styles.impactGrid}>
          {[
            { value: "72+", label: "Villages Covered" },
            { value: "120+", label: "Schools Reached" },
            { value: "36,000+", label: "Students Trained" },
            { value: "3,90,000+", label: "Citizens Engaged" },
            { value: "7,000+", label: "Tonnes Waste Collected" },
            { value: "6,500+", label: "Tonnes Plastic Recycled" },
            { value: "270+", label: "Awareness Sessions Conducted" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className={styles.impactCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className={styles.impactValue}>{stat.value}</h3>
              <p className={styles.impactLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Team */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Leadership & Visionaries</h2>
        <p className={styles.sectionSubtitle}>
          The dedicated minds and passionate innovators driving our mission to create a sustainable, empowered future.
        </p>

        <div className={styles.teamContainer}>
          <div className={styles.sideColumn}>
            {[teamMembers[1], teamMembers[2]].map((member, index) => (
              <motion.div
                key={`left-${index}`}
                className={styles.teamCardSmall}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index === 0 ? 0.4 : 0.8 }}
              >
                <div className={styles.cardShape}>
                  <div className={styles.memberImageWrapper}>
                    <img src={member.img} alt={member.name} className={styles.memberImage} />
                  </div>
                  <div className={styles.teamMemberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className={styles.centerColumn}>
            <motion.div
              className={styles.teamCardLarge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
            >
              <div className={styles.cardShape}>
                <div className={styles.memberImageWrapper}>
                  <img src={teamMembers[0].img} alt={teamMembers[0].name} className={styles.memberImage} />
                </div>
                <div className={styles.teamMemberInfo}>
                  <h3 className={styles.memberName}>{teamMembers[0].name}</h3>
                  <p className={styles.memberRole}>{teamMembers[0].role}</p>
                  {teamMembers[0].quote && <p className={styles.memberQuote}>"{teamMembers[0].quote}"</p>}
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.sideColumn}>
            {[teamMembers[3], teamMembers[4]].map((member, index) => (
              <motion.div
                key={`right-${index}`}
                className={styles.teamCardSmall}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index === 0 ? 0.4 : 0.8 }}
              >
                <div className={styles.cardShape}>
                  <div className={styles.memberImageWrapper}>
                    <img src={member.img} alt={member.name} className={styles.memberImage} />
                  </div>
                  <div className={styles.teamMemberInfo}>
                    <h3 className={styles.memberName}>{member.name}</h3>
                    <p className={styles.memberRole}>{member.role}</p>
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

export default AboutUs;
