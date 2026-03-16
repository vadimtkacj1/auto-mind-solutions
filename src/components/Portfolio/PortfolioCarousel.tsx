"use client";

import Image from "next/image";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Loader2 } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "./portfolioData";

export function PortfolioCarousel() {
  return (
    <div className="bg-white overflow-visible m-0 p-0">
      <div className="text-center py-10 sm:py-16">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent"
          dir="rtl"
        >
          הפרויקטים שלנו
        </h2>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
}

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[120vh] sm:h-[150vh] bg-white overflow-visible justify-start flex">
      <div className="sticky top-0 flex items-center justify-end overflow-visible w-full py-6 sm:py-8">
        <motion.div style={{ x, willChange: "transform", contain: "layout" }} className="flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-8">
          {portfolioItems.map((card) => {
            return <Card card={card} key={card.slug} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: PortfolioItem }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div
      key={card.slug}
      className="relative h-[45vh] w-[45vh] sm:h-[55vh] sm:w-[55vh] md:h-[65vh] md:w-[65vh] flex-shrink-0 rounded-lg overflow-hidden"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Loader2 className="w-10 h-10 text-slate-400 animate-spin" aria-hidden />
        </div>
      )}
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 640px) 45vh, (max-width: 768px) 55vh, 65vh"
        className="object-contain rounded-lg"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};
