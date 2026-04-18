"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export function Mission30303() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setProgress(100);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-[60px] px-5 font-sans">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-[32px] md:text-[40px] font-bold text-black mb-4 uppercase tracking-tight">
          Mission 30303
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold text-site-green mb-6 max-w-3xl mx-auto leading-tight">
          Contribute and change the future of 30 Schools by raising ₹3 Crores in 30 days
        </h3>
        <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4">
          We believe in the power of collective action. Together, we can transform the lives of thousands of students by supporting 30 schools with essential resources, infrastructure, and opportunities for quality education.
        </p>
        
        <Link
          href="/donate"
          className="inline-block bg-site-green text-white px-10 py-3.5 rounded-[5px] text-base font-bold hover:bg-site-dark-green transition-colors uppercase tracking-wider mb-12 shadow-sm"
        >
          Donate Now
        </Link>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 border border-gray-100 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-6">
            <div className="text-center md:text-left">
              <span className="block text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-widest mb-1">Amount Raised</span>
              <span className="block text-2xl md:text-3xl font-bold text-black">₹3,14,62,940</span>
              <span className="block text-xs md:text-sm text-gray-500 mt-1">₹3.14 Cr raised so far</span>
            </div>
            <div className="text-center md:text-right">
              <span className="block text-[10px] md:text-xs uppercase font-bold text-gray-400 tracking-widest mb-1">Target Goal</span>
              <span className="block text-2xl md:text-3xl font-bold text-black">₹3,00,00,000</span>
              <span className="block text-xs md:text-sm text-gray-500 mt-1">₹3.00 Cr target goal</span>
            </div>
          </div>
          
          <div className="relative w-full h-3 bg-[#e0e0e0] rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-site-green transition-all duration-1000 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
