import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HomeGallery.module.css';

const galleryData = [
  { id: 1, src: "/Images/Gallery/Bisleri_1.jpeg", category: "Project" },
  { id: 2, src: "/Images/Gallery/ChatGPT Image Jun 29, 2026, 06_02_02 PM.png", category: "Campaign" },
  { id: 3, src: "/Images/Gallery/I am thrilled to inform you that our recent cleanliness campaign was a resounding success, than.webp", category: "Campaign" },
  { id: 4, src: "/Images/Gallery/IMG_20260425_142236_073.jpg.jpeg", category: "Event" },
  { id: 5, src: "/Images/Gallery/Plastroots Foundation organized an Awareness Rally at Z.P.U. Primary School, Nanda (Koradi) und.webp", category: "College Drive" },
  { id: 6, src: "/Images/Gallery/Screenshot 2026-06-29 115828.png", category: "Project" },
  { id: 7, src: "/Images/Gallery/Screenshot 2026-06-29 120001.png", category: "Event" },
  { id: 8, src: "/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.14 PM.jpeg", category: "College Drive" },
  { id: 9, src: "/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.31 PM.jpeg", category: "Campaign" },
  { id: 10, src: "/Images/Gallery/WhatsApp Image 2026-06-13 at 6.43.40 PM.jpeg", category: "Event" }
];

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Split data into two rows
  const midIndex = Math.ceil(galleryData.length / 2);
  const row1 = galleryData.slice(0, midIndex);
  const row2 = galleryData.slice(midIndex);

  // Duplicate for seamless infinite scroll
  // For standard screens, doubling 5 images might not be wide enough to fill standard monitors.
  // We'll triplicate the rows just to be absolutely sure the marquee never shows blank space on ultrawides.
  const duplicatedRow1 = [...row1, ...row1, ...row1, ...row1];
  const duplicatedRow2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Our Work in Action</h2>
      
      <div className={styles.marqueeWrapper}>
        {/* Row 1: Scrolls Left */}
        <div className={`${styles.marqueeRow} ${styles.left}`}>
          {duplicatedRow1.map((img, idx) => (
            <div
              key={`row1-${idx}`}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={`Gallery ${img.category}`} className={styles.image} />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolls Right */}
        <div className={`${styles.marqueeRow} ${styles.right}`}>
          {duplicatedRow2.map((img, idx) => (
            <div
              key={`row2-${idx}`}
              className={styles.galleryItem}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={`Gallery ${img.category}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>

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
    </section>
  );
};

export default HomeGallery;
