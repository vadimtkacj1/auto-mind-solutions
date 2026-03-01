"use client";

import { FormEvent, useState } from "react";
import { submitLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";

export default function LeadForm() {
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
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl">
      <div className="space-y-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-extrabold" style={{ fontSize: '15px', lineHeight: '130%', letterSpacing: '0%' }}>
            <span className="text-gray-900">השאירו פרטים ונחזור אליכם עם תוכנית ברורה איך</span>
            <br />
            <span style={{
              background: 'linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              להגדיל לידים ולהוריד עלויות פרסום.
            </span>
          </h2>
        </div>

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
  );
}
