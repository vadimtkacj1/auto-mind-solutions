"use client";

import { useEffect, useMemo, useState } from "react";

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
  const [progress, setProgress] = useState(0);

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

    const finish = () => {
      if (finished) return;
      finished = true;
      setProgress(100);
      // Restore overflow immediately
      restoreOverflow();
      // Give the browser 1 frame to paint before removing the overlay (avoids flicker)
      requestAnimationFrame(() => {
        if (!cancelled) setLoading(false);
      });
    };

    const start = Date.now();

    const run = async () => {
      if (uniqueAssets.length === 0) {
        finish();
        return;
      }

      let done = 0;
      const total = uniqueAssets.length;

      const tick = () => {
        done += 1;
        const pct = Math.round((done / total) * 100);
        setProgress(Math.min(pct, 99));
      };

      // preload in parallel but keep progress updates
      await Promise.race([
        Promise.all(
          uniqueAssets.map(async (url) => {
            await preloadImage(url);
            if (!cancelled) tick();
          }),
        ),
        new Promise<void>((resolve) => setTimeout(resolve, maxWaitMs)),
      ]);

      // If we hit timeout, still finish; don't trap users behind the loader forever.
      if (Date.now() - start >= maxWaitMs) {
        setProgress(99);
      }

      finish();
    };

    void run();

    return () => {
      cancelled = true;
      restoreOverflow();
    };
  }, [maxWaitMs, uniqueAssets]);

  // Простой CSS-based loader без framer-motion для максимальной производительности
  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)",
        opacity: loading ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Простой CSS спиннер */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-pulse" />
          <div
            className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"
            style={{ animationDuration: "0.8s" }}
          />
        </div>
        <p className="text-lg font-bold text-[#1a2b4b]">טוען... {progress}%</p>
      </div>
    </div>
  );
}
