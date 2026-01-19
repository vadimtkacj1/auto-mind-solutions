"use client";

import React from 'react';

export function Terms() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "תנאי שימוש - AUTO MIND Solutions",
    "description": "תנאי השימוש של AUTO MIND Solutions. כללי השימוש באתר והשירותים, זכויות וחובות המשתמשים והחברה.",
    "url": "https://auto-mind.solutions/terms",
    "inLanguage": "he",
    "isPartOf": {
      "@type": "WebSite",
      "name": "AUTO MIND Solutions",
      "url": "https://auto-mind.solutions"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "publisher": {
      "@type": "Organization",
      "name": "AUTO MIND Solutions",
      "url": "https://auto-mind.solutions"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section id="terms" className="py-24 lg:py-32 px-6 lg:px-12 bg-white" itemScope itemType="https://schema.org/WebPage">
        <div className="max-w-[1000px] mx-auto">
          <article itemScope itemType="https://schema.org/Article">
            <header>
              <h1 className="mb-8 text-5xl font-black text-[var(--color-dark)]" itemProp="headline">תנאי שימוש</h1>
              <meta itemProp="datePublished" content="2024-01-01" />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </header>
            <div itemProp="description">
              <p className="mb-8 text-gray-600 text-xl leading-relaxed">
                אנא קרא/י בעיון את תנאי השימוש הבאים לפני השימוש באתר ובשירותים שלנו. השימוש באתר מהווה הסכמה מלאה לתנאים אלו.
              </p>
            </div>
          
          <div className="space-y-8 bg-gray-50 rounded-[32px] p-8 lg:p-12 border-4 border-gray-200">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">1. קבלת התנאים</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                בכניסה ושימוש באתר AUTO MIND Solutions, את/ה מסכים/ה לתנאי השימוש המפורטים להלן. אם אינך מסכים/ה לתנאים אלו, נא להימנע משימוש באתר.
              </p>
              <p className="text-gray-600 leading-relaxed">
                תנאים אלו חלים על כל המבקרים, המשתמשים והלקוחות של האתר. השימוש באתר מותר רק לאנשים מעל גיל 18 או לקטינים בהסכמת הורה או אפוטרופוס.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">2. הגדרות</h3>
              <div className="bg-white p-4 rounded-lg">
                <ul className="space-y-2 text-gray-600">
                  <li><strong>"אנו", "שלנו", "החברה":</strong> מתייחס ל-AUTO MIND Solutions</li>
                  <li><strong>"את/ה", "המשתמש", "הלקוח":</strong> מתייחס לכל אדם המשתמש באתר או בשירותים</li>
                  <li><strong>"האתר":</strong> מתייחס לאתר האינטרנט של AUTO MIND Solutions</li>
                  <li><strong>"שירותים":</strong> כל השירותים שמציעה החברה, כולל עיצוב, פיתוח, SEO, ייעוץ דיגיטלי ועוד</li>
                  <li><strong>"תוכן":</strong> כל הטקסטים, תמונות, גרפיקה, קוד, תוכנה וחומרים אחרים באתר</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">3. שירותים</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                AUTO MIND Solutions מספקת שירותי בניית אתרים, אוטומציה שיווקית, פרסום ממומן, SEO, ייעוץ דיגיטלי, תחזוקת אתרים ושירותים נוספים כמפורט באתר.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">הערות חשובות:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>אנו שומרים לעצמנו את הזכות לשנות, להשהות או להפסיק כל שירות בכל עת ללא הודעה מוקדמת</li>
                  <li>התיאורים והמחירים באתר עשויים להשתנות ללא הודעה מראש</li>
                  <li>כל הצעת מחיר תקפה ל-30 יום ממועד ההצעה</li>
                  <li>שירותים מסוימים עשויים להיות מוגבלים גיאוגרפית או זמינים רק בתנאים מסוימים</li>
                  <li>אנו לא מתחייבים לזמינות רציפה של האתר או השירותים</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">4. קניין רוחני</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                כל התוכן באתר, כולל אך לא רק: טקסטים, גרפיקה, לוגואים, תמונות, איורים, קוד, תוכנה, בסיסי נתונים, עיצובים, סמלים, סימני מסחר, פטנטים וחומרים אחרים, הם רכושה הבלעדי של AUTO MIND STUDIO או של בעלי הזכויות הרלוונטיים ומוגנים בחוקי זכויות יוצרים, סימני מסחר וקניין רוחני אחרים.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">הגבלות שימוש:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>אין להעתיק, לשכפל, להפיץ, לפרסם, להציג בפומבי, לשדר, לשנות, ליצור יצירות נגזרות או להשתמש בתוכן ללא אישור בכתב מראש</li>
                  <li>אין להשתמש בתוכן למטרות מסחריות או שיווקיות ללא רישיון</li>
                  <li>אין להסיר או לשנות הודעות זכויות יוצרים, סימני מסחר או הודעות קניין אחרות</li>
                  <li>שימוש לא מורשה עלול להוביל לתביעות משפטיות ונזקים כספיים</li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>פרויקטים ללקוחות:</strong> פרויקטים שנבנו עבור לקוחות, כולל קוד, עיצובים ותוכן ייחודי, נשארים בבעלות הלקוח לאחר תשלום מלא של כל התשלומים המגיעים. עם זאת, החברה שומרת לעצמה את הזכות להשתמש בפרויקטים כחלק מתיק העבודות שלה (portfolio) אלא אם נקבע אחרת בהסכם.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">5. שימוש מותר ואסור</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-gray-700 font-medium mb-2">שימוש מותר:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>גלישה וצפייה בתוכן האתר למטרות אישיות או עסקיות לגיטימיות</li>
                  <li>יצירת קשר עם החברה דרך הטפסים והאמצעים המסופקים</li>
                  <li>הזמנת שירותים והתקשרות בהסכמים</li>
                  <li>שיתוף קישורים לאתר ברשתות חברתיות (בכפוף לתנאי השימוש של הרשתות)</li>
                </ul>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-700 font-medium mb-2">שימוש אסור:</p>
                <ul className="list-disc list-inside space-y-2 text-red-600">
                  <li>שימוש באתר למטרות בלתי חוקיות או הונאה</li>
                  <li>ניסיון לפרוץ, להזיק או לשבש את פעילות האתר או השרתים</li>
                  <li>שימוש ב-bots, scrapers או כלים אוטומטיים ללא אישור</li>
                  <li>העלאת תוכן מזיק, וירוסים, תוכנות זדוניות או קוד זדוני</li>
                  <li>הפרת זכויות קניין רוחני של אחרים</li>
                  <li>שימוש בתוכן למטרות מתחרות או פיתוח מוצרים מתחרים</li>
                  <li>הטרדה, איומים או התנהגות פוגענית כלפי החברה או משתמשים אחרים</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">6. תשלומים וביטולים</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <p className="text-gray-700 font-medium mb-2">תנאי תשלום:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>כל התשלומים יבוצעו לפי הצעת המחיר המאושרת בכתב</li>
                  <li>תשלום מקדמה של 50% נדרש לפני תחילת העבודה (או סכום אחר כמוסכם)</li>
                  <li>יתרת התשלום עם השלמת הפרויקט ואישור הלקוח</li>
                  <li>תשלומים יכולים להתבצע באמצעות העברה בנקאית, כרטיס אשראי או שירותי תשלום מקוונים</li>
                  <li>כל המחירים כוללים מע"מ כנדרש בחוק (או ללא מע"מ אם החברה פטורה)</li>
                  <li>עיכוב בתשלום עלול לגרום להשהיית העבודה או ביטול הפרויקט</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">ביטולים והחזרים:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ביטול פרויקט לפני תחילת העבודה: החזר מלא של המקדמה (פחות עמלות)</li>
                  <li>ביטול לאחר תחילת העבודה: יחויב בהתאם לשעות העבודה שהושקעו וחומרים שנרכשו</li>
                  <li>ביטול על ידי החברה: החזר מלא של כל התשלומים</li>
                  <li>תשלומי מנוי חודשיים: מחויבים מראש ואינם ניתנים להחזר, אך ניתן לבטל את המנוי לסוף התקופה</li>
                  <li>שינויים משמעותיים בדרישות עלולים לגרום לשינוי במחיר</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">7. אחריות והגבלות</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                השירותים ניתנים "כמות שהם" (AS IS) ללא אחריות מפורשת או משתמעת, כולל אך לא רק: אחריות למכירות, התאמה למטרה מסוימת, אי הפרת זכויות, איכות, ביצועים או דיוק.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">הגבלות אחריות:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>אנו מתחייבים לעבוד באיכות מקצועית גבוהה, אך איננו אחראים לנזקים עקיפים, תוצאתיים, מקריים או מיוחדים</li>
                  <li>אחריותנו מוגבלת לתיקון ליקויים ושיפורים במסגרת תקופת האחריות המפורטת בהסכם (בדרך כלל 30-90 יום)</li>
                  <li>איננו אחראים לנזקים הנובעים משימוש לא נכון, שינויים שבוצעו על ידי הלקוח או צדדים שלישיים, או אירועים מחוץ לשליטתנו</li>
                  <li>האחריות הכוללת שלנו מוגבלת לסכום ששולם עבור השירות הספציפי</li>
                  <li>איננו מתחייבים לתוצאות ספציפיות (כגון דירוגים ב-SEO או מכירות) אלא רק לביצוע העבודה המקצועית</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">8. תוכן משתמשים</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                אם את/ה מעלה, שולח או מספק תוכן כלשהו לאתר (כגון הערות, משוב, תמונות, קבצים), את/ה מעניק/ה לחברה רישיון בלתי מוגבל, בלתי ניתן לביטול, חופשי מתמלוגים להשתמש, לשכפל, לשנות, להפיץ ולהציג את התוכן למטרות שירות, שיווק ופיתוח.
              </p>
              <p className="text-gray-600 leading-relaxed">
                את/ה מתחייב/ת שהתוכן שתספק אינו מפר זכויות של אחרים, אינו בלתי חוקי, פוגעני או מזיק, ואת/ה בעל/ת הזכויות המלאות על התוכן.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">9. קישורים לאתרים חיצוניים</h3>
              <p className="text-gray-600 leading-relaxed">
                האתר עשוי להכיל קישורים לאתרים חיצוניים של צדדים שלישיים. אנו לא בודקים, לא מאשרים ולא אחראים לתוכן, מדיניות הפרטיות או הפרקטיקות של אתרים אלו. הגישה לאתרים חיצוניים היא על אחריותך הבלעדית. אנו ממליצים לך לקרוא את תנאי השימוש ומדיניות הפרטיות של כל אתר שבו אתה מבקר.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">10. פרטיות ואבטחה</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                אנו מתחייבים לשמור על סודיות ופרטיות המידע שלך. לפרטים מלאים על איסוף, שימוש והגנה על המידע האישי שלך, עיין/י במדיניות הפרטיות שלנו.
              </p>
              <p className="text-gray-600 leading-relaxed">
                אנו נוקטים באמצעי אבטחה מתקדמים אך איננו יכולים להבטיח הגנה מוחלטת מפני פריצות, גישה לא מורשית, אובדן או שינוי מידע. השימוש באתר הוא על אחריותך, ואת/ה מסכים/ה שלא נשמור על החברה מפני נזקים הנובעים משימוש באתר.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">11. פיצוי</h3>
              <p className="text-gray-600 leading-relaxed">
                את/ה מסכים/ה לפצות ולשחרר את AUTO MIND Solutions, עובדיה, מנהליה, שותפיה וספקיה מכל תביעות, נזקים, הפסדים, אחריות, הוצאות ועמלות (כולל עמלות עורכי דין) הנובעים משימוש באתר או בשירותים, הפרת תנאים אלו, הפרת זכויות של אחרים, או כל פעולה או מחדל שלך.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">12. בוררות ופתרון סכסוכים</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                כל סכסוך, מחלוקת או תביעה הנובעת מתנאים אלו או קשורה אליהם ייפתר תחילה באמצעות משא ומתן ישיר. אם לא יושג פתרון תוך 30 יום, הסכסוך יועבר לבוררות בהתאם לחוק הבוררות הישראלי.
              </p>
              <p className="text-gray-600 leading-relaxed">
                החוק החל הוא החוק הישראלי, וכל סכסוך יידון בבתי המשפט המוסמכים בתל אביב-יפו, ישראל.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">13. ביטול והשעיה</h3>
              <p className="text-gray-600 leading-relaxed">
                אנו שומרים לעצמנו את הזכות להשהות או לבטל את הגישה שלך לאתר או לשירותים בכל עת, ללא הודעה מוקדמת, אם את/ה מפר/ה תנאים אלו, משתמש/ת באתר למטרות בלתי חוקיות, או מפר/ה כל חוק או תקנה. ביטול לא ישחרר אותך מחובות תשלום או אחריות שהתחייבות לפני הביטול.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">14. הודעות</h3>
              <p className="text-gray-600 leading-relaxed">
                כל הודעות רשמיות יישלחו לכתובת האימייל שסיפקת או יפורסמו באתר. את/ה מסכים/ה לקבל הודעות אלקטרוניות, כולל הודעות שיווקיות (אלא אם ביקשת להסיר את הסכמתך). הודעות ייחשבו כנתקבלו 24 שעות לאחר שליחתן.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">15. שינויים בתנאים</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                אנו שומרים לעצמנו את הזכות לעדכן תנאי שימוש אלו בכל עת כדי לשקף שינויים בפרקטיקות שלנו, בטכנולוגיה, בשירותים או בדרישות משפטיות. שינויים יכנסו לתוקף מיד עם פרסומם באתר.
              </p>
              <p className="text-gray-600 leading-relaxed">
                המשך שימוש באתר לאחר פרסום השינויים מהווה הסכמה לתנאים המעודכנים. אם אינך מסכים/ה לשינויים, אנא הפסק/י את השימוש באתר וצור/י איתנו קשר. מומלץ לבדוק עמוד זה מעת לעת כדי להישאר מעודכן/ת.
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">16. הוראות כלליות</h3>
              <div className="bg-white p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>חלוקה:</strong> אם הוראה מסוימת נמצאת כבלתי תקפה, שאר התנאים יישארו בתוקף</li>
                  <li><strong>אי מימוש:</strong> אי מימוש זכות לא מהווה ויתור עליה</li>
                  <li><strong>העברה:</strong> אינך יכול להעביר את זכויותיך או חובותיך ללא אישור בכתב</li>
                  <li><strong>הסכם מלא:</strong> תנאים אלו מהווים את ההסכם המלא בינך לבין החברה</li>
                  <li><strong>שפה:</strong> במקרה של סתירה בין תרגומים, הגרסה העברית תקפה</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">17. יצירת קשר</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                לשאלות, הבהרות, תלונות או בקשות בנוגע לתנאי השימוש, ניתן ליצור קשר:
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-gray-700"><strong>אימייל:</strong> hello@auto-mind.solutions</p>
                <p className="text-gray-700"><strong>טלפון:</strong> 050-123-4567</p>
                <p className="text-gray-700"><strong>כתובת:</strong> תל אביב, ישראל</p>
                <p className="text-gray-700 mt-2"><strong>שעות פעילות:</strong> ראשון-חמישי, 9:00-18:00</p>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-gray-200">
              <p className="text-sm text-gray-500">
                עדכון אחרון: {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p className="text-sm text-gray-500 mt-2">
                AUTO MIND Solutions - כל הזכויות שמורות © {new Date().getFullYear()}
              </p>
              <p className="text-xs text-gray-400 mt-4">
                על ידי שימוש באתר, את/ה מאשר/ת שקראת, הבנת והסכמת לתנאי השימוש ולמדיניות הפרטיות שלנו.
              </p>
            </div>
          </div>
          </article>
        </div>
      </section>
    </>
  );
}