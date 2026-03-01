'use client';

import Image from 'next/image';
import { useState } from 'react';
import SuccessModal from './SuccessModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        className="pt-20 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center rounded-bl-[40px] rounded-br-[40px]"
        style={{
          background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)',
        }}
      >
        <div className="container mx-auto px-4 max-w-7xl w-full">
          {/* На мобилке картинка ПЕРВАЯ (сверху), на десктопе текст слева, картинка справа */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-16">

            {/* БЛОК КАРТИНКИ: На мобилке сверху */}
            <div className="w-full md:w-[50%] flex justify-center">
              <div className="relative w-full max-w-[380px] md:max-w-none">
                <Image
                  src="/images/hero-section.png"
                  alt="People working together"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* БЛОК ТЕКСТА: На мобилке под картинкой, выравнивание ВПРАВО */}
            <div 
              className="w-full md:w-[48%] flex flex-col items-end text-right" 
              dir="rtl"
            >
              <h1
                className="text-[#1a2b4b] mb-4 md:mb-8"
                style={{
                  fontSize: 'clamp(38px, 6vw, 72px)',
                  fontWeight: 900, // МАКСИМАЛЬНО ЖИРНЫЙ
                  lineHeight: '1.05',
                  letterSpacing: '-0.02em',
                }}
              >
                יותר לידים.<br />
                פחות בזבוז תקציב.
              </h1>

              <p className="text-base md:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed font-medium max-w-[500px]">
                משלבים בניית אתר ממיר, אסטרטגיית SEO מדויקת וקמפיינים ממוקדים שמוזנים בדאטה בזמן אמת.
                התוצאה: תנועה איכותית שנכנסת למערכת מסודרת והופכת ללידים שמייצרים מכירות.
              </p>

              {/* КНОПКА С ТВОИМ ГРАДИЕНТОМ */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="text-white w-full md:w-auto px-14 py-4 md:py-5 text-lg font-black transition-all hover:opacity-95 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)',
                  boxShadow: '0 10px 25px -5px rgba(0, 102, 255, 0.4)',
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