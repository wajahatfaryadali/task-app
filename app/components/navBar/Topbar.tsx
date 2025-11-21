import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import userIcon from "../../assets/svgs/user-icon.svg";
import dropdownIcon from "../../assets/svgs/dropdown-icon.svg";

const Topbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 h-[88px] w-full">
      <div className="mx-auto flex h-full w-full items-center justify-between px-6 text-white">
        <div className="relative h-[48px] w-[48px]">
          <Image
            src={logo}
            alt="Venue logo"
            fill
            sizes="48px"
            priority
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-[10px] bg-white px-6 py-2 shadow-md transition hover:shadow-lg">
            <span className="font-medium text-[#FF5733]">Add your listing</span>
            <Image
              src={dropdownIcon}
              alt="Dropdown icon"
              width={12}
              height={6}
            />
          </button>
          <button className="flex items-center gap-2 rounded-[10px] bg-white px-5 py-2 shadow-md transition hover:shadow-lg">
            <span className="font-medium text-[#FF5733]">EN</span>
            <Image
              src={dropdownIcon}
              alt="Dropdown icon"
              width={12}
              height={6}
            />
          </button>
          <button className="flex items-center justify-center rounded-[10px] bg-white px-4 py-2 shadow-md transition hover:shadow-lg">
            <Image src={userIcon} alt="User menu" width={10} height={15} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
