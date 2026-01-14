'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
} from '../ui/AlertDialog/AlertDialog';

export function Contact() {
  const [formData, setFormData] = useState({ phone: '', business: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowSuccessPopup(true);
    setIsSubmitting(false);
    setFormData({ phone: '', business: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 px-6 relative overflow-hidden bg-slate-50" dir="rtl">
      
      {/* --- Улучшенный технологичный фон --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Сетка стала чуть заметнее для структуры */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Градиентное пятно для фокуса на форме */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />

        {/* Декоративные SVG по краям, чтобы не мешать форме */}
        <svg className="absolute -top-20 -right-20 w-[500px] h-[500px] text-blue-600/5" viewBox="0 0 200 200">
          <path fill="currentColor" d="M40,-60C52,-51,62,-38,67,-23C72,-8,72,9,66,24C60,39,48,52,33,61C18,70,0,75,-17,72C-34,69,-50,58,-61,43C-72,28,-78,10,-76,-8C-74,-26,-64,-44,-50,-53C-36,-62,-18,-62,0,-60C18,-58,36,-60,40,-60Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Auto Mind Solutions • 2026
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
              בואו נבנה את <br />
              <span className="text-blue-600">העתיד שלכם.</span>
            </h2>
          </motion.div>

          {/* --- Основная карточка формы (High Contrast) --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl"
          >
            <div className="bg-white/95 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] border border-slate-200/60 shadow-[0_40px_80px_-15px_rgba(15,23,42,0.1)] relative">
              
              {/* Индикатор безопасности/доверия */}
              <div className="flex items-center justify-center gap-2 mb-10 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span className="text-xs font-medium uppercase tracking-tighter">פנייה מאובטחת ללא התחייבות</span>
              </div>

              <div className="space-y-8">
                
                {/* Поле телефона */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-sm font-extrabold text-slate-800">
                      מספר טלפון לחזרה
                    </label>
                  </div>
                  <div className="relative group">
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3 border-l border-slate-200 pl-3">
                      <Phone className="w-5 h-5 text-blue-500" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="050-000-0000"
                      className="w-full pr-16 pl-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none transition-all focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-900 text-right text-lg shadow-inner"
                    />
                  </div>
                </div>

                {/* Поле деталей бизнеса */}
                <div className="space-y-3">
                  <label className="text-sm font-extrabold text-slate-800 px-1">
                    ספרו לנו על הפרויקט
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute right-5 top-6 w-5 h-5 text-blue-500" />
                    <textarea
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      rows={4}
                      placeholder="מה היעד שלכם? (אתר חדש, אוטומציה, קידום...)"
                      className="w-full pr-16 pl-6 py-5 bg-slate-50 border border-slate-200 rounded-2xl outline-none transition-all focus:bg-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 text-slate-900 resize-none text-right text-lg shadow-inner"
                    />
                  </div>
                </div>

                {/* Кнопка действия */}
                <div className="pt-4">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-6 rounded-[1.5rem] bg-slate-900 text-white font-black text-xl flex items-center justify-center gap-4 group hover:bg-blue-600 transition-all duration-300 shadow-xl shadow-slate-200 active:scale-[0.97] disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <div className="w-7 h-7 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>שלח הודעה למומחים</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-[-6px] transition-transform rotate-180" />
                      </>
                    )}
                  </button>
                  <p className="text-center mt-6 text-slate-400 text-xs font-medium">
                    * אנו מתחייבים לחזור אליכם תוך יום עסקים אחד
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Popup подтверждения */}
      <AlertDialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
        <AlertDialogContent className="bg-white rounded-[3rem] p-12 max-w-sm border-none shadow-[0_50px_100px_rgba(0,0,0,0.15)] text-center">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-emerald-100">
               <CheckCircle2 className="w-12 h-12" />
            </div>
            <AlertDialogTitle className="text-3xl font-black text-slate-900 mb-4">
              תודה רבה!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-500 text-lg leading-relaxed">
              הפרטים התקבלו. המומחים שלנו כבר התחילו לעבור על הבקשה שלכם.
            </AlertDialogDescription>
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="mt-10 w-full py-5 bg-slate-100 text-slate-900 rounded-2xl font-black hover:bg-slate-200 transition-colors"
            >
              הבנתי
            </button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}