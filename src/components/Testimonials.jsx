import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Plastroots Foundation's waste management training transformed how our school handles waste. Students now actively segregate and recycle.",
    author: "Ramesh Pawar",
    role: "Principal, Raosaheb Thaware High School",
    initial: "R"
  },
  {
    quote: "The awareness sessions conducted by Plastroots educated our staff and customers about responsible waste disposal. A much-needed initiative.",
    author: "Prajwal Thakre",
    role: "Owner, Tick Drip Café",
    initial: "P"
  },
  {
    quote: "Plastroots helped us set up a proper waste segregation system at our facility. The impact on cleanliness and hygiene has been remarkable.",
    author: "Aditya Kumar",
    role: "Manager, Sakshi Industry",
    initial: "A"
  },
  {
    quote: "The environmental awareness programs brought a visible change in our school campus. Students have become ambassadors of sustainability.",
    author: "Godghate Mam",
    role: "Principal, Vishakha High School",
    initial: "G"
  },
  {
    quote: "Partnering with Plastroots for waste collection and awareness drives has been a great step towards a cleaner community.",
    author: "Nitin Bawariya",
    role: "Manager, Sagar Highway Pride Restaurant",
    initial: "N"
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
