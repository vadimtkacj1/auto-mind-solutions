# Структура проекта Auto Mind Solutions

## Обзор структуры

```
auto-mind-solutions/
├── app/
│   ├── fonts/                          # Шрифты для приложения
│   │   ├── Assistant-Regular.ttf
│   │   ├── Assistant-Medium.ttf
│   │   ├── Assistant-SemiBold.ttf
│   │   ├── Assistant-Bold.ttf
│   │   └── Assistant-ExtraBold.ttf
│   │
│   ├── landing/                        # Все лендинги
│   │   ├── components/                 # Компоненты для лендингов
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── LeadForm.tsx
│   │   │   ├── LeadFormSection.tsx
│   │   │   ├── LeadFormCard.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── RealResults.tsx
│   │   │   ├── WhyUs.tsx
│   │   │   ├── SocialFollow.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── FinalLead.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── PageLoader.tsx
│   │   │   ├── ScrollAnimationProvider.tsx
│   │   │   ├── MotionWrapper.tsx
│   │   │   └── SuccessModal.tsx
│   │   │
│   │   └── first/                      # Первый лендинг
│   │       ├── layout.tsx              # Layout: RTL, иврит, FB Pixel
│   │       └── page.tsx                # Контент лендинга
│   │
│   ├── api/                            # API endpoints
│   │   └── leads/
│   │       ├── route.ts                # Основной endpoint для лидов
│   │       └── short/
│   │           └── route.ts            # Короткая форма лидов
│   │
│   ├── layout.tsx                      # Основной layout (русский, LTR)
│   ├── page.tsx                        # Главная страница основного сайта
│   └── globals.css                     # Глобальные стили
│
├── components/                         # Компоненты для ОСНОВНОГО САЙТА
│   └── (здесь будут компоненты основного сайта)
│
└── public/
    ├── fonts/                          # Оригиналы шрифтов
    └── images/                         # Изображения

```

## Маршруты

### Основной сайт
- **`/`** → Главная страница основного сайта
  - Файл: `app/page.tsx`
  - Layout: `app/layout.tsx`
  - Компоненты: `components/`

### Лендинги
- **`/landing/first`** → Первый лендинг (Aiterra)
  - Файл: `app/landing/first/page.tsx`
  - Layout: `app/landing/first/layout.tsx`
  - Компоненты: `app/landing/components/`
  - Особенности: RTL, иврит, Facebook Pixel, шрифты Assistant

## Важные замечания

1. **Компоненты лендингов** находятся в `app/landing/components/` и используются всеми лендингами
2. **Компоненты основного сайта** должны размещаться в корневой папке `components/`
3. **Импорты для лендингов**: `@/app/landing/components/ComponentName`
4. **Импорты для основного сайта**: `@/components/ComponentName`
5. **API endpoints** общие для всего приложения: `/api/leads/*`

## Добавление новых лендингов

Для создания нового лендинга:
1. Создайте папку `app/landing/[название]/`
2. Добавьте `layout.tsx` и `page.tsx`
3. Используйте компоненты из `app/landing/components/`
4. При необходимости создайте специфичные компоненты в `app/landing/[название]/components/`
