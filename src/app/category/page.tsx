"use client";
import Image from "next/image";
import { carData } from "../data/cars";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

const CategorySection = () => {
  const [showCount, setShowCount] = useState(9); // Default 9 cars
  const [favorites, setFavorites] = useState<number[]>([]); // Tracks favorite car IDs

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  const showMoreCars = () => {
    setShowCount(showCount + 3); // Show 3 more cars
  };

  const showLessCars = () => {
    setShowCount(9); // Reset to 9 cars
  };


 

  return (
    <div className="bg-gray-50 min-h-screen p-8 font-sans">
      {/* Category Section */}
      <section className="max-w-[1512px] mx-auto flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 relative">
        {/* Hamburger Menu Trigger */}
        <Sheet>
          <SheetTrigger
            className="md:hidden absolute top-4 left-4 z-10"
            aria-label="Open mobile menu"
          >
            <Menu />
          </SheetTrigger>
          <SheetContent aria-label="Mobile navigation">
          <SheetTitle className=" text-white" >Menu</SheetTitle>

            <div className="w-[360px] bg-white shadow-md rounded-lg p-4">
              {/* Type Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#90A3BF]">Type</h3>
                <div className="space-y-2 mt-4">
                  {["Sports", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                    (type, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <label>{type}</label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Capacity Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#90A3BF]">Capacity</h3>
                <div className="space-y-2 mt-4">
                  {[2, 4, 6, 8, "More"].map((capacity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input type="checkbox" className="h-4 w-4" />
                      <label>{capacity}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range Section */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#90A3BF]">Price</h3>
                <div className="space-y-2 mt-4">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-[#90A3BF]">
                    <span>$0</span>
                    <span>$100</span>
                  </div>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Sidebar */}
        <div className="w-[360px] bg-white shadow-md rounded-lg p-4 mr-6 lg:block hidden">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#90A3BF]">Type</h3>
            <div className="space-y-2 mt-4">
              {["Sports", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map(
                (type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="h-4 w-4" />
                    <label>{type}</label>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#90A3BF]">Capacity</h3>
            <div className="space-y-2 mt-4">
              {[2, 4, 6, 8, "More"].map((capacity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <label>{capacity}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#90A3BF]">Price</h3>
            <div className="space-y-2 mt-4">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                className="w-full"
              />
              <div className="flex justify-between text-sm text-[#90A3BF]">
                <span>$0</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section (Pick-Up, Drop-Off, and Car Cards) */}
        <div className="flex-1">
          {/* Pick-Up and Drop-Off */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-4 rounded-lg">
            {/* Pick-Up Section */}
            <div className="flex flex-col justify-between bg-white p-4 md:w-[486px] md:h-[132px] w-full h-auto rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center w-[92px] h-[20px]">
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
            <div className="flex flex-col justify-between bg-white p-4 md:w-[486px] md:h-[132px] w-full h-auto rounded-lg shadow-md">
            <div className="flex flex-row justify-between items-center w-[92px] h-[20px]">
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




          {/* Car Cards */}
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {carData.slice(0, showCount).map((car) => (
              <Link href="/details" key={car.id}>
              <div
                key={car.id}
                className="bg-white shadow-md rounded-md p-4 m-2 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    {/* Title and Heart Icon */}
                    <div>
                      <h3 className="text-lg font-bold">{car.name}</h3>
                      <p className="text-sm text-gray-500">{car.type}</p>
                    </div>
                    <div
                      onClick={() => toggleFavorite(car.id)}
                      className="cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={favorites.includes(car.id) ? "red" : "gray"}
                        className="h-6 w-6 transition-colors duration-300"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </div>
                  </div>
                  <Image
                    src={car.image}
                    alt={car.name}
                    width={300}
                    height={150}
                    className="w-full h-[150px] object-contain"
                  />
                  <div className="mt-4 space-y-2">
                    {/* Features */}
                    <div className="flex text-[#90A3BF] items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/icons/fuel.png"
                          alt="Fuel"
                          className="h-5 w-5"
                          width={20}
                          height={20}
                        />
                        <span className="text-sm">{car.petrol}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/icons/manual.png"
                          alt="Manual"
                          className="h-5 w-5"
                          width={20}
                          height={20}
                        />
                        <span className="text-sm">{car.transmission}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Image
                          src="/icons/seats.png"
                          alt="Seats"
                          width={20}
                          height={20}
                          className="h-5 w-5"
                        />
                        <span className="text-sm">{car.seats} People</span>
                      </div>
                    </div>
                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold">
                        ${car.price}{" "}
                        <span className="text-[#90A3BF] text-[14px]">/day</span>
                      </span>
                      <button className="px-[20px] py-2 bg-[#3563E9] text-white rounded-lg hover:bg-blue-700">
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          <div className="text-center mt-8">
            {showCount > 9 ? (
              <button
                onClick={showLessCars}
                className="px-6 py-2 text-[16px] bg-[#3563E9] text-white rounded-lg hover:bg-blue-700"
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={showMoreCars}
                className="px-6 py-2 text-[16px] bg-[#3563E9] text-white rounded-lg hover:bg-blue-700"
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
