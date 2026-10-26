import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Heart, ArrowLeft, Leaf, BookOpen, Users, Quote } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './CharityFlow.module.css';
import layoutStyles from './CollaborateSubPages.module.css';

const Donate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    pan: '',
    amount: '',
    paymentMode: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.pageWrapper} style={{ paddingBottom: 0 }}>
      <Helmet>
        <title>Donate - Plastroots Foundation</title>
        <meta name="description" content="Support Plastroots Foundation to create a sustainable circular economy and empower grassroots communities." />
      </Helmet>
      {/* Hero Section */}
      <section className={styles.hero}>
        <button 
          className={layoutStyles.backBtn} 
          onClick={() => navigate('/collaborate')}
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={18} /> Back to Collaborate
        </button>
        <motion.h1 
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          MAKE A DIFFERENCE <span>TODAY</span>
        </motion.h1>
        <motion.p 
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Your contribution empowers grassroots ecological initiatives and builds self-sustaining, circular economies. 
        </motion.p>
      </section>

      {/* 1. Why Donate Container */}
      <section className={styles.infoSection} style={{ padding: '80px 5%' }}>
        <div className={styles.contentGrid}>
          {/* Left: Text */}
          <motion.div 
            className={styles.contentText}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Why Donate to Plastroots Foundation?</h3>
            <p>
              At Plastroots Foundation, we believe in radical transparency and grassroots impact. When you donate, your funds don't disappear into a massive corporate machine. They go directly towards empowering local communities, educating children, and cleaning our environment.
            </p>
            <p>
              Every contribution acts as seed capital for a greener future. We transform waste into wealth by creating self-help groups, establishing circular economies, and instilling sustainable practices in the heart of rural and urban communities.
            </p>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Champion Ecological Balance</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Your support directly fuels our movement for environmental preservation and community upliftment.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Resource Recovery Programs</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Enable comprehensive waste management that turns discarded plastics into valuable resources.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Sustainable Livelihoods</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Empower marginalized communities by providing consistent income and green employment opportunities.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Build a Circular Economy</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Help us forge a path towards a zero-waste society where every individual thrives in harmony with nature.</span>
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
              src="/Images/Donation page/Donating.svg" 
              alt="Hand adding money to donation box" 
              className={styles.contentImage} 
              style={{ background: 'transparent', boxShadow: 'none', height: 'auto', maxHeight: '380px', objectFit: 'contain' }} 
            />
            
            {/* Quote Block Custom Styled */}
            <div className={layoutStyles.quoteCard} style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', position: 'relative', width: '100%', marginTop: '10px' }}>
              <Quote className={layoutStyles.quoteIcon} style={{ fontSize: '4rem', color: 'rgba(32, 156, 93, 0.1)', position: 'absolute', top: '20px', left: '20px' }} />
              <p className={layoutStyles.quoteText} style={{ fontSize: '2rem', marginTop: '20px', paddingLeft: '10px' }}>
                "Every rupee invested in grassroots ecology returns a hundredfold in community resilience and environmental healing."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Where Your Money Goes Container */}
      <section className={styles.infoSection} style={{ padding: '80px 5%', backgroundColor: '#f0f4f8', maxWidth: '100%' }}>
        <h2 className={styles.sectionTitle} style={{ marginBottom: '60px' }}>Where Your Money Goes</h2>
        <div className={styles.statsGrid}>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Leaf size={40} className={styles.statIcon} />
            <h4>Environmental Recovery</h4>
            <p>Funding local waste management infrastructure and large-scale cleanups.</p>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Users size={40} className={styles.statIcon} />
            <h4>Community Empowerment</h4>
            <p>Creating self-help groups and providing sustainable livelihood training for women.</p>
          </motion.div>
          <motion.div className={styles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <BookOpen size={40} className={styles.statIcon} />
            <h4>Education & IEC</h4>
            <p>Organizing awareness campaigns and educating the next generation in schools.</p>
          </motion.div>
        </div>
      </section>

      {/* 4. Donation Form Container */}
      <section className={styles.widgetSection}>
        <div className={styles.widgetContainer}>
          <motion.div 
            className={styles.donationCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', padding: '60px 20px' }}
              >
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--brand-blue), var(--brand-green))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <Heart size={36} color="#fff" fill="#fff" />
                </div>
                <h3 style={{ fontSize: '2rem', color: 'var(--brand-blue)', marginBottom: '16px' }}>Thank You, {formData.fullName}!</h3>
                <p style={{ fontSize: '1.1rem', color: '#64748b', maxWidth: '500px', margin: '0 auto 32px', lineHeight: 1.7 }}>
                  Your generosity of <strong style={{ color: 'var(--brand-blue)' }}>₹{formData.amount}</strong> means the world to us. Together, we're building a cleaner, greener future.
                </p>
                <button
                  className={styles.submitBtn}
                  style={{ maxWidth: '300px', margin: '0 auto' }}
                  onClick={() => { setSubmitted(false); setFormData({ fullName: '', mobile: '', email: '', pan: '', amount: '', paymentMode: '' }); }}
                >
                  Make Another Donation
                </button>
              </motion.div>
            ) : (
            <form onSubmit={handleSubmit}>
              <h3 className={styles.amountTitle} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--brand-blue)' }}>Make a Donation</h3>

              <div className={styles.formSection} style={{ marginTop: '0', paddingTop: '0', borderTop: 'none' }}>
                <div className={styles.formGrid}>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Full Name</label>
                    <input type="text" name="fullName" className={styles.input} placeholder="Enter Your Full Name" value={formData.fullName} onChange={handleChange} required />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Mobile Number</label>
                    <input type="tel" name="mobile" className={styles.input} placeholder="Enter 10-Digit Mobile Number" value={formData.mobile} onChange={handleChange} required />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>Email Address</label>
                    <input type="email" name="email" className={styles.input} placeholder="Enter Your Email Address" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className={styles.formGroup}>
                    <label className={styles.label}>PAN Card Number</label>
                    <input type="text" name="pan" className={styles.input} placeholder="ABCDE1234F" value={formData.pan} onChange={handleChange} required />
                  </div>

                  <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                    <label className={styles.label}>Donation Amount (₹)</label>
                    <input type="number" name="amount" className={styles.input} placeholder="Enter amount (₹)" value={formData.amount} onChange={handleChange} required min="100" />
                  </div>

                  {formData.amount && (
                    <motion.div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                    >
                      <label className={styles.label}>Select Payment Mode</label>
                      <select name="paymentMode" className={styles.input} value={formData.paymentMode} onChange={handleChange} required>
                        <option value="" disabled>Select Option</option>
                        <option value="UPI">UPI</option>
                        <option value="Bank Transfer">Bank Transfer ( NEFT / RTGS )</option>
                      </select>
                    </motion.div>
                  )}

                  {formData.paymentMode === 'UPI' && formData.amount && (
                    <motion.div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                       <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '30px', marginTop: '10px', textAlign: 'center' }}>
                          <h4 style={{ color: 'var(--brand-blue)', marginBottom: '8px' }}>Scan to Pay via UPI</h4>
                          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '24px' }}>Amount: <strong style={{ color: 'var(--brand-blue)', fontSize: '1.1rem' }}>₹{formData.amount}</strong></p>
                          <div style={{ display: 'inline-block', padding: '16px', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
                            <QRCodeSVG
                              value={`upi://pay?pa=plastrootskapil@sbi&pn=PLASTROOTS%20FOUNDATION&am=${formData.amount}&cu=INR`}
                              size={200}
                              level="M"
                              includeMargin={false}
                            />
                          </div>
                          <p style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '16px' }}>UPI ID: <strong style={{ color: 'var(--text-dark)' }}>plastrootskapil@sbi</strong></p>
                       </div>
                    </motion.div>
                  )}

                  {formData.paymentMode === 'Bank Transfer' && (
                    <motion.div
                      className={`${styles.formGroup} ${styles.fullWidth}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                       <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '12px', padding: '20px', marginTop: '10px' }}>
                          <h4 style={{ color: 'var(--brand-blue)', marginBottom: '15px' }}>Bank Account Details</h4>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.95rem' }}>
                             <div><strong>Account Name:</strong><br/>PLASTROOTS FOUNDATION</div>
                             <div><strong>Account Number:</strong><br/>43390083855</div>
                             <div><strong>IFSC Code:</strong><br/>SBIN0030469</div>
                             <div><strong>Bank Name:</strong><br/>State Bank of India</div>
                             <div style={{ gridColumn: '1 / -1' }}><strong>Branch:</strong><br/>Trimurti Nagar, Khamala, Nagpur, 440025</div>
                          </div>
                       </div>
                    </motion.div>
                  )}

                </div>
              </div>

              <button type="submit" className={styles.submitBtn} style={{ marginTop: '40px' }}>
                <Heart size={20} />
                Donate {formData.amount ? `₹${formData.amount}` : 'Now'}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
