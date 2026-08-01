import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import styles from './Blogs.module.css';

const featuredBlog = {
  title: "Safai Saathis: The Unsung Heroes of Our Cities",
  excerpt: "A tribute to the uncelebrated heroes who play a critical role in keeping our surroundings clean and making the circular economy work.",
  date: "July 17, 2026",
  readTime: "4 MIN READ",
  image: "/Images/Safai%20saathis/Street%20Sweeping.jpg",
  category: "Featured Story"
};

const blogPosts = [
  {
    title: "Closing the Loop: Redefining Plastic in a Circular Economy",
    excerpt: "A deep dive into how transitioning from a linear to a circular economy is the only viable solution to plastic pollution.",
    date: "April 02, 2026",
    readTime: "2 MIN READ",
    image: "/Images/circular_economy.png",
    height: "tall"
  },
  {
    title: "The Future of Plastic Waste: Innovations in Recycling",
    excerpt: "Discover how new technologies are transforming how we handle and recycle plastic waste on a global scale.",
    date: "March 15, 2026",
    readTime: "2 MIN READ",
    image: "/Images/Safai%20saathis/Door2Door%20waste.jpg",
    height: "short"
  },
  {
    title: "Climate Change and Individual Responsibility",
    excerpt: "Do our individual efforts against climate change really matter? Explore why every small sustainable action makes a difference.",
    date: "May 18, 2026",
    readTime: "3 MIN READ",
    image: "/Images/hero_doodles.png",
    height: "medium"
  },
  {
    title: "Why ESG Consulting is Non-Negotiable",
    excerpt: "Explore the strategic benefits of integrating ESG frameworks into your core business operations for modern businesses.",
    date: "June 10, 2026",
    readTime: "2 MIN READ",
    image: "/Images/Safai%20saathis/safai4.png",
    height: "tall"
  },
  {
    title: "Empowering Rural Women through Sustainable Practices",
    excerpt: "How self-help groups and education are creating new pathways for women in rural India.",
    date: "August 01, 2026",
    readTime: "5 MIN READ",
    image: "/Images/SHG_1.jpg",
    height: "short"
  }
];

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - Plastroots Foundation</title>
        <meta name="description" content="Read the latest insights and stories from the Plastroots Foundation." />
      </Helmet>
      
      <main className={styles.blogsPage}>
        
        {/* Page Header */}
        <section className={styles.pageHeader}>
          <motion.div 
            className="container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.pageTitle}>Plastroots <span>Editorial</span></h1>
            <p className={styles.pageSubtitle}>Insights, stories, and perspectives on building a sustainable, circular world.</p>
          </motion.div>
        </section>

        {/* Featured Blog */}
        <section className={styles.featuredSection}>
          <div className="container">
            <motion.div 
              className={styles.featuredCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.featuredImageWrapper}>
                <img src={featuredBlog.image} alt={featuredBlog.title} className={styles.featuredImage} />
                <div className={styles.featuredBadge}>{featuredBlog.category}</div>
              </div>
              <div className={styles.featuredContent}>
                <h2 className={styles.featuredTitle}>{featuredBlog.title}</h2>
                <p className={styles.featuredExcerpt}>{featuredBlog.excerpt}</p>
                
                <div className={styles.metaInfo}>
                  <span className={styles.metaItem}><Calendar size={14} /> {featuredBlog.date}</span>
                  <span className={styles.metaDivider}>•</span>
                  <span className={styles.metaItem}><Clock size={14} /> {featuredBlog.readTime}</span>
                </div>
                
                <a href="#" className={styles.readMoreBtn}>
                  Read This Article <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Latest Articles & Sidebar */}
        <section className={styles.mainContent}>
          <div className={`container ${styles.contentLayout}`}>
            
            <div className={styles.articlesColumn}>
              <h3 className={styles.sectionHeading}>Latest Articles</h3>
              
              <div className={styles.masonryGrid}>
                {blogPosts.map((post, index) => (
                  <motion.article 
                    key={index}
                    className={`${styles.blogCard} ${styles[post.height]}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className={styles.cardImageWrapper}>
                      <img src={post.image} alt={post.title} className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.metaInfo}>
                        <span className={styles.metaItem}>{post.date}</span>
                        <span className={styles.metaDivider}>•</span>
                        <span className={styles.metaItem}>{post.readTime}</span>
                      </div>
                      <h4 className={styles.cardTitle}>{post.title}</h4>
                      <p className={styles.cardExcerpt}>{post.excerpt}</p>
                      <a href="#" className={styles.cardLink}>
                        Read Article <ArrowRight size={16} />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            <aside className={styles.sidebarColumn}>
              <motion.div 
                className={styles.newsletterCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h4 className={styles.newsletterTitle}>Get the latest insights</h4>
                <p className={styles.newsletterText}>Subscribe to our newsletter for updates on the circular economy and environmental awareness.</p>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your email address" className={styles.newsletterInput} required />
                  <button type="submit" className={`btn-primary ${styles.newsletterBtn}`}>Subscribe</button>
                </form>
              </motion.div>
            </aside>

          </div>
        </section>

      </main>
    </>
  );
};

export default Blogs;
