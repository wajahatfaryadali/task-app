import Image from "next/image";
import searchIcon from "../../../assets/svgs/search-icon.svg";


const SearchButton = () => {
  return (
    <button className="flex h-[60.71px] w-full md:w-[146.76px] items-center justify-center gap-[10px] rounded-[10px] bg-[#FF5037]   px-10 py-[18px] text-[24px] font-semibold text-white cursor-pointer">
      <Image src={searchIcon} alt="search" width={24} height={24} />
      Search
    </button>
  );
};

export default SearchButton;
