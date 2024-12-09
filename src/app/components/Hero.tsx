"use client";
import Image from 'next/image';
import React from 'react';


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
        
              {/* Pick-Up Section */}
              <div className="flex flex-col justify-between bg-white p-4 md:w-[582px] md:h-[132px] w-full h-auto rounded-lg shadow-md">
              <div className="flex flex-row justify-between mb-5 items-center w-[92px] h-[20px]">
                <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
                <label
                  htmlFor="pickup-section"
                  className="w-[68px] h-[20px] text-[16px] leading-[24px] font-semibold text-gray-700"
                >
                  Pickup
                </label>
              </div>
                <div className="flex flex-col text-[12px] md:flex-row gap-2 md:gap-4">
                  {/* Location */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Location</label>
                    <select className="w-full p-2 text-gray-600">
                      <option>Select your city</option>
                    </select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Date</label>
                    <select className="w-full p-2 text-gray-600">
                      <option>Select your date</option>
                    </select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Time</label>
                    <select className="w-full p-2 text-gray-600">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Swipe Button */}
              <button className="bg-blue-500 text-white w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition">
                ↔️
              </button>

              {/* Drop-Off Section */}
              <div className="flex flex-col justify-between bg-white p-4 md:w-[582px] md:h-[132px] w-[327px] h-auto rounded-lg shadow-md">
              <div className="flex flex-row justify-between mb-5 items-center w-[92px] h-[20px]">
                  <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
                <label
                    htmlFor="pickup-section"
                    className="w-[68px] h-[20px] text-[16px] leading-[24px] font-semibold text-gray-700"
                  >
                    Drop Off
                </label>
              </div>
                <div className="flex flex-col text-[12px] md:flex-row gap-2 md:gap-4">
                  {/* Location */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Location</label>
                    <select className="w-full p-2 text-gray-600 ">
                      <option>Select your city</option>
                    </select>
                  </div>
                  {/* Date */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Date</label>
                    <select className="w-full p-2 text-gray-600 ">
                      <option>Select your date</option>
                    </select>
                  </div>
                  {/* Time */}
                  <div className="flex flex-col w-full md:w-[140px]">
                    <label className="text-black text-[16px] font-bold mb-1">Time</label>
                    <select className="w-full p-2 text-gray-600 ">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
    

    </section>
  );
};

export default HeroSection;
