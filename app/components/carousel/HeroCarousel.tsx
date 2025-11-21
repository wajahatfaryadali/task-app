"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import heroImage from "../../assets/pngs/img-1.png";

const slides = [heroImage, heroImage, heroImage, heroImage];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {slides.map((slide, index) => (
        <div
          key={`hero-slide-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide}
            alt="Venue celebration"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">
            Celebrate
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            Celebrate in venues big and small
          </h1>
          <p className="mt-4 text-lg text-white/80 md:text-xl">
            Find the perfect venue for any occasion with curated listings.
          </p>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, index) => (
          <button
            key={`hero-dot-${index}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-3 w-3 rounded-full border border-white transition ${
              index === activeIndex ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
