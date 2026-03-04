"use client";

import { FormEvent, useState, RefObject } from "react";
import { submitLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function FinalLead() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const titleRef = useScrollAnimation();
  const formRef: RefObject<HTMLFormElement> = useScrollAnimation<HTMLFormElement>();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitLeadForm(formData);
      setShowSuccessModal(true);
      setFormData({ name: "", phone: "", email: "", businessType: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "שגיאה בשליחת הטופס. אנא נסה שוב.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-md">
        <h2
          ref={titleRef}
          className="text-4xl font-bold mb-8 text-center scroll-animate fade-up"
        >
          מוכנים לקחת את העסק לשלב הבא?
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl scroll-animate scale-in delay-200"
        >
          <div className="space-y-6">

            {/* Form Fields */}
            <div className={`w-full max-w-[320px] mx-auto gradient-border-wrapper ${focusedField === 'name' ? 'focused' : ''}`}>
              <input
                type="text"
                placeholder="שם מלא"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
                style={{
                  height: '44px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: focusedField === 'name' ? 'none' : '1px solid #BEC3D3',
                }}
                required
              />
            </div>

            <div className={`w-full max-w-[320px] mx-auto gradient-border-wrapper ${focusedField === 'phone' ? 'focused' : ''}`}>
              <input
                type="tel"
                placeholder="טלפון"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
                style={{
                  height: '44px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: focusedField === 'phone' ? 'none' : '1px solid #BEC3D3',
                }}
                required
              />
            </div>

            <div className={`w-full max-w-[320px] mx-auto gradient-border-wrapper ${focusedField === 'email' ? 'focused' : ''}`}>
              <input
                type="email"
                placeholder="אימייל"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
                style={{
                  height: '44px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: focusedField === 'email' ? 'none' : '1px solid #BEC3D3',
                }}
                required
              />
            </div>

            <div className={`w-full max-w-[320px] mx-auto gradient-border-wrapper ${focusedField === 'businessType' ? 'focused' : ''}`}>
              <input
                type="text"
                placeholder="סוג העסק"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                onFocus={() => setFocusedField('businessType')}
                onBlur={() => setFocusedField(null)}
                className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
                style={{
                  height: '44px',
                  padding: '12px 24px',
                  borderRadius: '100px',
                  border: focusedField === 'businessType' ? 'none' : '1px solid #BEC3D3',
                }}
                required
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="w-full max-w-[320px] mx-auto text-center text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="w-full max-w-[320px] mx-auto">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white text-base font-bold transition-all hover:opacity-90 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  borderRadius: '100px',
                  padding: '12px 10px',
                  gap: '10px',
                  background: 'linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)',
                  boxShadow: '0 4px 14px 0 rgba(0, 102, 255, 0.39)',
                }}
              >
                {isSubmitting ? "שולח..." : "אני רוצה לקבוע!"}
              </button>
            </div>

            {/* Footer Text */}
            <p className="text-sm text-gray-600 text-center mt-4">
              ללא התחייבות | מענה תוך 24 שעות
            </p>
          </div>

          {/* Success Modal */}
          <SuccessModal
            isOpen={showSuccessModal}
            onClose={() => setShowSuccessModal(false)}
            variant="light"
          />
        </form>
      </div>
    </section>
  );
}
