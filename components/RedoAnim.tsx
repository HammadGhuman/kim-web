import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';

function RedoAnim() {
  const count = useMotionValue(0);
  const [done, setDone] = useState(false);

  const baseText = 'durch KI.M';
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );
  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: 'tween', // Not really needed because adding a duration will force "tween"
      duration: 1,
      ease: 'easeInOut',
      onComplete: () => {
        setDone(true);
      },
    });

    return controls.stop;
  }, []);
  return <motion.span className="inline ml-80 text-center font-Marsden text-[30px] font-medium  text-yellow-600 md:text-[62px] md:leading-[72px]">{displayText}</motion.span>;
}

export default RedoAnim;
