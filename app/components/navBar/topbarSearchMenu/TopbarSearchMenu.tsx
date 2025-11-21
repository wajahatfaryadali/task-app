"use client";

import { useState } from "react";
import {
  guestOptions,
  MenuKeyEnum,
  SelectedOptionsType,
  SelectOption,
  whenOptions,
  whereOptions,
} from "../../searchBar/config";
import SelectMenu from "../../searchBar/selectMenu/SelectMenu";
import SearchButton from "../../searchBar/searchButton/SearchButton";

const TopbarSearchMenu = () => {
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({
    where: false,
    when: false,
    guests: false,
  });

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({
    where: whereOptions[0],
    when: whenOptions[0],
    guests: guestOptions[0],
  });

  const handleSelectOption = (key: MenuKeyEnum, option: SelectOption) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: option,
    }));
  };

  const handleOpenMenu = (key: string) => {
    console.log(key);
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const optionsList = [
    {
      label: "Where",
      options: whereOptions,
      defaultValue: "",
      isOpen: isOpen.where,
      handleOpenMenu: handleOpenMenu,
      keyName: MenuKeyEnum.WHERE,
      selectedOption: selectedOptions.where,
      handleSelectOption: handleSelectOption,
    },
    {
      label: "When",
      options: whenOptions,
      defaultValue: "",
      isOpen: isOpen.when,
      handleOpenMenu: handleOpenMenu,
      keyName: MenuKeyEnum.WHEN,
      selectedOption: selectedOptions.when,
      handleSelectOption: handleSelectOption,
    },
    {
      label: "Guests",
      options: guestOptions,
      defaultValue: "",
      isOpen: isOpen.guests,
      handleOpenMenu: handleOpenMenu,
      keyName: MenuKeyEnum.GUESTS,
      selectedOption: selectedOptions.guests,
      handleSelectOption: handleSelectOption,
    },
  ];

  const handleSearch = () => {
    console.log("selectedOptions *************** ", selectedOptions);
  };

  return (
    <div className="flex h-[44px] w-[350px] lg:w-[430px] items-center justify-between rounded-[10px] bg-white pl-4 pr-1 text-[14px] font-medium text-[#000000] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.25)]">
      <div className="grid flex-1 grid-cols-3 divide-x divide-[#dfdfdf]">
        {optionsList.map((option) => (
          <div
            key={option.label}
            className="flex h-full items-center justify-center"
          >
            <SelectMenu
              label={option.label}
              options={option.options}
              defaultValue={option.defaultValue}
              showIcon={false}
              showlabel={false}
              isTextCenter={true}
              fontSize="14px"
              isZeroPadding={true}
              isOpen={option.isOpen}
              handleOpenMenu={option.handleOpenMenu}
              keyName={option.keyName}
              selectedOption={option.selectedOption}
              handleSelectOption={option.handleSelectOption}
            />
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <SearchButton handleSearch={handleSearch} variant="secondary" />
      </div>
    </div>
  );
};

export default TopbarSearchMenu;
