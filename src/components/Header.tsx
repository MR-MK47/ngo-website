"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronDownIcon } from "@/components/icons";

const NAV_ITEMS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about-us-1" },
  {
    label: "OUR WORK",
    href: "/our-work",
    dropdown: [
      { label: "UttamPathshala", href: "/projects/uttampathshala" },
      { label: "PariHoonMain", href: "/projects/parihoonmain" },
      { label: "CleanYourSphere", href: "/projects/cleanyoursphere" },
      { label: "Pawsibilities", href: "/projects/pawsibilities" },
    ],
  },
  { label: "GALLERY", href: "/projects" },
  { label: "LIVE IMPACT", href: "/events" },
  { label: "JOIN US", href: "/awareness-campaign-1" },
  {
    label: "BLOG",
    href: "/blog",
    dropdown: [
      { label: "News & Updates", href: "/blog/news" },
      { label: "Our Stories", href: "/blog/stories" },
    ],
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] bg-white transition-all duration-300 border-b border-black/10",
        isScrolled ? "h-16 shadow-md" : "h-20"
      )}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image
                src="/images/logo/logo.png"
                alt="CreateTogether Foundation Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-sm md:text-lg font-bold font-sans text-black leading-none uppercase tracking-tight">
                CreateTogether <span className="text-site-green block text-[10px] md:text-xs tracking-[0.2em] font-semibold">Foundation</span>
              </h2>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="relative group py-4">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-black hover:text-site-green transition-colors uppercase font-sans tracking-wider"
                >
                  {item.label}
                  {item.dropdown && (
                    <ChevronDownIcon className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" />
                  )}
                </Link>

                {item.dropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 min-w-[200px] z-50">
                    <ul className="bg-white border border-black/5 shadow-xl py-2 rounded-sm overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm font-medium text-black hover:bg-site-green hover:text-white transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Donate Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link
            href="/donate"
            className="bg-site-green text-white px-5 md:px-8 py-2 md:py-2.5 rounded-[5px] text-sm font-semibold hover:bg-site-dark-green transition-colors font-sans uppercase shadow-sm"
          >
            DONATE
          </Link>
          
          {/* Mobile Menu Trigger (Visual Only for now) */}
          <button className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Menu">
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
