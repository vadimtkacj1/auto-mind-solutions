"use client";

import { FormEvent, useState } from "react";
import { submitShortLeadForm } from "@/lib/api";
import SuccessModal from "./SuccessModal";

export default function FinalLead() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
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

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-8">
          מוכנים לקחת את העסק לשלב הבא?
        </h2>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded border border-gray-200">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="שם"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 text-gray-900"
              required
            />

            <input
              type="tel"
              placeholder="טלפון"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-gray-900 text-gray-900"
              required
            />

            {error && (
              <p className="text-sm text-red-600 text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-4 rounded font-bold text-lg hover:bg-gray-800 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "שולח..." : "בואו נתחיל"}
            </button>

            <p className="text-sm text-gray-600">
              שיחת ייעוץ ללא עלות
            </p>
          </div>
        </form>

        {/* Success Modal */}
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          variant="light"
        />
      </div>
    </section>
  );
}
