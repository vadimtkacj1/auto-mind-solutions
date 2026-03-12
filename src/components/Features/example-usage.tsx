/**
 * ПРИМЕР ИСПОЛЬЗОВАНИЯ FeaturesSection
 *
 * Скопируй этот код в свою страницу (например, app/page.tsx)
 */

import { FeaturesSection } from "@/src/components/Features";

export default function ExamplePage() {
  return (
    <main className="min-h-screen">
      {/* Твой существующий контент */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-black text-center">
            Добро пожаловать
          </h1>
        </div>
      </section>

      {/* ✨ ВСТАВЬ СЮДА СЕКЦИЮ FEATURES */}
      <FeaturesSection />

      {/* Остальной контент */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">Footer Section</h2>
        </div>
      </section>
    </main>
  );
}

/**
 * ═══════════════════════════════════════════════════════════
 * БЫСТРЫЙ СТАРТ
 * ═══════════════════════════════════════════════════════════
 *
 * 1. Убедись что зависимости установлены:
 *    npm install gsap @gsap/react
 *
 * 2. CSS уже подключен в app/layout.tsx
 *
 * 3. Замени картинки в FeaturesSection.tsx на свои:
 *    - Положи изображения в public/images/
 *    - Обнови пути в массиве features
 *
 * 4. Импортируй и используй компонент:
 *    import { FeaturesSection } from "@/src/components/Features";
 *
 * ═══════════════════════════════════════════════════════════
 */
