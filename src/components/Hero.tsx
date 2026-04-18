"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const SLIDES = [
  "/images/3b16ef_28baa591161b404088670556f8cfac2d~mv2.jpg",
  "/images/3b16ef_6e6796cd8dce4a888423799cda60049e~mv2.png",
  "/images/3b16ef_6661af4187a44879be31730132fdb218~mv2.png",
  "/images/3b16ef_b735371856694763894e0e1e36c8d4ea~mv2.jpg",
];

const PHRASES = [
  "hope that lasts.",
  "change that matters.",
  "smiles from struggles.",
  "impact with compassion.",
  "stronger tomorrows.",
  "stories of kindness.",
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 3000);

    const phraseInterval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % PHRASES.length);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(phraseInterval);
    };
  }, []);

  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[680px] overflow-hidden bg-black font-heading">
      {/* Slide Wrapper */}
      <div className="absolute inset-0 pointer-events-none">
        {SLIDES.map((slide, index) => (
          <div
            key={slide}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
            {/* Dark overlay for text readability as implied by background: rgba(0, 0, 0, 0.4) in spec */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-5xl w-full">
          <h1 className="flex flex-col items-center justify-center gap-1 md:gap-3 text-[22.4px] md:text-[48px] font-semibold text-white leading-tight uppercase tracking-tight">
            <span className="shrink-0">We create</span>
            <span className="relative inline-block h-[1.2em] w-full max-w-[280px] md:max-w-[600px] lowercase italic">
               {PHRASES.map((phrase, index) => (
                 <span
                  key={phrase}
                  className={cn(
                    "absolute left-0 right-0 top-0 transition-opacity duration-400 ease-in-out block",
                    index === currentPhrase 
                      ? "opacity-100" 
                      : "opacity-0"
                  )}
                 >
                   {phrase}
                 </span>
               ))}
            </span>
          </h1>
          
          <div className="mt-8 md:mt-12">
            <Link
              href="/about-us-1"
              className="inline-block border-2 border-white px-8 md:px-12 py-2.5 md:py-3.5 rounded-[4px] text-xs md:text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black uppercase tracking-[0.2em]"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
