import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          
          <div className={styles.leftCol}>
            <div className={styles.footerBrand}>
              <img src="/Images/Header/PF_LOGO.png" alt="Plastroots Logo" className={styles.footerLogo} />
              <span>PLASTROOTS FOUNDATION</span>
            </div>
            <p className={styles.footerDesc}>
              Bridging the gap between environmental sustainability and social equity. Driving grassroots initiatives to uplift communities and protect the planet.
            </p>
          </div>
          
          <div className={styles.middleCol}>
            <div className={styles.middleContent}>
              
              <div className={styles.linksSection}>
                <h4 className={styles.footerTitle}>Quick Links</h4>
                <div className={styles.quickLinksGrid}>
                  <ul className={styles.footerLinks}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/initiatives">Our Initiatives</a></li>
                    <li><a href="/csr">CSR Projects</a></li>
                  </ul>
                  <ul className={styles.footerLinks}>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/collaborate">Collaborate</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.socialSection}>
                <h4 className={styles.footerTitle}>Follow Us</h4>
                <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/plastrootsfoundation/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.5v.01"/><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/plastroots-foundation/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.facebook.com/p/Plastroots-Foundation-61579938444905/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
              </div>
              
            </div>
          </div>
          
          <div className={styles.rightCol}>
            <div className={styles.rightContent}>
              <h4 className={styles.footerTitle}>Address</h4>
              <p className={styles.contactItem}><MapPin size={24} className={styles.contactIcon} /> <span>Plot no 12A, 1st Floor, Smruti Nagar Rd, Smruti Nagar, Koradi, Bokara, Nagpur Maharashtra 441111</span></p>
              <p className={styles.contactItem}><Phone size={20} className={styles.contactIcon} /> <span>+91 72497 91152 , +91 74475 86067</span></p>
              <p className={styles.contactItem}><Mail size={20} className={styles.contactIcon} /> <span>impact@plastrootsfoundation.org</span></p>
            </div>
          </div>
          
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Plastroots Foundation. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/privacy" style={{ color: 'inherit' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'inherit' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
