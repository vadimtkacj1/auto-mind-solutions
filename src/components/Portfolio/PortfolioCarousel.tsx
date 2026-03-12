"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { portfolioItems, type PortfolioItem } from "./portfolioData";

export function PortfolioCarousel() {
  return (
    <div className="bg-white overflow-visible m-0 p-0">
      <div className="text-center py-16">
        <h2
          className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
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
    <section ref={targetRef} className="relative h-[150vh] bg-white overflow-visible justify-start flex">
      <div className="sticky top-0 flex items-center justify-end overflow-visible w-full py-8">
        <motion.div style={{ x, willChange: "transform", contain: "layout" }} className="flex gap-8 px-8">
          {portfolioItems.map((card) => {
            return <Card card={card} key={card.slug} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: PortfolioItem }) => {
  return (
    <div
      key={card.slug}
      className="relative h-[65vh] w-[65vh] flex-shrink-0"
    >
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-contain rounded-lg"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};
