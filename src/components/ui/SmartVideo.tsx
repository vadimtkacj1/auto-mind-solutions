"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type NetworkInformationLike = {
  saveData?: boolean;
  effectiveType?: string;
};

function shouldDisableAutoplayForDevice(): boolean {
  if (typeof window === "undefined") return true;

  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
  const connection = (navigator as unknown as { connection?: NetworkInformationLike }).connection;
  const saveData = connection?.saveData ?? false;
  const effectiveType = connection?.effectiveType ?? "";
  const slowConnection = effectiveType === "slow-2g" || effectiveType === "2g";

  return reduceMotion || saveData || slowConnection;
}

export type SmartVideoProps = Omit<React.VideoHTMLAttributes<HTMLVideoElement>, "preload"> & {
  /** When true, video pauses when scrolled out of view (recommended). */
  pauseWhenNotInView?: boolean;
  /** IntersectionObserver rootMargin for pre-starting playback slightly before entering viewport. */
  inViewRootMargin?: string;
  /** IntersectionObserver threshold. */
  inViewThreshold?: number;
  /** If true, disables autoplay on Save-Data / slow connections / prefers-reduced-motion. */
  respectDevicePreferences?: boolean;
  /** Default preload when not provided: "metadata" if autoplay is allowed, otherwise "none". */
  preload?: "none" | "metadata" | "auto";
};

export function SmartVideo({
  pauseWhenNotInView = true,
  inViewRootMargin = "200px",
  inViewThreshold = 0.15,
  respectDevicePreferences = true,
  autoPlay,
  preload,
  ...props
}: SmartVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const autoplayAllowed = useMemo(() => {
    if (!autoPlay) return false;
    if (!respectDevicePreferences) return true;
    return !shouldDisableAutoplayForDevice();
  }, [autoPlay, respectDevicePreferences]);

  const resolvedPreload: "none" | "metadata" | "auto" = preload ?? (autoplayAllowed ? "metadata" : "none");

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: inViewThreshold, rootMargin: inViewRootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [inViewRootMargin, inViewThreshold]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const shouldPlay = autoplayAllowed && (!pauseWhenNotInView || isInView) && !document.hidden;

    if (shouldPlay) {
      void el.play().catch(() => {
        // Autoplay can be blocked by browser policies — ignore.
      });
      return;
    }

    // Pause aggressively to reduce CPU/GPU decode work offscreen.
    try {
      el.pause();
    } catch {
      // Ignore.
    }
  }, [autoplayAllowed, isInView, pauseWhenNotInView]);

  useEffect(() => {
    if (!pauseWhenNotInView) return;
    const el = videoRef.current;
    if (!el) return;

    const onVisibilityChange = () => {
      if (document.hidden) {
        try {
          el.pause();
        } catch {
          // Ignore.
        }
      } else if (autoplayAllowed && isInView) {
        void el.play().catch(() => {
          // Ignore.
        });
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, [autoplayAllowed, isInView, pauseWhenNotInView]);

  return <video ref={videoRef} autoPlay={autoplayAllowed} preload={resolvedPreload} {...props} />;
}


