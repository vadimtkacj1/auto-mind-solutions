"use client";
import React, { useState } from "react";

const ERROR_IMG_SRC =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setDidError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const { src, alt, style, className, ...rest } = props;

  return (
    <div className="relative inline-block w-full h-full">
      {isLoading && !didError && (
        <div className={`absolute inset-0 ${className ?? ""}`} style={style}>
          <div className="w-full h-full bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_2s_infinite]" />
          </div>
        </div>
      )}
      {didError ? (
        <div className={`inline-block bg-gray-100 text-center align-middle ${className ?? ""}`} style={style}>
          <div className="flex items-center justify-center w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
          </div>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={`${className ?? ""} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          style={style}
          crossOrigin="anonymous"
          {...rest}
          onError={handleError}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
}
