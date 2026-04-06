"use client";

import { useEffect } from "react";

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
    let cleanupLenis = () => undefined;

    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isCoarsePointer) {
      return;
    }

    const startLenis = async () => {
      const { default: Lenis } = await import("lenis");
      if (isCancelled) {
        return;
      }

      const lenis = new Lenis({
        autoRaf: false,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
      });

      const onFrame = (time: number) => {
        lenis.raf(time);
        frameId = window.requestAnimationFrame(onFrame);
      };

      frameId = window.requestAnimationFrame(onFrame);
      cleanupLenis = () => {
        if (frameId !== null) {
          window.cancelAnimationFrame(frameId);
        }
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

      cleanupLenis();
    };
  }, []);

  return children;
}
