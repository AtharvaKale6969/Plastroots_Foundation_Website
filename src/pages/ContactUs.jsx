import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send, Share2, Globe, Link } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Add logic to actually send the message here
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Contact Us - Plastroots Foundation</title>
        <meta name="description" content="Get in touch with Plastroots Foundation. Collaborate with us to manage waste and turn it into opportunity." />
      </Helmet>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            <span style={{ color: 'white' }}>GET IN</span> <span style={{ color: '#4ade80' }}>TOUCH</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Have a question, want to volunteer, or looking to partner with us? We'd love to hear from you. Drop us a message and our team will get back to you promptly.
          </p>
        </motion.div>
      </section>

      {/* Contact Grid Section */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          
          {/* Left Column: FAQs & Socials */}
          <div className={styles.infoColumn}>
            <h2 className={styles.infoTitle}>Frequently Asked Questions</h2>
            
            <div className={styles.faqList}>
              <div className={styles.faqItemSmall}>
                <h4>What does Plastroots Foundation do?</h4>
                <p>We build a circular economy through sustainable waste management, rural education, and community empowerment programs.</p>
              </div>
              <div className={styles.faqItemSmall}>
                <h4>What are your key initiatives?</h4>
                <p>Our core focus areas include Farmer Welfare, Health & Education, Women Development, and Waste Management projects.</p>
              </div>
              <div className={styles.faqItemSmall}>
                <h4>How do your programs work?</h4>
                <p>We partner with local communities and volunteers to create localized recycling setups and spread grassroots environmental awareness.</p>
              </div>
            </div>

            <h4 style={{marginTop: '1rem', marginBottom: '1rem', color: 'var(--brand-green)', fontWeight: 600}}>Follow Us</h4>
            <div className={styles.socials} style={{margin: 0}}>
              <a href="#" className={styles.socialIcon}>Fb</a>
              <a href="#" className={styles.socialIcon}>In</a>
              <a href="#" className={styles.socialIcon}>X</a>
              <a href="#" className={styles.socialIcon}><Globe size={20} /></a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formColumn}>
            <h2 className={styles.formTitle}>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className={styles.formInput} 
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email ID</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className={styles.formInput} 
                  placeholder="Enter Your Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  className={styles.formInput} 
                  placeholder="Enter 10-Digit Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className={styles.formInput} 
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Bottom Grid: Contact Info and Map */}
      <section className={styles.mapInfoSection}>
         <div className={styles.mapInfoContainer}>
            {/* Left: Contact Info */}
            <div className={styles.contactDetails}>
              <h2 className={styles.contactDetailsTitle}>Direct Contact</h2>
              
              <div className={styles.contactDetailsList}>
                <div className={styles.contactDetailsItem}>
                  <div className={styles.iconWrapper}><MapPin size={24} /></div>
                  <div>
                    <h4>Our Headquarters</h4>
                    <p>Plot no 12A, 1st Floor, Smruti Nagar Rd,<br/>Smruti Nagar, Koradi, Bokara,<br/>Nagpur Maharashtra 441111</p>
                  </div>
                </div>
                
                <div className={styles.contactDetailsItem}>
                  <div className={styles.iconWrapper}><Mail size={24} /></div>
                  <div>
                    <h4>Email Us</h4>
                    <p>impact@plastrootsfoundation.org</p>
                  </div>
                </div>
                
                <div className={styles.contactDetailsItem}>
                  <div className={styles.iconWrapper}><Phone size={24} /></div>
                  <div>
                    <h4>Call Us</h4>
                    <p>+91 72497 91152<br/>+91 74475 86067</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map */}
            <div className={styles.largeMapWrapper}>
              <iframe 
                title="Plastroots Location"
                src="https://maps.google.com/maps?q=21.2166221,79.079491&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
         </div>
      </section>
    </div>
  );
};

export default ContactUs;
