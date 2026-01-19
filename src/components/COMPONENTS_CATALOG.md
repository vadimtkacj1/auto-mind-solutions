# UI Components Catalog

Библиотека готовых UI компонентов для создания современных веб-сайтов. Каждый компонент - это независимый строительный блок, который можно использовать в любом проекте.

## 📁 Структура

```
src/components/
├── Headers/      - Навигационные шапки сайта (5 вариантов)
├── Heroes/       - Главные баннеры/секции (5 вариантов)
├── Reviews/      - Отзывы и testimonials (6 вариантов)
├── CTAs/         - Call-to-Action секции (5 вариантов)
└── Footers/      - Подвалы сайта (5 вариантов)
```

## 🎨 Категории компонентов

### Headers (Шапки сайта)
**Количество:** 5 компонентов
**Путь:** `src/components/Headers/`

- `header-1.tsx` - Классическая навигация с мобильным меню
- `header-2.tsx` - Фиксированный header с dropdown меню
- `header-3.tsx` - E-commerce header с поиском и корзиной
- `header-4.tsx` - Центрированная pill-навигация
- `header-5.tsx` - Бизнес-header с контактами

[Подробнее →](./Headers/README.md)

### Heroes (Главные секции)
**Количество:** 5 компонентов
**Путь:** `src/components/Heroes/`

- `hero-1.tsx` - Центрированный с логотипами компаний
- `hero-2.tsx` - Сплит-лейаут со статистикой
- `hero-3.tsx` - Темный с формой подписки
- `hero-4.tsx` - С иконками и фичами
- `hero-5.tsx` - Премиум с бейджем и метриками

[Подробнее →](./Heroes/README.md)

### Reviews (Отзывы)
**Количество:** 6 компонентов
**Путь:** `src/components/Reviews/`

- `reviews-1.tsx` - Сетка с звездами и аватарами
- `reviews-2.tsx` - Простые цитаты
- `reviews-3.tsx` - Карточки с изображениями
- `reviews-4.tsx` - Большие карточки с quote
- `reviews-5.tsx` - Минимальный список
- `reviews-6.tsx` - Masonry layout

[Подробнее →](./Reviews/README.md)

### CTAs (Призывы к действию)
**Количество:** 5 компонентов
**Путь:** `src/components/CTAs/`

- `cta-1.tsx` - Простой primary CTA
- `cta-2.tsx` - Email capture с офером
- `cta-3.tsx` - С чеклистом фич
- `cta-4.tsx` - Контактный CTA
- `cta-5.tsx` - Темный launch CTA

[Подробнее →](./CTAs/README.md)

### Footers (Подвалы)
**Количество:** 5 компонентов
**Путь:** `src/components/Footers/`

- `footer-1.tsx` - Классический 4-колоночный
- `footer-2.tsx` - С контактами и newsletter
- `footer-3.tsx` - Темный footer
- `footer-4.tsx` - Центрированный
- `footer-5.tsx` - С newsletter banner

[Подробнее →](./Footers/README.md)

## 🚀 Быстрый старт

### 1. Импорт компонента

```tsx
import Header1 from '@/src/components/Headers/header-1'
import Hero2 from '@/src/components/Heroes/hero-2'
import Reviews1 from '@/src/components/Reviews/reviews-1'
import CTA3 from '@/src/components/CTAs/cta-3'
import Footer1 from '@/src/components/Footers/footer-1'
```

### 2. Использование

```tsx
export default function Page() {
  return (
    <>
      <Header1 />
      <Hero2 />
      {/* Ваш контент */}
      <Reviews1 />
      <CTA3 />
      <Footer1 />
    </>
  )
}
```

## 📦 Зависимости

Все компоненты используют:
- **React** - Базовый фреймворк
- **Tailwind CSS** - Стилизация
- **lucide-react** - Иконки
- **TypeScript** - Типизация

Некоторые компоненты требуют:
- `@/src/components/ui/avatar` - Компонент аватара
- `@/src/components/ui/utils` - Утилита cn()
- `@radix-ui/react-avatar` - Примитивы для аватаров

### Установка зависимостей

```bash
npm install lucide-react @radix-ui/react-avatar
```

## 🎨 Кастомизация

Все компоненты поддерживают кастомизацию через:

### 1. CSS переменные
```css
--primary
--foreground
--background
--muted
--muted-foreground
```

### 2. Tailwind конфиг
Измените цвета в `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { /* ваши цвета */ },
      // ...
    }
  }
}
```

### 3. Прямое редактирование
Компоненты спроектированы для легкого редактирования:
- Измените текст прямо в компоненте
- Добавьте/удалите секции
- Настройте ссылки навигации
- Замените изображения

## 💡 Примеры использования

### Лендинг для SaaS
```tsx
<Header2 />  {/* Фиксированный header */}
<Hero1 />    {/* Центрированный hero */}
<Reviews1 /> {/* Отзывы с звездами */}
<CTA1 />     {/* Простой CTA */}
<Footer3 />  {/* Темный footer */}
```

### E-commerce сайт
```tsx
<Header3 />  {/* Header с поиском */}
<Hero5 />    {/* Premium hero */}
<Reviews3 /> {/* Карточки с фото */}
<CTA2 />     {/* Email capture */}
<Footer5 />  {/* Footer с newsletter */}
```

### Корпоративный сайт
```tsx
<Header5 />  {/* Бизнес header */}
<Hero4 />    {/* Hero с фичами */}
<Reviews4 /> {/* Большие отзывы */}
<CTA4 />     {/* Контактный CTA */}
<Footer2 />  {/* Footer с контактами */}
```

## 📊 Статистика

- **Всего компонентов:** 26
- **Категорий:** 5
- **TypeScript:** 100%
- **Responsive:** Все компоненты
- **Accessibility:** ARIA labels, semantic HTML

## 🔧 Технические детали

### Responsive breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Особенности
- ✅ Полностью типизированные (TypeScript)
- ✅ Адаптивные (mobile-first)
- ✅ Доступные (ARIA, semantic HTML)
- ✅ Темная/светлая тема через CSS переменные
- ✅ Независимые (можно использовать отдельно)
- ✅ Production-ready

## 📝 Лицензия

Используйте свободно в любых проектах.

## 🤝 Contributing

Для добавления новых компонентов:
1. Создайте компонент в соответствующей папке
2. Следуйте существующей структуре
3. Используйте TypeScript и Tailwind CSS
4. Обновите README в категории
5. Добавьте примеры использования
