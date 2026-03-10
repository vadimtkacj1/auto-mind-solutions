"use client";

import { useState } from "react";
import { useLeadForm } from "@/hooks/useLeadForm";
import SuccessModal from "./SuccessModal";

export default function LeadForm() {
  const { formData, handleInputChange, handleSubmit, isSubmitting, showSuccessModal, closeSuccessModal, error } =
    useLeadForm();
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl">
      <div className="space-y-6">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="font-extrabold" style={{ fontSize: "15px", lineHeight: "130%", letterSpacing: "0%" }}>
            <span className="text-gray-900">השאירו פרטים ונחזור אליכם עם תוכנית ברורה איך</span>
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              להגדיל לידים ולהוריד עלויות פרסום.
            </span>
          </h2>
        </div>

        {/* Form Fields */}
        <div
          className={`w-[100%] max-w-[600px] mx-auto gradient-border-wrapper ${focusedField === "name" ? "focused" : ""}`}
        >
          <input
            name="name"
            type="text"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
            style={{
              height: "50px",
              padding: "12px 24px",
              borderRadius: "100px",
              border: focusedField === "name" ? "none" : "1px solid #BEC3D3",
            }}
            required
          />
        </div>

        <div
          className={`w-[100%] max-w-[600px] mx-auto gradient-border-wrapper ${focusedField === "phone" ? "focused" : ""}`}
        >
          <input
            name="phone"
            type="tel"
            placeholder="טלפון לדוגמא: 050-1234567"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            maxLength={12}
            inputMode="tel"
            pattern="^0[0-9\-]{9,11}$"
            className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
            style={{
              height: "50px",
              padding: "12px 24px",
              borderRadius: "100px",
              border: focusedField === "phone" ? "none" : "1px solid #BEC3D3",
            }}
            required
          />
        </div>

        <div
          className={`w-[100%] max-w-[600px] mx-auto gradient-border-wrapper ${focusedField === "email" ? "focused" : ""}`}
        >
          <input
            name="email"
            type="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
            style={{
              height: "50px",
              padding: "12px 24px",
              borderRadius: "100px",
              border: focusedField === "email" ? "none" : "1px solid #BEC3D3",
            }}
            required
          />
        </div>

        <div
          className={`w-[100%] max-w-[600px] mx-auto gradient-border-wrapper ${focusedField === "businessType" ? "focused" : ""}`}
        >
          <input
            name="businessType"
            type="text"
            placeholder="סוג העסק"
            value={formData.businessType}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("businessType")}
            onBlur={() => setFocusedField(null)}
            className="w-full text-right text-gray-700 placeholder:text-gray-400 transition-all focus:outline-none"
            style={{
              height: "50px",
              padding: "12px 24px",
              borderRadius: "100px",
              border: focusedField === "businessType" ? "none" : "1px solid #BEC3D3",
            }}
            required
          />
        </div>

        {/* Error Message */}
        {error && <div className="w-[100%] max-w-[600px] mx-auto text-center text-red-600 text-sm">{error}</div>}

        {/* Submit Button */}
        <div className="w-[100%] max-w-[600px] mx-auto">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white text-lg font-bold transition-all hover:opacity-90 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{
              borderRadius: "100px",
              padding: "14px 10px",
              background: "#2563eb",
              boxShadow: "0 4px 14px 0 rgba(37, 99, 235, 0.5)",
            }}
          >
            {isSubmitting && (
              <span
                className="inline-block w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                aria-hidden="true"
              />
            )}
            {isSubmitting ? "שולח..." : "אני רוצה לקבוע!"}
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-gray-600 text-center mt-4">ללא התחייבות | מענה תוך 24 שעות</p>
      </div>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={closeSuccessModal} variant="light" />
    </form>
  );
}
