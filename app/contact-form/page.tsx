"use client";

import { useState } from "react";
import Header from "@/src/components/Header/Header";
import { Footer } from "@/src/components/Footer/Footer";

const services = [
  "אתר מאפס",
  "עיצוב UX/UI",
  "פיתוח אתרים",
  "אתר Webflow",
  "Motion Design",
  "מיתוג",
  "פיתוח מובייל",
];

const budgets = ["10-20k ₪", "30-40k ₪", "40-50k ₪", "50-100k ₪", "> 100k ₪"];

export default function ContactFormPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, services: selectedServices, budget: selectedBudget });
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16 text-right" dir="rtl">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-4">
              היי! ספרו לנו
              <br />
              על הפרויקט
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-12" dir="rtl">
            {/* Services Selection */}
            <div className="space-y-6">
              <label className="block text-lg font-bold text-slate-900">אני מעוניין ב...</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-blue-500"
                    style={{
                      borderColor: selectedServices.includes(service) ? "#3b82f6" : "#e2e8f0",
                      backgroundColor: selectedServices.includes(service) ? "#eff6ff" : "transparent",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() => toggleService(service)}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-lg font-semibold text-slate-900">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Name */}
            <div className="space-y-2">
              <input
                type="text"
                required
                placeholder="השם שלך"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-0 py-4 text-lg font-semibold text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <input
                type="email"
                required
                placeholder="אימייל"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-0 py-4 text-lg font-semibold text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <textarea
                rows={4}
                placeholder="ספרו לנו על הפרויקט שלכם"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-0 py-4 text-lg font-semibold text-slate-900 bg-transparent border-0 border-b-2 border-slate-200 focus:border-blue-600 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Budget */}
            <div className="space-y-6">
              <label className="block text-lg font-bold text-slate-900">תקציב הפרויקט</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {budgets.map((budget) => (
                  <label
                    key={budget}
                    className="flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all hover:border-blue-500"
                    style={{
                      borderColor: selectedBudget === budget ? "#3b82f6" : "#e2e8f0",
                      backgroundColor: selectedBudget === budget ? "#eff6ff" : "transparent",
                    }}
                  >
                    <input
                      type="radio"
                      name="budget"
                      checked={selectedBudget === budget}
                      onChange={() => setSelectedBudget(budget)}
                      className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-lg font-semibold text-slate-900">{budget}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-5 bg-blue-600 text-white text-xl font-black rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                שלח בקשה
              </button>
            </div>

            {/* Terms */}
            <div className="text-sm text-slate-500 text-center md:text-right">
              האתר מוגן על ידי reCAPTCHA וחלים{" "}
              <a href="#" className="underline hover:text-slate-700">
                מדיניות הפרטיות
              </a>{" "}
              ו
              <a href="#" className="underline hover:text-slate-700">
                תנאי השירות
              </a>{" "}
              של Google.
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
