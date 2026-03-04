'use client';

import { SERVICES } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-10 md:py-24 rounded-[40px] overflow-x-hidden"
      style={{
        background: "linear-gradient(to bottom, #F4F9FF, #E3F0FF, #CFE6FF)",
      }}
    >
      {/* Mobile layout - original */}
      <div className="flex flex-col items-center md:hidden">
        <motion.h2
          id="services-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={titleVariants}
          className="text-3xl font-bold text-center mb-5 w-full"
          dir="rtl"
        >
          השירותים שלנו
        </motion.h2>

        <motion.div
          className="flex flex-col gap-5 w-full items-center max-w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              isMobile
            />
          ))}
        </motion.div>
      </div>

      {/* Desktop layout - new */}
      <div className="hidden md:block container mx-auto px-4 max-w-7xl">
        <motion.h2
          id="services-heading"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={titleVariants}
          className="font-bold text-center mb-16"
          dir="rtl"
          style={{
            fontSize: '48px',
            lineHeight: '120%',
            letterSpacing: '-0.5px'
          }}
        >
          השירותים שלנו
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, isMobile = false }: { service: any; index: number; isMobile?: boolean }) {
  const cardVariants = {
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
        delay: index * 0.15,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const serviceImageMap: Record<number, string> = {
    1: "/images/service1.png",
    2: "/images/service2.png",
    3: "/images/service3.png",
    4: "/images/services4.png",
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
      dir="rtl"
      style={{
        width: isMobile ? "100%" : "auto",
        maxWidth: isMobile ? "100%" : "none",
        borderRadius: "40px",
        padding: "0",
        boxShadow: "0px 4px 12px 0px #1E5EFF1A",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "16px" : "24px",
        overflow: "hidden",
      }}
    >
      {/* Top content area with padding */}
      <div style={{
        padding: isMobile ? "24px 24px 0 24px" : "32px 32px 0 32px",
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? "16px" : "24px"
      }}>
        {/* Icon - centered, large */}
        <div style={{
          width: isMobile ? "120px" : "140px",
          height: isMobile ? "120px" : "140px",
          position: "relative",
          marginLeft: "0",
          marginRight: "auto"
        }}>
          <Image
            src={`/images/icon${service.id}.png`}
            alt={`icon ${service.id}`}
            fill
            sizes="(max-width: 768px) 120px, 140px"
            style={{ objectFit: "contain" }}
            loading="eager"
          />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: isMobile ? "20px" : "24px",
            fontWeight: "700",
            textAlign: "center",
            margin: 0,
            color: "#111",
            lineHeight: '120%'
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <div style={{ textAlign: "center", direction: "rtl" }}>
          {service.description.map((line: string, idx: number) => (
            <p
              key={idx}
              style={{
                fontSize: isMobile ? "14px" : "16px",
                color: "#6B7280",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Service screenshot image — full width, no padding, flush to bottom */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: isMobile ? "200px" : "240px",
          marginTop: "auto",
        }}
      >
        <Image
          src={serviceImageMap[service.id]}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 768px) 320px, 600px"
          style={{ objectFit: "cover", objectPosition: "top" }}
          loading="lazy"
          quality={80}
        />
      </div>
    </motion.div>
  );
}