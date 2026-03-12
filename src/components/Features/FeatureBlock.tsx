"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/Button/Button";
import { SmartVideo } from "../ui/SmartVideo";

// Регистрируем плагин
gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────
interface FeatureBlockProps {
  index: number;
  title: string;
  description: string;
  buttonText: string;
  video: string;
  link: string;
}

// ─────────────────────────────────────────────────────────
// КОМПОНЕНТ БЛОКА ПРЕИМУЩЕСТВА
// ─────────────────────────────────────────────────────────
export function FeatureBlock({
  index,
  title,
  description,
  buttonText,
  video,
  link,
}: FeatureBlockProps) {
  // Refs для анимации
  const containerRef = useRef<HTMLDivElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Определяем направление зигзага (четный/нечетный)
  const isEven = index % 2 === 0;

  // ─────────────────────────────────────────────────────────
  // GSAP АНИМАЦИИ
  // ─────────────────────────────────────────────────────────
  useGSAP(
    () => {
      // Настройки дистанций и таймингов (легко изменяемые)
      const ANIMATION_CONFIG = {
        imageDistance: 150, // px - дистанция выезда картинки
        textDistance: 100, // px - дистанция выезда текста
        duration: 1.2, // секунды - длительность анимации
        staggerDelay: 0.15, // секунды - задержка между элементами stagger
        ease: "power3.out", // тип easing
        triggerStart: "top 75%", // когда начинать анимацию
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: ANIMATION_CONFIG.triggerStart,
          toggleActions: "play none none none",
          // markers: true, // Раскомментируй для отладки
        },
      });

      // АНИМАЦИЯ ВИДЕО
      // Для четных - выезжает справа, для нечетных - слева
      timeline.fromTo(
        videoContainerRef.current,
        {
          x: isEven ? ANIMATION_CONFIG.imageDistance : -ANIMATION_CONFIG.imageDistance,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: ANIMATION_CONFIG.duration,
          ease: ANIMATION_CONFIG.ease,
        }
      );

      // АНИМАЦИЯ ТЕКСТОВОГО КОНТЕЙНЕРА
      // Выезжает с противоположной стороны
      timeline.fromTo(
        textContainerRef.current,
        {
          x: isEven ? -ANIMATION_CONFIG.textDistance : ANIMATION_CONFIG.textDistance,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: ANIMATION_CONFIG.duration,
          ease: ANIMATION_CONFIG.ease,
        },
        "<" // Начинаем одновременно с картинкой
      );

      // STAGGER АНИМАЦИЯ ВНУТРЕННИХ ЭЛЕМЕНТОВ
      // Заголовок -> Описание -> Кнопка (один за другим)
      timeline.fromTo(
        [titleRef.current, descRef.current, buttonRef.current],
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: ANIMATION_CONFIG.staggerDelay,
          ease: ANIMATION_CONFIG.ease,
        },
        "-=0.6" // Начинаем немного раньше окончания предыдущей анимации
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`
        flex flex-col gap-8
        lg:flex-row lg:items-center lg:gap-16
        ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
      `}
    >
      {/* ───────────────────────────────────────────────── */}
      {/* ВИДЕО С ЛЕВИТАЦИЕЙ */}
      {/* ───────────────────────────────────────────────── */}
      <div ref={videoContainerRef} className="flex-1 relative">
        <div
          className="feature-image-float relative max-w-md mx-auto"
          style={{
            // Динамический delay для каждого видео
            animationDelay: `${index * 0.3}s`,
          }}
        >
          <SmartVideo
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto object-contain drop-shadow-2xl"
            aria-label={title}
          />
        </div>
      </div>

      {/* ───────────────────────────────────────────────── */}
      {/* ТЕКСТОВЫЙ КОНТЕЙНЕР */}
      {/* ───────────────────────────────────────────────── */}
      <div ref={textContainerRef} className="flex-1">
        {/* Заголовок */}
        <h3
          ref={titleRef}
          className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight mb-6"
        >
          {title}
        </h3>

        {/* Описание */}
        <p
          ref={descRef}
          className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium mb-8"
        >
          {description}
        </p>

        {/* Кнопка */}
        <div ref={buttonRef}>
          <Button asChild variant="brand" size="pill">
            <Link href={link}>
              {buttonText}
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
