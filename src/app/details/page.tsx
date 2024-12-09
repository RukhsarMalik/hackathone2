import Image from "next/image";
import { carData } from "../data/cars"; // Import car data from your data file
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Car2Details = () => {
  const recentCars = carData.slice(4, 8); // Recent Cars Data
  const recommendedCars = carData.slice(8, 12); // Recommended Cars Data

  return (
    <section className="max-w-[1512px] font-sans mx-auto flex flex-col lg:flex-row bg-white rounded-lg shadow-lg p-6 relative">
      {/* Hamburger Menu Trigger */}
      <Sheet>
        <SheetTrigger
          className="md:hidden absolute top-4 left-4 z-10"
          aria-label="Open mobile menu"
        >
          <Menu />
        </SheetTrigger>
        <SheetContent aria-label="Mobile navigation">
          <SheetTitle className=" text-white">Menu</SheetTitle>
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

      <div className="bg-gray-50 min-h-screen p-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Car Detail Section */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {/* Outer Container */}
            <div className="w-full md:w-[492px] h-auto bg-gray-50">
              {/* Main Car Image */}
              <div className="w-full h-[360px] bg-[#3563E9] relative">
                <h1 className="font-semibold text-[32px] leading-[48px] w-[372px] pl-6 pt-7 h-[96px] text-white">
                  Sports car with the best design and acceleration
                </h1>
                <p className="w-[284px] h-[48px] pl-6 pt-9 text-[16px] leading-[24px] text-white">
                  Safety and comfort while driving a futuristic and elegant sports car
                </p>
                <Image
                  src="/car2.png"
                  alt="Car2 Main Image"
                  width={300}
                  height={160}
                  className="absolute top-[300px] left-[150px] md:top-[300px] md:left-[500px] object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="w-full h-[148px] flex gap-4 mt-4 overflow-x-scroll">
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/d1.png"
                    alt="Car2 Thumbnail 1"
                    width={148}
                    height={124}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/d2.png"
                    alt="Car2 Thumbnail 2"
                    width={148}
                    height={124}
                    className="rounded-md object-cover"
                  />
                </div>
                <div className="w-[148px] h-[124px]">
                  <Image
                    src="/d3.png"
                    alt="Car2 Thumbnail 3"
                    width={148}
                    height={124}
                    className="rounded-md object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Car Details */}
            <div className="w-full md:w-[508px] h-auto bg-white rounded-md p-5">
              <h1 className="text-[32px] font-bold mb-2">Nissan GT - R</h1>
              <div className="flex items-center mb-4">
                {/* Rating Stars */}
                <div className="flex text-yellow-500">
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path d="M12 17.3l5.2 3.9-2-6.6 5.4-4h-6.8L12 3l-1.8 7h-6.8l5.4 4-2 6.6 5.2-3.9z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">440+ Reviews</span>
              </div>
              <p className="text-[#596780] text-[20px] font-serif mb-6">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
              </p>

              {/* Car Specs */}
              <div className="grid grid-cols-2 gap-4 text-sm text-[#596780] mb-6">
                <p className="text-[#596780] text-[20px]">
                  <span className="font-bold text-[#90A3BF]">Type Car: </span>SUV
                </p>
                <p className="text-[#596780] text-[20px]">
                  <span className="font-bold text-[#90A3BF]">Capacity: </span>5 People
                </p>
                <p className="text-[#596780] text-[20px]">
                  <span className="font-bold text-[#90A3BF]">Steering: </span>Manual
                </p>
                <p className="text-[#596780] text-[20px]">
                  <span className="font-bold text-[#90A3BF]">Gasoline: </span>Petrol
                </p>
              </div>

              {/* Pricing */}
              <div className="flex items-center justify-between pt-7">
                <span className="text-xl font-bold">$4,200</span>
                <button className="bg-[#3563E9] text-white px-4 py-2 rounded-md">
                  Book Your Test Ride
                </button>
              </div>
            </div>
          </div>

          {/* Recent Cars */}
          
          <h2 className="text-[#90A3BF] text-[24px] font-semibold mb-8">Recent Cars</h2>
          <div className="hidden md:flex transition-transform duration-300">
            {recentCars.map((car) => (
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
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
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

          {/* Recommended Cars */}
          <h2 className="text-[#90A3BF] text-[24px] font-semibold mt-8 mb-8">Recommended Cars</h2>
          <div className="hidden md:flex transition-transform duration-300">
            {recommendedCars.map((car) => (
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
                    <div className="cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
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
        </div>
      </div>
    </section>
  );
};

export default Car2Details;
