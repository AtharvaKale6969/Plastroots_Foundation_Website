import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Share2, Mail, Link2, ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { getBlogById, blogPosts } from '../data/blogData';
import styles from './BlogDetail.module.css';

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = getBlogById(id);
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <main className={styles.pageWrapper}>
        <section className={styles.notFound}>
          <h1>Blog not found</h1>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/blogs" className={styles.backBtn}>Back to Blogs</Link>
        </section>
      </main>
    );
  }

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = blog.title;

    switch (platform) {
      case 'mail':
        window.open(`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Check out this article from Plastroots Foundation:\n\n" + title + "\n" + url)}`, '_self');
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        } catch (err) {
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        }
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + "\n\n" + url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        setShowShareModal(false);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        setShowShareModal(false);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        setShowShareModal(false);
        break;
      case 'native':
        setShowShareModal(true);
        break;
      default:
        break;
    }
  };

  const renderContent = (block, index) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {block.text}
          </motion.p>
        );
      case 'heading':
        return (
          <motion.h3
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            {block.text}
          </motion.h3>
        );
      case 'quote':
        return (
          <motion.div
            key={index}
            className={styles.premiumQuote}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.quoteText}>{block.text}</p>
          </motion.div>
        );
      case 'callout':
        return (
          <motion.div
            key={index}
            className={styles.calloutBlock}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className={styles.calloutText}>{block.text}</p>
          </motion.div>
        );
      case 'list':
        return (
          <motion.ul
            key={index}
            className={styles.contentList}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </motion.ul>
        );
      case 'signature':
        return (
          <motion.div
            key={index}
            className={styles.signatureBlock}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.signatureLine}></div>
            <div className={styles.signatureName}>{block.name}</div>
            <div className={styles.signatureRole}>{block.role}</div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const isDirector = blog.isDirectorLetter;
  const otherPosts = blogPosts.filter(post => post.id !== blog.id).slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{blog.title} - Plastroots Foundation</title>
        <meta name="description" content={blog.excerpt} />
        <meta property="og:title" content={`${blog.title} - Plastroots Foundation`} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={`${blog.isoDate}T00:00:00Z`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className={styles.pageWrapper}>

        {isDirector ? (
          <section className={styles.directorHero}>
            <Link to="/blogs" className={styles.backLink}>
              <ArrowLeft size={18} /> Back to Blogs
            </Link>

            <motion.div
              className={styles.directorHeroInner}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className={styles.directorLabel}>From the Director's Desk</div>
              <h1 className={styles.directorTitle}>{blog.title}</h1>
              {blog.subtitle && (
                <p className={styles.directorSubtitle}>{blog.subtitle}</p>
              )}
              <div className={styles.metaInfo}>
                <span><Calendar size={14} style={{ display: 'inline', marginRight: '5px' }}/> {blog.date}</span>
                <span className={styles.metaDivider}>&bull;</span>
                <span><Clock size={14} style={{ display: 'inline', marginRight: '5px' }}/> {blog.readTime}</span>
              </div>
            </motion.div>
          </section>
        ) : (
          <section className={styles.heroSection}>
            <Link to="/blogs" className={styles.backLink}>
              <ArrowLeft size={18} /> Back to Blogs
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div>
                <span className={styles.categoryTag}>{blog.category}</span>
              </div>
              <h1 className={styles.title}>{blog.title}</h1>

              <div className={styles.metaInfo}>
                <span><Calendar size={14} style={{ display: 'inline', marginRight: '5px' }}/> {blog.date}</span>
                <span className={styles.metaDivider}>&bull;</span>
                <span><Clock size={14} style={{ display: 'inline', marginRight: '5px' }}/> {blog.readTime}</span>
              </div>
            </motion.div>
          </section>
        )}

        <section className={styles.contentSection}>
          <div className={styles.contentLayout}>

            <div className={styles.articleColumn}>
              {blog.image && (
                <motion.div
                  className={`${styles.articleImageWrapper} ${isDirector ? styles.directorImageWrapper : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src={blog.image} alt={blog.title} className={styles.articleImage} />
                </motion.div>
              )}

              <motion.div
                className={styles.articleMeta}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <span>{blog.date}</span>
                <span className={styles.metaDot}>&bull;</span>
                <span>{blog.category}</span>
              </motion.div>

              <motion.article
                className={`${styles.articleBody} ${isDirector ? styles.directorArticle : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {blog.content.map((block, index) => renderContent(block, index))}
              </motion.article>

              <motion.div
                className={styles.articleFooter}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span className={styles.footerAuthor}>Post by <strong>{blog.author}</strong></span>
                <div className={styles.footerShare}>
                  <div className={styles.footerShareIcon} onClick={() => handleShare('mail')} title="Email"><Mail size={16} /></div>
                  <div className={styles.footerShareIcon} onClick={() => handleShare('whatsapp')} title="WhatsApp"><WhatsAppIcon size={16} /></div>
                  <div className={`${styles.footerShareIcon} ${copied ? styles.copiedIcon : ''}`} onClick={() => handleShare('copy')} title="Copy Link">
                    {copied ? <Check size={16} /> : <Link2 size={16} />}
                  </div>
                </div>
              </motion.div>
            </div>

            <aside className={styles.sidebar}>

              <motion.div
                className={`${styles.sidebarCard} ${isDirector ? styles.directorWidget : ''}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className={styles.authorSection}>
                  {blog.authorImage ? (
                    <img src={blog.authorImage} alt={blog.author} className={styles.authorAvatarLarge} />
                  ) : (
                    <div className={styles.authorAvatarFallback}>PF</div>
                  )}
                  <h4 className={styles.authorWidgetName}>{blog.author}</h4>
                  <p className={styles.authorWidgetBio}>{blog.authorBio || "Dedicated to sharing insights, stories, and research on environmental sustainability, waste management, and social impact across India."}</p>
                </div>

                <div className={styles.sidebarDivider}></div>

                <div className={styles.shareSection}>
                  <h4 className={styles.widgetTitle}>Share this Article</h4>
                  <div className={styles.shareButtons}>
                    <div className={styles.shareIconWrap} onClick={() => handleShare('mail')}>
                      <div className={styles.shareIcon}><Mail size={18} /></div>
                      <span className={styles.shareLabel}>Email</span>
                    </div>
                    <div className={styles.shareIconWrap} onClick={() => handleShare('whatsapp')}>
                      <div className={`${styles.shareIcon} ${styles.whatsappIcon}`}><WhatsAppIcon size={18} /></div>
                      <span className={styles.shareLabel}>WhatsApp</span>
                    </div>
                    <div className={styles.shareIconWrap} onClick={() => handleShare('copy')}>
                      <div className={`${styles.shareIcon} ${copied ? styles.copiedIcon : ''}`}>
                        {copied ? <Check size={18} /> : <Link2 size={18} />}
                      </div>
                      <span className={styles.shareLabel}>{copied ? 'Copied!' : 'Copy Link'}</span>
                    </div>
                    <div className={styles.shareIconWrap} onClick={() => handleShare('native')}>
                      <div className={styles.shareIcon}><Share2 size={18} /></div>
                      <span className={styles.shareLabel}>Share</span>
                    </div>
                  </div>
                </div>

                {otherPosts.length > 0 && (
                  <>
                    <div className={styles.sidebarDivider}></div>
                    <div className={styles.latestSection}>
                      <h4 className={styles.widgetTitle}>Latest Posts</h4>
                      <div className={styles.latestPostsList}>
                        {otherPosts.map((post) => (
                          <Link to={`/blogs/${post.id}`} key={post.id} className={styles.latestPostItem}>
                            <div className={styles.latestPostThumb}>
                              {post.image && <img src={post.image} alt={post.title} />}
                            </div>
                            <div className={styles.latestPostInfo}>
                              <span className={styles.latestPostTitle}>{post.title}</span>
                              <span className={styles.latestPostDate}>{post.date}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>

            </aside>

          </div>
        </section>
      </main>

      <AnimatePresence>
        {showShareModal && (
          <motion.div
            className={styles.shareOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              className={styles.shareModal}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.shareModalHeader}>
                <h3>Share this Article</h3>
                <button className={styles.shareModalClose} onClick={() => setShowShareModal(false)}>
                  <X size={20} />
                </button>
              </div>

              <p className={styles.shareModalTitle}>{blog.title}</p>

              <div className={styles.shareModalGrid}>
                <div className={styles.shareModalOption} onClick={() => { handleShare('whatsapp'); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalWhatsapp}`}><WhatsAppIcon size={22} /></div>
                  <span>WhatsApp</span>
                </div>
                <div className={styles.shareModalOption} onClick={() => { handleShare('mail'); setShowShareModal(false); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalMail}`}><Mail size={22} /></div>
                  <span>Email</span>
                </div>
                <div className={styles.shareModalOption} onClick={() => { handleShare('twitter'); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalTwitter}`}><TwitterIcon size={20} /></div>
                  <span>X (Twitter)</span>
                </div>
                <div className={styles.shareModalOption} onClick={() => { handleShare('linkedin'); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalLinkedin}`}><LinkedInIcon size={20} /></div>
                  <span>LinkedIn</span>
                </div>
                <div className={styles.shareModalOption} onClick={() => { handleShare('facebook'); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalFacebook}`}><FacebookIcon size={20} /></div>
                  <span>Facebook</span>
                </div>
                <div className={styles.shareModalOption} onClick={() => { handleShare('copy'); setShowShareModal(false); }}>
                  <div className={`${styles.shareModalIcon} ${styles.shareModalCopy}`}><Link2 size={22} /></div>
                  <span>Copy Link</span>
                </div>
              </div>

              <div className={styles.shareModalUrl}>
                <input type="text" readOnly value={typeof window !== 'undefined' ? window.location.href : ''} />
                <button onClick={() => { handleShare('copy'); setShowShareModal(false); }}>Copy</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {copied && (
          <motion.div
            className={styles.copyToast}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
          >
            <Check size={18} />
            <span>Link copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BlogDetail;
