import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Clock, Calendar, Leaf, Bookmark } from 'lucide-react';
import { blogPosts, categories, getFeaturedBlog, getDirectorBlog, getBlogsByCategory } from '../data/blogData';
import styles from './Blogs.module.css';

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredBlog = getFeaturedBlog();
  const directorBlog = getDirectorBlog();
  const filteredPosts = getBlogsByCategory(activeCategory);

  return (
    <>
      <Helmet>
        <title>Blogs | Insights on Circular Economy & Sustainability | Plastroots Foundation</title>
        <meta name="description" content="Read the latest insights, stories, and news from Plastroots Foundation. Learn about waste management, sustainability, and grassroots social impact." />
        <meta property="og:title" content="Blogs - Plastroots Foundation" />
        <meta property="og:description" content="Discover our latest insights on building a sustainable, circular world." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className={styles.blogsPage}>

        <section className={styles.heroSection}>
          <motion.div
            className="container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={styles.heroTitle}>Plastroots <span>Editorial</span></h1>
            <p className={styles.heroSubtitle}>Insights, stories, and perspectives on building a sustainable, circular world.</p>
          </motion.div>
        </section>

        {directorBlog && (
          <section className={styles.directorSection}>
            <div className="container">
              <motion.div
                className={styles.featuredCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.directorFeaturedImage}>
                  {directorBlog.authorImage && (
                    <img src={directorBlog.authorImage} alt={directorBlog.author} className={styles.directorAvatar} />
                  )}
                  <div className={styles.directorFeaturedLabel}>From the Director's Desk</div>
                </div>
                <div className={styles.featuredContent}>
                  <h2 className={styles.featuredTitle}>{directorBlog.title}</h2>
                  {directorBlog.subtitle && <p className={styles.directorFeaturedSub}>{directorBlog.subtitle}</p>}
                  <p className={styles.featuredExcerpt}>{directorBlog.excerpt}</p>

                  <div className={styles.metaInfo}>
                    <span className={styles.metaItem}><Calendar size={14} /> {directorBlog.date}</span>
                    <span className={styles.metaDivider}>&bull;</span>
                    <span className={styles.metaItem}><Clock size={14} /> {directorBlog.readTime}</span>
                  </div>

                  <Link to={`/blogs/${directorBlog.id}`} className={styles.readMoreBtn}>
                    Read This Article <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {featuredBlog && (
          <section className={styles.featuredSection}>
            <div className="container">
              <h3 className={styles.featuredSectionHeading}>Featured Article</h3>
              <motion.div
                className={styles.featuredCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className={styles.featuredImagePlaceholder}>
                  {featuredBlog.image ? (
                    <img src={featuredBlog.image} alt={featuredBlog.title} className={styles.featuredImage} />
                  ) : (
                    <div className={styles.placeholderIcon}>
                      <Leaf size={64} />
                    </div>
                  )}
                  <div className={styles.featuredBadge}>{featuredBlog.category}</div>
                </div>
                <div className={styles.featuredContent}>
                  <h2 className={styles.featuredTitle}>{featuredBlog.title}</h2>
                  <p className={styles.featuredExcerpt}>{featuredBlog.excerpt}</p>

                  <div className={styles.metaInfo}>
                    <span className={styles.metaItem}><Calendar size={14} /> {featuredBlog.date}</span>
                    <span className={styles.metaDivider}>&bull;</span>
                    <span className={styles.metaItem}><Clock size={14} /> {featuredBlog.readTime}</span>
                  </div>

                  <Link to={`/blogs/${featuredBlog.id}`} className={styles.readMoreBtn}>
                    Read This Article <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        <section className={styles.mainContent}>
          <div className={`container ${styles.contentLayout}`}>

            <div className={styles.articlesColumn}>
              <div className={styles.articlesHeader}>
                <h3 className={styles.sectionHeading}>Latest Articles</h3>

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
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      className={`${styles.blogCard} ${styles[post.height] || ''}`}
                    >
                      <div className={styles.cardImagePlaceholder}>
                        {post.image ? (
                          <img src={post.image} alt={post.title} className={`${styles.cardImage} ${post.isDirectorLetter ? styles.directorCardImage : ''}`} />
                        ) : (
                          <div className={styles.placeholderIconSmall}>
                            <Leaf size={32} />
                          </div>
                        )}
                        <div className={styles.categoryTag}>{post.category}</div>
                      </div>
                      <div className={styles.cardContent}>
                        <div className={styles.metaInfo}>
                          <span className={styles.metaItem}>{post.date}</span>
                          <span className={styles.metaDivider}>&bull;</span>
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

              <motion.div
                className={styles.supportCard}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className={styles.supportTitle}>Make an Impact</h4>
                <p className={styles.supportText}>Join hands with us to create a sustainable, circular economy. Every action counts towards a greener tomorrow.</p>
                <Link to="/collaborate" className={`btn-primary ${styles.supportBtn}`}>
                  Get Involved
                </Link>
              </motion.div>
            </aside>

          </div>
        </section>

      </main>
    </>
  );
};

export default Blogs;
