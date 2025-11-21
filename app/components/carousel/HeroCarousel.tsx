"use client";

import { useState } from "react";
import Image from "next/image";
import heroImage1 from "../../assets/pngs/img-1.png";
import heroImage2 from "../../assets/jpgs/img-2.jpg";
import heroImage3 from "../../assets/jpgs/img-3.jpg";
import SearchBar from "../searchBar/SearchBar";

const slides = [heroImage1, heroImage2, heroImage3];

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

      <div className="relative z-10 flex h-full flex-col max-w-[1054px] mx-auto items-center justify-center px-6 text-center">
        <h1 className="text-[30px] md:text-[50px] lg:text-[70px] font-bold leading-tight w-[340px] md:w-[800px]">
          Celebrate <br className="hidden md:block lg:hidden" /> in venues big and small
        </h1>
        <div className="w-full mt-[20px] lg:mt-30">
          <SearchBar />
        </div>
        <div className="absolute bottom-10 md:bottom-30 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={`hero-dot-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ease-out cursor-pointer ${
                index === activeIndex
                  ? "w-[28px] bg-[#FEC432]"
                  : "w-2 bg-[#D9D9D9]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
