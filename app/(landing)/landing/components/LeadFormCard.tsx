"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import { submitLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";

export default function LeadFormCard() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      await submitLeadForm(formData);
      setShowSuccessModal(true);
      setFormData({ name: "", phone: "", email: "", businessType: "" });
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "שגיאה בשליחת הטופס. אנא נסה שוב.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      style={{
        width: "100%",
        maxWidth: "100%",
        background: "linear-gradient(5.99deg, #080A0C 16.13%, #0066FF 129.92%)",
        padding: "20px 5%",
        borderTopLeftRadius: "40px",
        borderTopRightRadius: "40px",
        position: "relative",
        minHeight: "400px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          width: "100%",
        }}
      >
        <h2
          dir="rtl"
          style={{
            color: "#fff",
            fontSize: "28px",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
            width: "100%",
          }}
        >
          מוכנים לקחת את העסק
          <br />
          לשלב הבא?
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center", width: "100%" }}
        >
          <input
            type="text"
            name="name"
            placeholder="שם מלא"
            value={formData.name}
            onChange={handleChange}
            required
            dir="rtl"
            style={inputStyle}
          />
          <input
            type="tel"
            name="phone"
            placeholder="טלפון"
            value={formData.phone}
            onChange={handleChange}
            required
            dir="rtl"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="אימייל"
            value={formData.email}
            onChange={handleChange}
            required
            dir="rtl"
            style={inputStyle}
          />
          <input
            type="text"
            name="businessType"
            placeholder="סוג העסק"
            value={formData.businessType}
            onChange={handleChange}
            required
            dir="rtl"
            style={inputStyle}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            dir="rtl"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "56px",
              background: "linear-gradient(90deg, #0066FF 0%, #2979FF 50%, #00C6FF 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "18px",
              border: "none",
              borderRadius: "100px",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
              transition: "opacity 0.2s",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {isSubmitting ? "שולח..." : "בואו נתחיל"}
          </button>

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

          <p
            dir="rtl"
            style={{
              color: "#fff",
              fontSize: "13px",
              textAlign: "center",
              margin: "4px 0 0",
              width: "100%",
            }}
          >
            שיחת ייעוץ ללא עלות
          </p>
        </form>

        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          variant="dark"
        />
      </div>
    </section>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  maxWidth: "600px",
  height: "50px",
  padding: "12px 24px",
  border: "1px solid #BEC3D3",
  borderRadius: "100px",
  background: "#fff",
  color: "#1a1a2e",
  fontSize: "16px",
  textAlign: "right",
  outline: "none",
  boxSizing: "border-box",
};

