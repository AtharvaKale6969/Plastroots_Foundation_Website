import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Calendar, Leaf, Bookmark } from 'lucide-react';
import styles from './Blogs.module.css';

const categories = ["All", "Environment", "Waste Management", "Sustainability", "CSR", "Social Impact"];

const featuredBlog = {
  id: "featured",
  title: "Featured Blog: The Silent Crisis",
  excerpt: "As technology accelerates, so does e-waste. Discover the grassroots movements transforming hazardous materials into circular opportunities.",
  date: "August 12, 2026",
  readTime: "6 MIN READ",
  category: "Waste Management"
};

const blogPosts = [
  {
    id: "1",
    title: "Blog 1",
    excerpt: "How local communities are taking charge to remove plastic pollution from our coastlines and restore marine ecosystems.",
    date: "July 24, 2026",
    readTime: "4 MIN READ",
    category: "Environment",
    height: "tall"
  },
  {
    id: "2",
    title: "Blog 2",
    excerpt: "Explore the strategic benefits of integrating ESG frameworks into your core operations and how it impacts long-term profitability.",
    date: "June 10, 2026",
    readTime: "5 MIN READ",
    category: "CSR",
    height: "medium"
  },
  {
    id: "3",
    title: "Blog 3",
    excerpt: "A deep dive into how transitioning from a linear to a circular economy is the only viable solution to the plastic crisis.",
    date: "May 18, 2026",
    readTime: "7 MIN READ",
    category: "Sustainability",
    height: "tall"
  },
  {
    id: "4",
    title: "Blog 4",
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
                
                <Link to={`/blogs/${featuredBlog.id}`} className={styles.readMoreBtn}>
                  Read This Article <ArrowRight size={18} />
                </Link>
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
                          <Link to={`/blogs/${post.id}`} className={styles.cardLink}>
                            Read Article <ArrowRight size={16} />
                          </Link>
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
                <h4 className={styles.newsletterTitle}>Follow us</h4>
                <p className={styles.newsletterText}>Stay connected with us on our social media for the latest updates on environmental awareness.</p>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/plastrootsfoundation/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.5v.01"/><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/company/plastroots-foundation/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="https://www.facebook.com/p/Plastroots-Foundation-61579938444905/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  </a>
                </div>
              </motion.div>
            </aside>

          </div>
        </section>

      </main>
    </>
  );
};

export default Blogs;
