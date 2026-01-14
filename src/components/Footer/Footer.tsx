'use client';

import React from 'react';
import { FaHeart } from 'react-icons/fa';
import OptimizedScene from './OptimizedScene';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // ИЗМЕНЕНИЕ 1: Добавлен backdrop-blur и полупрозрачность фона для "стеклянного" эффекта
    <footer className="relative w-full overflow-hidden border-t border-white/5 bg-[#080a0c]/80 backdrop-blur-sm" dir="rtl">
      
      {/* ФОН С ТОЧКАМИ (OptimizedScene)
         ИЗМЕНЕНИЕ 2: opacity увеличена с 50 до 90 для яркости
      */}
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        {/* ИЗМЕНЕНИЕ 3: Гипотетический проп pointsAmount.
           Убедитесь, что ваш компонент OptimizedScene поддерживает настройку количества точек.
        */}
        <OptimizedScene showSphere={false} pointsAmount="high" />
      </div>

      {/* ОСНОВНОЙ КОНТЕНТ (без изменений, только z-index) */}
      <div className="relative z-10 w-full">
        {/* Добавил небольшой градиент сверху, чтобы смягчить переход */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#080a0c] to-transparent opacity-50"></div>

        <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col items-center relative">
          
          {/* Логотип и текст */}
          <div className="text-center mb-14">
            <div className="mb-4">
              <span className="text-3xl font-bold tracking-tight text-white uppercase">
                AUTO <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">MIND</span>
              </span>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-md mx-auto font-light">
              סוכנות מובילה לאוטומציה ובינה מלאכותית. 
              <br />
              מגשרים על הפער בין טכנולוגיה מורכבת לצמיחה עסקית.
            </p>
          </div>

          {/* Ссылки (Сетка) */}
          <div className="grid grid-cols-2 gap-16 sm:gap-32 mb-16 text-center">
            {/* Секция Компания */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[2px] text-white/30 uppercase mb-6">חברה</h4>
              <ul className="space-y-4">
                <li><a href="#about" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-300">אודות</a></li>
                <li><a href="#services" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-300">שירותים</a></li>
                <li><a href="#pricing" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-300">מחירון</a></li>
              </ul>
            </div>
            
            {/* Секция Юридическая информация */}
            <div>
              <h4 className="text-[11px] font-bold tracking-[2px] text-white/30 uppercase mb-6">משפטי</h4>
              <ul className="space-y-4">
                <li><a href="/terms" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-300">תנאי שימוש</a></li>
                <li><a href="/privacy" className="text-sm text-white/50 hover:text-cyan-400 transition-colors duration-300">פרטיות</a></li>
              </ul>
            </div>
          </div>

          {/* Нижняя панель */}
          <div className="w-full pt-8 border-t border-white/10 flex flex-col items-center gap-6">
            <div className="text-[10px] text-white/20 uppercase tracking-[2px] font-medium" dir="ltr">
              © {currentYear} AUTO MIND SOLUTIONS
            </div>
            
            {/* Бейдж */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-[10px] uppercase tracking-wider text-white/40">
              <span>נבנה עם</span>
              <FaHeart className="w-2.5 h-2.5 text-red-500/60 mx-0.5" />
              <span>בישראל</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}