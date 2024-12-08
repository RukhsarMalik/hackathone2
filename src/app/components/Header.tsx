import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaHeart, FaBell, FaCog } from 'react-icons/fa';
import { VscSettings } from "react-icons/vsc";
import Image from 'next/image';
import Link from 'next/link';



export const Header = () => {
  return (
    <div>
      {/* Header for Larger Screens */}
      <div className="hidden lg:flex justify-between bg-white w-full h-[124px] border-[1px] border-[#C3D4E966] border-opacity-[40%]">
        <div className="flex flex-row justify-center">
          {/* Logo */}
          <div className="w-[148px] h-[44px] py-[40px] px-[60px] font-sans text-[#3563E9] text-[32px] font-bold leading-[48px]">
            MORENT
          </div>

          {/* Search Bar */}
          <div className="relative flex items-center pl-[272px]">
            <input
              type="text"
              placeholder="Search Something here"
              className="text-start text-[14px] w-[492px] h-[44px] border-[1px] border-[#C3D4E966] rounded-3xl pl-14 pr-4 text-gray-700"
            />
            <CiSearch className="absolute top-[50px] left-[292px] w-[24px] h-[24px] text-[#596780]" />
            <VscSettings className="absolute w-[24px] h-[24px] top-[50px] left-[720px] text-[#596780]" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center w-[236px] h-[44px] absolute left-[1272px] gap-[20px] top-[40px] space-x-2 lg:space-x-4 mt-2 lg:mt-0">
          <Link href="/favorites">
            <div className="hidden md:block w-[44px] h-[44px] rounded-full border border-gray-300 border-opacity-[40%] opacity-[80%] items-center">
              <FaHeart className="w-[24px] h-[24px] absolute top-[10px] left-[10px] text-[#596780] cursor-pointer" />
            </div>
          </Link>
          <Link href="/notifications">
            <div className="relative hidden md:block w-[44px] h-[44px] rounded-full border border-gray-300 border-opacity-[40%] opacity-[80%] items-center">
              <FaBell className="w-[24px] h-[24px] absolute top-[10px] left-[10px] text-[#596780] cursor-pointer" />
              <span className="absolute left-[25px] w-[11px] h-[11px] bg-[#FF4423] rounded-full"></span>
            </div>
          </Link>
          <Link href="/settings">
            <div className="hidden md:block w-[44px] h-[44px] rounded-full border border-gray-300 border-opacity-[40%] opacity-[80%] items-center">
              <FaCog className="w-[24px] h-[24px] text-[#596780] absolute top-[10px] left-[170px] cursor-pointer" />
            </div>
          </Link>

          {/* Profile Picture */}
          <Link href="/profile">
            <div className="hidden md:block w-[44px] h-[44px] rounded-full border border-gray-300 items-center justify-center overflow-hidden cursor-pointer">
              <Image src="/profileIcon.png" alt="Profile" width={40} height={40} />
            </div>
          </Link>
        </div>
      </div>

      {/* Header for Smaller Screens */}
      <div className="flex flex-col lg:hidden bg-white w-full border-[1px] border-[#C3D4E966] border-opacity-[40%] px-4 py-2">
        {/* Top Row */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-sans text-[#3563E9] text-[24px] font-bold">
            MORENT
          </div>

          {/* Profile Icon */}
          <Link href="/profile">
            <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer">
              <Image src="/profileIcon.png" alt="Profile" width={40} height={40} />
            </div>
          </Link>
        </div>

         {/* Search Bar with VSC Settings Icon */}
          <div className="relative mt-4 flex items-center">
            <input
              type="text"
              placeholder="Search Something here"
              className="w-full h-[44px] border-[1px] border-[#C3D4E966] rounded-lg pl-12 pr-4 text-gray-700 text-[14px]"
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 left-4 w-[24px] h-[24px] text-[#596780]" />
            
            {/* VSC Settings Icon */}
            <div className="w-[48px] h-[48px] flex items-center justify-center border border-[#C3D4E966] border-opacity-[40%] rounded-[8px] ml-2 cursor-pointer">
              <VscSettings className="text-[#596780] w-[24px] h-[24px]" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Header;