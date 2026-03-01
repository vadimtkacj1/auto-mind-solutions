'use client';

import Image from 'next/image';
import { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center rounded-bl-[40px] rounded-br-[40px]"
        style={{
          background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl w-full">
          {/* На мобилке картинка сверху (flex-col), на десктопе текст слева, картинка справа (flex-row-reverse) */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-12 lg:gap-16">

            {/* Блок с картинкой — на мобилке будет ПЕРВЫМ сверху */}
            <div className="w-full md:w-[48%] flex justify-center">
              <Image
                src="/images/hero-section.png"
                alt="Aiterra Dashboard"
                width={800}
                height={800}
                className="w-full h-auto max-w-[400px] md:max-w-none"
                priority
              />
            </div>

            {/* Блок с текстом — на мобилке будет ВТОРЫМ (под картинкой) и выровнен вправо */}
            <div 
              className="w-full md:w-[48%] flex flex-col items-end text-right" 
              dir="rtl"
            >
              <h1
                className="font-extrabold mb-6 md:mb-8 text-[#1a2b4b]"
                style={{
                  fontSize: 'clamp(32px, 5vw, 64px)',
                  fontWeight: 800,
                  lineHeight: '1.1',
                }}
              >
                יותר לידים.<br />
                פחות בזבוז תקציב.
              </h1>

              <p className="text-base md:text-lg text-gray-700 mb-8 md:mb-10 leading-relaxed">
                משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים שמוזנים בדאטה בזמן אמת.
                התוצאה: תנועה איכותית שנכנסת למערכת מסודרת והופכת ללידים שמייצרים מכירות.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white w-full md:w-auto px-12 py-4 md:py-5 text-base md:text-lg font-bold transition-all hover:opacity-90 hover:scale-105 bg-blue-600"
                style={{
                  boxShadow: '0 4px 14px 0 rgba(37, 99, 235, 0.39)',
                  borderRadius: '20px',
                }}
              >
                קבל שיחת אסטרטגיה חינם
              </button>
            </div>

          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        variant="light"
      />
    </>
  );
}