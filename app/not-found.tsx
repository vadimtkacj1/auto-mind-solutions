import type { Metadata } from "next";
import Link from "next/link";
import Header from "../src/components/Header/Header";
import { Footer } from "../src/components/Footer/Footer";

export const metadata: Metadata = {
  title: "דף לא נמצא - 404",
  description: "הדף שחיפשת לא נמצא",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-gray-50)] text-[var(--color-dark)]">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="text-center max-w-2xl">
          <h1 className="text-8xl font-bold text-[var(--color-primary)] mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-6">דף לא נמצא</h2>
          <p className="text-xl text-gray-600 mb-8">מצטערים, הדף שחיפשת לא קיים או הועבר למיקום אחר.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-full hover:bg-[var(--color-dark)] transition-all shadow-lg"
            >
              חזרה לעמוד הראשי
            </Link>
            <Link
              href="/#contact"
              className="px-8 py-3 bg-white text-[var(--color-dark)] border-2 border-[var(--color-dark)] rounded-full hover:bg-[var(--color-dark)] hover:text-white transition-all"
            >
              צור קשר
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
