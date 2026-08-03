import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Leaf, Share2, Mail, Link2, MessageCircle, ArrowLeft } from 'lucide-react';
import styles from './BlogDetail.module.css';

const BlogDetail = () => {
  const { id } = useParams();

  // Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = "The Future of Circular Economy: Building a Greener Tomorrow";

    switch (platform) {
      case 'mail':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent("Check out this article: " + url)}`;
        break;
      case 'copy':
        try {
          await navigator.clipboard.writeText(url);
          alert("Link copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy link", err);
        }
        break;
      case 'whatsapp':
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + " - " + url)}`, '_blank');
        break;
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share({
              title: title,
              url: url,
            });
          } catch (err) {
            console.error("Error sharing", err);
          }
        } else {
          alert("Web Share API is not supported in your browser.");
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Helmet>
        <title>The Future of Circular Economy - Plastroots Foundation</title>
        <meta name="description" content="Read our latest blog post on environmental sustainability and circular economy." />
        <meta property="og:title" content="The Future of Circular Economy - Plastroots Foundation" />
        <meta property="og:description" content="Read our latest blog post on environmental sustainability and circular economy." />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content="2026-08-20T00:00:00Z" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main className={styles.pageWrapper}>
        
        {/* Full Width Hero Section */}
        <section className={styles.heroSection}>
          <Link to="/blogs" className={styles.backLink}>
            <ArrowLeft size={18} /> Back to Blogs
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div>
              <span className={styles.categoryTag}>Sustainability</span>
            </div>
            <h1 className={styles.title}>The Future of Circular Economy: Building a Greener Tomorrow</h1>
            
            <div className={styles.metaInfo}>
              <span><Calendar size={14} style={{ display: 'inline', marginRight: '5px' }}/> August 20, 2026</span>
              <span className={styles.metaDivider}>•</span>
              <span><Clock size={14} style={{ display: 'inline', marginRight: '5px' }}/> 5 MIN READ</span>
            </div>
          </motion.div>
        </section>



        {/* Main Content Layout (Two Columns on Desktop) */}
        <section className={styles.contentLayout}>
          
          {/* Left Column: Article Body */}
          <motion.article 
            className={styles.articleBody}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

            <div className={styles.premiumQuote}>
              <p className={styles.quoteText}>"The greatest threat to our planet is the belief that someone else will save it. We must take action today for a sustainable tomorrow."</p>
            </div>

            <h3>The Importance of Grassroots Action</h3>
            
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
            
            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>

            <div className={styles.premiumQuote}>
              <p className={styles.quoteText}>"Waste is just a resource in the wrong place. By adopting a circular mindset, we redefine the boundaries of what is possible."</p>
            </div>

            <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>

          </motion.article>

          {/* Right Column: Sidebar */}
          <aside className={styles.sidebar}>
            
            {/* Author Profile */}
            <motion.div 
              className={styles.sidebarWidget}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={styles.widgetTitle}>About the Author</h4>
              <div className={styles.authorProfile}>
                <div className={styles.authorAvatar}>PF</div>
                <div>
                  <div className={styles.authorName}>Plastroots Editorial</div>
                  <div className={styles.authorRole}>Content Team</div>
                </div>
              </div>
              <p className={styles.authorBio}>Dedicated to sharing insights, stories, and research on environmental sustainability, waste management, and social impact across India.</p>
            </motion.div>

            {/* Share Widget */}
            <motion.div 
              className={styles.sidebarWidget}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className={styles.widgetTitle}>Share this Article</h4>
              <div className={styles.shareButtons}>
                <div className={styles.shareIcon} onClick={() => handleShare('mail')} title="Share via Email"><Mail size={20} /></div>
                <div className={styles.shareIcon} onClick={() => handleShare('copy')} title="Copy Link"><Link2 size={20} /></div>
                <div className={styles.shareIcon} onClick={() => handleShare('whatsapp')} title="Share on WhatsApp"><MessageCircle size={20} /></div>
                <div className={styles.shareIcon} onClick={() => handleShare('native')} title="Share..."><Share2 size={20} /></div>
              </div>
            </motion.div>

          </aside>
          
        </section>
      </main>
    </>
  );
};

export default BlogDetail;
