import { Service, Pillar } from "@/types";

export const SERVICES: Service[] = [
  {
    id: 1,
    title: "בניית אתרים שממירים",
    description: [
      "אתרים מותאמים אישית עם חוויית משתמש חכמה, מהירות גבוהה ואופטימיזציה מלאה להמרות.",
      "כל אתר נבנה עם אסטרטגיית Funnel ברורה מהכניסה ועד יצירת ליד.",
      "עיצוב יוקרתי, קוד נקי ותשתית לצמיחה ארוכת טווח."
    ],
    icon: ""
  },
  {
    id: 2,
    title: "קידום אורגני מבוסס תוצאות",
    description: [
      "מחקר מילות מפתח עמוק, אופטימיזציה טכנית ובניית סמכות בגוגל.",
      "אנחנו לא רודפים אחרי טראפיק — אנחנו מביאים תנועה שמייצרת עסקאות.",
      "תהליך ארוך טווח עם מדידה שקופה וברורה."
    ],
    icon: ""
  },
  {
    id: 3,
    title: "קמפיינים ממומנים שמייצרים ROI",
    description: [
      "ניהול קמפיינים בגוגל, פייסבוק ואינסטגרם עם אופטימיזציה יומית.",
      "בניית מסרים, קריאייטיב ופאנל המרות מלא.",
      "כל שקל בפרסום עובד בשבילכם."
    ],
    icon: ""
  },
  {
    id: 4,
    title: "פאנלים ואוטומציות שמגדילים מכירות",
    description: [
      "בניית מסעות לקוח חכמים שמלווים את המשתמש מהקליק הראשון ועד הסגירה.",
      "אוטומציות לידים, CRM והתראות חכמות לצוות המכירות.",
      "תהליך מדויק שמגדיל אחוזי סגירה."
    ],
    icon: ""
  }
];

export const WHY_US_PILLARS: Pillar[] = [
  {
    id: 1,
    title: "חשיבה עסקית לפני עיצוב",
    description: "אנחנו מבינים מספרים, לא רק פיקסלים.",
    icon: "/images/icon5.png"
  },
  {
    id: 2,
    title: "שקיפות מלאה בדאטה",
    description: "דוחות ברורים, יעדים ברורים ותוצאות מדידות.",
    icon: "/images/icon6.png"
  },
  {
    id: 3,
    title: "ליווי אמיתי ולא פרויקט חד פעמי",
    description: "אנחנו שותפים לצמיחה שלכם.",
    icon: "/images/icon7.png"
  }
];

export const NAVIGATION_LINKS = [
  { href: "#services", label: "שירותים" },
  { href: "#portfolio", label: "עבודות" },
  { href: "#why-us", label: "למה אנחנו" },
  { href: "#contact", label: "צור קשר" }
];

export const FOOTER_LINKS = [
  { href: "#", label: "אודות" },
  { href: "#services", label: "שירותים" },
  { href: "#portfolio", label: "עבודות" },
  { href: "#", label: "בלוג" },
  { href: "#contact", label: "צור קשר" }
];

export const SOCIAL_LINKS = [
  { platform: "instagram", icon: "", url: "#", label: "Instagram" },
  { platform: "facebook", icon: "", url: "#", label: "Facebook" },
  { platform: "linkedin", icon: "", url: "#", label: "LinkedIn" },
  { platform: "tiktok", icon: "", url: "#", label: "TikTok" }
];

export const CONTACT_INFO = {
  phone: "050-123-4567",
  email: "info@aiterra.co.il",
  address: "תל אביב, ישראל"
};
