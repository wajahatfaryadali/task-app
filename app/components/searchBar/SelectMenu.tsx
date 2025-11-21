"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import dropdownIcon from "../../assets/svgs/dropdown-icon.svg";
import type { SelectOption } from "./config";

interface SelectMenuProps {
  label: string;
  options: SelectOption[];
  defaultValue?: string;
}

const SelectMenu = ({ label, options, defaultValue }: SelectMenuProps) => {
  const initialOption = useMemo(() => {
    if (defaultValue) {
      const match = options.find((option) => option.value === defaultValue);
      if (match) {
        return match;
      }
    }
    return options[0];
  }, [defaultValue, options]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<SelectOption>(initialOption);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option: SelectOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleOpen}
        className="flex w-full flex-col px-4 py-3 text-left transition"
      >
        <span className="text-[14px] font-medium tracking-[0.08em] text-[#808080]">
          {label}
        </span>
        <div className="mt-1 flex items-center justify-between">
          <span className="text-[16px] font-medium leading-[100%] text-[#000000]">
            {selectedOption.label}
          </span>
          <Image
            src={dropdownIcon}
            alt={`${label} dropdown`}
            width={12}
            height={6}
            className={`transition ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-10 mt-2 max-h-30 overflow-y-auto border border-[#F2F2F2] bg-white shadow-[0px_32px_60px_-40px_rgba(20,16,36,0.5)] ">
          {options.map((option) => {
            const isSelected = option.value === selectedOption.value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center justify-between px-4 py-2 text-[14px] font-medium text-[#1A1A1A] transition hover:bg-[#FFF5F2] ${
                  isSelected ? "text-[#FF5037]" : ""
                }`}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
