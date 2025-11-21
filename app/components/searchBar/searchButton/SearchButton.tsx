import Image from "next/image";
import searchIcon from "../../../assets/svgs/search-icon.svg";

const SearchButton = ({
  handleSearch,
  variant = "primary",
}: {
  handleSearch: () => void;
  variant?: "primary" | "secondary";
}) => {
  return variant === "primary" ? (
    <button
      onClick={handleSearch}
      className="flex h-[60.71px] w-full md:w-[146.76px] items-center justify-center gap-[10px] rounded-[10px] bg-[#FF5037]   px-10 py-[18px] text-[24px] font-semibold text-white cursor-pointer"
    >
      <Image src={searchIcon} alt="search" width={24} height={24} />
      Search
    </button>
  ) : (
    <button
      onClick={handleSearch}
      className="flex h-[34px] w-[34px] items-center justify-center rounded-[12px] bg-[#FF5037] cursor-pointer"
    >
      <Image src={searchIcon} alt="search" width={14} height={14} />
    </button>
  );
};

export default SearchButton;
