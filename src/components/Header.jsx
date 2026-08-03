import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { pathname } = location;

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (e, name) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
          
          <a href="/" className={styles.logo}>
            <img src="/Images/Header/PF_LOGO.png" alt="Plastroots Logo" className={styles.logoImg} />
            <img src="/Images/Header/PF_Name.png" alt="Plastroots Foundation" className={styles.nameImg} />
          </a>
          
          {/* Hamburger Icon */}
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Backdrop overlay */}
          <div 
            className={`${styles.backdrop} ${isMenuOpen ? styles.backdropVisible : ''}`}
            onClick={() => setIsMenuOpen(false)}
          />

          <ul id="mobile-navigation" className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li className={styles.menuItem}><a href="/" className={pathname === '/' ? styles.active : ''}>Home</a></li>
            <li className={styles.menuItem}><a href="/about" className={pathname === '/about' ? styles.active : ''}>About Us</a></li>
            {/* Our Initiatives Dropdown */}
            <li className={styles.menuItem}>
              <a href="/initiatives" className={`${styles.dropdownToggle} ${pathname.startsWith('/initiatives') ? styles.active : ''}`} style={{ textDecoration: 'none' }} onClick={(e) => toggleDropdown(e, 'initiatives')}>
                Our Initiatives <ChevronDown size={16} className={`${styles.chevron} ${activeDropdown === 'initiatives' ? styles.chevronOpen : ''}`} />
              </a>
              <ul className={`${styles.dropdownMenu} ${activeDropdown === 'initiatives' ? styles.dropdownOpen : ''}`}>
                <li className={styles.dropdownItem}><a href="/initiatives/iec" className={pathname === '/initiatives/iec' ? styles.active : ''}>IEC (Information, Education & Communication)</a></li>
                <li className={styles.dropdownItem}><a href="/initiatives/farmer-stewardship" className={pathname === '/initiatives/farmer-stewardship' ? styles.active : ''}>Farmer Stewardship Program</a></li>
                <li className={styles.dropdownItem}><a href="/initiatives/waste-management" className={pathname === '/initiatives/waste-management' ? styles.active : ''}>Waste Management Projects</a></li>
                <li className={styles.dropdownItem}><a href="/initiatives/health-activities" className={pathname === '/initiatives/health-activities' ? styles.active : ''}>Health Activities</a></li>
                <li className={styles.dropdownItem}><a href="/initiatives/education-activities" className={pathname === '/initiatives/education-activities' ? styles.active : ''}>Education Activities</a></li>
                <li className={styles.dropdownItem}><a href="/initiatives/women-development" className={pathname === '/initiatives/women-development' ? styles.active : ''}>Women Development</a></li>
              </ul>
            </li>
            <li className={styles.menuItem}><a href="/csr-projects" className={pathname === '/csr-projects' ? styles.active : ''}>CSR Projects</a></li>
            <li className={styles.menuItem}><a href="/gallery" className={pathname === '/gallery' ? styles.active : ''}>Gallery</a></li>
            <li className={styles.menuItem}><a href="/blogs" className={pathname === '/blogs' ? styles.active : ''}>Blogs</a></li>
            
            <li className={styles.menuItem}><a href="/collaborate" className={pathname === '/collaborate' ? styles.active : ''}>Collaborate</a></li>
            
            {/* Mobile Actions inside Menu */}
            <li className={styles.mobileActions}>
              <a href="/contact" className={styles.contactBtn}>Contact Us</a>
              <a href="/donate" className={styles.donateBtn}>Donate Now</a>
            </li>
          </ul>
          
          {/* Desktop Actions */}
          <div className={styles.rightNav}>
            <a href="/contact" className={styles.contactBtn}>Contact Us</a>
            <a href="/donate" className={styles.donateBtn}>Donate Now</a>
          </div>
          
        </nav>
    </header>
  );
};

export default Header;
