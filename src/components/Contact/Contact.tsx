'use client';

import React, { useState, useRef, lazy, Suspense } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Phone, User, CheckCircle2, ArrowLeft, 
  Code2, Cpu, Database, Zap, Activity, Cloud 
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from '../ui/AlertDialog/AlertDialog';

// Lazy load Lottie library
const DotLottieReact = lazy(() =>
  import('@lottiefiles/dotlottie-react').then(mod => ({ default: mod.DotLottieReact }))
);

// --- LOTTIE CHARACTER COMPONENT (Updated: Glow removed) ---
function LottieCharacter() {
  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center lg:justify-start">
      <div className="w-full h-full drop-shadow-2xl">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <DotLottieReact
            src="https://lottie.host/dfef94f3-a819-489f-aae8-074fe1969dcb/D7StZ67HU8.lottie"
            loop
            autoplay
          />
        </Suspense>
      </div>
      
      {/* Я УДАЛИЛ ЭТОТ БЛОК, КОТОРЫЙ СОЗДАВАЛ ГРАДИЕНТ/СВЕЧЕНИЕ */}
      {/* <div className="absolute inset-0 bg-blue-500/10 blur-[120px] -z-10 rounded-full" /> */}
    </div>
  );
}

// --- ENHANCED BACKGROUND DECORATION ---
function FloatingTechIcon({ children, x, y, speed, colorClass }: { 
  children: React.ReactNode, 
  x: string, 
  y: string, 
  speed: number,
  colorClass: string 
}) {
  const { scrollYProgress } = useScroll();
  const rawY = useTransform(scrollYProgress, [0, 1], [0, speed * 250]);
  const smoothY = useSpring(rawY, { stiffness: 50, damping: 20 });
  
  return (
    <motion.div 
      style={{ y: smoothY, left: x, top: y }} 
      className={`absolute ${colorClass} pointer-events-none z-0 opacity-40 md:opacity-50`}
    >
      <div className="drop-shadow-[0_0_15px_rgba(var(--glow-color),0.4)]">
        {children}
      </div>
    </motion.div>
  );
}

// --- MAIN CONTACT SECTION ---
export function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const containerRef = useRef<HTMLElement>(null);

  const validateIsraeliPhone = (phone: string) => {
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;
    return phoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name || !formData.phone) return;
    if (!validateIsraeliPhone(formData.phone)) {
      setErrorMessage('מספר טלפון לא תקין. נא להזין מספר ישראלי תקין');
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrorMessage(data.error || 'אירעה שגיאה. נסו שוב מאוחר יותר');
        setIsSubmitting(false);
        return;
      }
      setShowSuccessPopup(true);
      setFormData({ name: '', phone: '' });
    } catch {
      setErrorMessage('אירעה שגיאה בשליחת הטופס. נסו שוב');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={containerRef} 
      id="contact" 
      className="py-24 md:py-48 px-6 bg-[#F8FAFC] relative overflow-hidden" 
      dir="rtl"
    >
      {/* Parallax Background Icons - More Expressive */}
      <div className="absolute inset-0 z-0">
        <FloatingTechIcon x="8%" y="15%" speed={-1.2} colorClass="text-blue-500">
          <Code2 size={60} strokeWidth={1.5} />
        </FloatingTechIcon>
        
        <FloatingTechIcon x="85%" y="10%" speed={1.5} colorClass="text-indigo-500">
          <Cpu size={70} strokeWidth={1.5} />
        </FloatingTechIcon>

        <FloatingTechIcon x="92%" y="65%" speed={-2} colorClass="text-emerald-500">
          <Database size={65} strokeWidth={1.5} />
        </FloatingTechIcon>

        <FloatingTechIcon x="5%" y="75%" speed={2.2} colorClass="text-amber-500">
          <Zap size={55} strokeWidth={1.5} />
        </FloatingTechIcon>

        <FloatingTechIcon x="20%" y="45%" speed={0.8} colorClass="text-rose-400">
          <Activity size={40} strokeWidth={2} />
        </FloatingTechIcon>

        <FloatingTechIcon x="75%" y="85%" speed={-1} colorClass="text-sky-400">
          <Cloud size={50} strokeWidth={1.5} />
        </FloatingTechIcon>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Character & Text */}
          <div className="flex flex-col items-center lg:items-start">
            <LottieCharacter />
            <div className="mt-10 text-center lg:text-right">
              <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">אנחנו כבר בדרך אליכם</h3>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-md">
                הצוות שלנו זמין עבורכם, רק מחכים לשיחה שלכם כדי להתחיל.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full max-w-xl mx-auto relative z-20">
            <h2 className="text-5xl lg:text-7xl font-black text-slate-900 mb-12 text-center lg:text-right tracking-tighter">
              בואו נדבר <span className="text-blue-600 italic">תכלס.</span>
            </h2>

            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="bg-white p-10 lg:p-14 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] border border-slate-50 relative"
            >
              <div className="space-y-10">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl text-center font-semibold text-lg">
                    {errorMessage}
                  </div>
                )}

                <div className="relative group">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                    שם מלא <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-blue-600 transition-all duration-300">
                    <User className="text-blue-600 ml-4 mb-2" size={24} />
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="איך קוראים לכם?"
                      className="w-full py-4 text-2xl font-bold bg-transparent outline-none text-slate-900 placeholder:text-slate-200"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3 block">
                    טלפון ליצירת קשר <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border-b-2 border-slate-100 group-focus-within:border-blue-600 transition-all duration-300">
                    <Phone className="text-blue-600 ml-4 mb-2" size={24} />
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="050-0000000"
                      className="w-full py-4 text-2xl font-bold bg-transparent outline-none text-slate-900 tabular-nums placeholder:text-slate-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.phone}
                  className="w-full py-7 bg-slate-900 text-white rounded-[2rem] font-black text-2xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center gap-4 group disabled:opacity-50 active:scale-95"
                >
                  {isSubmitting ? (
                    <div className="w-7 h-7 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>שלחו הודעה ונחזור אליכם</span>
                      <ArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessPopup && (
          <AlertDialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
            <AlertDialogContent className="bg-white rounded-[3rem] p-10 text-center border-none shadow-2xl max-w-sm mx-auto">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-lg shadow-blue-100">
                    <CheckCircle2 size={40} />
                  </div>
                  <AlertDialogTitle className="text-3xl font-black mb-3 text-slate-900">תודה רבה!</AlertDialogTitle>
                  <AlertDialogDescription className="text-slate-500 text-lg font-medium">אנחנו כבר חוזרים אליכם עם כל הפרטים.</AlertDialogDescription>
                  <button onClick={() => setShowSuccessPopup(false)} className="mt-8 w-full py-5 bg-slate-100 rounded-2xl font-black text-lg hover:bg-slate-200 transition-colors">סגור</button>
                </motion.div>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </AnimatePresence>
    </section>
  );
}