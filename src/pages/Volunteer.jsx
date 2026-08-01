import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Users, GraduationCap, Award, Quote, ArrowLeft, Leaf } from 'lucide-react';
import layoutStyles from './CollaborateSubPages.module.css';
import charityStyles from './CharityFlow.module.css';

const Volunteer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for signing up to volunteer, ${formData.fullName}! Our team will contact you soon.`);
  };

  return (
    <div className={charityStyles.pageWrapper} style={{ paddingBottom: 0 }}>
      <Helmet>
        <title>Volunteer With Us - Plastroots Foundation</title>
        <meta name="description" content="Join our team of volunteers at Plastroots Foundation. Participate in grassroots environmental stewardship and circular economy initiatives." />
      </Helmet>
      
      {/* Hero Section */}
      <section 
        className={layoutStyles.hero}
        style={{ backgroundImage: 'url("/Images/Gallery/WhatsApp Image 2026-06-13 at 6.43.41 PM (1).jpeg")' }}
      >
        <button className={layoutStyles.backBtn} onClick={() => navigate('/collaborate')}>
          <ArrowLeft size={18} /> Back to Collaborate
        </button>
        <div className={layoutStyles.heroOverlay}></div>
        <motion.div 
          className={layoutStyles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={layoutStyles.heroTitle}>BECOME A VOLUNTEER</h1>
          <p className={layoutStyles.heroDesc}>
            Join our dedicated team of changemakers. Roll up your sleeves and make a tangible difference in your local community through hands-on environmental action.
          </p>
        </motion.div>
      </section>

      {/* 1. Action Starts With You Container */}
      <section className={charityStyles.infoSection} style={{ padding: '80px 5%' }}>
        <div className={charityStyles.contentGrid}>
          {/* Left: Text and Bullets */}
          <motion.div 
            className={charityStyles.contentText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Action Starts With You</h3>
            <p>
              Whether you're a student looking to gain experience, a professional wanting to give back on weekends, or a retiree with a passion for the environment, there is a place for you at Plastroots Foundation.
            </p>
            
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Students</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Gain grassroots experience and build your academic profile with hands-on conservation work.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Professionals</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Give back to the community on your weekends by lending your skills to sustainable causes.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Retirees</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Share your lifelong knowledge and passion to mentor and inspire environmental stewardship.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Core Activities</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Lead local cleanliness drives, run school awareness workshops, and assist our Self-Help Groups with recycling processes.</span>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Right: SVG and Quote Stacked */}
          <motion.div
            style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/Images/Volunteer Page/Volunteer.svg" 
              alt="Volunteer Action" 
              className={charityStyles.contentImage} 
              style={{ background: 'transparent', boxShadow: 'none', width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain' }} 
            />
            
            {/* Quote Block Custom Styled */}
            <div className={layoutStyles.quoteCard} style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', position: 'relative', width: '100%', marginTop: '10px' }}>
              <Quote className={layoutStyles.quoteIcon} style={{ fontSize: '4rem', color: 'rgba(32, 156, 93, 0.1)', position: 'absolute', top: '20px', left: '20px' }} />
              <p className={layoutStyles.quoteText} style={{ fontSize: '2rem', marginTop: '20px', paddingLeft: '10px' }}>
                "True change doesn't happen in boardrooms. It happens on the ground, driven by hands willing to dig into the earth."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Info Cards Section */}
      <section className={charityStyles.infoSection} style={{ padding: '80px 5%', backgroundColor: '#f0f4f8', maxWidth: '100%' }}>
        <h2 className={charityStyles.sectionTitle} style={{ marginBottom: '60px' }}>Why Volunteer With Us?</h2>
        <div className={charityStyles.statsGrid}>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Users size={40} className={charityStyles.statIcon} />
            <h4>Community</h4>
            <p>Connect with like-minded individuals who share your passion for sustainability.</p>
          </motion.div>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <GraduationCap size={40} className={charityStyles.statIcon} />
            <h4>Experience</h4>
            <p>Gain invaluable grassroots experience in project management and event coordination.</p>
          </motion.div>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Award size={40} className={charityStyles.statIcon} />
            <h4>Certification</h4>
            <p>Receive official volunteer certificates to bolster your resume and academic profile.</p>
          </motion.div>
        </div>
      </section>

      {/* 3. See the Impact Container */}
      <section className={charityStyles.infoSection} style={{ padding: '80px 5%' }}>
        <h2 className={charityStyles.sectionTitle} style={{ marginBottom: '60px' }}>See the Impact</h2>
        <div className={charityStyles.imageShowcase}>
          <div className={charityStyles.showcaseImg} style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>Image Placeholder 1</div>
          <div className={charityStyles.showcaseImg} style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>Image Placeholder 2</div>
          <div className={charityStyles.showcaseImg} style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>Image Placeholder 3</div>
        </div>
      </section>

      {/* 4. Volunteer Form Container */}
      <section className={charityStyles.widgetSection}>
        <div className={charityStyles.widgetContainer}>
          <motion.div 
            className={charityStyles.donationCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit}>
              <h3 className={charityStyles.amountTitle} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--brand-blue)' }}>Volunteer Sign Up</h3>
              <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>Let us know how you'd like to help and we'll get you started.</p>
              
              <div className={charityStyles.formSection} style={{ marginTop: '0', paddingTop: '0', borderTop: 'none' }}>
                <div className={charityStyles.formGrid}>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Full Name</label>
                    <input type="text" name="fullName" className={charityStyles.input} placeholder="John Doe" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Phone Number</label>
                    <input type="tel" name="phone" className={charityStyles.input} placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} required />
                  </div>
                  
                  <div className={`${charityStyles.formGroup} ${charityStyles.fullWidth}`}>
                    <label className={charityStyles.label}>Email Address</label>
                    <input type="email" name="email" className={charityStyles.input} placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className={`${charityStyles.formGroup} ${charityStyles.fullWidth}`}>
                    <label className={charityStyles.label}>Additional Message (Optional)</label>
                    <textarea 
                      name="message"
                      className={charityStyles.textarea} 
                      style={{ padding: '15px', border: '1px solid #cbd5e1', borderRadius: '12px', width: '100%', minHeight: '120px', fontFamily: 'inherit', fontSize: '1rem' }}
                      placeholder="Tell us a bit about yourself or how you want to help..." 
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                </div>
              </div>

              <button type="submit" className={charityStyles.submitBtn} style={{ marginTop: '40px' }}>
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
