import Image from "next/image";
import Link from "next/link";

export default function CarRental() {
  return (
    <div className="container bg-gray-50 mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-8">
        {/* Left Form Section */}
        <div className="form-section w-full lg:w-[852px] bg-whit
         rounded-lg p-6 space-y-6 shadow-md">
                 {/* Billing Info */}
                <div className="w-full md:h-[336px] bg-white p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-1">Billing Info</h2>
                    <p className="text-[#90A3BF] text-[14px] mb-6">Please provide your billing info</p>
                    <div className="space-y-4">
                    
                    {/* Name and Phone Number in One Row */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-[386px]">
                        <label className="block text-[16px] font-semibold text-black mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full h-[56px] bg-[#F6F7F9] p-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        </div>
                        <div className="w-full lg:w-[386px]">
                        <label className="block text[16px] font-semibold text-black mb-2">Phone Number</label>
                        <input
                            type="text"
                            placeholder="Phone number"
                            className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        </div>
                    </div>

                    {/* Address and Town/City in One Row */}
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="w-full lg:w-[386px]">
                        <label className="block text[16px] font-semibold text-black mb-2">Address</label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        />
                        </div>
                        <div className="w-full lg:w-[386px]">
                        <label className="block text-[16px] font-semibold text-black mb-2">Town/City</label>
                        <input
                            type="text"
                         placeholder="Town or City"
                        className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                    </div>
                </div>
            </div>
        </div>

         {/* Rental Info */}
         <div className="w-full bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-1">Rental Info</h2>
            <p className="mb-6 text-[16px] text-[#90A3BF] ">Please provide your rental info</p>
            <div className="space-y-6">
              {/* Pickup and Dropoff Section */}
              <div className="flex flex-col gap-6">
                
                {/* Pickup Location */}
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="radio"
                      id="pickup-radio"
                      name="pickup"
                      className="h-5 w-5 border rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="pickup-radio" className="text-[16px] font-semibold text-black">Pick-up</label>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-[48%]">
                      <label className="block text-[16px] text-black mb-2 font-semibold">Pickup Location</label>
                      <input
                        type="text"
                        placeholder="Select your city"
                        className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
                      />
                    </div>
                    <div className="w-full lg:w-[48%]">
                      <label className="block text-[16px] text-black mb-2 font-semibold">Pickup Date</label>
                      <input
                        type="text"
                        placeholder="Select your date"
                        className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
                      />
                    </div>
                  </div>
                  <label className="block text-[16px] text-black mb-2 font-semibold">Pickup Time</label>
                  <input
                    type="text"
                    placeholder="Select your time"
                    className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                {/* Dropoff Location */}
                <div className="w-full">
                  <div className="flex items-center gap-2 mb-4">
                    <input
                      type="radio"
                      id="dropoff-radio"
                      name="dropoff"
                      className="h-5 w-5 border rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                      defaultChecked
                    />
                    <label htmlFor="dropoff-radio" className="text-[16px] font-semibold text-black">Drop-Off</label>
                  </div>
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-full lg:w-[48%]">
                      <label className="block text-[16px] text-black mb-2 font-semibold">Dropoff Location</label>
                      <input
                        type="text"
                        placeholder="Select your city"
                        className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
                      />
                    </div>
                    <div className="w-full lg:w-[48%]">
                      <label className="block text-[16px] text-black mb-2 font-semibold">Dropoff Date</label>
                      <input
                        type="text"
                        placeholder="Select your date"
                        className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
                      />
                    </div>
                  </div>
                  <label className="block text-[16px] text-black mb-2 font-semibold">Dropoff Time</label>
                  <input
                    type="text"
                    placeholder="Select your time"
                    className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>
            </div>
          </div>

         {/* Payment Info */}
         <div className="w-full bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-1">Payment Info</h2>
            <p className="text-[#90A3BF] text-[14px] mb-4 " >Please enter your payment method</p>
            <div className="space-y-4">
              
              {/* Credit Card Section */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-4">
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment-method"
                    className="h-5 w-5 border rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor="credit-card" className="text-[16px] font-semibold text-black">Credit Card</label>
                </div>

                {/* Inputs in Two Columns */}
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="w-full lg:w-1/2">
                    <label className="block text-sm text-black mb-3 font-semibold">Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter your card number"
                      className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label className="block text-sm text-black mb-3 font-semibold" >Expiration Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                  <div className="w-full lg:w-1/2">
                    <label className="block text-sm text-black mb-3 font-semibold">Card Holder</label>
                    <input
                      type="text"
                      placeholder="Enter card holder name"
                      className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div className="w-full lg:w-1/2">
                    <label className="block text-sm text-black mb-3 font-semibold">CVC</label>
                    <input
                      type="text"
                      placeholder="Enter CVC"
                      className="w-full h-[56px] p-5 bg-[#F6F7F9] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>
              </div>

              {/* Other Payment Methods Section */}
              <div>
            
                <div className="flex flex-col gap-4">
                  {/* PayPal */}
                  <div className="flex bg-[#F6F7F9] md:h-[56px] items-center gap-2">
                    <input
                      type="radio"
                      id="paypal"
                      name="payment-method"
                      className="h-5 w-5  rouwnded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="paypal" className=" text-black pl-3 text-[16px]">PayPal</label>
                    <Image src="/PayPal.png" alt="PayPal" width={96} height={20}  className="w-[96px] h-[20px] ml-auto mr-3 " />
                    
                  </div>

                  {/* Bitcoin */}
                  <div className="flex md:h-[56px] bg-[#F6F7F9] items-center gap-2">
                    <input
                      type="radio"
                      id="bitcoin"
                      name="payment-method"
                      className="h-5 w-5 rounded-full checked:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="bitcoin" className="text-black pl-3 text-[16px]">Bitcoin</label>
                    <Image src="/BitCoin.png" alt="Bitcoin" width={96} height={20} className="w-[96px] h-[20px] ml-auto mr-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation */}
          <div className="w-full md:h-[484px] bg-white p-4 rounded-lg">
            <h2 className="text-2xl font-semibold mb-1">Confirmation</h2>
            <p className="mb-9 text-[14px] text-[#90A3BF]">We are getting to the end. Just a few clicks and your rental is ready!</p>
            <div className="space-y-4">
              <div className="flex items-center md:w-[804px] md:h-[56px] bg-[#F6F7F9] pl-4 text-[#1F2544] ">
                <input type="checkbox" id="marketing" />
                <label htmlFor="marketing" className="ml-2">I agree with sending Marketing and newsletter emails. No spam, promised!</label>
              </div>
              <div className="flex items-center md:w-[804px] md:h-[56px] bg-[#F6F7F9] pl-4 text-[#1F2544]">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className="ml-2">I agree with our terms and conditions and privacy policy.</label>
              </div>
              <Link href="/admin">
                <button className="md:w-[140px] mt-5 md:[56px] bg-blue-500 text-white p-3 rounded-lg">Rent Now</button>
              </Link>


              <div className="items-start md:w-[548px] md:h-[100px] mt-6">
                <Image src="/safetyicon.png" width={92} height={92} alt="Safety Icon" className="w-[26px] h-[28px] mr-3 mb-4" />
                <p className="text-[16px] font-semibold mb-2">All your data is safe</p>
                <p className="text-[14px] text-[#90A3BF]">We are using the most advanced security to provide you the best experience ever.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Rental Summary Section */}
        <div className="rental-summary w-full lg:w-[492px] h-[560px] bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-[20px] font-semibold mb-1">Rental Summary</h2>
          <p className="text-[14px] text-[#90A3BF] mb-4">Prices may change depending on the length of the rental and the price of your rental car.</p>

          {/* Car Details */}
          <div className="flex  mb-6">
            <Image src="/d1.png" alt="Car" width={132} height={108} className="w-[116px] h-[80px] object-cover rounded-md" />
            <div className="ml-4">
              <h3 className="font-semibold md:text-[32px] ">Nissan GT - R</h3>
              
              <div className="flex gap-1 mt-2">
                {/* Star Rating */}
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-yellow-500">&#9733;</span>
                <span className="text-gray-400">&#9733;</span>
                <p className="md:text-[14px] text-[10px] text-[#596780]">(440+ Reviews)</p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[#90A3BF] text-[16px]">Subtotal</p>
              <p className="font-semibold">$80.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[#90A3BF] text-[16px]">Tax</p>
              <p className="font-semibold">$0</p>
            </div>
            <div className="flex bg-[#F6F7F9] md:w-[444px] text-center md:h-[56px] rounded-md">
              <input 
                type="text" 
                placeholder="Apply Promo Code" 
                className="w-full p-2 bg-[#F6F7F9] md:h-[56px] md:pl-10 pl-5 text-[#90A3BF] rounded-md" 
              />
              <p 
                className="w-[120px] text-[14px] flex md:text-[16px] items-center justify-center h-[56px] font-semibold bg-[#F6F7F9] cursor-pointer"
              >
                Apply Now
              </p>
            </div>

            <div className="flex justify-between mt-5">
              <div>
              <p className="font-semibold text-[20px] ">Total Rent Price</p>
              <p className="text-[14px] text-[#90A3BF] ">Overall price and includes rental discount</p>
              </div>
             
              <p className="font-semibold text-[32px] ">$80</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
