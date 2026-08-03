import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Calendar, Leaf, Bookmark } from 'lucide-react';
import styles from './Blogs.module.css';

const categories = ["All", "Environment", "Waste Management", "Sustainability", "CSR", "Social Impact"];

const featuredBlog = {
  title: "The Silent Crisis: Managing Electronic Waste in Urban India",
  excerpt: "As technology accelerates, so does e-waste. Discover the grassroots movements transforming hazardous materials into circular opportunities.",
  date: "August 12, 2026",
  readTime: "6 MIN READ",
  category: "Waste Management"
};

const blogPosts = [
  {
    title: "Protecting Our Oceans: The Grassroots Approach to Coastal Cleanups",
    excerpt: "How local communities are taking charge to remove plastic pollution from our coastlines and restore marine ecosystems.",
    date: "July 24, 2026",
    readTime: "4 MIN READ",
    category: "Environment",
    height: "tall"
  },
  {
    title: "Why ESG Consulting is Non-Negotiable for Modern Businesses",
    excerpt: "Explore the strategic benefits of integrating ESG frameworks into your core operations and how it impacts long-term profitability.",
    date: "June 10, 2026",
    readTime: "5 MIN READ",
    category: "CSR",
    height: "medium"
  },
  {
    title: "Closing the Loop: Redefining Plastic in a Circular Economy",
    excerpt: "A deep dive into how transitioning from a linear to a circular economy is the only viable solution to the plastic crisis.",
    date: "May 18, 2026",
    readTime: "7 MIN READ",
    category: "Sustainability",
    height: "tall"
  },
  {
    title: "Empowering Rural Women through Sustainable Practices",
    excerpt: "Discover how self-help groups and education are creating new pathways for women in rural India while protecting the environment.",
    date: "April 05, 2026",
    readTime: "4 MIN READ",
    category: "Social Impact",
    height: "short"
  }
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

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
              <div className={styles.featuredImagePlaceholder}>
                <div className={styles.placeholderIcon}>
                  <Leaf size={64} />
                </div>
                <div className={styles.featuredBadge}>Featured: {featuredBlog.category}</div>
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
              <div className={styles.articlesHeader}>
                <h3 className={styles.sectionHeading}>Latest Articles</h3>
                
                {/* Category Filter */}
                <div className={styles.categoryFilter}>
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`${styles.categoryBtn} ${activeCategory === category ? styles.activeCategory : ''}`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className={styles.masonryGrid}>
                <AnimatePresence>
                  {filteredPosts.map((post, index) => (
                    <motion.article 
                      key={post.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`${styles.blogCard} ${styles[post.height]}`}
                    >
                      <div className={styles.cardImagePlaceholder}>
                        <div className={styles.placeholderIconSmall}>
                          <Leaf size={32} />
                        </div>
                        <div className={styles.categoryTag}>{post.category}</div>
                      </div>
                      <div className={styles.cardContent}>
                        <div className={styles.metaInfo}>
                          <span className={styles.metaItem}>{post.date}</span>
                          <span className={styles.metaDivider}>•</span>
                          <span className={styles.metaItem}>{post.readTime}</span>
                        </div>
                        <h4 className={styles.cardTitle}>{post.title}</h4>
                        <p className={styles.cardExcerpt}>{post.excerpt}</p>
                        
                        <div className={styles.cardFooter}>
                          <a href="#" className={styles.cardLink}>
                            Read Article <ArrowRight size={16} />
                          </a>
                          <button className={styles.bookmarkBtn} aria-label="Bookmark article">
                            <Bookmark size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </AnimatePresence>
                
                {filteredPosts.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className={styles.noPostsMessage}
                  >
                    No articles found in this category yet.
                  </motion.div>
                )}
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
