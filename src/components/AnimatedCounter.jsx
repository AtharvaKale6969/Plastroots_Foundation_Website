import React, { useEffect, useState, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const AnimatedCounter = ({ end, duration = 2, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, end, {
        duration: duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        }
      });
      return () => controls.stop();
    }
  }, [inView, end, duration]);

  const formattedCount = new Intl.NumberFormat('en-IN').format(count);

  return <span ref={ref}>{prefix}{formattedCount}{suffix}</span>;
};

export default AnimatedCounter;
