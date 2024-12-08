"use client";

import Image from "next/image";
import { carData } from "../data/cars";
import Link from "next/link";
import { useState } from "react";

const PopularCars = () => {
  const [favorites, setFavorites] = useState<number[]>([]); // Tracks favorite car IDs

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((carId) => carId !== id) : [...prev, id]
    );
  };

  return (
    <section className="popular-cars-section max-w-[1312px] mx-auto my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[16px] font-bold text-[#90A3BF]">Popular Cars</h2>
        <Link
          href="/category"
          className="text-blue-500 hover:text-blue-700 text-sm font-medium"
        >
          View All
        </Link>
      </div>

      <div className="flex transition-transform duration-300">
        {/* Display only the first 4 cars */}
        {carData.slice(0, 4).map((car) => (
          <div
            key={car.id}
            className="min-w-[304px] max-w-[304px] bg-white shadow-md rounded-md p-4 m-2 hover:shadow-lg transition-shadow"
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                {/* Title */}
                <div>
                  <h3 className="text-lg font-bold">{car.name}</h3>
                  <p className="text-sm text-gray-500">{car.type}</p>
                </div>
                {/* Heart Icon */}
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
                width={300} // Add specific width
                height={150} // Add specific height
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
                      width={20}
                      height={20}
                      className="h-5 w-5"
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
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
