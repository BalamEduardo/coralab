"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  mobileDelay?: number;
  duration?: number;
  mobileDuration?: number;
  distance?: number;
  mobileDistance?: number;
  className?: string;
  triggerOnce?: boolean;
}

export function FadeInUp({
  children,
  delay = 0,
  mobileDelay,
  duration = 0.5,
  mobileDuration = 0.38,
  distance = 20,
  mobileDistance = 12,
  className,
  triggerOnce = true,
}: FadeInUpProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView({ triggerOnce, rootMargin: "-50px" });

  const shouldAnimate = !prefersReducedMotion;
  const cssDelay = mobileDelay ?? Math.min(delay, 0.16);
  
  if (isDesktop && shouldAnimate) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: distance }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }}
        transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // Mobile / Reduced Motion (CSS approach)
  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: shouldAnimate && !isInView ? 0 : 1,
        transform: shouldAnimate && !isInView ? `translateY(${mobileDistance}px)` : "translateY(0)",
        transition: shouldAnimate 
          ? `opacity ${mobileDuration}s ease-out ${cssDelay}s, transform ${mobileDuration}s ease-out ${cssDelay}s` 
          : "none",
        willChange: shouldAnimate ? "opacity, transform" : "auto",
      }}
    >
      {children}
    </div>
  );
}
