import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Target, Lightbulb, ChevronRight, Leaf, Recycle, Megaphone, Landmark } from 'lucide-react';
import styles from './AboutUs.module.css';

const teamMembers = [
  { name: 'Kapil Jangale', role: 'Director', quote: "Our roots define our strength. Let's build a foundation for a greener tomorrow.", img: '/Images/Team%20Members/Kapil.jpeg' },
  { name: 'Dilip Jangale', role: 'Director', quote: "Change is not an event, but a continuous journey of empowering communities.", img: '/Images/Team%20Members/Dilip.jpeg' },
  { name: 'Apurva Akre', role: 'Communications Officer', quote: "Awareness is the first step towards sustainable action. We must echo our mission far and wide.", img: '/Images/Team%20Members/Apurva.jpeg' },
  { name: 'Nikita Jangale', role: 'Implementation Head', quote: "Transforming waste into opportunity requires dedication at the absolute grassroots level.", img: '/Images/Team%20Members/Nikita.jpeg' },
  { name: 'Rohit Sharma', role: 'Finance Officer', quote: "Sustainable impact is driven by transparent and responsible resource management.", img: '/Images/Team%20Members/Rohit.jpeg' }
];

const sdgs = [
  { id: 3, label: "Good Health", color: "#4C9F38", img: "/Images/SDG/Health.avif" },
  { id: 5, label: "Gender Equality", color: "#FF3A21", img: "/Images/SDG/Gender_Equality.webp" },
  { id: 11, label: "Sustainable Cities", color: "#FD6925", img: "/Images/SDG/Sustainable_City.avif" },
  { id: 13, label: "Climate Action", color: "#3F7E44", img: "/Images/SDG/Climate%20action.jpg" },
  { id: 6, label: "Clean Water", color: "#26BDE2", img: "/Images/SDG/Clean_Water.jpg" }
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState('00');

  useEffect(() => {
    if (isInView) {
      let iterations = 0;
      const maxIterations = 20; // How many times it flashes
      const finalValueStr = value < 10 ? `0${value}` : `${value}`;

      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayValue(finalValueStr);
        } else {
          // Lottery effect: flash random matching double digits (e.g. 77, 88, 99)
          const randomDigit = Math.floor(Math.random() * 9) + 1;
          setDisplayValue(`${randomDigit}${randomDigit}`);
          iterations++;
        }
      }, 60); // 60ms between flashes

      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <motion.div 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        visible: { transition: { staggerChildren: 0.03 } }
      }}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <motion.span
            variants={{
              hidden: { opacity: 0, filter: 'blur(10px)', y: 10 },
              visible: { opacity: 1, filter: 'blur(0px)', y: 0 }
            }}
            style={{ display: "inline-block", willChange: "opacity, filter, transform" }}
          >
            {word}
          </motion.span>
          {" "}
        </React.Fragment>
      ))}
    </motion.div>
  );
};

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.aboutPage}>
      <Helmet>
        <title>About Us - Plastroots Foundation</title>
        <meta name="description" content="Learn about our mission to turn waste into opportunity. Plastroots Foundation operates at the grassroots to foster environmental stewardship and build a circular future." />
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
              Plastroots Foundation is a not-for-profit organization registered under Section 8 of the Companies Act 2013, committed to driving a positive change through our integrated approach to social, economic and environmental initiatives. With our passion for transformation, we strive to create a sustainable impact and empower communities.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.primaryBtn} onClick={() => navigate('/contact')}>Get In Touch</button>
              <button className={styles.secondaryBtn} onClick={() => navigate('/initiatives')}>Plastroots Foundation Initiatives</button>
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
              <img 
                src="/Images/DSC06325.JPG" 
                alt="About Plastroots Foundation" 
                className={styles.heroImage}
              />
            </div>
            <div className={styles.directorQuoteCard}>
              <div className={styles.quoteIcon}>"</div>
              <div className={styles.quoteContent}>
                <p className={styles.quoteText}>Our roots define our strength. Let's build a foundation for a greener tomorrow.</p>
                <p className={styles.quoteAuthor}>— Kapil Jangale, Director</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Basic About Us: Who We Are & Core Focus Areas */}
      <section className={styles.splitSection}>
        <div className={styles.leftPanel}>
          <div className={styles.panelTitle}>Our Core Belief</div>
          <AnimatedText 
            className={styles.quoteBlock}
            text="Every piece of waste has a story. Most end up in landfills, drains, or open spaces, quietly choking our environment. We believe they deserve a better ending."
          />
          <div className={styles.highlightText}>
            "Turning Waste Into Opportunity"
          </div>
          <div className={styles.subText}>
            Working at the absolute grassroots of rural and peri-urban India, we don't just manage waste, we transform it into valuable resources. By empowering communities and fostering environmental stewardship, we are bridging the gap between ecology and economy to build a circular future where nothing is wasted and everyone thrives, one community at a time.
          </div>
          
          <div className={styles.leftPanelImageGrid}>
            <div className={styles.leftPanelImageCard}>
              <img src="/Images/Gallery/IMG_20260425_142236_073.jpg.jpeg" alt="Initiative 1" />
            </div>
            <div className={styles.leftPanelImageCard}>
              <img src="/Images/Initivaties-2.jpeg" alt="Initiative 2" />
            </div>
          </div>
        </div>
        
        <div className={styles.rightPanel}>
          <h2 className={styles.rightTitle}>WHO WE ARE?</h2>
          <p className={styles.rightText}>
            Plastroots Foundation was founded on a simple yet profound conviction: lasting environmental change must take root at the community level. Operating at the critical intersection of ecological preservation, sustainable livelihoods, and public health, we actively engage with India's rural and peri-urban landscapes. Rather than waiting for waste crises to overwhelm urban centers, we proactively intervene where the challenges originate, working hand-in-hand with local residents to forge resilient, community-led solutions.
          </p>
          <p className={styles.rightText} style={{ marginTop: '1rem' }}>
            Our mission extends beyond mere waste management; we are dedicated to building a thriving circular economy that benefits everyone. By transforming discarded materials into valuable resources, we create new economic opportunities while safeguarding natural ecosystems. Through grassroots education, women's empowerment, and strategic partnerships, Plastroots Foundation is committed to nurturing a generation of environmental stewards and proving that true sustainability is born from local action.
          </p>
          
          <h3 className={styles.focusAreaTitle}>Core Focus Areas</h3>
          <div className={styles.focusAreas}>
            <div className={styles.focusCard}>
              <div className={styles.focusCardTitle}>Rural Resource Recovery Centres (R-RRC)</div>
              <div className={styles.focusCardText}>Building community-based systems for waste collection, segregation, resource recovery, and responsible recycling.</div>
            </div>
            <div className={styles.focusCard}>
              <div className={styles.focusCardTitle}>Information, Education & Communication (IEC)</div>
              <div className={styles.focusCardText}>Creating awareness and driving behavioural change through campaigns, workshops, school programs, and community engagement activities.</div>
            </div>
            <div className={styles.focusCard}>
              <div className={styles.focusCardTitle}>CSR Project Implementation</div>
              <div className={styles.focusCardText}>Designing and executing impactful CSR initiatives with end-to-end planning, implementation, monitoring, and reporting.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & SDG Goals */}
      <section className={styles.visionMissionSection} style={{ marginTop: '50px', zIndex: 1, position: 'relative' }}>
        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.iconWrapper}>
            <Target size={40} />
          </div>
          <h2 className={styles.cardTitle}>Vision</h2>
          <p className={styles.cardText}>
            Our vision is to empower marginalized communities, foster inclusivity and pave the way for a sustainable and equitable future.
          </p>
        </motion.div>

        <motion.div 
          className={styles.card}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.iconWrapper}>
            <Lightbulb size={40} />
          </div>
          <h2 className={styles.cardTitle}>Mission</h2>
          <p className={styles.cardText}>
            Our mission includes improving working conditions, promoting gender equality and women's empowerment with environmental awareness & health. We preserve nature's diversity, promote upcycled/recycled products for a circular economy, seeking collaborations for mutual support and resources.
          </p>
        </motion.div>
      </section>

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
                <h3 className={styles.sdgId} style={{ color: sdg.color }}><AnimatedNumber value={sdg.id} /></h3>
                <p className={styles.sdgLabel}>{sdg.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. History & Journey Next */}
      <section className={styles.journeySection}>
        <div className={styles.journeyLeft}>
          <h2 className={styles.journeyTitle}>Our Journey</h2>
          <div className={styles.journeySubtitle}>From Idea to Impact</div>
          <p className={styles.journeyText} style={{ marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: 500, color: 'var(--brand-green)' }}>
            "Every Meaningful Change Starts With A Simple Step."
          </p>
          <p className={styles.journeyText}>
            What began as a grassroots effort to address local waste challenges has evolved into a movement driven by awareness, community participation, resource recovery, and sustainable action.
          </p>
          <br/>
          <p className={styles.journeyText}>
            Over the years, we have expanded our efforts from local awareness programs to comprehensive waste management systems, CSR partnerships, and large-scale community engagement initiatives.
          </p>
        </div>

        <div className={styles.timelinePanel}>
          {/* 2023 */}
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          >
            <div className={styles.timelineIcon}><Leaf size={35} /></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>2023</div>
              <div className={styles.timelineImageWrapper}>
                <img src="/Images/Our%20Journey/About-us-1024x587.jpeg" alt="2023 Journey" className={styles.timelineImage} />
              </div>
              <div className={styles.timelineContentTitle}>FOUNDATION ESTABLISHED</div>
              <div className={styles.timelineContentText}>A vision for sustainable communities took root.</div>
              <div className={styles.timelineBubble}>
                We started with simple belief - communities can lead the way towards a cleaner, greener future.
              </div>
            </div>
          </motion.div>

          {/* 2024 */}
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          >
            <div className={`${styles.timelineIcon} ${styles.timelineIconBlue}`}><Recycle size={35} /></div>
            <div className={`${styles.timelineContent} ${styles.timelineContentBlue}`}>
              <div className={styles.timelineYear}>2024</div>
              <div className={styles.timelineImageWrapper}>
                <img src="/Images/Our%20Journey/WhatsApp%20Image%202026-06-11%20at%202.55.58%20PM.jpeg" alt="2024 Journey" className={styles.timelineImage} />
              </div>
              <div className={styles.timelineContentTitle}>Pilot Programs & Capacity Building</div>
              <div className={styles.timelineContentText}>Volunteer Mobilization & Planning.</div>
              <div className={`${styles.timelineBubble} ${styles.bubbleBlue}`}>
                The foundation moved from vision to action by initiating pilot projects and building the capacity needed for long-term community impact.
              </div>
            </div>
          </motion.div>

          {/* 2025 */}
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          >
            <div className={styles.timelineIcon}><Megaphone size={35} /></div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineYear}>2025</div>
              <div className={styles.timelineImageWrapper}>
                <img src="/Images/Our%20Journey/Plastroots%20Foundation%20organized%20an%20Awareness%20Rally%20at%20Z.P.U.%20Primary%20School,%20Nanda%20(Koradi)%20und.webp" alt="2025 Journey" className={styles.timelineImage} />
              </div>
              <div className={styles.timelineContentTitle}>IEC Community Engagement & CSR Partnerships</div>
              <div className={styles.timelineContentText}>Schools & Communities became active participants in environmental change.</div>
              <div className={styles.timelineBubble}>
                IEC activities, school programs & campaigns helped spread awareness & inspire action.
              </div>
            </div>
          </motion.div>

          {/* 2026 */}
          <motion.div 
            className={styles.timelineItem}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
          >
            <div className={`${styles.timelineIcon} ${styles.timelineIconBlue}`}><Landmark size={35} /></div>
            <div className={`${styles.timelineContent} ${styles.timelineContentBlue}`}>
              <div className={styles.timelineYear}>2026</div>
              <div className={styles.timelineImageWrapper}>
                <img src="/Images/Our%20Journey/RRC.png" alt="2026 Journey" className={styles.timelineImage} />
              </div>
              <div className={styles.timelineContentTitle}>RRC Operations & Government Projects</div>
              <div className={styles.timelineContentText}>RRC helped strengthen local waste management.</div>
              <div className={`${styles.timelineBubble} ${styles.bubbleBlue}`}>
                What started with community-based waste management grew into larger collaborations, helping us scale sustainable solutions and reach more communities & Government bodies.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Impact & Contribution */}
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

      {/* 6. Team Members Section */}
      <section className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Leadership & Visionaries</h2>
        <p className={styles.sectionSubtitle}>
          The dedicated minds and passionate innovators driving our mission to create a sustainable, empowered future.
        </p>
        
        <div className={styles.teamContainer}>
          {/* Left Column (Dilip & Apurva) */}
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

          {/* Center Column (Kapil) */}
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

          {/* Right Column (Nikita & Rohit) */}
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
