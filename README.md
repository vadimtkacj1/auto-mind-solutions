# AI Terra Landing Page

Landing page для веб-агентства з акцентом на SEO та PPC.

## 🏗️ Структура проекту

```
aiterra-landing-page/
├── app/
│   ├── layout.tsx          # Root layout з RTL підтримкою
│   ├── page.tsx            # Головна сторінка
│   └── globals.css         # Глобальні стилі
├── components/
│   ├── Header.tsx          # Шапка з навігацією
│   ├── Hero.tsx            # Hero секція з основним CTA
│   ├── LeadForm.tsx        # Форма захоплення лідів
│   ├── Services.tsx        # 4 основних сервіси
│   ├── Portfolio.tsx       # Портфоліо проектів
│   ├── WhyUs.tsx           # Чому обрати нас (3 pillars)
│   ├── SocialProof.tsx     # Соціальні мережі
│   ├── FinalLead.tsx       # Фінальна форма CTA
│   └── Footer.tsx          # Футер
└── package.json
```

## 📋 Секції лендінгу

1. **Header** - фіксована шапка з навігацією
2. **Hero** - головний екран з формою лідів
3. **Services** - 4 сервіси (Website, SEO, PPC, Funnels)
4. **Portfolio** - галерея робіт
5. **Why Us** - 3 причини обрати агентство
6. **Social Proof** - соціальні мережі
7. **Final Lead** - друга точка захоплення лідів
8. **Footer** - контакти та навігація

## 🚀 Запуск проекту

### 1. Встановити залежності:

```bash
npm install
```

### 2. Запустити dev сервер:

```bash
npm run dev
```

### 3. Відкрити в браузері:

```
http://localhost:3000
```

## 🛠️ Технології

- **Next.js 14** - App Router
- **React 18** - UI компоненти
- **TypeScript** - типізація
- **Tailwind CSS** - стилізація
- **RTL підтримка** - для івриту

## 📝 TODO

- [ ] Додати анімації (Hero background, Portfolio)
- [ ] Підключити форми до бекенду
- [ ] Додати реальні портфоліо роботи
- [ ] Додати іконки (заміна емодзі)
- [ ] Додати Google Analytics
- [ ] Налаштувати SEO метатеги
- [ ] Адаптивність для мобільних

## 🎨 Кольорова схема

- Primary: Orange (#f97316)
- Secondary: Blue (#2563eb)
- Background: White/Gray
- Text: Gray-900

## 📱 Особливості

- Підтримка RTL (right-to-left) для івриту
- 2 точки захоплення лідів
- Мобільна адаптивність (Tailwind responsive classes)
- Фіксована навігація
- Smooth scroll до секцій
