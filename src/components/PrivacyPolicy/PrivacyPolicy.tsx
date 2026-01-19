"use client";

import React from 'react';

export function PrivacyPolicy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "מדיניות פרטיות - AUTO MIND Solutions",
    "description": "מדיניות הפרטיות של AUTO MIND Solutions. הסבר מפורט על איסוף, שימוש והגנה על מידע אישי בהתאם ל-GDPR וחוק הגנת הפרטיות הישראלי.",
    "url": "https://auto-mind.solutions/privacy",
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
      <section id="privacy" className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50" itemScope itemType="https://schema.org/WebPage">
        <div className="max-w-[1000px] mx-auto">
          <article itemScope itemType="https://schema.org/Article">
            <header>
              <h1 className="mb-8 text-5xl font-black text-[var(--color-dark)]" itemProp="headline">מדיניות פרטיות</h1>
              <meta itemProp="datePublished" content="2024-01-01" />
              <meta itemProp="dateModified" content={new Date().toISOString().split('T')[0]} />
            </header>
            <div itemProp="description">
              <p className="mb-8 text-gray-600 text-xl leading-relaxed">
                AUTO MIND Solutions מתחייבת להגן על פרטיותך ולכבד את זכויותיך. מדיניות זו מסבירה כיצד אנו אוספים, משתמשים, מגנים ומשתפים את המידע האישי שלך.
              </p>
            </div>
          
            <div className="space-y-8 bg-white rounded-[32px] p-8 lg:p-12 border-4 border-[var(--color-charcoal)]">
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">1. איסוף מידע</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  AUTO MIND Solutions מתחייבת להגן על פרטיותך. אנו אוספים מידע רק כאשר את/ה מזין/ה אותו באופן מרצון דרך טפסי יצירת קשר, הזמנות או הרשמה לניוזלטר.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">המידע שנאסף כולל:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>מידע אישי: שם מלא, כתובת אימייל, מספר טלפון, כתובת</li>
                    <li>מידע עסקי: שם החברה, תחום פעילות, דרישות פרויקט</li>
                    <li>מידע טכני: כתובת IP, סוג דפדפן, מערכת הפעלה, דפים שביקרת בהם</li>
                    <li>מידע תקשורת: הודעות ששלחת דרך טפסי יצירת קשר, תכתובות אימייל</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">2. בסיס חוקי לעיבוד מידע</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  אנו מעבדים את המידע האישי שלך על בסיס אחד או יותר מהבסיסים החוקיים הבאים:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>הסכמה: כאשר נתת הסכמה מפורשת לעיבוד המידע</li>
                  <li>ביצוע חוזה: כאשר המידע נדרש לביצוע הסכם או שירות שביקשת</li>
                  <li>אינטרס לגיטימי: לשיפור השירותים, אבטחה ומניעת הונאה</li>
                  <li>חובה חוקית: כאשר אנו מחויבים על פי חוק לאסוף או לשמור מידע</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">3. שימוש במידע</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  המידע שאנו אוספים משמש אותנו למטרות הבאות:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>מתן שירות ותמיכה ללקוחות: טיפול בפניות, ביצוע פרויקטים, תמיכה טכנית</li>
                  <li>שיפור השירותים: ניתוח התנהגות משתמשים, אופטימיזציה של האתר</li>
                  <li>תקשורת שיווקית: שליחת עדכונים, הצעות מיוחדות וניוזלטרים (רק עם הסכמתך)</li>
                  <li>שמירה על קשר עסקי: ניהול יחסי לקוחות, מעקב אחר פרויקטים</li>
                  <li>אבטחה ומניעת הונאה: זיהוי פעילות חשודה, הגנה על האתר והמשתמשים</li>
                  <li>עמידה בחובות משפטיות: דיווח לרשויות, שמירת רשומות כנדרש בחוק</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  <strong>אנו לא נמכור, נשכיר או נשתף את המידע האישי שלך עם צדדים שלישיים ללא הסכמתך המפורשת</strong>, למעט המקרים המפורטים במדיניות זו.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">4. שיתוף מידע עם צדדים שלישיים</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  אנו עשויים לשתף את המידע שלך עם ספקי שירותים מהימנים המסייעים לנו להפעיל את האתר ולספק שירותים:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>ספקי אירוח ושירותי ענן: אחסון ואבטחת המידע</li>
                  <li>ספקי שירותי תקשורת: שליחת אימיילים והודעות</li>
                  <li>ספקי שירותי אנליטיקה: ניתוח התנהגות משתמשים (Google Analytics וכו')</li>
                  <li>ספקי תשלום: עיבוד תשלומים (PayPal, Stripe וכו')</li>
                  <li>ספקי שירותי CRM: ניהול יחסי לקוחות</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  כל הספקים מחויבים לשמור על סודיות המידע ולעמוד בתקני אבטחה מחמירים. אנו לא מוכרים או משכירים את המידע שלך לצדדים שלישיים למטרות שיווקיות.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">5. עוגיות (Cookies) וטכנולוגיות מעקב</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  האתר משתמש בעוגיות וטכנולוגיות דומות כדי לשפר את חוויית הגלישה שלך. עוגיות הן קבצים קטנים שנשמרים במכשיר שלך.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">סוגי עוגיות שאנו משתמשים:</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li><strong>עוגיות הכרחיות:</strong> נדרשות לתפקוד בסיסי של האתר</li>
                    <li><strong>עוגיות ביצועים:</strong> אוספות מידע על אופן השימוש באתר</li>
                    <li><strong>עוגיות פונקציונליות:</strong> מאפשרות לזכור את ההעדפות שלך</li>
                    <li><strong>עוגיות שיווקיות:</strong> משמשות לפרסום מותאם אישית (רק עם הסכמתך)</li>
                  </ul>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  את/ה יכול/ה לבחור לחסום עוגיות דרך הגדרות הדפדפן שלך, אך זה עלול להשפיע על תפקוד מסוימים באתר. ניתן לנהל את העדפות העוגיות דרך חלון ההודעות שמופיע בכניסה לאתר.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">6. אבטחת מידע</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  אנו נוקטים באמצעי אבטחה מתקדמים ומגוונים להגנה על המידע האישי שלך:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>הצפנת SSL/TLS לכל התקשורת בין הדפדפן לשרת</li>
                  <li>שרתים מאובטחים עם גישה מוגבלת</li>
                  <li>גיבויים קבועים ושמירת מידע מוצפן</li>
                  <li>מערכות זיהוי ומניעת חדירות</li>
                  <li>הגבלת גישה למידע רק לעובדים הזקוקים לו</li>
                  <li>עדכונים שוטפים של תוכנות אבטחה</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  למרות מאמצינו, אף שיטת העברה דרך האינטרנט אינה בטוחה ב-100%, ואנו לא יכולים להבטיח אבטחה מוחלטת. אנו ממליצים לך לנקוט באמצעי זהירות נוספים, כגון שימוש בסיסמאות חזקות ואי שיתוף פרטים אישיים בפומבי.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">7. שמירת מידע</h3>
                <p className="text-gray-600 leading-relaxed">
                  אנו שומרים את המידע האישי שלך רק למשך הזמן הנדרש למטרות שלשמן נאסף, או כנדרש על פי חוק. לרוב, מידע של לקוחות נשמר כל עוד קיים קשר עסקי, ולאחר מכן למשך תקופת התיישנות משפטית (7 שנים בישראל). מידע שיווקי נשמר עד שתבקש להסיר את הסכמתך. מידע טכני (כגון לוגים) נשמר בדרך כלל למשך 12-24 חודשים.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">8. העברת מידע מעבר לים</h3>
                <p className="text-gray-600 leading-relaxed">
                  חלק מספקי השירותים שלנו עשויים להיות ממוקמים מחוץ לישראל או האיחוד האירופי. במקרים כאלה, אנו מוודאים שקיימים הסכמי העברת נתונים מתאימים (כגון Standard Contractual Clauses) ושהמידע מוגן ברמה מספקת. על ידי שימוש בשירותינו, את/ה מסכים/ה להעברת המידע כמתואר.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">9. זכויות המשתמש (GDPR ו-Privacy Protection Law)</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  בהתאם לחוק הגנת הפרטיות הישראלי ו-GDPR (אם חל), יש לך הזכויות הבאות:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li><strong>זכות גישה:</strong> לקבל עותק של המידע האישי שאנו מחזיקים עליך</li>
                  <li><strong>זכות תיקון:</strong> לתקן או לעדכן מידע לא מדויק או לא מעודכן</li>
                  <li><strong>זכות מחיקה:</strong> לבקש מחיקת המידע האישי שלך ("הזכות להישכח")</li>
                  <li><strong>זכות הגבלה:</strong> להגביל את עיבוד המידע שלך במקרים מסוימים</li>
                  <li><strong>זכות התנגדות:</strong> להתנגד לעיבוד המידע למטרות שיווקיות</li>
                  <li><strong>זכות ניידות נתונים:</strong> לקבל את המידע שלך בפורמט מובנה ולמסור אותו לספק אחר</li>
                  <li><strong>זכות הסתייגות:</strong> להסיר את הסכמתך בכל עת (לא ישפיע על עיבוד קודם)</li>
                  <li><strong>זכות ערעור:</strong> להגיש תלונה לרשות להגנת הפרטיות</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  לצורך מימוש זכויות אלו, צור/י איתנו קשר בכתובת <strong>hello@auto-mind.solutions</strong>. נענה לבקשתך תוך 30 יום (או 90 יום במקרים מורכבים, עם הודעה מראש).
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">10. פרטיות ילדים</h3>
                <p className="text-gray-600 leading-relaxed">
                  الشירותים שלנו מיועדים למבוגרים מעל גיל 18. אנו לא אוספים במודע מידע אישי מילדים מתחת לגיל 18. אם גילית שמידע של ילד נאסף ללא הסכמת הורה, אנא צור/י איתנו קשר מיד כדי שנמחק את המידע.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">11. קישורים לאתרים חיצוניים</h3>
                <p className="text-gray-600 leading-relaxed">
                  האתר שלנו עשוי להכיל קישורים לאתרים חיצוניים. אנו לא אחראים למדיניות הפרטיות או לתוכן של אתרים אלו. אנו ממליצים לך לקרוא את מדיניות הפרטיות של כל אתר שבו אתה מבקר.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">12. עדכונים למדיניות</h3>
                <p className="text-gray-600 leading-relaxed">
                  אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת כדי לשקף שינויים בפרקטיקות שלנו, בטכנולוגיה או בדרישות משפטיות. עדכונים יפורסמו בעמוד זה ויכללו תאריך עדכון. במקרה של שינויים מהותיים, נודיע לך בדוא"ל או באמצעות הודעה בולטת באתר.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  המשך שימוש באתר לאחר פרסום שינויים מהווה הסכמה למדיניות המעודכנת. אם אינך מסכים/ה לשינויים, אנא הפסק/י את השימוש באתר וצור/י איתנו קשר.
                </p>
              </div>

              <div>
                <h3 className="mb-4 text-2xl font-semibold text-[var(--color-dark)]">13. יצירת קשר</h3>
                <p className="text-gray-600 leading-relaxed">
                  לשאלות, בקשות או תלונות בנוגע למדיניות הפרטיות או לעיבוד המידע האישי שלך, ניתן ליצור קשר:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="text-gray-700"><strong>אימייל:</strong> hello@auto-mind.solutions</p>
                  <p className="text-gray-700"><strong>טלפון:</strong> 050-123-4567</p>
                  <p className="text-gray-700"><strong>כתובת:</strong> תל אביב, ישראל</p>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-gray-200">
                <p className="text-sm text-gray-500">
                  עדכון אחרון: {new Date().toLocaleDateString('he-IL', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  AUTO MIND Solutions - כל הזכויות שמורות © {new Date().getFullYear()}
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}