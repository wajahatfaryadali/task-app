"use client";

import { useEffect, useRef } from "react";
import SelectMenu from "./SelectMenu";
import { guestOptions, whenOptions, whereOptions } from "./config";
import SearchButton from "./searchButton/SearchButton";
import VenueOrVendor from "./venueOrVendor/VenueOrVendor";

const SearchBar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = containerRef.current;
    if (!target || typeof window === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        window.dispatchEvent(
          new CustomEvent("search-bar-visibility", {
            detail: entry.isIntersecting,
          })
        );
      },
      {
        threshold: 0,
      }
    );

    observer.observe(target);

    return () => {
      observer.disconnect();
      window.dispatchEvent(
        new CustomEvent("search-bar-visibility", { detail: true })
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-[10px] bg-white px-[15px] pt-6 pb-2.5"
    >
      <div className="hidden lg:block">
        <VenueOrVendor />
      </div>
      <div className="grid gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
        <SelectMenu label="Where" options={whereOptions} defaultValue="dubai" />
        <SelectMenu label="When" options={whenOptions} defaultValue="anytime" />
        <SelectMenu
          label="Guests"
          options={guestOptions}
          defaultValue="10-20"
        />
        <div className="flex items-center justify-center md:justify-end">
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
