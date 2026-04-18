"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  label: string;
}

const stats: Stat[] = [
  { value: 10, label: "Years of Service" },
  { value: 400, label: "Volunteers" },
  { value: 20000, label: "Beneficiaries" },
  { value: 125, label: "Donation Drives" },
  { value: 200, label: "Children Educated" },
  { value: 1000, label: "Interns Trained" },
];

export const Impact = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setCounts(
              stats.map((stat) => Math.floor(stat.value * progress))
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-[28px] font-semibold font-[Poppins] text-black text-center mb-12">
          Behind every number, a life transformed.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-baseline">
                <span className="text-[42px] font-bold font-[Montserrat] text-[#0e6119]">
                  {counts[index]}
                </span>
                <span className="text-[42px] font-bold font-[Montserrat] text-[#0e6119]">
                  +
                </span>
              </div>
              <p className="text-[16px] text-[#444444] text-center mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
