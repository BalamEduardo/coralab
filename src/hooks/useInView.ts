"use client";

import { useState, useEffect } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(options: UseInViewOptions = {}) {
  const { root, rootMargin, threshold, triggerOnce = true } = options;
  const [ref, setRef] = useState<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, root, rootMargin, threshold, triggerOnce]);

  return { ref: setRef, isInView };
}
