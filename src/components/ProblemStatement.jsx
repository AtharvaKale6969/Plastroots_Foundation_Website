import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemStatement.module.css';

const ProblemStatement = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.row}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.heading}>A Reality We Can No Longer Ignore</h2>
            <p className={styles.introText}>
              Close your eyes and imagine the heart of rural India, the lush green fields, the tight-knit communities, the rich heritage. Now open them to the harsh reality setting in.
            </p>
            <p className={styles.paragraph}>
              Piles of unmanaged plastic waste are slowly choking the very earth that sustains these villages. The pristine landscapes are fading beneath mountains of discarded materials, contaminating the soil and water. For many of us living in cities, this environmental suffocation feels distant, like someone else's problem. It is easy to simply scroll past.
            </p>
          </motion.div>
          
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.collage}>
              <div className={`${styles.collageImage} ${styles.imgRow1_1}`}></div>
              <div className={`${styles.collageImage} ${styles.imgRow1_2}`}></div>
            </div>
          </motion.div>
        </div>

        <div className={styles.row}>
          <motion.div 
            className={styles.imageContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.collage}>
              <div className={`${styles.collageImage} ${styles.imgRow2_1}`}></div>
              <div className={`${styles.collageImage} ${styles.imgRow2_2}`}></div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className={styles.paragraph}>
              Why is this happening? Rapid consumption is spilling into rural areas long before proper waste management infrastructure can catch up. A severe lack of grassroots education leaves communities unaware of sustainable practices. Meanwhile, systemic barriers keep women, the true backbone of these villages, trapped without financial independence. Because local bodies fight an uphill battle without resources, basic access to health, hygiene, and education remains a distant dream for countless families.
            </p>
            <div className={styles.highlightText}>
              This isn't just an environmental issue, it is a human crisis we can no longer afford to ignore.
            </div>
            <p className={styles.paragraph}>
              We refuse to accept this fading reality as the status quo. We are stepping into the trenches to bridge this gap. By championing cleaner and greener villages, driving holistic rural area development, managing waste responsibly, and prioritizing the health, education, and empowerment of women, we are not just cleaning the earth. We are breathing life back into the communities that rely on it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
