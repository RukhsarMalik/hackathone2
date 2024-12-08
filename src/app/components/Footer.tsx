import React from 'react';

export const Footer = () => {
  return (
    <>
      {/* Footer for Laptop Screens */}
      <div className="hidden bg-white md:flex w-full md:h-[480px] py-[80px] px-[60px] flex-col  font-sans">
        {/* Top Section */}
        <div className="flex flex-row justify-center gap-[704px]">
          <div>
            {/* Logo Section */}
            <div className="w-[292px] h-[108px] justify-center flex flex-col gap-[16px]">
              <h1 className="w-[148px] h-[44px] font-bold text-[32px] leading-[48px] text-[#3563E9]">
                MORENT
              </h1>
              <p className="w-[292px] h-[48px] text-[16px] leading-[24px] text-[#131313] opacity-[60%]">
                Our Vision is to provide convenience
                <br /> and help increase your sales business.
              </p>
            </div>
          </div>

          <div className="flex md:flex-row flex-col sm:items-center gap-[24px]">
            {/* About Section */}
            <div className="w-[152px] h-[244px] flex flex-col gap-[20px]">
              <h2 className="w-[152px] h-[32px] text-[20px] leading-[30px] font-semibold text-black">
                About
              </h2>
              <div className="w-[152px] h-[188px] flex flex-col gap-[12px] text-[16px] leading-[24px] text-[#131313] opacity-[60%]">
                <p>How it Works</p>
                <p>Featured</p>
                <p>Partnership</p>
                <p>Business Relation</p>
              </div>
            </div>

            {/* Community Section */}
            <div className="w-[152px] h-[244px] flex flex-col gap-[20px]">
              <h2 className="w-[152px] h-[32px] text-[20px] leading-[30px] font-semibold text-black">
                Community
              </h2>
              <div className="w-[152px] h-[188px] flex flex-col gap-[12px] text-[16px] leading-[24px] text-[#131313] opacity-[60%]">
                <p>Events</p>
                <p>Blog</p>
                <p>Podcast</p>
                <p>Invite a Friend</p>
              </div>
            </div>

            {/* Socials Section */}
            <div className="w-[152px] h-[244px] flex flex-col gap-[20px]">
              <h2 className="w-[152px] h-[32px] text-[20px] leading-[30px] font-semibold text-black">
                Socials
              </h2>
              <div className="w-[152px] h-[188px] flex flex-col gap-[12px] text-[16px] leading-[24px] text-[#131313] opacity-[60%]">
                <p>Discord</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex md:flex-row items-center md:mt-[60px] flex-col justify-between">
          <div className="font-sans font-semibold text-[16px] text-black">
            <p>©2022 MORENT. All rights reserved</p>
          </div>

          <div className="flex flex-row text-[16px] font-semibold gap-20 leading-[24px]">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
        </div>
      </div>

      {/* Footer for Smaller Screens */}
      <div className="md:hidden w-full py-[40px] px-[20px] flex flex-col bg-gray-50 font-sans">
        {/* Top Section */}
        <div className="flex flex-col gap-[16px]">
          {/* Logo Section */}
          <div className="text-left flex flex-col gap-[16px] mb-4">
            <h1 className="text-[24px] font-bold leading-[48px] text-[#3563E9]">
              MORENT
            </h1>
            <p className="text-[14px] leading-[24px] text-[#90A3BF] opacity-[60%]">
              Our Vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap flex-row">
            {/* About and Community in One Line */}
            <div className="w-1/2 flex flex-col gap-[16px]">
              <h2 className="text-[20px] font-semibold leading-[30px] text-black">
                About
              </h2>
              <div className="text-[16px] leading-[30px] text-[#90A3BF] opacity-[60%]">
                <p>How it Works</p>
                <p>Featured</p>
                <p>Partnership</p>
                <p>Business Relation</p>
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-[16px]">
              <h2 className="text-[20px] font-semibold leading-[30px] text-black">
                Community
              </h2>
              <div className="text-[16px] leading-[30px] text-[#90A3BF] opacity-[60%]">
                <p>Events</p>
                <p>Blog</p>
                <p>Podcast</p>
                <p>Invite a Friend</p>
              </div>
            </div>

            {/* Socials in Another Line */}
            <div className="w-full flex flex-col gap-[16px]">
              <h2 className="text-[20px] font-semibold leading-[30px] text-black">
                Socials
              </h2>
              <div className="text-[16px] leading-[30px] text-[#90A3BF] opacity-[60%]">
                <p>Discord</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-6 mt-8">
          
          <div className="flex flex-row text-[14px] font-semibold leading-[24px] gap-[90px]">
            <p>Privacy & Policy</p>
            <p>Terms & Condition</p>
          </div>
          <p className="font-sans font-semibold text-[16px] items-start text-black">
            ©2022 MORENT. All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
