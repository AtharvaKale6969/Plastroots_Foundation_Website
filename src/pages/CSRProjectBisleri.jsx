import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Megaphone, School, Leaf, Droplets, Target, RefreshCcw, TrendingUp } from 'lucide-react';
import styles from './CSRProjectBisleri.module.css';

const CSRProjectBisleri = () => {
  const navigate = useNavigate();

  return (
    <div className="page-wrapper">
      {/* Hero Section */}
      <section className={styles.hero}>
        <button onClick={() => navigate('/csr-projects')} className={styles.backBtn}>
          <ArrowLeft size={18} /> Back to CSR Projects
        </button>
        <div className={styles.heroGrid}>
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>Bisleri - Bottles For Change</h1>
            <p className={styles.subtitle}>
              A visionary initiative to rethink plastic waste, encouraging communities to recycle responsibly.
            </p>
          </motion.div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImageCard}>
              <img src="/Images/BFC.png" alt="Bisleri Bottles For Change Logo" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Quote */}
      <section className={styles.quoteSection}>
        <motion.div 
          className={styles.quoteWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.quoteText}>"Transforming plastic from a waste product into a valuable resource, one community at a time."</h2>
        </motion.div>
      </section>

      {/* 1. The Genesis of Change (Overlapping Image Composition) */}
      <section className={styles.genesisSection}>
        <div className={styles.container}>
          <div className={styles.genesisGrid}>
            <div className={styles.genesisText}>
              <h2 className={styles.sectionHeading}>The Genesis of Change</h2>
              <p className={styles.leadParagraph}>
                It begins with a shift in perspective. For too long, post-consumer plastic has been discarded as an environmental burden. The "Bottles for Change" initiative rewrites this narrative.
              </p>
              <p className={styles.standardParagraph}>
                In collaboration with Plastroots Foundation, Bisleri has architected a circular ecosystem. We ensure that every PET bottle collected is meticulously cleaned, shredded, and given a second life as premium fabrics, handbags, or urban furniture.
              </p>
              
              <ul className={styles.featureList}>
                <li>
                  <RefreshCcw className={styles.featureIcon} size={24} />
                  <div>
                    <strong>Circular Economy</strong>
                    <span>Transforming consumer waste into valuable commodities.</span>
                  </div>
                </li>
                <li>
                  <Target className={styles.featureIcon} size={24} />
                  <div>
                    <strong>Zero Landfill Commitment</strong>
                    <span>Diverting millions of tons of plastic from our oceans.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className={styles.genesisVisuals}>
              <div className={styles.imageCardBack}>
                <img src="/Images/Bisleri_genesis.avif" alt="Collection drive" />
              </div>
              <div className={styles.imageCardFront}>
                <img src="/Images/BFC_product.jpeg" alt="Bottles for Change Product" />
              </div>
              <div className={styles.floatingBadge}>
                <Leaf size={24} color="#10b981" />
                <span>100% Recyclable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Impact by the Numbers (Metrics) */}
      <section className={styles.impactSection}>
        <div className={styles.container}>
          <div className={styles.impactHeader}>
            <h2 className={styles.sectionHeadingWhite}>The Ripple Effect</h2>
            <p>Measurable outcomes from our relentless pursuit of sustainability.</p>
          </div>
          <div className={styles.impactGrid}>
            <div className={styles.impactCard}>
              <div className={styles.impactNumber}>6,500+</div>
              <div className={styles.impactLabel}>Tonnes Plastic Recycled</div>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactNumber}>3,90,000+</div>
              <div className={styles.impactLabel}>Citizens Engaged</div>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactNumber}>270+</div>
              <div className={styles.impactLabel}>Awareness Campaigns</div>
            </div>
            <div className={styles.impactCard}>
              <div className={styles.impactNumber}>120+</div>
              <div className={styles.impactLabel}>Schools Engaged</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Driving Awareness (Interactive Timeline/Step Layout) */}
      <section className={styles.awarenessSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <h2 className={styles.sectionHeading}>Driving Awareness at Scale</h2>
            <p className={styles.standardParagraph}>
              Behavioral change requires sustained, meaningful engagement at every level of society. Our comprehensive IEC (Information, Education, and Communication) campaigns are meticulously designed to transcend demographics, reaching students, corporate professionals, and grassroots communities alike. By blending interactive learning with actionable participation, we dismantle deeply ingrained habits and foster a culture where responsible plastic disposal is not just a duty, but a shared community value.
            </p>
          </div>

          <div className={styles.timelineGrid}>
            <div className={styles.timelineCard}>
              <div className={styles.timelineIcon}><School size={28} /></div>
              <h3>Institutional Workshops</h3>
              <p>Targeting schools and colleges to instill source-segregation habits in the next generation.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineIcon}><Megaphone size={28} /></div>
              <h3>Corporate Seminars</h3>
              <p>Engaging corporate employees through interactive sessions and office collection drives.</p>
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.timelineIcon}><Leaf size={28} /></div>
              <h3>Tree Plantation</h3>
              <p>Organizing massive community greening initiatives to restore local biodiversity and sequester carbon.</p>
            </div>
          </div>

          <div className={styles.awarenessDetails}>
            {/* Detail 1: Text Left, Image Right */}
            <div className={styles.detailRow}>
              <div className={styles.detailText}>
                <h3>Institutional Workshops: Shaping the Next Generation</h3>
                <p>We firmly believe that true, lasting environmental stewardship begins in the classroom. By integrating rigorous environmental consciousness into school and college curriculums, we ensure that sustainability becomes second nature to students. Our interactive workshops go beyond theory, they provide practical, hands-on experiences that empower youth to take ownership of their local ecosystems.</p>
                <p>Through strategic partnerships with educational boards, we've designed programs that not only educate but inspire action. The students become the catalyst for change, bringing these crucial practices back to their households.</p>
                <ul>
                  <li><strong>Interactive Learning:</strong> Live demonstrations and gamified learning on how to separate wet, dry, and hazardous waste effectively.</li>
                  <li><strong>Ambassador Programs:</strong> Outstanding students are appointed as 'Green Ambassadors' to champion recycling in their neighborhoods and lead peer-to-peer education.</li>
                  <li><strong>Collection Drives:</strong> Schools hold monthly inter-house plastic collection competitions, turning awareness into measurable, trackable action.</li>
                </ul>
              </div>
              <div className={styles.detailImageGroup}>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/BFC_1.jpeg" alt="Institutional Workshop" />
                </div>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/BFC_2.jpeg" alt="Students Participating" />
                </div>
              </div>
            </div>

            {/* Detail 2: Text First (Mobile), Images Left (Desktop) */}
            <div className={`${styles.detailRow} ${styles.rowReverse}`}>
              <div className={styles.detailText}>
                <h3>Corporate Seminars: Driving Organizational Change</h3>
                <p>The corporate sector plays a massive role in our consumption ecosystem. We partner with leading corporations to transform their office spaces into verifiable zero-waste environments. Our seminars are designed to break down complex circular economy principles into actionable steps that employees can adopt both at their desks and in their homes.</p>
                <p>By engaging corporate leadership alongside the workforce, we foster a top-down and bottom-up culture of sustainability. This dual approach ensures that corporate sustainability goals translate into tangible, everyday habits.</p>
                <ul>
                  <li><strong>Sustainability Audits:</strong> We assess current office waste generation, map out the waste trail, and recommend targeted reduction strategies.</li>
                  <li><strong>Employee Engagement:</strong> Conducting high-energy town halls and interactive workshops focused on the circular economy and responsible consumption.</li>
                  <li><strong>Smart Bins Installation:</strong> Providing comprehensive, color-coded bin infrastructure across corporate campuses for streamlined, error-free segregation.</li>
                </ul>
              </div>
              <div className={styles.detailImageGroup}>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/BFC_4.jpeg" alt="Corporate Seminars 1" />
                </div>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/BFC_3.jpeg" alt="Corporate Seminars 2" />
                </div>
              </div>
            </div>

            {/* Detail 3: Text Left, Image Right */}
            <div className={styles.detailRow}>
              <div className={styles.detailText}>
                <h3>Tree Plantation & Community Greening</h3>
                <p>While plastic recycling is our core focus, we recognize that true environmental restoration requires active rebuilding of our natural habitats. Our massive tree plantation drives serve as a powerful communal activity that physically transforms degraded urban spaces into thriving green lungs.</p>
                <p>These initiatives are deeply community-driven. We don't just plant saplings, we establish long-term care committees comprised of local residents who adopt these green spaces. This ensures a high survival rate for the trees and fosters a deep sense of environmental ownership among the citizens.</p>
                <ul>
                  <li><strong>Native Species Focus:</strong> We strictly plant indigenous trees that require less water, support local wildlife, and adapt perfectly to the regional climate.</li>
                  <li><strong>Community Adoption:</strong> Empowering local resident welfare associations (RWAs) to take lifelong ownership of the newly planted urban forests.</li>
                  <li><strong>Biodiversity Tracking:</strong> Monitoring the growth of the trees and tracking the return of local flora and fauna to these revitalized areas over time.</li>
                </ul>
              </div>
              <div className={styles.detailImageGroup}>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/Tree Plantation.jpeg" alt="Tree Plantation & Community Greening 1" />
                </div>
                <div className={styles.detailImageSplit}>
                  <img src="/Images/Gallery/WhatsApp Image 2026-06-05 at 3.39.14 PM.jpeg" alt="Tree Plantation & Community Greening 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Empowering the Grassroots (Masonry Grid Layout) */}
      <section className={styles.grassrootsSection}>
        <div className={styles.container}>
          <div className={styles.grassrootsGrid}>
            <div className={styles.grassrootsText}>
              <h2 className={styles.sectionHeading}>
                <span>Cultivating Community</span><br />
                Stewardship
              </h2>
              <p className={styles.leadParagraph}>
                Transforming our cities begins with transforming mindsets at the community level.
              </p>
              <p className={styles.standardParagraph}>
                We believe that genuine environmental impact is impossible without the active participation of local citizens. Through targeted campaigns, we engage directly with households, housing societies, and local communities to educate them on the critical importance of source segregation and responsible plastic disposal.
              </p>
              <p className={styles.standardParagraph}>
                Our outreach programs involve interactive street plays, door-to-door awareness drives, and local workshops that simplify the concepts of a circular economy. By empowering citizens with the right knowledge and tools, we transform everyday consumers into proactive environmental champions who drive sustainable change in their own neighborhoods.
              </p>
            </div>
            
            <div className={styles.masonryVisuals}>
              <div className={styles.masonryCol1}>
                <div className={styles.masonryImgSmall}>
                  <img src="/Images/BFC_7.jpeg" alt="Community Stewardship 1" />
                </div>
                <div className={styles.masonryImgSmall}>
                  <img src="/Images/BFC_10.png" alt="Community Stewardship 4" />
                </div>
              </div>
              <div className={styles.masonryCol2}>
                <div className={styles.masonryImgSmall}>
                  <img src="/Images/BFC_8.jpeg" alt="Community Stewardship 2" />
                </div>
                <div className={styles.masonryImgSmall}>
                  <img src="/Images/BFC_9.jpeg" alt="Community Stewardship 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Road Ahead (Full Section layout) */}
      <section className={styles.futureSection}>
        <div className={styles.futureContainer}>
          <div className={styles.futureContentWrapper}>
            <div className={styles.futureTextSide}>
              <h2 className={styles.futureHeading}>The Road Ahead</h2>
              <div className={styles.futureText}>
                <p className={styles.futureLead}>
                  Our ongoing vision is to continuously scale the "Bottles for Change" model across emerging urban centers, establishing localized, self-sustaining collection ecosystems.
                </p>
                <p className={styles.futureSub}>
                  We remain dedicated to enrolling more community members and extending our operational reach to cover wider geographical areas. By implementing adaptable and localized waste management practices, our goal is to systematically formalize the recycling sector and reduce the environmental footprint of communities at large. The journey toward practical, sustainable waste management is a continuous commitment.
                </p>
              </div>
            </div>
            <div className={styles.futureImageSide}>
              <img src="/Images/Click and graph.svg" className={styles.futureIcon} alt="Click and graph Icon" style={{ width: '100%', maxWidth: '350px', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CSRProjectBisleri;
