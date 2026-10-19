import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Camera, Images } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryData = [
  // ─── School Awareness Programs ───
  { id: 1, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.09 PM.jpeg", category: "School Awareness Programs" },
  { id: 2, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.18 PM.jpeg", category: "School Awareness Programs" },
  { id: 3, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.21 PM.jpeg", category: "School Awareness Programs" },
  { id: 4, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.23 PM.jpeg", category: "School Awareness Programs" },
  { id: 5, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.24 PM.jpeg", category: "School Awareness Programs" },
  { id: 6, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.25 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 7, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.25 PM.jpeg", category: "School Awareness Programs" },
  { id: 8, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.26 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 9, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.26 PM.jpeg", category: "School Awareness Programs" },
  { id: 10, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 1.15.47 PM.jpeg", category: "School Awareness Programs" },
  { id: 11, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.20 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 12, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.20 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 13, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.20 PM.jpeg", category: "School Awareness Programs" },
  { id: 14, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.21 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 15, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.21 PM.jpeg", category: "School Awareness Programs" },
  { id: 16, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.23 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 17, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.23 PM.jpeg", category: "School Awareness Programs" },
  { id: 18, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.25 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 19, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.26 PM.jpeg", category: "School Awareness Programs" },
  { id: 20, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.27 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 21, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.27 PM.jpeg", category: "School Awareness Programs" },
  { id: 22, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.28 PM.jpeg", category: "School Awareness Programs" },
  { id: 23, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.29 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 24, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.29 PM.jpeg", category: "School Awareness Programs" },
  { id: 25, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.30 PM.jpeg", category: "School Awareness Programs" },
  { id: 26, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.39 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 27, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.39 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 28, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.39 PM.jpeg", category: "School Awareness Programs" },
  { id: 29, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.40 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 30, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.40 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 31, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.40 PM.jpeg", category: "School Awareness Programs" },
  { id: 32, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.41 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 33, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.41 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 34, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.41 PM (3).jpeg", category: "School Awareness Programs" },
  { id: 35, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.41 PM.jpeg", category: "School Awareness Programs" },
  { id: 36, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.42 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 37, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.42 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 38, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.42 PM.jpeg", category: "School Awareness Programs" },
  { id: 39, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.43 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 40, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.43 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 41, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.43 PM.jpeg", category: "School Awareness Programs" },
  { id: 42, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.44 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 43, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.44 PM (2).jpeg", category: "School Awareness Programs" },
  { id: 44, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.44 PM.jpeg", category: "School Awareness Programs" },
  { id: 45, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.42.31 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 46, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.42.31 PM.jpeg", category: "School Awareness Programs" },
  { id: 47, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.42.32 PM (1).jpeg", category: "School Awareness Programs" },
  { id: 48, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.42.32 PM.jpeg", category: "School Awareness Programs" },
  { id: 49, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.42.35 PM.jpeg", category: "School Awareness Programs" },

  // ─── College Seminars & Workshops ───
  { id: 50, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.49 PM (1).jpeg", category: "College Seminars & Workshops" },
  { id: 51, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.49 PM (2).jpeg", category: "College Seminars & Workshops" },
  { id: 52, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.49 PM.jpeg", category: "College Seminars & Workshops" },
  { id: 53, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.50 PM (1).jpeg", category: "College Seminars & Workshops" },
  { id: 54, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.50 PM (2).jpeg", category: "College Seminars & Workshops" },
  { id: 55, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.50 PM.jpeg", category: "College Seminars & Workshops" },

  // ─── Rallies & Street Campaigns ───
  { id: 56, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.45 PM (1).jpeg", category: "Rallies & Street Campaigns" },
  { id: 57, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.45 PM (2).jpeg", category: "Rallies & Street Campaigns" },
  { id: 58, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.45 PM.jpeg", category: "Rallies & Street Campaigns" },
  { id: 59, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.46 PM (1).jpeg", category: "Rallies & Street Campaigns" },
  { id: 60, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.46 PM (2).jpeg", category: "Rallies & Street Campaigns" },
  { id: 61, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.46 PM.jpeg", category: "Rallies & Street Campaigns" },
  { id: 62, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.47 PM (1).jpeg", category: "Rallies & Street Campaigns" },
  { id: 63, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.47 PM (2).jpeg", category: "Rallies & Street Campaigns" },
  { id: 64, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.47 PM (3).jpeg", category: "Rallies & Street Campaigns" },
  { id: 65, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.47 PM.jpeg", category: "Rallies & Street Campaigns" },
  { id: 66, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.48 PM (1).jpeg", category: "Rallies & Street Campaigns" },
  { id: 67, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.48 PM (2).jpeg", category: "Rallies & Street Campaigns" },
  { id: 68, src: "/Images/Schools & Colleges/WhatsApp Image 2026-10-16 at 2.39.48 PM.jpeg", category: "Rallies & Street Campaigns" },
  { id: 69, src: "/Images/Gallery/Rally_1.webp", category: "Rallies & Street Campaigns" },
  { id: 70, src: "/Images/Rally_2.webp", category: "Rallies & Street Campaigns" },
  { id: 71, src: "/Images/Street Play.jpeg", category: "Rallies & Street Campaigns" },
  { id: 72, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.36 PM (1).jpeg", category: "Rallies & Street Campaigns" },
  { id: 73, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.36 PM.jpeg", category: "Rallies & Street Campaigns" },

  // ─── Hostel & Institutional Outreach ───
  { id: 74, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.14.20 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 75, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.14.49 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 76, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.10 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 77, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.11 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 78, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.11 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 79, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.18 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 80, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.20 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 81, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.28 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 82, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.30 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 83, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.30 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 84, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.32 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 85, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.32 PM (2).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 86, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.32 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 87, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.34 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 88, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.49.34 PM (2).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 89, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.31 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 90, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.31 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 91, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.33 PM (1).jpeg", category: "Hostel & Institutional Outreach" },
  { id: 92, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.33 PM.jpeg", category: "Hostel & Institutional Outreach" },
  { id: 93, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.34 PM.jpeg", category: "Hostel & Institutional Outreach" },

  // ─── Cleanliness Drives ───
  { id: 94, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.18.24 PM.jpeg", category: "Cleanliness Drives" },
  { id: 95, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.19.02 PM.jpeg", category: "Cleanliness Drives" },
  { id: 96, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.27 PM.jpeg", category: "Cleanliness Drives" },
  { id: 97, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.20 PM (2).jpeg", category: "Cleanliness Drives" },
  { id: 98, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.20 PM.jpeg", category: "Cleanliness Drives" },
  { id: 99, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.21 PM.jpeg", category: "Cleanliness Drives" },
  { id: 100, src: "/Images/Cleanliness Drive_1.jpeg", category: "Cleanliness Drives" },
  { id: 101, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.35 PM (1).jpeg", category: "Cleanliness Drives" },
  { id: 102, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.37 PM (1).jpeg", category: "Cleanliness Drives" },
  { id: 103, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.38 PM.jpeg", category: "Cleanliness Drives" },

  // ─── Festival Awareness Campaigns ───
  { id: 104, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.22 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 105, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.23 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 106, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.26 PM (1).jpeg", category: "Festival Awareness Campaigns" },
  { id: 107, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.26 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 108, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.13 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 109, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.14 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 110, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.15 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 111, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.16 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 112, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.24 PM.jpeg", category: "Festival Awareness Campaigns" },
  { id: 113, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.25 PM.jpeg", category: "Festival Awareness Campaigns" },

  // ─── Community & Village Outreach ───
  { id: 114, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.17 PM.jpeg", category: "Community & Village Outreach" },
  { id: 115, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.18 PM.jpeg", category: "Community & Village Outreach" },
  { id: 116, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.39.19 PM.jpeg", category: "Community & Village Outreach" },
  { id: 117, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.37 PM (2).jpeg", category: "Community & Village Outreach" },
  { id: 118, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 2.42.37 PM.jpeg", category: "Community & Village Outreach" },
  { id: 119, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.39 PM (1).jpeg", category: "Community & Village Outreach" },
  { id: 120, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.39 PM.jpeg", category: "Community & Village Outreach" },
  { id: 121, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.40 PM (1).jpeg", category: "Community & Village Outreach" },
  { id: 122, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.40 PM.jpeg", category: "Community & Village Outreach" },
  { id: 123, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.42 PM (1).jpeg", category: "Community & Village Outreach" },
  { id: 124, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.42 PM.jpeg", category: "Community & Village Outreach" },
  { id: 125, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.43 PM (1).jpeg", category: "Community & Village Outreach" },
  { id: 126, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.43 PM.jpeg", category: "Community & Village Outreach" },
  { id: 127, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.46 PM.jpeg", category: "Community & Village Outreach" },

  // ─── Awareness Stalls & Exhibitions ───
  { id: 128, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.17.51 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 129, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.18.06 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 130, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 1.18.09 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 131, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.44 PM (1).jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 132, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.44 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 133, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.45 PM (1).jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 134, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.45 PM (2).jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 135, src: "/Images/Awareness Campaigns/WhatsApp Image 2026-10-16 at 2.42.45 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 136, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.24 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 137, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.28 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
  { id: 138, src: "/Images/RAW's/WhatsApp Image 2026-10-16 at 1.49.29 PM.jpeg", category: "Awareness Stalls & Exhibitions" },
];

const categoryMeta = {
  "School Awareness Programs": {
    description: "Environmental education workshops, awareness assemblies, and interactive sessions conducted at schools across the region, inspiring young minds to adopt sustainable habits.",
    path: "/gallery/school-awareness",
  },
  "College Seminars & Workshops": {
    description: "Guest lectures, seminars, and hands-on workshops at colleges and universities, engaging students in waste management and circular economy concepts.",
    path: "/gallery/college-seminars",
  },
  "Rallies & Street Campaigns": {
    description: "Awareness rallies with handmade posters, street plays, and marches through communities to spread the message of plastic recycling and environmental care.",
    path: "/gallery/rallies",
  },
  "Hostel & Institutional Outreach": {
    description: "Dedicated awareness sessions at hostels, government institutions, and residential facilities, reaching communities where they live.",
    path: "/gallery/hostel-outreach",
  },
  "Cleanliness Drives": {
    description: "Hands-on cleanup campaigns at water bodies, public spaces, and neighborhoods, collecting plastic waste and demonstrating the importance of proper disposal.",
    path: "/gallery/cleanliness-drives",
  },
  "Festival Awareness Campaigns": {
    description: "Eco-awareness campaigns during Ganpati festivals, Navratri celebrations, and community gatherings, promoting plastic-free celebrations and responsible waste handling.",
    path: "/gallery/festival-campaigns",
  },
  "Community & Village Outreach": {
    description: "Grassroots outreach in gram panchayats, villages, and rural communities, engaging women's groups and local leaders in waste management awareness.",
    path: "/gallery/community-outreach",
  },
  "Awareness Stalls & Exhibitions": {
    description: "Interactive awareness stalls at parks, fairs, and public events showcasing upcycled products, saplings, and sustainable alternatives to single-use plastics.",
    path: "/gallery/stalls-exhibitions",
  },
};

const FYGroup = ({ images, onImageClick }) => {
  const [expanded, setExpanded] = useState(false);
  const itemsToShow = expanded ? images.length : 12;
  const visibleImages = images.slice(0, itemsToShow);
  const hasMore = images.length > 12;

  return (
    <div className={styles.fyGroup}>
      <motion.div layout className={styles.imageGrid}>
        <AnimatePresence>
          {visibleImages.map((img) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              key={img.id}
              className={styles.imageItem}
              onClick={() => onImageClick(img.src)}
            >
              <img src={img.src} alt={`Gallery ${img.category}`} loading="lazy" className={styles.image} />
              <div className={styles.imageOverlay}>
                <Camera size={20} />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      {hasMore && (
        <div className={styles.showMoreContainer}>
          <button className={styles.showMoreBtn} onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show Less" : `Show All ${images.length} Photos`}
          </button>
        </div>
      )}
    </div>
  );
};

const GalleryHome = () => {
  const navigate = useNavigate();

  const categories = Object.entries(categoryMeta).map(([name, meta]) => {
    const images = galleryData.filter(img => img.category === name);
    const previewImages = images.slice(0, 4);
    return { name, ...meta, count: images.length, previewImages };
  });

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.categoriesHeader}>
        <h2 className={styles.sectionTitle}>Browse by Category</h2>
        <p className={styles.sectionSubtitle}>Explore our visual journey across different verticals of impact</p>
      </div>
      <div className={styles.categoriesGrid}>
        {categories.map((cat, idx) => (
          <motion.div
            key={cat.name}
            className={styles.categoryCard}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            onClick={() => navigate(cat.path)}
          >
            <div className={styles.categoryPreview}>
              {cat.previewImages.map((img, i) => (
                <div key={i} className={styles.previewThumb}>
                  <img src={img.src} alt="" loading="lazy" />
                </div>
              ))}
            </div>
            <div className={styles.categoryInfo}>
              <h3 className={styles.categoryName}>{cat.name}</h3>
              <p className={styles.categoryDesc}>{cat.description}</p>
              <div className={styles.categoryFooter}>
                <span className={styles.photoCount}>
                  <Images size={16} />
                  {cat.count} Photos
                </span>
                <span className={styles.viewAll}>View All &rarr;</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CategoryPage = ({ category }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const filteredImages = galleryData.filter(img => img.category === category);

  return (
    <>
      <section className={styles.categoryPageSection}>
        <div className={styles.categoryPageHeader}>
          <button className={styles.backBtn} onClick={() => navigate('/gallery')}>
            <ArrowLeft size={20} />
            Back to Gallery
          </button>
          <h2 className={styles.categoryPageTitle}>{category}</h2>
          <p className={styles.categoryPageDesc}>{categoryMeta[category]?.description}</p>
          <span className={styles.totalCount}>{filteredImages.length} Photos</span>
        </div>

        <div className={styles.categoryPageGrid}>
          {filteredImages.length > 0 ? (
            <FYGroup images={filteredImages} onImageClick={setSelectedImage} />
          ) : (
            <div className={styles.emptyState}>No images found for this category.</div>
          )}
        </div>
      </section>

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
            <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>&#10005;</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Gallery = ({ category = "All" }) => {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{category === "All" ? "Gallery" : `${category} Gallery`} - Plastroots Foundation</title>
        <meta name="description" content="View the Plastroots Foundation photo gallery capturing our environmental drives, campaigns, and community impact." />
      </Helmet>

      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            {category === "All" ? "Image Gallery" : `${category}`}
          </h1>
          <p className={styles.heroDesc}>
            A visual journey through our initiatives, campaigns, and community efforts toward a sustainable future.
          </p>
        </motion.div>
      </section>

      {category === "All" ? <GalleryHome /> : <CategoryPage category={category} />}
    </div>
  );
};

export default Gallery;
