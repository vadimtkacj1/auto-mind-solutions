"use client";
import { useState } from "react";

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [contrast, setContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 10, 150);
    setFontSize(newSize);
    document.documentElement.style.setProperty("--accessibility-font-scale", `${newSize / 100}`);
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 10, 80);
    setFontSize(newSize);
    document.documentElement.style.setProperty("--accessibility-font-scale", `${newSize / 100}`);
  };

  const resetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.setProperty("--accessibility-font-scale", "1");
  };

  const toggleContrast = () => {
    setContrast(!contrast);
    document.body.classList.toggle("high-contrast");
  };

  return (
    <>
      {/* Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-6 bottom-6 w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/30 flex items-center justify-center z-50 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/40"
        aria-label="נגישות"
        style={{ contain: "layout style paint" }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="8" r="2" />
          <path d="M12 10v8" />
          <path d="M8 14l4-2 4 2" />
        </svg>
      </button>

      {/* Widget Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" />

          <div
            className="fixed left-6 bottom-24 bg-white rounded-2xl shadow-2xl shadow-black/10 p-6 z-50 border border-[var(--color-gray-200)] w-80"
            style={{ contain: "layout style paint" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h4 className="text-[var(--color-dark)]">הגדרות נגישות</h4>
                <p className="text-sm text-[var(--color-gray-500)]">התאם את האתר לצרכים שלך</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-[var(--color-gray-100)] flex items-center justify-center text-[var(--color-gray-500)] hover:bg-[var(--color-gray-200)] transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="space-y-5">
              {/* Font Size */}
              <div className="p-4 rounded-xl bg-[var(--color-gray-50)] border border-[var(--color-gray-200)]">
                <div className="text-sm font-semibold text-[var(--color-dark)] mb-3">גודל טקסט</div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseFontSize}
                    className="w-10 h-10 rounded-xl bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex items-center justify-center text-sm font-bold"
                  >
                    A-
                  </button>
                  <div className="flex-1 text-center text-sm font-semibold text-[var(--color-dark)]">{fontSize}%</div>
                  <button
                    onClick={increaseFontSize}
                    className="w-10 h-10 rounded-xl bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all flex items-center justify-center text-sm font-bold"
                  >
                    A+
                  </button>
                  <button
                    onClick={resetFontSize}
                    className="px-3 h-10 rounded-xl bg-white border border-[var(--color-gray-200)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all text-sm font-medium"
                  >
                    איפוס
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div className="p-4 rounded-xl bg-[var(--color-gray-50)] border border-[var(--color-gray-200)]">
                <div className="text-sm font-semibold text-[var(--color-dark)] mb-3">ניגודיות גבוהה</div>
                <button
                  onClick={toggleContrast}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    contrast
                      ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] text-white shadow-lg shadow-[var(--color-primary)]/20"
                      : "bg-white border border-[var(--color-gray-200)] text-[var(--color-gray-600)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }`}
                >
                  {contrast ? "ניגודיות מופעלת ✓" : "הפעל ניגודיות"}
                </button>
              </div>

              {/* Reset All */}
              <button
                onClick={() => {
                  resetFontSize();
                  setContrast(false);
                  document.body.classList.remove("high-contrast", "underline-links");
                }}
                className="w-full py-3 rounded-xl bg-[var(--color-dark)] text-white font-semibold hover:bg-[var(--color-navy)] transition-colors"
              >
                אפס הכל
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

// Default export for dynamic import compatibility
export default AccessibilityWidget;
