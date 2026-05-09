"use client";

import { ReactNode, Children } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/hooks/useInView";

interface StaggeredGridProps {
  children: ReactNode;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  triggerOnce?: boolean;
}

export function StaggeredGrid({
  children,
  staggerDelay = 0.1,
  direction = "up",
  className,
  triggerOnce = true,
}: StaggeredGridProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView({ triggerOnce, rootMargin: "-50px" });

  const shouldAnimate = !prefersReducedMotion;

  const itemOffset = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  }[direction];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, ...itemOffset },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
    },
  };

  if (isDesktop && shouldAnimate) {
    return (
      <div ref={ref} className={className}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display: "contents" }}
        >
          {Children.map(children, (child) => (
            <motion.div variants={itemVariants}>{child}</motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Mobile / Reduced Motion (CSS approach with manual delays)
  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        const delay = index * staggerDelay;
        const initialTransform = {
          up: "translateY(20px)",
          down: "translateY(-20px)",
          left: "translateX(20px)",
          right: "translateX(-20px)",
        }[direction];
        
        return (
          <div
            style={{
              opacity: shouldAnimate && !isInView ? 0 : 1,
              transform: shouldAnimate && !isInView ? initialTransform : "translate(0)",
              transition: shouldAnimate
                ? `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`
                : "none",
              willChange: shouldAnimate ? "opacity, transform" : "auto",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
