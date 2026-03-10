"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  businessType: string;
};

function isValidIsraeliPhone(phone: string) {
  const cleanPhone = phone.replace(/[\s\-()]/g, "");
  const phoneRegex = /^(\+?972|0)?([5]\d{8})$/;
  return phoneRegex.test(cleanPhone);
}

export function RequestDeckForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    businessType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  const canSubmit = useMemo(() => {
    if (!form.name.trim() || form.name.trim().length < 2) return false;
    if (!isValidIsraeliPhone(form.phone)) return false;
    // email is optional; when provided, very light validation
    if (form.email.trim() && !/^\S+@\S+\.\S+$/.test(form.email.trim())) return false;
    return true;
  }, [form]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!canSubmit) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email || undefined,
          businessType: form.businessType || undefined,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error || "אירעה שגיאה. נסו שוב מאוחר יותר");
        return;
      }

      setSuccess(true);
      setForm({ name: "", phone: "", email: "", businessType: "" });
    } catch {
      setError("אירעה שגיאה בשליחה. נסו שוב");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="mt-10 space-y-6" dir="rtl">
      {error ? (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-6 py-4 text-red-700 font-bold">{error}</div>
      ) : null}

      {success ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-emerald-800 font-bold">
          תודה! שלחנו את הבקשה. נחזור אליכם בהקדם עם ה-Capabilities Deck.
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-black tracking-[3px] uppercase text-white/50 mb-2">
            שם מלא <span className="text-red-400">*</span>
          </label>
          <input
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-blue-400/60"
            placeholder="איך קוראים לכם?"
            required
            minLength={2}
          />
        </div>

        <div>
          <label className="block text-[11px] font-black tracking-[3px] uppercase text-white/50 mb-2">
            טלפון <span className="text-red-400">*</span>
          </label>
          <input
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-blue-400/60 tabular-nums"
            placeholder="050-0000000"
            required
            type="tel"
          />
          {form.phone && !isValidIsraeliPhone(form.phone) ? (
            <div className="mt-2 text-sm text-red-300 font-semibold">מספר טלפון לא תקין</div>
          ) : null}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-black tracking-[3px] uppercase text-white/50 mb-2">
            אימייל (אופציונלי)
          </label>
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white placeholder:text-white/30 outline-none focus:border-blue-400/60"
            placeholder="name@company.com"
            type="email"
          />
        </div>

        <div>
          <label className="block text-[11px] font-black tracking-[3px] uppercase text-white/50 mb-2">
            סוג העסק (אופציונלי)
          </label>
          <select
            value={form.businessType}
            onChange={(e) => setForm((p) => ({ ...p, businessType: e.target.value }))}
            className="w-full rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none focus:border-blue-400/60"
          >
            <option value="" className="bg-[#080a0c]">
              בחרו
            </option>
            <option value="SaaS" className="bg-[#080a0c]">
              SaaS
            </option>
            <option value="E-commerce" className="bg-[#080a0c]">
              E-commerce
            </option>
            <option value="Local Business" className="bg-[#080a0c]">
              עסק מקומי
            </option>
            <option value="Agency/Studio" className="bg-[#080a0c]">
              סוכנות/סטודיו
            </option>
            <option value="Other" className="bg-[#080a0c]">
              אחר
            </option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={!canSubmit || isSubmitting}
        className="w-full rounded-2xl px-8 py-5 font-black text-lg bg-[#3b82f6] hover:bg-[#2563eb] text-white transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 active:scale-95"
      >
        {isSubmitting ? "שולחים..." : "שלחו לי את ה-Deck"}
      </button>
    </form>
  );
}
