import Image from "next/image";
import venueIcon from "../../../assets/svgs/venue-icon.svg";
import vendorIcon from "../../../assets/svgs/vendors.svg";

const VenueOrVendor = () => {
  return (
    <div className="flex items-center justify-center gap-[4px]">
      <button className="flex h-[44px] md:h-[40px] min-w-[120px] items-center justify-center gap-[4px] rounded-[10px] bg-[#FF5037] text-[14px] font-semibold text-white cursor-pointer">
        <Image src={venueIcon} alt="search" width={20} height={20} />
        Venue
      </button>
      <button className="flex h-[44px] md:h-[40px] min-w-[120px] items-center justify-center gap-[4px] rounded-[10px] bg-[#ffffff] text-[14px] font-semibold text-black cursor-pointer">
        <Image src={vendorIcon} alt="search" width={20} height={20} />
        Vendors
      </button>
    </div>
  );
};

export default VenueOrVendor;
