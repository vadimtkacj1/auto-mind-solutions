/**
 * Image optimization utilities for better performance
 */

export const IMAGE_FORMATS = {
  AVIF: 'image/avif',
  WEBP: 'image/webp',
  JPEG: 'image/jpeg',
  PNG: 'image/png',
} as const;

export const IMAGE_SIZES = {
  MOBILE: 640,
  TABLET: 1024,
  DESKTOP: 1920,
} as const;

/**
 * Generate responsive image srcset
 */
export function generateSrcSet(src: string, sizes: number[]): string {
  return sizes
    .map((size) => `${src}?w=${size}&q=80 ${size}w`)
    .join(', ');
}

/**
 * Check if browser supports modern image formats
 */
export function checkImageSupport(): {
  avif: boolean;
  webp: boolean;
} {
  if (typeof window === 'undefined') {
    return { avif: false, webp: false };
  }

  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;

  return {
    avif: canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0,
    webp: canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0,
  };
}

/**
 * Get optimal image format based on browser support
 */
export function getOptimalImageFormat(originalFormat: string): string {
  const support = checkImageSupport();
  
  if (support.avif) return IMAGE_FORMATS.AVIF;
  if (support.webp) return IMAGE_FORMATS.WEBP;
  
  return originalFormat;
}

/**
 * Lazy load images with intersection observer
 */
export function lazyLoadImage(img: HTMLImageElement): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
          observer.unobserve(image);
        }
      });
    }, {
      rootMargin: '50px',
    });

    observer.observe(img);
  } else {
    // Fallback for older browsers
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
  }
}

/**
 * Preload critical images
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'low'): void {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  if (priority === 'high') {
    link.setAttribute('fetchpriority', 'high');
  }
  document.head.appendChild(link);
}
