"use client"
import Image from "next/image";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function AdminPage() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  // Sidebar Menu Items
  const menuItems = [
    { name: "Dashboard", icon: "/a1.png" },
    { name: "Car Rent", icon: "/a2.png" },
    { name: "Insight", icon: "/a3.png" },
    { name: "Reimburse", icon: "/a4.png" },
    { name: "Inbox", icon: "/a5.png" },
    { name: "Calendar", icon: "/a6.png" },
  ];

  const preferenceItems = [
    { name: "Settings", icon: "/a7.png" },
    { name: "Help & Center", icon: "/a8.png" },
    { name: "Dark Mode", icon: "/a9.png" },
  ];

  // Top 5 car
  const carData = [
    { name: "Sport Car", rides: 17439, color: "#0D3559" },
    { name: "SUV", rides: 9478, color: "#175D9C" },
    { name: "Coupe", rides: 18197, color: "#2185DE" },
    { name: "Hatchback", rides: 12510, color: "#63A9E8" },
    { name: "MPV", rides: 14406, color: "#A6CEF2" },
  ];
  // Recent Transactions Data
  const transactions = [
    { name: "Nissan GT - R", date: "20 July", type : "Sport", price: "$80.00", img: "/car2.png" },
    { name: "Koenigsegg", date: "19 July", type : "Sport", price: "$99.00", img: "/car1.png" },
    { name: "Rolls - Royce", date: "18 July",  type : "Sport",price: "$96.00", img: "/car3.png" },
    { name: "CR - V", date: "17 July", type : "SUV", price: "$80.00", img: "/car6.png" },
  ];


  return (
    <div className="flex bg-gray-100 min-h-screen">

      <Sheet>
        <SheetTrigger
          className="md:hidden absolute top-4 left-4 z-10"
          aria-label="Open mobile menu"
        >
          <Menu />
        </SheetTrigger>
        <SheetContent aria-label="Mobile navigation">
          <SheetTitle className=" text-white">Menu</SheetTitle>
          <div className="w-[286px] h-[900px] bg-white shadow-lg flex flex-col justify-between p-6">
            {/* Main Menu */}
            <div>
              <h2 className="text-gray-400 text-sm font-semibold mb-4">Main Menu</h2>
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                      activeItem === item.name ? "bg-blue-500 text-white" : "text-[#90A3BF]"
                    }`}
                  >
                    <Image src={item.icon} alt={item.name} width={24} height={24} />
                    <span className="text-[16px]">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preferences */}
            <div>
              <h2 className="text-gray-400 text-sm font-semibold mb-4">Preferences</h2>
              <ul className="space-y-3">
                {preferenceItems.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                      activeItem === item.name ? "bg-blue-500 text-white" : "text-[#90A3BF]"
                    }`}
                  >
                    <Image src={item.icon} alt={item.name} width={24} height={24} />
                    <span className="text-[16px]">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logout */}
            <div>
              <button
                onClick={() => setActiveItem("Logout")}
                className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                  activeItem === "Logout" ? "bg-blue-500 text-white" : "text-[#90A3BF]"
                }`}
              >
                <Image src="/a10.png" alt="Logout" width={24} height={24} />
                <span className="text-[16px]">Log Out</span>
              </button>
            </div>
         </div>
          
            
          </SheetContent>
        </Sheet>
      {/* Sidebar */}
      <div className="hidden lg:block w-[286px] h-[900px] bg-white shadow-lg md:flex flex-col justify-between p-6">
        {/* Main Menu */}
        <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-4">Main Menu</h2>
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                  activeItem === item.name ? "bg-blue-500 text-white" : "text-[#90A3BF]"
                }`}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <span className="text-[16px]">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Preferences */}
        <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-4">Preferences</h2>
          <ul className="space-y-3">
            {preferenceItems.map((item) => (
              <li
                key={item.name}
                onClick={() => setActiveItem(item.name)}
                className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
                  activeItem === item.name ? "bg-blue-500 text-white" : "text-[#90A3BF]"
                }`}
              >
                <Image src={item.icon} alt={item.name} width={24} height={24} />
                <span className="text-[16px]">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout */}
        <div>
          <button
            onClick={() => setActiveItem("Logout")}
            className={`flex items-center gap-4 p-3 rounded-md cursor-pointer ${
              activeItem === "Logout" ? "bg-blue-500 text-white" : "text-[#90A3BF]"
            }`}
          >
            <Image src="/a10.png" alt="Logout" width={24} height={24} />
            <span className="text-[16px]">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex flex-wrap gap-6">
          {/* Left Section: Details Rental */}
          <div className="w-full md:w-[534px] md:h-[836px] bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
            <div className="flex flex-col space-y-4">
              <Image
                src="/Maps.png"
                alt="Car"
                width={480}
                height={200}
                className="rounded-lg"
              />
              <div className="flex items-center space-x-4">
                {/* Car Image */}
                <div>
                  <Image
                    src="/a11.png"
                    alt="car2"
                    width={132}
                    height={72}
                    className="rounded-lg"
                  />
                </div>

                {/* Car Name and Type */}
                <div>
                  <h3 className="text-[24px] font-bold">Nissan GT - R</h3>
                  <p className="text-[14px] text-[#3D5278]">Sport Car</p>
                </div>
              </div>

              {/* Pick-Up and Drop-Off */}
              <div className="flex flex-col items-center gap-6 bg-white p-4 rounded-lg">
                {/* Pick-Up Section */}
                <div className="flex flex-col justify-between bg-white p-4 w-full rounded-lg shadow-md">
                  <div className="flex flex-row justify-between items-center">
                    <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
                    <label className="text-[16px] font-semibold text-gray-700">Pickup</label>
                  </div>
                  <div className="flex flex-col text-[12px] md:flex-row gap-2 md:gap-4">
                    {/* Location */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Location</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>Kota Semarang</option>
                      </select>
                    </div>
                    {/* Date */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Date</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>20 July 2022</option>
                      </select>
                    </div>
                    {/* Time */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Time</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>07:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Drop-Off Section */}
                <div className="flex flex-col justify-between bg-white p-4 w-full rounded-lg shadow-md">
                  <div className="flex flex-row justify-between items-center">
                    <Image className="w-[16px] h-[16px]" src="/mark.png" alt="" width={16} height={16} />
                    <label className="text-[16px] font-semibold text-gray-700">Drop Off</label>
                  </div>
                  <div className="flex flex-col text-[12px] md:flex-row gap-2 md:gap-4">
                    {/* Location */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Location</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>Kota Semarang</option>
                      </select>
                    </div>
                    {/* Date */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Date</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>21 July 2022</option>
                      </select>
                    </div>
                    {/* Time */}
                    <div className="flex flex-col w-full md:w-[140px]">
                      <label className="text-black text-[16px] font-bold mb-1">Time</label>
                      <select className="w-full p-2 text-gray-600">
                        <option>07:00</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-[20px]">TotalRentalPrice:</p>
                  <p className="text-[12px] text-[#90A3BF]">Overall price and includes rental discount</p>
                </div>
                <div>
                  <p className="text-[32px] font-bold">$80:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-[36%] space-y-6">
            {/* Top Rental */}
            <div className="bg-white shadow- md:w-[524px] md:h-[324px] rounded-lg p-6">
              <h2 className="text-[20px] font-semibold mb-4">Top 5 Car Rental</h2>
              <div className="flex flex-col items-center md:flex-row">
                <div>
                  <Image 
                  src="/Chart.png"
                  alt="chart"
                  width={220}
                  height={220}
                  className="md:w-[220px] md:h-[220px] w-[200px] h-[200px]"/>
                 
                  
                </div>
                
                <div className="p-6">
                <ul className="space-y-4">
                    {carData.map((car, index) => (
                      <li key={index} className="flex items-center space-x-4 w-full">
                        {/* Dynamic Bullet Color */}
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: car.color }}
                        ></span>
                        <div className="flex w-full gap-20 justify-between">
                          <p className="text-[14px] text-[#90A3BF]">{car.name}</p>
                          <p className="text-[14px] text-black ml-auto">{car.rides}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white md:w-[524px] md:h-[480px] shadow-lg rounded-lg p-6">
              <h2 className="text-[20px] font-semibold mb-4">Recent Transactions</h2>
              <ul>
                {transactions.map((tx, index) => (
                  <li key={index} className="flex md:w-[476px] md:h-[70px] border-b-2 border-[#C3D4E966] border-opacity-[40%] items-center space-x-4 mb-4">
                    <Image src={tx.img} alt={tx.name} width={114} height={36}  />
                    <div className="flex flex-1 justify-between">
                    <div>
                      <p className="font-semibold text-[16px]">{tx.name}</p>
                      <p className="text-[12px] text-[#90A3BF] ">{tx.type}</p>
                    </div>
                    <div>
                      < p className="text-[12px] text-[#90A3BF] ">{tx.date}</p>
                      <p className="font-bold">{tx.price}</p>
                    </div>
                   
                    </div>

                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
