"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import dropdownIcon from "../../../assets/svgs/dropdown-icon.svg";
import type { SelectOption } from "../config";

interface SelectMenuProps {
  label: string;
  options: SelectOption[];
  defaultValue?: string;
  showIcon?: boolean;
  showlabel?: boolean;
  isTextCenter?: boolean;
  fontSize?: "14px" | "16px";
  isZeroPadding?: boolean;
  isOpen: boolean;
  handleOpenMenu: (key: string) => void;
}

const SelectMenu = ({
  label,
  options,
  defaultValue,
  showIcon = true,
  showlabel = true,
  isTextCenter = false,
  fontSize = "16px",
  isZeroPadding = false,
  isOpen = false,
  handleOpenMenu,
}: SelectMenuProps) => {
  const initialOption = useMemo(() => {
    if (defaultValue) {
      const match = options.find((option) => option.value === defaultValue);
      if (match) {
        return match;
      }
    }
    return { label: label, value: "" };
  }, [defaultValue, options, label]);
  const [selectedOption, setSelectedOption] =
    useState<SelectOption>(initialOption);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => {
    handleOpenMenu(label.toLowerCase());
  };

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    handleOpenMenu(label.toLowerCase());
  };

    /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickAway = (event: MouseEvent | TouchEvent) => {
      if (!menuRef.current) {
        return;
      }

      if (!menuRef.current.contains(event.target as Node)) {
        handleOpenMenu(label.toLowerCase());
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    document.addEventListener("touchstart", handleClickAway);

    return () => {
      document.removeEventListener("mousedown", handleClickAway);
      document.removeEventListener("touchstart", handleClickAway);
    };
  }, [isOpen, label]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={toggleOpen}
        className={`flex w-full flex-col ${isZeroPadding ? "px-2 lg:px-4 py-0" : "px-2 lg:px-4 py-3"} text-left transition cursor-pointer`}
      >
        {showlabel && (
          <span className="text-[14px] font-medium tracking-[0.08em] text-[#808080]">
            {label}
          </span>
        )}
        <div className="mt-1 flex items-center justify-between">
          <span className={`text-[${fontSize}] font-medium leading-[100%] text-[#000000]`}>
            {selectedOption.label}
          </span>
          {showIcon && (
            <Image
              src={dropdownIcon}
              alt={`${label} dropdown`}
              width={12}
              height={6}
              className={`transition ${isOpen ? "rotate-180" : ""}`}
            />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 max-h-40 overflow-y-auto border border-[#F2F2F2] bg-white shadow-[0px_32px_60px_-40px_rgba(20,16,36,0.5)] min-w-[120px] ">
          {options.map((option) => {
            const isSelected = option.value === selectedOption.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center justify-between px-4 py-2 text-[14px] font-medium text-[#1A1A1A] transition hover:bg-[#FFF5F2] 
                  ${isTextCenter ? "justify-center" : ""}
                  ${isSelected ? "text-[#FF5037]" : ""}`}
              >
                <span className={``}>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
