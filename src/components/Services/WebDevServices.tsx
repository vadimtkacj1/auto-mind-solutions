"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, Briefcase, Code2 } from "lucide-react";

const SERVICES = [
  {
    icon: Building2,
    title: "בניית אתר תדמית",
    description: "נותני שירות, משרדי עורכי דין, או רופאים? שירות של בניית אתר תדמית לעסק נועד לשדר אמינות, יוקרה וסמכות. אנו מבצעים בניית אתרים לעסקים קטנים וגדולים כאחד, עם דגש על ממשק משתמש שמוביל להשארת פרטים מהירה וישירה.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10",
  },
  {
    icon: ShoppingCart,
    title: "בניית אתר מכירות (איקומרס)",
    description: "חנות פיזית זה מצוין, אבל אתר מכירות אונליין חושף אתכם לכל הארץ ולכל העולם. הניסיון העשיר שלנו כולל בניית אתר חנות גמיש, פיתוח וגם בניית חנות וירטואלית בעלת קטלוג חכם, ביצוע בניית אתר איקומרס שנטען במילי-שניות, ואינטגרציה חלקה ובטוחה של בניית אתר עם סליקה.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
    gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10",
  },
  {
    icon: Briefcase,
    title: "פורטל עסקי ומערכות ניהול",
    description: "מערכות מורכבות לניהול לקוחות, מלאי, הזמנות ועוד. פתרונות מותאמים אישית שמשלבים אוטומציה, דשבורדים חכמים וממשקי API מתקדמים.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    gradient: "from-orange-500/10 via-red-500/10 to-rose-500/10",
  },
  {
    icon: Code2,
    title: "פיתוח Custom מאפס",
    description: "יש לכם חזון ייחודי? אנחנו בונים מערכות מורכבות מהיסוד עם ארכיטקטורה סקילבילית, אינטגרציות מתקדמות ופתרונות טכנולוגיים שמתאימים בדיוק לצרכים שלכם.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    gradient: "from-violet-500/10 via-indigo-500/10 to-blue-500/10",
  },
];

export function WebDevServices() {
  return (
    <section className="py-20 md:py-32 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-[16px] md:text-[20px] font-black tracking-[0.3em] uppercase text-[var(--color-primary)] mb-4 inline-block">
            השירותים שלנו
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mt-4 leading-tight">
            איזה אתר העסק שלכם צריך?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
           לכל עסק יש את ה-DNA שלו, ולכן תהליך אפיון אתר הוא השלב הראשון והקריטי ביותר שלנו. אנו מציעים פתרונות מותאמים אישית לכל מודל עסקי:
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {SERVICES.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  </div>

                  {/* Icon */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-[var(--color-primary)]" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                    {service.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[var(--color-primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
