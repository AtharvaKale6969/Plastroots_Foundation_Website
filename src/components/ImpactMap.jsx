import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import styles from './ImpactMap.module.css';

const geoUrl = "/india-topojson.json";

const ImpactMap = () => {
  const [tooltipContent, setTooltipContent] = useState("");
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>

          {/* Left Column: Impact Header & Stats */}
          <div className={styles.leftCol}>
            <motion.div
              className={styles.impactHeader}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Impact - PLASTROOTS FOUNDATION</h2>
              <p>
                Together we are creating a lasting, sustainable impact in India.
                Our reach continues to grow, and our numbers reflect our dedication
                to environmental stewardship and community empowerment.
              </p>
            </motion.div>

            <motion.div
              className={styles.statsGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
            >
              <motion.div className={styles.statCard} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className={styles.statLabel}>Schools Reached</div>
                <div className={styles.statValue}>20+</div>
                <div className={styles.statDesc}>Awareness in Nagpur District</div>
              </motion.div>

              <motion.div className={styles.statCard} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className={styles.statLabel}>Swachchta Sathis</div>
                <div className={styles.statValue}>25+</div>
                <div className={styles.statDesc}>Uplifted & empowered</div>
              </motion.div>

              <motion.div className={styles.statCard} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className={styles.statLabel}>People Impacted</div>
                <div className={`${styles.statValue} ${styles.statHighlight}`}>10,000+</div>
                <div className={styles.statDesc}>Direct & indirect beneficiaries</div>
              </motion.div>

              <motion.div className={styles.statCard} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className={styles.statLabel}>SHGs Trained</div>
                <div className={styles.statValue}>210+</div>
                <div className={styles.statDesc}>Waste management practices</div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Map */}
          <motion.div
            className={styles.mapContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 800,
                center: [82.5, 24] // Center coordinates for India
              }}
              width={450}
              height={480}
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map(geo => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={() => {
                        const props = geo.properties;
                        // Support various common TopoJSON property keys for India states
                        const stateName = props.ST_NM || props.NAME_1 || props.name || props.id || "Region";
                        setTooltipContent(stateName);
                      }}
                      onMouseLeave={() => {
                        setTooltipContent("");
                      }}
                      style={{
                        default: {
                          fill: "#e2e8f0",
                          stroke: "#cbd5e1",
                          strokeWidth: 0.75,
                          outline: "none",
                        },
                        hover: {
                          fill: "var(--brand-green)",
                          stroke: "#ffffff",
                          strokeWidth: 1,
                          outline: "none",
                          cursor: "pointer",
                          transition: "all 250ms ease"
                        },
                        pressed: {
                          fill: "var(--brand-blue)",
                          outline: "none",
                        }
                      }}
                    />
                  ))
                }
              </Geographies>
            </ComposableMap>

            {tooltipContent && (
              <div className={styles.tooltip}>
                {tooltipContent}
              </div>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ImpactMap;
