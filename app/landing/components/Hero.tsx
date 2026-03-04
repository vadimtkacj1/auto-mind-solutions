'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      className="pt-4 pb-8 md:pb-20 flex items-center rounded-bl-[40px] rounded-br-[40px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
      }}
    >
      <div className="container mx-auto px-1 sm:px-3 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-1 sm:gap-3 md:gap-16">
          <div className="w-full md:w-[43%] flex flex-col items-center text-center order-2 md:order-none">
            <h1
              className="text-[#1a2b4b] mb-3 mt-6 md:mt-16 md:mb-8 w-full"
              style={{
                fontSize: 'clamp(32px, 8vw, 72px)',
                fontWeight: 900,
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
              }}
            >
              יותר לידים.<br />
              פחות בזבוז תקציב.
            </h1>

            <p
              className="text-sm sm:text-base md:text-xl text-gray-700 mb-8 sm:mb-6 md:mb-10 leading-relaxed font-medium max-w-full md:max-w-[500px] px-2 sm:px-0"
            >
              משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים שמוזנים בדאטה בזמן אמת.
              התוצאה: תנועה איכותית שנכנסת למערכת מסודרת והופכת ללידים שמייצרים מכירות.
            </p>

            <div className="w-full flex justify-center px-4 md:px-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    const headerHeight = 80;
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-block text-center text-white w-full md:w-auto px-14 py-4 md:py-5 text-lg font-black transition-all cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)',
                  boxShadow: '0 10px 25px -5px rgba(0, 102, 255, 0.4)',
                  borderRadius: '20px',
                }}
              >
                קבל שיחת אסטרטגיה חינם
              </a>
            </div>
          </div>

          <div className="w-full md:w-[55%] flex justify-center order-1 md:order-none">
            <div className="relative w-full md:max-w-none aspect-square">

              {/* Минимальный placeholder для быстрого рендеринга */}
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-gradient-to-br from-blue-50 to-blue-100 animate-pulse" />
              )}

              <Image
                src="/images/hero-section-opt.webp"
                alt="People working together"
                fill
                className={`object-contain w-full h-full transition-opacity duration-500 mt-10 mb-10 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ objectPosition: 'center 35%'}}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 55vw, 700px"
                priority
                fetchPriority="high"
                quality={80}
                blurDataURL="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoKAAoAAgA0JaQAA3AA/vuUAAA="
                onLoad={() => {
                  setImageLoaded(true);
                }}
                onError={() => {
                  setImageLoaded(true);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}