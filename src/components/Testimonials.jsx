import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "The pure journey of the brand breaking society norms the event is created gives the peace of mind.",
    author: "Ramesh",
    role: "Teacher",
    initial: "R"
  },
  {
    quote: "The pure feeling which has your soul, and the transparent nature is beautiful.",
    author: "Neha S.",
    role: "Student",
    initial: "N"
  },
  {
    quote: "Superb plastic waste best purchase. The purpose was to clear.",
    author: "Arjun P.",
    role: "Corporate Employee",
    initial: "A"
  },
  {
    quote: "The transparency of the brand treating people where the nature is ensured gives the peace of mind.",
    author: "Deepak",
    role: "Principal",
    initial: "D"
  },
  {
    quote: "This is a great initiative that everyone must support. Highly recommended.",
    author: "Priya M.",
    role: "Volunteer",
    initial: "P"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Voices of Our Community
        </motion.h2>
      </div>

      {/* Auto-scrolling marquee effect */}
      <motion.div
        className={styles.carouselContainer}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30
        }}
      >
        {/* Duplicate list to create seamless infinite scroll loop */}
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
            </div>
            <p className={styles.quote}>"{item.quote}"</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{item.initial}</div>
              <div className={styles.authorInfo}>
                <h4>{item.author}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
