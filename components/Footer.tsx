export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 max-w-lg">
        {/* Logo & Tagline */}
        <div className="text-right mb-8 pb-8 border-b border-gray-800" dir="rtl">
          <h3 className="text-2xl font-bold mb-3 text-white">AITERRA</h3>
          <p className="text-white text-sm">
            בונים מערכות דיגיטל שמייצרות צמיחה אמיתית לעסקים.
          </p>
        </div>

        {/* Two Columns: Navigation & Contact */}
        <div className="flex justify-between mb-8 pb-8 border-b border-gray-800">
          {/* Right Column - Navigation */}
          <div className="text-right" dir="rtl">
            <h4 className="text-lg font-bold mb-4 text-white">ניווט</h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-white hover:text-blue-400 transition">
                אודות
              </a>
              <a href="#services" className="text-white hover:text-blue-400 transition">
                שירותים
              </a>
              <a href="#portfolio" className="text-white hover:text-blue-400 transition">
                עבודות
              </a>
              <a href="#" className="text-white hover:text-blue-400 transition">
                בלוג
              </a>
            </nav>
          </div>

          {/* Left Column - Contact */}
          <div className="text-right" dir="rtl">
            <h4 className="text-lg font-bold mb-4 text-white">צור קשר</h4>
            <div className="space-y-2 text-white">
              <p>טלפון</p>
              <p>אימייל</p>
              <p>כתובת</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-white text-sm" dir="rtl">
            כל הזכויות שמורות ©
          </p>
        </div>
      </div>
    </footer>
  );
}
