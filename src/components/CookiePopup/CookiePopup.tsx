import { useState } from 'react';
import { Cookie } from 'lucide-react';

export function CookiePopup() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 left-6 lg:left-auto lg:max-w-md z-50"
    >
        <div className="glass rounded-2xl p-6 border border-[var(--color-gray-200)] shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center text-lg flex-shrink-0">
              <Cookie className="w-5 h-5 text-[var(--color-primary)]" aria-hidden="true" />
            </div>
            <div>
              <h4 className="mb-1 text-[var(--color-dark)]">עוגיות</h4>
              <p className="text-sm text-[var(--color-gray-500)] leading-relaxed">
                אנחנו משתמשים בעוגיות כדי לשפר את החוויה שלך באתר. המשך גלישה מהווה הסכמה
                לשימוש בעוגיות.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsVisible(false)}
              className="flex-1 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl transition-all duration-300"
            >
              מקובל
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-6 py-3 rounded-xl text-[var(--color-gray-600)] font-semibold bg-[var(--color-gray-100)] hover:bg-[var(--color-gray-200)] transition-colors"
            >
              דחה
            </button>
          </div>
        </div>
      </div>
  );
}
