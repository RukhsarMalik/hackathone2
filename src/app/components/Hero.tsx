"use client";
import Image from 'next/image';
import React from 'react';
import { IoSwapVerticalOutline } from "react-icons/io5";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center bg-gray-100 py-10">
      {/* Image Section */}
      <div className="flex md:flex-row flex-col items-center gap-6">
          
            {/* Car Image 1 */}
            <div className="relative md:w-[640px] md:h-[360px] w-[327px] h-[232px] bg-[#54A6FF] hover:scale-105 transition-transform duration-300 cursor-pointer">
              <Image
                src="/car1.png"
                alt="Car 1"
                width={406}
                height={116}

                className="absolute md:w-[406px] md:h-[116px] w-[196px] h-[56px] md:top-[234px] md:left-[137px] top-[172px] left-[53px] object-cover rounded-lg"
              />
              {/* Text Section */}
              <div className="absolute top-[24px] left-[24px] flex flex-col gap-[20px] text-white">
                <h1 className="md:w-[272px] md:h-[96px] w-full text-[16px] md:text-[30px] font-semibold leading-[24px] md:leading-[48px]">
                  The Best Platform for Car Rental
                </h1>
                <p className="md:w-[284px] md:h-[48px] w-[216px] h-[38px] text-[12px] md:text-[16px] leading-[19.2px] md:leading-[24px]">
                  Base of doing a car rental safely and <br /> reliably. Of course at a low price.
                </p>
                <button className="w-[128px] md:w-[120px] h-[44px] bg-[#3563E9] text-white rounded-sm">
                  Rental Car
                </button>
              </div>
            </div>

            {/* Car Image 2 */}
            <div className="relative md:w-[640px] md:h-[360px] w-[327px] h-[232px] bg-[#3563E9] hover:scale-105 transition-transform duration-300 cursor-pointer md:block hidden">
              <Image
                src="/car2.png"
                alt="Car 2"
                width={340}
                height={108}
                className="absolute md:w-[340px] md:h-[108px] w-[196px] h-[56px] md:top-[232px] md:left-[197px] top-[172px] left-[65px] object-cover rounded-lg"
              />
              {/* Text Section */}
              <div className="absolute top-[24px] left-[24px] flex flex-col gap-[20px] text-white">
                <h1 className="md:w-[272px] md:h-[96px] w-full text-[16px] md:text-[30px] font-semibold leading-[24px] md:leading-[48px]">
                  Easy way to rent a <br /> car at a low price
                </h1>
                <p className="md:w-[284px] md:h-[48px] w-[216px] h-[38px] text-[12px] md:text-[16px] leading-[19.2px] md:leading-[24px]">
                  Providing cheap car rental services <br /> and safe and comfortable facilities.
                </p>
                <button className="w-[128px] md:w-[120px] h-[44px] bg-[#54A6FF] text-white rounded-sm">
                  Rental Car
                </button>
              </div>
            </div>
          </div>


          {/* Pickup and Drop-off Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
        {/* Pickup Section */}
        <div className="flex flex-col w-[327px] h-[120px] md:w-[582px] md:h-[136px] border-none border-r-[10px] bg-white gap-3 rounded-lg p-6">
          <div className="flex flex-row justify-between items-center w-[92px] h-[20px]">
            <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
            <label
              htmlFor="pickup-section"
              className="w-[68px] h-[20px] text-[16px] leading-[24px] font-semibold text-gray-700"
            >
              Pickup
            </label>
          </div>

          <div className="flex flex-row gap-4 justify-between items-center">
            {/* Location Section */}
            <div className="flex item-start justify-center flex-col flex-1">
              <label
                htmlFor="pickup-location"
                className="text-sm font-semibold text-gray-900 mb-2"
              >
                Location
              </label>
              <select
                id="pickup-location"
                className="w-full px-4 py-2 border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#90A3BF] text-[14px]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            {/* Date Section */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="pickup-date"
                className="text-sm font-semibold text-gray-900 mb-2"
              >
                Date
              </label>
              
              <input
                id="pickup-date"
                type="date"
                className="md:w-full w-[87px] sm:h-[16px] px-4 py-2  text-[#90A3BF] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Section */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="pickup-time"
                className="text-sm font-semibold text-gray-900 mb-2"
              >
                Time
              </label>
              <input
                id="pickup-time"
                type="time"
                className="md:w-full w-[36px] sm:h-[16px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Switch Button */}
        <div className="flex justify-center items-center md:my-0 my-4">
          <button
            className="w-12 h-12 bg-blue-500 rounded-full shadow-lg text-white flex justify-center items-center transform hover:scale-110 transition-transform duration-300"
            title="Switch"
          >
            <IoSwapVerticalOutline />
          </button>
        </div>

        {/* Drop-off Section */}
        <div className="flex flex-col w-[327px] h-[120px] md:w-[582px] md:h-[136px] border-none border-r-[10px] bg-white gap-3 rounded-lg p-6">
          <div className="flex flex-row justify-between items-center w-[92px] h-[20px]">
            <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
            <label
              htmlFor="dropoff-section"
              className="w-[68px] h-[20px] text-[16px] leading-[24px] font-semibold text-gray-700"
            >
              Drop Off
            </label>
          </div>

          <div className="flex flex-row gap-4 justify-between items-center">
            {/* Location Section */}
            <div className="flex flex-col justify-center flex-1">
              <label
                htmlFor="dropoff-location"
                className="text-[16px] md:text-sm font-semibold text-gray-900 mb-2"
              >
                Location
              </label>
              <select
                id="dropoff-location"
                className="md:w-full w-[60px]  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#90A3BF] text-[14px]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option value="new-york">New York</option>
                <option value="los-angeles">Los Angeles</option>
                <option value="chicago">Chicago</option>
              </select>
            </div>

            {/* Date Section */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="dropoff-date"
                className="text-sm font-semibold text-gray-900 mb-2"
              >
                Date
              </label>
              <input
                id="dropoff-date"
                type="date"
                className="md:w-full w-[87px] h-[44px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Time Section */}
            <div className="flex flex-col flex-1">
              <label
                htmlFor="dropoff-time"
                className="text-sm font-semibold text-gray-900 mb-2"
              >
                Time
              </label>
              <input
                id="dropoff-time"
                type="time"
                className="md:w-full w-[36px] h-[16px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      

    

    </section>
  );
};

export default HeroSection;
