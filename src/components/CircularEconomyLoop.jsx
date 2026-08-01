import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Trash2, Factory, Recycle, Leaf } from 'lucide-react';
import styles from './CircularEconomyLoop.module.css';

const CircularEconomyLoop = () => {
  return (
    <div className={styles.container}>
      {/* Central Hub (Outside orbit so it doesn't spin) */}
      <div className={styles.centerNode}>
        <img src="/Images/Header/PF_LOGO.png" alt="Plastroots Logo" style={{ width: '100px', height: 'auto', objectFit: 'contain' }} />
      </div>

      <div className={styles.orbit}>

        {/* Node 1: Collection */}
        <div className={`${styles.node} ${styles.node1}`}>
          <Truck size={30} color="#16a34a" />
          <div className={styles.label}>Collection</div>
        </div>

        {/* Node 2: Segregation */}
        <div className={`${styles.node} ${styles.node2}`}>
          <Trash2 size={30} color="#16a34a" />
          <div className={styles.label}>Segregation</div>
        </div>

        {/* Node 3: Processing */}
        <div className={`${styles.node} ${styles.node3}`}>
          <Factory size={30} color="#16a34a" />
          <div className={styles.label}>Processing</div>
        </div>

        {/* Node 4: Recycling */}
        <div className={`${styles.node} ${styles.node4}`}>
          <Recycle size={30} color="#16a34a" />
          <div className={styles.label}>Recycling</div>
        </div>

        {/* Node 5: Reintroduce */}
        <div className={`${styles.node} ${styles.node5}`}>
          <Leaf size={30} color="#16a34a" />
          <div className={styles.label}>Reintroduce</div>
        </div>

      </div>
    </div>
  );
};

export default CircularEconomyLoop;
