"use client";

import { useState, useEffect } from "react";
import { submitLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";
import { motion, AnimatePresence } from "framer-motion";

export default function LeadFormCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Симуляция загрузки компонента
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const spinnerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
      style={{
        width: "100%",
        background: "linear-gradient(5.99deg, #080A0C 16.13%, #0066FF 129.92%)",
        padding: "40px 30px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        position: "relative",
        minHeight: "400px",
      }}
    >
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="spinner"
            variants={spinnerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: "60px",
                height: "60px",
                border: "4px solid rgba(255, 255, 255, 0.2)",
                borderTop: "4px solid #fff",
                borderRadius: "50%",
              }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 500,
                margin: 0,
              }}
              dir="rtl"
            >
              טוען...
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            {/* Title */}
            <motion.h2
              variants={itemVariants}
              dir="rtl"
              style={{
                color: "#fff",
                fontSize: "28px",
                fontWeight: 700,
                textAlign: "right",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              מוכנים לקחת את העסק
              <br />
              לשלב הבא?
            </motion.h2>

            {/* Form */}
            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start", width: "100%" }}
            >
              {/* Name Input */}
              <motion.input
                variants={itemVariants}
            type="text"
            name="name"
            placeholder="שם מלא"
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
              <motion.input
                variants={itemVariants}
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

              {/* Email Input */}
              <motion.input
                variants={itemVariants}
                type="email"
                name="email"
                placeholder="אימייל"
                value={formData.email}
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

              {/* Business Type Input */}
              <motion.input
                variants={itemVariants}
                type="text"
                name="businessType"
                placeholder="סוג העסק"
                value={formData.businessType}
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
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSubmitting}
                dir="rtl"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                {isSubmitting && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={{
                      width: "16px",
                      height: "16px",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                      borderTop: "2px solid #fff",
                      borderRadius: "50%",
                    }}
                  />
                )}
                {isSubmitting ? "שולח..." : "בואו נתחיל"}
              </motion.button>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    dir="rtl"
                    style={{
                      color: "#ff6b6b",
                      fontSize: "13px",
                      textAlign: "center",
                      margin: "4px 0 0",
                    }}
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Free Consultation Text */}
              <motion.p
                variants={itemVariants}
                dir="rtl"
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  textAlign: "right",
                  margin: "4px 0 0",
                }}
              >
                שיחת ייעוץ ללא עלות
              </motion.p>
            </motion.form>

            {/* Success Modal */}
            <SuccessModal
              isOpen={showSuccessModal}
              onClose={() => setShowSuccessModal(false)}
              variant="dark"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}