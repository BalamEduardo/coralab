"use client";

import { useSyncExternalStore, useCallback } from "react";

export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      const listener = () => callback();
      if (matchMedia.addEventListener) {
        matchMedia.addEventListener("change", listener);
        return () => matchMedia.removeEventListener("change", listener);
      } else {
        matchMedia.addListener(listener);
        return () => matchMedia.removeListener(listener);
      }
    },
    [query]
  );

  const getSnapshot = () => window.matchMedia(query).matches;

  const getServerSnapshot = () => false;

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
