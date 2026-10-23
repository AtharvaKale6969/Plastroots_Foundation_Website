import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "Really appreciate the work Plastroots Foundation is doing. A small step towards a cleaner environment can make a big difference. Keep up the good work!",
    author: "Ankita Dhamdhar",
    role: "BDA",
    org: "Shetathit Farm & Solutions Pvt Ltd",
    initial: "A"
  },
  {
    quote: "Plastroots Foundation is doing amazing work. It's great to see a Foundation working for our Nagpur in waste management and awareness.",
    author: "Simran Naik",
    role: "Citizen",
    org: "Nagpur",
    initial: "S"
  },
  {
    quote: "Nagar Parishad Khapa appreciates the valuable contribution of Plastroots Foundation towards effective dry waste management and environmental sustainability. Their contribution supports the objectives of the Swachh Bharat Mission and the vision of creating a cleaner, greener Khapa.",
    author: "Rahul Bawankule",
    role: "CC",
    org: "Khapa Municipal Council",
    initial: "R"
  },
  {
    quote: "Plastroots Foundation is doing a good job in implementing the Bottle(s) for Change initiative. The team is cooperative and actively involved in field activities. Overall, the NGO's performance is satisfactory.",
    author: "Dipankar",
    role: "CSR Coordinator",
    org: "Bisleri International Pvt Ltd",
    initial: "D"
  },
  {
    quote: "आपले नगरपंचायत महादूला सोबत झालेल्या कराराच्या अनुषंगाने प्लास्टिक कचरा व्यवस्थापन व पुनर्चक्रण क्षेत्रातील प्लास्टरुट्स फाउंडेशन प्लास्टिक कचऱ्याचे योग्य व्यवस्थापन, पुनर्चक्रणास प्रोत्साहन आणि पर्यावरण संवर्धनाच्या दृष्टीने मोलाचे योगदान देत आहे याकरिता आपले खूप खूप आभार.",
    author: "शुभम मोहिते",
    role: "शहर समन्वयक",
    org: "नगर पंचायत महादुला",
    initial: "श"
  },
  {
    quote: "Really happy to see Plastroots Foundation doing such meaningful work! What I appreciate the most is their effort to spread awareness about waste management in rural areas, where such initiatives are often overlooked.",
    author: "Prachi Singh",
    role: "Owner",
    org: "Brewing Co India",
    initial: "P"
  },
  {
    quote: "Had a good experience with Plastroots Foundation. Learned a lot about waste management and how things work in the real world. Good initiative towards the environment and society.",
    author: "Rakesh Karmkar",
    role: "Business Intelligence Analyst",
    org: "Geoclaim Energy Pvt. Ltd.",
    initial: "R"
  },
  {
    quote: "The Bottle for Change initiative conducted by Plastroots Foundation at Adarsh Vidyalaya was highly appreciated. Through fun activities and interactive sessions, students learned about environmental conservation and plastic recycling.",
    author: "Mahendra Tule",
    role: "Teacher",
    org: "Adarsh Vidyalaya, Patansawangi",
    initial: "M"
  },
  {
    quote: "Plastroots Foundation is doing commendable work in waste management while empowering women through employment opportunities. Its efforts are creating a positive impact on both the environment and society.",
    author: "Sharayu Kakade",
    role: "Journalist",
    org: "Indian Express Group",
    initial: "S"
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
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Hear from the stakeholders and partners who are part of our mission.
        </motion.p>
      </div>

      <motion.div
        className={styles.carouselContainer}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 50
        }}
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={13} fill="currentColor" />)}
              </div>
            </div>
            <p className={styles.quote}>{item.quote}</p>
            <div className={styles.authorSection}>
              <div className={styles.avatar}>{item.initial}</div>
              <div className={styles.authorInfo}>
                <h4 className={styles.authorName}>{item.author}</h4>
                <p className={styles.authorRole}>{item.role}</p>
                <p className={styles.authorOrg}>{item.org}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
