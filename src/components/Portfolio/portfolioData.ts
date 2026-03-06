export type PortfolioResult = {
  label: string;
  value: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
  tags?: string[];
  results?: PortfolioResult[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'premium-corporate-site',
    title: 'אתר תדמית פרימיום לחברת שירותים',
    description: 'עיצוב מודרני, טעינה מהירה, חוויית משתמש חדה ו-SEO טכני מהיום הראשון.',
    image: '/images/OLIE6.png',
    href: '/portfolio/premium-corporate-site',
    tags: ['Web Design', 'SEO', 'Performance'],
  },
  {
    slug: 'high-converting-landing',
    title: 'דף נחיתה ממיר לקמפיין ממומן',
    description: 'פוקוס על קופי, היררכיית תוכן ונקודות אמון — כדי להוציא יותר מכל שקל.',
    image: '/images/NATURALLY.png',
    href: '/portfolio/high-converting-landing',
    tags: ['Landing', 'CRO', 'PPC'],
  },
  {
    slug: 'smart-booking-automation',
    title: 'מערכת הזמנות חכמה לעסק מקומי',
    description: 'זרימת עבודה חלקה, אוטומציות, והתאמה מלאה למובייל — עם חוויית משתמש ממכרת.',
    image: '/images/ram-haim.co.il.png',
    href: '/portfolio/smart-booking-automation',
    tags: ['Automation', 'Mobile UX', 'Integrations'],
  },
  {
    slug: 'product-site-branding',
    title: 'מיתוג דיגיטלי + אתר מוצר',
    description: 'שפה ויזואלית נקייה, אנימציות עדינות וסיפור מוצר שמוכר — בלי רעש מיותר.',
    image: '/images/AVI_MASHKANTA.png',
    href: '/portfolio/product-site-branding',
    tags: ['Branding', 'Product', 'Motion'],
  },
];


