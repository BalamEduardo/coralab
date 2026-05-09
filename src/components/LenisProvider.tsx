"use client";

import { useEffect } from "react";
import type Lenis from "lenis";

export function LenisProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    let frameId: number | null = null;
    let timeoutId: number | null = null;
    let idleId: number | null = null;
    let isCancelled = false;
    let lenisInstance: Lenis | null = null;
    let cleanupLenis = () => undefined;

    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const headerOffset = 88;

    const scrollToHash = (hash: string) => {
      const id = hash.replace("#", "");
      const target = id ? document.getElementById(id) : document.body;

      if (!target) {
        return;
      }

      if (lenisInstance) {
        lenisInstance.scrollTo(target, {
          duration: 1,
          offset: -headerOffset,
        });
        return;
      }

      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        top: Math.max(0, top),
      });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="/#"], a[href^="#"]',
      );

      if (!anchor) {
        return;
      }

      const url = new URL(anchor.href);

      if (url.origin !== window.location.origin || url.pathname !== "/") {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", `${url.pathname}${url.hash}`);
      scrollToHash(url.hash);
    };

    window.addEventListener("click", handleAnchorClick);

    if (prefersReducedMotion || isCoarsePointer) {
      return () => {
        window.removeEventListener("click", handleAnchorClick);
      };
    }

    const startLenis = async () => {
      const { default: Lenis } = await import("lenis");
      if (isCancelled) {
        return;
      }

      const lenis = new Lenis({
        autoRaf: false,
        anchors: {
          offset: -headerOffset,
          duration: 1,
        },
        duration: 1.15,
        lerp: 0.095,
        prevent: (node) => node.hasAttribute("data-lenis-prevent"),
        smoothWheel: true,
        syncTouch: false,
      });

      const onFrame = (time: number) => {
        lenis.raf(time);
        frameId = window.requestAnimationFrame(onFrame);
      };

      lenisInstance = lenis;
      frameId = window.requestAnimationFrame(onFrame);
      cleanupLenis = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
        lenisInstance = null;
        lenis.destroy();
      };
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(() => {
        void startLenis();
      });
    } else {
      timeoutId = window.setTimeout(() => {
        void startLenis();
      }, 1);
    }

    return () => {
      isCancelled = true;

      if (typeof window.cancelIdleCallback === "function" && idleId !== null) {
        window.cancelIdleCallback(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("click", handleAnchorClick);
      cleanupLenis();
    };
  }, []);

  return children;
}
