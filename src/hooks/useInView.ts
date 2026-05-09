"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

export function useInView<T extends Element = HTMLDivElement>(options: UseInViewOptions = {}) {
  const { root, rootMargin, threshold, triggerOnce = true } = options;
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isInView, setIsInView] = useState(false);

  const disconnectObserver = useCallback(() => {
    observerRef.current?.disconnect();
    observerRef.current = null;
  }, []);

  const setRef = useCallback(
    (node: T | null) => {
      disconnectObserver();

      if (!node) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce) {
              disconnectObserver();
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        },
        { root, rootMargin, threshold }
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [disconnectObserver, root, rootMargin, threshold, triggerOnce]
  );

  useEffect(() => disconnectObserver, [disconnectObserver]);

  return { ref: setRef, isInView };
}
