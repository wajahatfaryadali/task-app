import Image from "next/image";
import searchIcon from "../../../assets/svgs/search-icon.svg";
import {
  guestOptions,
  whenOptions,
  whereOptions,
} from "../../searchBar/config";
import SelectMenu from "../../searchBar/selectMenu/SelectMenu";

const TopbarSearchMenu = () => {
  const optionsList = [
    {
      label: "Where",
      options: whereOptions,
      defaultValue: "",
    },
    {
      label: "When",
      options: whenOptions,
      defaultValue: "",
    },
    {
      label: "Guests",
      options: guestOptions,
      defaultValue: "",
    },
  ];
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
            />
          </div>
        ))}
      </div>

      <div className="flex items-center">
        <button className="flex h-[34px] w-[34px] items-center justify-center rounded-[12px] bg-[#FF5037] cursor-pointer">
          <Image src={searchIcon} alt="search" width={14} height={14} />
        </button>
      </div>
    </div>
  );
};

export default TopbarSearchMenu;
