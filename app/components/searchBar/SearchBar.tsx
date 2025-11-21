"use client";

import { useEffect, useRef, useState } from "react";
import SelectMenu from "./selectMenu/SelectMenu";
import {
  guestOptions,
  IsOpenStateType,
  MenuKeyEnum,
  SelectedOptionsType,
  SelectOption,
  whenOptions,
  whereOptions,
} from "./config";
import SearchButton from "./searchButton/SearchButton";
import VenueOrVendor from "./venueOrVendor/VenueOrVendor";

const SearchBar = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isOpen, setIsOpen] = useState<IsOpenStateType>({
    where: false,
    when: false,
    guests: false,
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({
    where: whereOptions[0],
    when: whenOptions[0],
    guests: guestOptions[0],
  });

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

  const handleOpenMenu = (key: string) => {
    setIsOpen((prev) => ({
      ...prev,
      [key as keyof IsOpenStateType]: !prev[key as keyof IsOpenStateType],
    }));
  };

  const handleSelectOption = (key: MenuKeyEnum, option: SelectOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: option,
    }));
  };

  const handleSearch = () => {
    console.log("selectedOptions *************** ", selectedOptions);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-[10px] bg-white px-[15px] pt-6 pb-2.5"
    >
      <div className="hidden lg:block">
        <div className="absolute left-1/2 flex w-[264px] -translate-x-1/2 -top-[40px] items-center justify-center rounded-[10px] bg-white px-6 py-2 text-black shadow-lg">
          <VenueOrVendor />
        </div>
      </div>
      <div className="grid gap-2 md:gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
        <div className="md:hidden">
          <VenueOrVendor />
        </div>
        <SelectMenu
          label="Where"
          options={whereOptions}
          defaultValue="dubai"
          isOpen={isOpen.where}
          handleOpenMenu={handleOpenMenu}
          keyName={MenuKeyEnum.WHERE}
          selectedOption={selectedOptions.where}
          handleSelectOption={handleSelectOption}
        />
        <hr className="border-[#E0E0E0] md:hidden" />
        <SelectMenu
          label="When"
          options={whenOptions}
          defaultValue="anytime"
          isOpen={isOpen.when}
          handleOpenMenu={handleOpenMenu}
          keyName={MenuKeyEnum.WHEN}
          selectedOption={selectedOptions.when}
          handleSelectOption={handleSelectOption}
        />
        <hr className="border-[#E0E0E0] md:hidden" />
        <SelectMenu
          label="Guests"
          options={guestOptions}
          defaultValue="10-20"
          isOpen={isOpen.guests}
          handleOpenMenu={handleOpenMenu}
          keyName={MenuKeyEnum.GUESTS}
          selectedOption={selectedOptions.guests}
          handleSelectOption={handleSelectOption}
        />
        <div className="flex items-center justify-center md:justify-end">
          <SearchButton handleSearch={handleSearch} variant="primary" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
