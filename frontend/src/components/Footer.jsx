import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-12 mt-40 text-sm ">
        <div>
          <img className="w-32 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lestro was founded with a passion for creativity and self-expression
            through fashion. What began as a small idea soon evolved into a
            vision to design clothing that speaks individuality and confidence.
            Since its first collection, Lestro has stayed true to its roots —
            crafting timeless pieces that blend comfort.
          </p>
        </div>
        <div>
          <div className="text-xl font-medium mb-5">COMPANY</div>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <div className="text-xl font-medium mb-5">GET IN TOUCH</div>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+92 1234567890 </li>
            <li>lestrofarhan@gmail.com</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <hr className="text-gray-400" />
      <p className="text-center py-4 text-sm text-gray-600 ">
        Copyright {new Date().getFullYear()} Lestro Farhan - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
