"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../assets/svgs/logo.svg";
import userIcon from "../../assets/svgs/user-icon.svg";
import dropdownIcon from "../../assets/svgs/dropdown-icon.svg";
import TopbarSearchMenu from "./topbarSearchMenu/TopbarSearchMenu";

const Topbar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = (event: Event) => {
      const customEvent = event as CustomEvent<boolean>;
      if (typeof customEvent.detail === "boolean") {
        setIsSearchBarVisible(customEvent.detail);
      }
    };

    window.addEventListener("search-bar-visibility", handleVisibilityChange);

    return () => {
      window.removeEventListener(
        "search-bar-visibility",
        handleVisibilityChange
      );
    };
  }, []);

  const navBackgroundClass = isSearchBarVisible
    ? "bg-transparent text-white"
    : "bg-white text-black shadow-[0px_20px_45px_-35px_rgba(0,0,0,0.7)]";

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 h-[88px] w-full transition-colors duration-200 ease-out ${navBackgroundClass}`}
    >
      <div className="mx-auto flex h-full w-full items-center justify-between px-6">
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
        {!isSearchBarVisible && (
          <div className="text-black">
            <TopbarSearchMenu />
          </div>
        )}
        {/* baby shark to be removed*/}
        {/* only for large screens baki nichy  */}
        <div className={`items-center gap-3 hidden ${isSearchBarVisible ? "md:flex" : "lg:flex"}`}>
          <button className="flex items-center gap-2 rounded-[10px] bg-white px-6 py-2 shadow-md transition hover:shadow-lg h-[40px] cursor-pointer ">
            <span className="font-medium text-[#FF5733]">Add your listing</span>
            <Image
              src={dropdownIcon}
              alt="Dropdown icon"
              width={12}
              height={6}
            />
          </button>
          <button className="flex items-center gap-2 rounded-[10px] bg-white px-5 py-2 shadow-md transition hover:shadow-lg h-[40px] cursor-pointer">
            <span className="font-medium text-[#FF5733]">EN</span>
            <Image
              src={dropdownIcon}
              alt="Dropdown icon"
              width={12}
              height={6}
            />
          </button>
          <button className="flex items-center justify-center rounded-[10px] bg-white px-4 py-2 shadow-md transition hover:shadow-lg h-[40px] w-[44px] cursor-pointer">
            <Image src={userIcon} alt="User menu" width={10} height={15} />
          </button>
        </div>

        {/* baby shark to be removed*/}
        <div className={`flex ${isSearchBarVisible ? "md:hidden" : "lg:hidden"} items-center gap-3`}>
          <p>
            Baby Shark 
          </p>
          <button className="flex items-center justify-center rounded-[10px] bg-white px-4 py-2 shadow-md transition hover:shadow-lg h-[40px] w-[44px] cursor-pointer">
            <Image src={userIcon} alt="User menu" width={10} height={15} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
