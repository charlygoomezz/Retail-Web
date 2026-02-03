import { motion, useAnimation, useInView, Variants } from 'framer-motion';
import { ReavealProps } from './Reveal.types';
import { useState, useEffect, useRef } from 'react';

export const fadeIn = (position: string, delay?: number): Variants => {
  return {
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween' as const,
        duration: 1.4,
        delay: delay ? delay : 0.5,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    hidden: {
      y: position === 'botton' ? -80 : 0,
      x: position === 'right' ? 80 : 0,
      opacity: 0,
      transition: {
        type: 'tween' as const,
        duration: 0.5,
        delay: 0.5,
        ease: [0.25, 0.25, 0.25, 0.25],
      },
    },
  };
};

export function Reveal(props: ReavealProps) {
  const { children, delay, position, className } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      slideControls.start('visible');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref}>
      <motion.div
        className={className}
        variants={fadeIn(position, delay)}
        initial="hidden"
        animate={mainControls}
        exit="hidden"
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
