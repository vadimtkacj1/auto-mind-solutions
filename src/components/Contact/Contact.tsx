import { useState } from 'react';
import { Reveal } from '../ui/Reveal';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    alert('הטופס נשלח בהצלחה! נחזור אליך בקרוב.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-28 lg:py-36 px-6 lg:px-12 relative overflow-hidden bg-white"
    >

      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[var(--color-gray-200)]" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Info */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent-dark)] text-sm font-bold mb-6">
                צור קשר
              </span>
              <h2 className="mb-6">בואו נדבר על הפרויקט שלכם</h2>
              <p className="mb-10 text-lg">
                מלאו את הטופס ונחזור אליכם תוך 24 שעות עם הצעה ברורה ומדויקת.
              </p>
            </Reveal>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  symbol: '✉',
                  label: 'אימייל',
                  value: 'hello@automind.studio',
                  href: 'mailto:hello@automind.studio'
                },
                {
                  symbol: '📞',
                  label: 'טלפון',
                  value: '050-123-4567',
                  href: 'tel:050-123-4567'
                },
                {
                  symbol: '📍',
                  label: 'כתובת',
                  value: 'תל אביב, ישראל',
                  href: '#'
                },
              ].map((item, index) => (
                <Reveal key={index} delay={0.06 * index}>
                  <a
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-xl bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] hover:border-[var(--color-primary)]/20 hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 text-xl">
                      {item.symbol}
                    </div>
                    <div>
                      <div className="text-sm text-[var(--color-gray-500)] font-semibold">{item.label}</div>
                      <div className="font-bold text-[var(--color-dark)]">{item.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <div>
            <Reveal>
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[var(--color-gray-200)] card-shadow">
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block mb-2">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-xl outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/5 text-[var(--color-dark)]"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-xl outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/5 text-[var(--color-dark)]"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-xl outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/5 text-[var(--color-dark)]"
                      placeholder="050-123-4567"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block mb-2">
                    ספר לנו על הפרויקט
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-[var(--color-gray-50)] border border-[var(--color-gray-200)] rounded-xl outline-none transition-all duration-300 focus:border-[var(--color-primary)] focus:bg-white focus:shadow-lg focus:shadow-[var(--color-primary)]/5 resize-none text-[var(--color-dark)]"
                    placeholder="ספר לנו על המטרות והחזון שלך..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative w-full py-4 rounded-xl text-white font-bold overflow-hidden transition-all duration-300 disabled:opacity-70 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)] shadow-lg shadow-[var(--color-primary)]/25 hover:shadow-xl hover:shadow-[var(--color-primary)]/30"
                >
                  <span className={`transition-opacity ${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                    שלח הודעה
                  </span>
                  {isSubmitting && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
