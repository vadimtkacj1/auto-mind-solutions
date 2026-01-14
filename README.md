# AUTO MIND STUDIO - אתר Next.js מותאם ל-SEO

הפרויקט הזה הועבר מ-React + Vite ל-**Next.js 14** עם App Router לאופטימיזציה מקסימלית של SEO.

## 🚀 יתרונות Next.js ל-SEO

1. **Server-Side Rendering (SSR)** - התוכן נבנה בשרת, מה שמשפר את האינדוקס על ידי מנועי חיפוש
2. **Static Site Generation (SSG)** - דפים סטטיים נוצרים בשלב הבנייה
3. **תגי Meta דינמיים** - לכל דף יש title, description ו-OG tags ייחודיים משלו
4. **sitemap.xml אוטומטי** - נוצר אוטומטית
5. **אופטימיזציה של תמונות** - תמיכה מובנית ב-next/image
6. **כתובות URL נכונות** - במקום קישורי hash (#home) משתמשים בכתובות URL אמיתיות (/privacy, /terms)

## 📦 התקנה

```bash
npm install
```

## 🛠️ פיתוח

```bash
npm run dev
```

פתחו [http://localhost:3000](http://localhost:3000) בדפדפן.

## 🏗️ בנייה לפרודקשן

```bash
npm run build
npm start
```

## 📁 מבנה הפרויקט

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout ראשי עם מטא-נתונים ל-SEO
│   ├── page.tsx           # דף הבית
│   ├── privacy/           # דף מדיניות פרטיות
│   ├── terms/             # דף תנאי שימוש
│   ├── sitemap.ts         # יצירה אוטומטית של sitemap.xml
│   └── robots.ts          # robots.txt
├── src/
│   └── components/        # רכיבי React
└── public/                # קבצים סטטיים
```

## 🔍 אופטימיזציות SEO

### מיושם:

- ✅ תגי meta דינמיים לכל דף
- ✅ מטא-נתונים של Open Graph ו-Twitter Card
- ✅ Structured Data (JSON-LD) לכל הדפים
- ✅ sitemap.xml אוטומטי
- ✅ robots.txt
- ✅ כתובות URL קנוניות
- ✅ Structured Data של Breadcrumb
- ✅ אופטימיזציה של גופנים (next/font)
- ✅ ניתוב נכון עם כתובות URL אמיתיות

### המלצות לאופטימיזציה נוספת:

1. **הוסיפו תמונות אמיתיות** ב-`/public/og-image.jpg` עבור Open Graph
2. **הגדירו Google Search Console** והוסיפו קוד אימות ב-`app/layout.tsx`
3. **הוסיפו Google Analytics** או כלי אנליטיקה אחרים
4. **אופטימיזציה של תמונות** - השתמשו ברכיב `next/image`
5. **הוסיפו עוד תוכן** עם מילות מפתח
6. **צרו בלוג** לתוכן קבוע
7. **הגדירו hreflang** לרב-לשוניות (אם נדרש)

## 🌐 פריסה

### Vercel (מומלץ)

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t automind-studio .
docker run -p 3000:3000 automind-studio
```

## 📝 מיגרציה מ-Vite

קבצי Vite הישנים נשמרו אך לא בשימוש:
- `vite.config.js` - ניתן למחוק
- `index.html` - הוחלף ב-`app/layout.tsx`
- `src/main.tsx` - כבר לא נדרש (Next.js משתמש ב-App Router)

## 🔗 קישורים שימושיים

- [תיעוד Next.js](https://nextjs.org/docs)
- [מדריך SEO של Next.js](https://nextjs.org/learn/seo/introduction-to-seo)
- [Google Search Central](https://developers.google.com/search)
