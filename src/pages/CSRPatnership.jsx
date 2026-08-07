import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Briefcase, FileText, Target, Quote, ArrowLeft, Leaf } from 'lucide-react';
import layoutStyles from './CollaborateSubPages.module.css';
import charityStyles from './CharityFlow.module.css';

const CSRPatnership = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    inquiry: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.fullName}. We have received your CSR inquiry for ${formData.company} and will send a proposal shortly.`);
  };

  return (
    <div className={charityStyles.pageWrapper} style={{ paddingBottom: 0 }}>
      <Helmet>
        <title>CSR Partnership - Plastroots Foundation</title>
        <meta name="description" content="Partner with Plastroots Foundation to fulfill your CSR goals through robust environmental, waste management, and sustainability programs." />
      </Helmet>

      {/* Hero Section */}
      <section 
        className={layoutStyles.hero}
        style={{ 
          backgroundImage: 'url("/Images/CSR_Partnership_Hero_Section.png")',
          backgroundPosition: 'center 30%'
        }}
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
          <h1 className={layoutStyles.heroTitle}>
            <span style={{ color: 'white' }}>CSR</span> <span style={{ color: '#4ade80' }}>PARTNERSHIPS</span>
          </h1>
          <p className={layoutStyles.heroDesc}>
            Align your corporate values with impactful, on-the-ground environmental and social initiatives. Let's build a sustainable legacy together.
          </p>
        </motion.div>
      </section>

      {/* 1. Strategic Impact Container */}
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
            <h3 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Purpose-Driven Partnerships</h3>
            <p>
              Plastroots Foundation partners with leading corporations to design and execute CSR projects that deliver measurable environmental and socio-economic outcomes. 
            </p>
            
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>ESG Alignment</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Partner with us to execute measurable outcomes that directly align with your ESG targets.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Decentralized Waste Management</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Set up community infrastructure for efficient, hyper-local resource recovery and recycling.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Rural Education</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>Sponsor on-ground education and awareness programs that inspire the next generation of environmental stewards.</span>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                <div style={{ backgroundColor: 'rgba(32, 156, 93, 0.1)', color: 'var(--brand-green)', padding: '5px', borderRadius: '50%', display: 'flex' }}>
                  <Leaf size={20} />
                </div>
                <div>
                  <strong style={{ display: 'block', color: 'var(--brand-blue)', marginBottom: '5px' }}>Turnkey Execution</strong>
                  <span style={{ fontSize: '1rem', color: '#64748b' }}>We provide end-to-end, highly transparent project management ensuring your CSR funds are utilized efficiently.</span>
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
              src="/Images/CSR Partnership/Handshake.svg" 
              alt="CSR Action" 
              style={{ height: 'auto', maxHeight: '380px', width: '100%', maxWidth: '400px' }} 
            />
            
            {/* Quote Block Custom Styled */}
            <div className={layoutStyles.quoteCard} style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', position: 'relative', width: '100%', marginTop: '10px' }}>
              <Quote className={layoutStyles.quoteIcon} style={{ fontSize: '4rem', color: 'rgba(32, 156, 93, 0.1)', position: 'absolute', top: '20px', left: '20px' }} />
              <p className={layoutStyles.quoteText} style={{ fontSize: '2rem', marginTop: '20px', paddingLeft: '10px' }}>
                "Sustainability isn't a compliance checklist. It is a strategic commitment to the communities and ecosystems that sustain your growth."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Info Cards Section */}
      <section className={charityStyles.infoSection} style={{ padding: '80px 5%', backgroundColor: '#f0f4f8', maxWidth: '100%' }}>
        <h2 className={charityStyles.sectionTitle} style={{ marginBottom: '60px' }}>Why Partner With Us?</h2>
        <div className={charityStyles.statsGrid}>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Target size={40} className={charityStyles.statIcon} />
            <h4>ESG Alignment</h4>
            <p>Projects meticulously designed to help your company meet its Environmental, Social, and Governance targets.</p>
          </motion.div>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <FileText size={40} className={charityStyles.statIcon} />
            <h4>Transparent Reporting</h4>
            <p>Receive detailed quarterly impact reports, financial audits, and visual documentation of project milestones.</p>
          </motion.div>
          <motion.div className={charityStyles.statCard} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Briefcase size={40} className={charityStyles.statIcon} />
            <h4>Turnkey Execution</h4>
            <p>From conceptualization to on-ground execution and monitoring, we handle the entire project lifecycle.</p>
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
          <div className={charityStyles.showcaseImg} style={{ backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b', fontWeight: 'bold' }}>Image Placeholder 4</div>
        </div>
      </section>

      {/* 4. CSR Form Container */}
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
              <h3 className={charityStyles.amountTitle} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px', color: 'var(--brand-blue)' }}>Request a Proposal</h3>
              <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>Provide your details and our corporate relations team will be in touch.</p>
              
              <div className={charityStyles.formSection} style={{ marginTop: '0', paddingTop: '0', borderTop: 'none' }}>
                <div className={charityStyles.formGrid}>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Contact Person Name</label>
                    <input type="text" name="fullName" className={charityStyles.input} placeholder="Enter your full name" value={formData.fullName} onChange={handleChange} required />
                  </div>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Company Name</label>
                    <input type="text" name="company" className={charityStyles.input} placeholder="Enter your company name" value={formData.company} onChange={handleChange} required />
                  </div>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Official Email Address</label>
                    <input type="email" name="email" className={charityStyles.input} placeholder="Enter your corporate email" value={formData.email} onChange={handleChange} required />
                  </div>
                  
                  <div className={charityStyles.formGroup}>
                    <label className={charityStyles.label}>Phone Number</label>
                    <input type="tel" name="phone" className={charityStyles.input} placeholder="Enter your phone number" value={formData.phone} onChange={handleChange} required />
                  </div>
                  
                  <div className={`${charityStyles.formGroup} ${charityStyles.fullWidth}`}>
                    <label className={charityStyles.label}>CSR Goals / Inquiry Details</label>
                    <textarea 
                      name="inquiry"
                      className={charityStyles.textarea} 
                      style={{ padding: '15px', border: '1px solid #cbd5e1', borderRadius: '12px', width: '100%', minHeight: '120px', fontFamily: 'inherit', fontSize: '1rem' }}
                      placeholder="Briefly describe your CSR objectives or the type of partnership you are looking for..." 
                      value={formData.inquiry}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                </div>
              </div>

              <button type="submit" className={charityStyles.submitBtn} style={{ marginTop: '40px' }}>
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CSRPatnership;
