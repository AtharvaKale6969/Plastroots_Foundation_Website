import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryData = [
  { id: 1, src: "/Images/Gallery/Bisleri_1.jpeg", category: "Project", year: "FY 2025 - 2026" },
  { id: 2, src: "/Images/Gallery/ChatGPT Image Jun 29, 2026, 06_02_02 PM.png", category: "Campaign", year: "FY 2025 - 2026" },
  { id: 3, src: "/Images/Gallery/I am thrilled to inform you that our recent cleanliness campaign was a resounding success, than.webp", category: "Campaign", year: "FY 2024 - 2025" },
  { id: 4, src: "/Images/Gallery/IMG_20260425_142236_073.jpg.jpeg", category: "Event", year: "FY 2025 - 2026" },
  { id: 5, src: "/Images/Gallery/Plastroots Foundation organized an Awareness Rally at Z.P.U. Primary School, Nanda (Koradi) und.webp", category: "College Drive", year: "FY 2024 - 2025" },
  { id: 6, src: "/Images/Gallery/Screenshot 2026-06-29 115828.png", category: "Project", year: "FY 2025 - 2026" },
  { id: 7, src: "/Images/Gallery/Screenshot 2026-06-29 120001.png", category: "Event", year: "FY 2023 - 2024" },
  { id: 8, src: "/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.14 PM.jpeg", category: "College Drive", year: "FY 2025 - 2026" },
  { id: 9, src: "/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.31 PM.jpeg", category: "Campaign", year: "FY 2023 - 2024" },
  { id: 10, src: "/Images/Gallery/WhatsApp Image 2026-06-13 at 6.43.40 PM.jpeg", category: "Event", year: "FY 2024 - 2025" },
  // Adding duplicates to demonstrate "Show More" functionality (> 8 items needed for 4 cols)
  { id: 11, src: "/Images/Gallery/Bisleri_1.jpeg", category: "Project", year: "FY 2025 - 2026" },
  { id: 12, src: "/Images/Gallery/ChatGPT Image Jun 29, 2026, 06_02_02 PM.png", category: "Campaign", year: "FY 2025 - 2026" },
  { id: 13, src: "/Images/Gallery/IMG_20260425_142236_073.jpg.jpeg", category: "Event", year: "FY 2025 - 2026" },
  { id: 14, src: "/Images/Gallery/Screenshot 2026-06-29 120001.png", category: "Event", year: "FY 2025 - 2026" },
  { id: 15, src: "/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.31 PM.jpeg", category: "Campaign", year: "FY 2025 - 2026" },
];

const FYGroup = ({ fy, images, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const itemsToShow = expanded ? images.length : 8; // 2 rows of 4
  const visibleImages = images.slice(0, itemsToShow);
  const hasMore = images.length > 8;

  return (
    <div className={styles.fyGroup}>
      <h3 className={styles.fyTitlePremium}>{fy}</h3>
      <motion.div layout className={styles.galleryGrid}>
        <AnimatePresence>
          {visibleImages.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={img.id}
              className={styles.galleryItem}
              onClick={() => onImageClick(img.src)}
            >
              <img src={img.src} alt={`Gallery ${img.category}`} className={styles.image} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {hasMore && (
        <div className={styles.showMoreContainer}>
          <button 
            className={styles.showMoreBtn} 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

const Gallery = ({ category = "All" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Filter by category prop first
  const filteredImages = category === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === category);

  // Group by FY
  const groupedByFY = filteredImages.reduce((acc, img) => {
    if (!acc[img.year]) acc[img.year] = [];
    acc[img.year].push(img);
    return acc;
  }, {});

  // Sort FY descending
  const sortedFYs = Object.keys(groupedByFY).sort((a, b) => b.localeCompare(a));

  const sidebarCategories = [
    { name: "All Photos", path: "/gallery" },
    { name: "Project", path: "/gallery/project" },
    { name: "Event", path: "/gallery/event" },
    { name: "College Drive", path: "/gallery/college-drive" },
    { name: "Campaign", path: "/gallery/campaign" }
  ];

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Gallery - Plastroots Foundation</title>
        <meta name="description" content="View the Plastroots Foundation photo gallery capturing our environmental drives, campaigns, and community impact." />
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
            {category === "All" ? "IMAGE GALLERY" : `${category.toUpperCase()}S GALLERY`}
          </h1>
          <p className={styles.heroDesc}>
            A visual journey through our initiatives, campaigns, and community efforts toward a sustainable future.
          </p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.galleryLayout}>
          
          {/* Main Content: Left Column */}
          <div className={styles.mainGrid}>
            {sortedFYs.length > 0 ? (
              sortedFYs.map(fy => (
                <FYGroup 
                  key={fy} 
                  fy={fy} 
                  images={groupedByFY[fy]} 
                  onImageClick={setSelectedImage} 
                />
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 20px', fontSize: '1.2rem', color: 'var(--text-dark)' }}>
                No images found for this category at the moment.
              </div>
            )}
          </div>

          {/* Sidebar: Right Column */}
          <div className={styles.sidebar}>
            <h4 className={styles.sidebarTitle}>Categories</h4>
            {sidebarCategories.map((cat, idx) => {
              const isActive = location.pathname === cat.path || (cat.path === '/gallery' && location.pathname === '/gallery/');
              return (
                <div 
                  key={idx}
                  onClick={() => navigate(cat.path)}
                  className={`${styles.sidebarCard} ${isActive ? styles.active : ''}`}
                >
                  <span>{cat.name}</span>
                  <ChevronRight size={18} />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Expanded"
              className={styles.lightboxImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
