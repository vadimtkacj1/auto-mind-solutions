"use client";

import { useState } from "react";
import { submitShortLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";

export default function LeadFormCard() {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitShortLeadForm(formData);
      setShowSuccessModal(true);
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      const errorMessage = error instanceof Error ? error.message : "שגיאה בשליחת הטופס. אנא נסה שוב.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      style={{
        width: "100%",
        background: "linear-gradient(5.99deg, #080A0C 16.13%, #0066FF 129.92%)",
        padding: "40px 30px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
        }}
      >
        {/* Title */}
        <h2
          dir="rtl"
          style={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          מוכנים לקחת את העסק
          <br />
          לשלב הבא?
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}
        >
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="שם"
            value={formData.name}
            onChange={handleChange}
            required
            dir="rtl"
            style={{
              width: "320px",
              maxWidth: "100%",
              height: "44px",
              padding: "12px 24px",
              border: "1px solid #BEC3D3",
              borderRadius: "100px",
              background: "#fff",
              color: "#1a1a2e",
              fontSize: "15px",
              textAlign: "right",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          {/* Phone Input */}
          <input
            type="tel"
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
            required
            dir="rtl"
            style={{
              width: "320px",
              maxWidth: "100%",
              height: "44px",
              padding: "12px 24px",
              border: "1px solid #BEC3D3",
              borderRadius: "100px",
              background: "#fff",
              color: "#1a1a2e",
              fontSize: "15px",
              textAlign: "right",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            dir="rtl"
            style={{
              width: "320px",
              maxWidth: "100%",
              height: "50px",
              background: "linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              border: "none",
              borderRadius: "100px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "opacity 0.2s",
              boxSizing: "border-box",
            }}
          >
            {isSubmitting ? "שולח..." : "בואו נתחיל"}
          </button>

          {/* Error Message */}
          {error && (
            <p
              dir="rtl"
              style={{
                color: "#ff6b6b",
                fontSize: "13px",
                textAlign: "center",
                margin: "4px 0 0",
              }}
            >
              {error}
            </p>
          )}

          {/* Free Consultation Text */}
          <p
            dir="rtl"
            style={{
              color: "#fff",
              fontSize: "13px",
              textAlign: "center",
              margin: "4px 0 0",
            }}
          >
            שיחה ללא עלות
          </p>
        </form>

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          variant="dark"
        />
      </div>
    </section>
  );
}