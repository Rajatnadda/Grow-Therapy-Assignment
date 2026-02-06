"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function RevealOnScroll({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up", 
  distance = 60,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  const getInitialPosition = () => {
    switch (direction) {
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      default:
        return { y: distance }; 
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} style={{ width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            filter: "blur(6px)",
            ...getInitialPosition(),
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
            filter: "blur(0px)",
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
