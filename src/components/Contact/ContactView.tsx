"use client";

import type { FormEvent } from "react";
import type { ContactFormData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone, User } from "lucide-react";
import { SmartVideo } from "../ui/SmartVideo";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "../ui/AlertDialog/AlertDialog";

function VideoCharacter() {
  return (
    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center lg:justify-start">
      <div className="w-full h-full">
        <SmartVideo
          src="/videos/contact.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-contain"
          aria-label="Contact animation"
        />
      </div>
    </div>
  );
}

type ContactViewProps = {
  formData: ContactFormData;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
  isSubmitDisabled: boolean;
  errorMessage: string;
  showSuccessPopup: boolean;
  onSuccessPopupChange: (open: boolean) => void;
};

export function ContactView({
  formData,
  onNameChange,
  onPhoneChange,
  onSubmit,
  isSubmitting,
  isSubmitDisabled,
  errorMessage,
  showSuccessPopup,
  onSuccessPopupChange,
}: ContactViewProps) {
  return (
    <section id="contact" className="py-8 md:py-16 px-6 bg-white relative overflow-hidden z-10" dir="rtl">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start">
            <VideoCharacter />
            <div className="mt-10 text-center lg:text-right">
              <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                אנחנו כבר בדרך אליכם
              </h3>
              <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed max-w-md">
                הצוות שלנו זמין עבורכם, רק מחכים לשיחה שלכם כדי להתחיל.
              </p>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto relative z-20">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 mb-10 sm:mb-12 text-center lg:text-right tracking-tighter">
              בואו נדבר <span className="text-purple-600 italic">תכלס.</span>
            </h2>

            <motion.form
              onSubmit={onSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-10 lg:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] border border-slate-100 relative"
              style={{
                boxShadow: "0 20px 60px -10px rgba(15, 23, 42, 0.25), 0 10px 30px -5px rgba(15, 23, 42, 0.15)",
              }}
            >
              <div className="space-y-10">
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl text-center font-semibold text-base sm:text-lg">
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
                      onChange={(e) => onNameChange(e.target.value)}
                      placeholder="איך קוראים לכם?"
                      className="w-full py-3 sm:py-4 text-xl sm:text-2xl font-bold bg-transparent outline-none text-slate-900 placeholder:text-slate-200"
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
                      onChange={(e) => onPhoneChange(e.target.value)}
                      placeholder="050-0000000"
                      maxLength={12}
                      inputMode="tel"
                      pattern="^0[0-9\\-]{9,11}$"
                      className="w-full py-3 sm:py-4 text-xl sm:text-2xl font-bold bg-transparent outline-none text-slate-900 tabular-nums placeholder:text-slate-200"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitDisabled}
                  className="w-full py-5 sm:py-7 text-white rounded-[2rem] font-black text-xl sm:text-2xl hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-4 group disabled:opacity-50 active:scale-95"
                  style={{
                    background: "#2563eb",
                    boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.5)",
                  }}
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
          <AlertDialog open={showSuccessPopup} onOpenChange={onSuccessPopupChange}>
            <AlertDialogContent className="bg-white rounded-[3rem] p-10 text-center border-none shadow-2xl max-w-sm mx-auto">
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-lg shadow-blue-100">
                  <CheckCircle2 size={40} />
                </div>
                <AlertDialogTitle className="text-3xl font-black mb-3 text-slate-900">תודה רבה!</AlertDialogTitle>
                <AlertDialogDescription className="text-slate-500 text-lg font-medium">
                  אנחנו כבר חוזרים אליכם עם כל הפרטים.
                </AlertDialogDescription>
                <button
                  onClick={() => onSuccessPopupChange(false)}
                  className="mt-8 w-full py-5 bg-slate-100 rounded-2xl font-black text-lg hover:bg-slate-200 transition-colors"
                >
                  סגור
                </button>
              </motion.div>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </AnimatePresence>
    </section>
  );
}
