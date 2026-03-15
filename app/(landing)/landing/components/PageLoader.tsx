"use client";

import { useEffect, useMemo, useState } from "react";
import "./PageLoader.css";

type PageLoaderProps = {
  assets?: string[];
  maxWaitMs?: number;
};

function preloadImage(url: string) {
  return new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // don't block forever
    img.src = url;
  });
}

export default function PageLoader({ assets = [], maxWaitMs = 20000 }: PageLoaderProps) {
  const [loading, setLoading] = useState(true);

  const uniqueAssets = useMemo(() => Array.from(new Set(assets)), [assets]);

  useEffect(() => {
    let finished = false;
    let cancelled = false;

    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const restoreOverflow = () => {
      document.documentElement.style.overflow = prevHtmlOverflow;
      document.body.style.overflow = prevBodyOverflow;
    };

    const start = Date.now();
    const minDisplayTime = 280; // Shorter for snappier feel

    const finish = () => {
      if (finished) return;
      finished = true;

      // Ensure minimum display time
      const elapsed = Date.now() - start;
      const delay = Math.max(0, minDisplayTime - elapsed);

      setTimeout(() => {
        // Restore overflow
        restoreOverflow();
        // Give the browser 1 frame to paint before removing the overlay (avoids flicker)
        requestAnimationFrame(() => {
          if (!cancelled) setLoading(false);
        });
      }, delay);
    };

    const run = async () => {
      if (uniqueAssets.length === 0) {
        finish();
        return;
      }

      // preload in parallel
      await Promise.race([
        Promise.all(
          uniqueAssets.map(async (url) => {
            await preloadImage(url);
          }),
        ),
        new Promise<void>((resolve) => setTimeout(resolve, maxWaitMs)),
      ]);

      finish();
    };

    void run();

    return () => {
      cancelled = true;
      restoreOverflow();
    };
  }, [maxWaitMs, uniqueAssets]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "#333",
        opacity: loading ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <div className="rocket-loader">
        <div className="rocket">
          <div className="rocket-extras"></div>
          <div className="jet">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
