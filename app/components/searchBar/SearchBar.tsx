import SelectMenu from "./SelectMenu";
import { guestOptions, whenOptions, whereOptions } from "./config";
import SearchButton from "./searchButton/SearchButton";
import VenueOrVendor from "./venueOrVendor/VenueOrVendor";

const SearchBar = () => {
  return (
    <div className="relative w-full bg-white rounded-[10px] pt-6 pb-2.5 px-[15px]">
      <VenueOrVendor />
      <div className="grid gap-6 md:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
        <SelectMenu label="Where" options={whereOptions} defaultValue="dubai" />
        <SelectMenu label="When" options={whenOptions} defaultValue="anytime" />
        <SelectMenu label="Guests" options={guestOptions} defaultValue="10-20" />
        <div className="flex items-center justify-center md:justify-end">
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
