import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

const InViewChart = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {inView && children}
    </div>
  );
};

export default InViewChart;
