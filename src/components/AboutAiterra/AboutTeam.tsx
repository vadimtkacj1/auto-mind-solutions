"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM = [
  { name: "Alex Chen", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" },
  { name: "Sarah Mitchell", role: "Head of Technology", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
  { name: "James Rivera", role: "Lead Developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
  { name: "Emma Watson", role: "Head of Design", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
];

export function AboutTeam() {
  return React.createElement(
    "section",
    { className: "relative py-20 md:py-32 overflow-hidden" },
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto px-6 lg:px-12" },
      React.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.08, margin: "0px 0px 150px 0px" },
          transition: { duration: 0.6 },
          className: "text-center mb-16",
        },
        React.createElement(
          "h2",
          { className: "text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 mt-4" },
          "פגשו את ",
          React.createElement("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-600" }, "ההנהלה")
        ),
        React.createElement("p", { className: "mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed" }, "מומחים באוטומציה, בינה מלאכותית ופיתוח מוצרים דיגיטליים.")
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" },
        TEAM.map((member, i) =>
          React.createElement(
            motion.div,
            {
              key: i,
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true, amount: 0.05, margin: "0px 0px 150px 0px" },
              transition: { duration: 0.6, delay: i * 0.1 },
              className: "group cursor-pointer",
            },
            React.createElement(
              motion.div,
              {
                className: "overflow-hidden rounded-3xl aspect-square bg-slate-100 shadow-xl shadow-slate-900/10 relative",
                whileHover: { y: -8, boxShadow: "0 20px 60px -12px rgba(0, 112, 255, 0.25)" },
                transition: { duration: 0.3 },
              },
              React.createElement(motion.img, {
                src: member.img,
                alt: member.name,
                className: "w-full h-full object-cover",
                whileHover: { scale: 1.08 },
                transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
              }),
              // Gradient overlay on hover
              React.createElement("div", { className: "absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" }),
              // Decorative corner
              React.createElement("div", { className: "absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" })
            ),
            React.createElement("h3", { className: "mt-6 text-xl md:text-2xl font-black text-slate-900 group-hover:text-[var(--color-primary)] transition-colors" }, member.name),
            React.createElement("p", { className: "text-slate-600 mt-2 text-base md:text-lg font-medium" }, member.role)
          )
        )
      )
    )
  );
}
