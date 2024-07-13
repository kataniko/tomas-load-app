// src/components/use-dimensions.js

import { useState, useEffect } from 'react';

export const useDimensions = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    handleResize(); // Get initial dimensions

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref]);

  return dimensions;
};
