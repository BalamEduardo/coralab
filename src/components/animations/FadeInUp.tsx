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
  duration?: number;
  distance?: number;
  className?: string;
  triggerOnce?: boolean;
}

export function FadeInUp({
  children,
  delay = 0,
  duration = 0.5,
  distance = 20,
  className,
  triggerOnce = true,
}: FadeInUpProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const prefersReducedMotion = useReducedMotion();
  const { ref, isInView } = useInView({ triggerOnce, rootMargin: "-50px" });

  const shouldAnimate = !prefersReducedMotion;
  
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
        // Using string interpolation for values to handle dynamic distance safely
        transform: shouldAnimate && !isInView ? `translateY(${distance}px)` : "translateY(0)",
        transition: shouldAnimate 
          ? `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s` 
          : "none",
        willChange: shouldAnimate ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </div>
  );
}
