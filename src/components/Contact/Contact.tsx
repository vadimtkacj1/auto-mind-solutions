'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ArrowLeft 
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

  // Form submission handler
  const handleSubmit = async () => {
    if (!formData.phone) return;
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccessPopup(true);
    setIsSubmitting(false);
    setFormData({ phone: '', business: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section 
      id="contact" 
      className="py-24 md:py-40 px-6 bg-[#F8FAFC] relative overflow-hidden" 
      dir="rtl"
    >
      {/* Background Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            בואו נדבר <span className="text-blue-600">תכלס.</span>
          </h2>
          <p className="text-slate-600 text-xl font-medium max-w-md mx-auto leading-relaxed">
            השאירו פרטים ונחזור אליכם עם תוכנית עבודה ממוקדת עבור המותג שלכם.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.06)] border border-slate-100"
        >
          <div className="space-y-12">
            
            {/* Phone Input Field */}
            <div className="group relative">
              <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 text-right">
                מספר טלפון
              </label>
              <div className="relative flex items-center">
                {/* Blue icon by default for better visibility */}
                <Phone className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 text-blue-600 pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="050-000-0000"
                  /* pr-12 provides clear space between icon and text */
                  className="w-full pr-12 pl-2 py-4 bg-transparent border-b-2 border-slate-100 outline-none transition-all focus:border-blue-600 text-slate-900 font-bold text-2xl tabular-nums placeholder:text-slate-300 text-right"
                />
              </div>
            </div>

            {/* Message/Business Goal Field */}
            <div className="group relative">
              <label className="block text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 mb-4 text-right">
                מה המטרה שלכם?
              </label>
              <div className="relative">
                <MessageSquare className="absolute right-0 top-1 w-6 h-6 text-blue-600 pointer-events-none" />
                <textarea
                  name="business"
                  required
                  value={formData.business}
                  onChange={handleChange}
                  rows={2}
                  placeholder="ספרו לנו בקצרה על הפרויקט..."
                  className="w-full pr-12 pl-2 py-1 bg-transparent border-b-2 border-slate-100 outline-none transition-all focus:border-blue-600 text-slate-900 font-medium text-xl resize-none placeholder:text-slate-300 text-right"
                />
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-6 rounded-2xl bg-slate-900 text-white font-black text-xl flex flex-row-reverse items-center justify-center gap-4 hover:bg-blue-600 transition-all active:scale-[0.97] shadow-xl shadow-slate-200 disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <div className="w-7 h-7 border-4 border-white/20 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform" />
                    <span>שלח הודעה לצוות</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Notification Modal */}
      <AnimatePresence>
        {showSuccessPopup && (
          <AlertDialog open={showSuccessPopup} onOpenChange={setShowSuccessPopup}>
            <AlertDialogContent className="bg-white rounded-[3rem] p-12 max-w-sm border-none shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-100">
                   <CheckCircle2 className="w-10 h-10" />
                </div>
                <AlertDialogTitle className="text-3xl font-black text-slate-900 mb-3 text-center">תודה רבה!</AlertDialogTitle>
                <AlertDialogDescription className="text-slate-500 text-lg font-medium leading-relaxed text-center">
                  הפרטים התקבלו בהצלחה. המומחים שלנו כבר עוברים על הבקשה שלכם ונחזור אליכם בהקדם.
                </AlertDialogDescription>
                <button 
                  onClick={() => setShowSuccessPopup(false)}
                  className="mt-10 w-full py-5 bg-slate-100 text-slate-900 rounded-2xl font-black hover:bg-slate-200 transition-colors"
                >
                  הבנתי, תודה
                </button>
              </motion.div>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </AnimatePresence>
    </section>
  );
}