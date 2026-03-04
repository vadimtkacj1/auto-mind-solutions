'use client';

import Image from "next/image";
import { WHY_US_PILLARS } from "@/lib/constants";
import { motion } from "framer-motion";

export default function WhyUs() {
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="rounded-[40px] pt-12 md:pt-16 pb-0 container mx-auto overflow-hidden"
      style={{
        maxWidth: "600px",
        background: 'linear-gradient(180deg, #F4F9FF 0%, #E3F0FF 50%, #CFE6FF 100%)'
      }}
    >
      <div className="px-4 max-w-6xl">
        <motion.h2
          id="why-us-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={titleVariants}
          className="font-bold text-center mb-12"
          dir="rtl"
          style={{
            fontSize: '36px',
            lineHeight: '120%',
            letterSpacing: '-0.5px'
          }}
        >
          למה לבחור בנו?
        </motion.h2>

        <div className="flex justify-center">
          <div className="relative flex flex-col items-center w-full max-w-4xl">
            {/* Icons and text */}
            <motion.div 
              className="flex flex-col gap-4 w-full pb-6 px-4 md:px-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {WHY_US_PILLARS.map((pillar, index) => (
                <WhyUsItem key={pillar.id} pillar={pillar} index={index} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* People image at the bottom - full width */}
      <PeopleImage />
    </section>
  );
}

function WhyUsItem({ pillar, index }: { pillar: any; index: number }) {
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: 60,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ 
        x: -5,
        transition: { duration: 0.2 }
      }}
      className="flex items-center justify-start gap-4 pr-2 md:pr-6"
      dir="rtl"
    >
      {/* Icon on the right (for RTL) */}
      <div className="flex-shrink-0">
        <Image
          src={pillar.icon}
          alt={pillar.title}
          width={120}
          height={120}
          sizes="(max-width: 768px) 64px, 80px"
          className="w-16 h-16 md:w-20 md:h-20"
          loading="eager"
        />
      </div>
      {/* Text on the left (for RTL) */}
      <div className="text-right flex-1">
        <h3
          className="font-bold mb-1.5"
          style={{
            fontSize: '28px',
            lineHeight: '120%',
            letterSpacing: '-0.3px',
            color: '#1A1A1A'
          }}
        >
          {pillar.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            lineHeight: '150%',
            color: '#666666'
          }}
        >
          {pillar.description}
        </p>
      </div>
    </motion.div>
  );
}

function PeopleImage() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 40
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={imageVariants}
      className="w-full mt-8 relative"
      style={{ aspectRatio: '16/9' }}
    >
      <Image
        src="/images/Vector.svg"
        alt="vector"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, 600px"
        className="z-0"
        loading="eager"
      />
      <Image
        src="/images/people.png"
        alt="Team working together"
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 95vw, 600px"
        style={{
          objectFit: 'cover',
          objectPosition: 'center center'
        }}
        className="z-10"
        loading="eager"
        quality={80}
      />
    </motion.div>
  );
}
