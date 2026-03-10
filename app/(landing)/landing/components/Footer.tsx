export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Logo & Tagline */}
        <div className="text-center mb-8 pb-8 border-b border-gray-800" dir="rtl">
          <h3 className="text-2xl font-bold mb-3 text-white">AITERRA</h3>
          <p className="text-white text-sm">בונים משרדי דיגיטל שמשרתים את צמיחה אמיתית לעסקים.</p>
        </div>

        {/* Navigation */}
        <div className="text-center mb-8 pb-8 border-b border-gray-800" dir="rtl">
          <h4 className="text-lg font-bold mb-4 text-white">ניווט</h4>
          <nav className="flex flex-col gap-2 items-center">
            <a href="#hero" className="text-white hover:text-blue-400 transition cursor-pointer">
              אודות
            </a>
            <a href="#services" className="text-white hover:text-blue-400 transition cursor-pointer">
              שירותים
            </a>
            <a href="#portfolio" className="text-white hover:text-blue-400 transition cursor-pointer">
              עבודות
            </a>
            <a href="#blog" className="text-white hover:text-blue-400 transition cursor-pointer">
              בלוג
            </a>
          </nav>
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
