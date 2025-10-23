import React from 'react'
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border">
      {/* left */}
      <div className="flex items-center justify-center flex-col gap py-10 md:py-0 w-full md:w-2/4">
        <div className="text-[#414141]">
          <div className="flex items-center justify-start gap-2 ">
            <p className="h-[2px] w-8 md:w-11 bg-black"></p>
            <p className="font-medium text-sm md:text-base">OUR BEST SELLERS</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>
          <div className="flex items-center justify-start gap-2 ">
            <p className="font-medium text-sm md:text-base">SHOP NOW</p>
            <p className="h-[1px] w-8 md:w-11 bg-black"></p>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="  w-full md:w-2/4 border-t  md:border-l md:border-t-0 ">
        <img className="w-full h-full " src={assets.hero_img} alt="" />
      </div>
    </div>
  );
}

export default Hero
