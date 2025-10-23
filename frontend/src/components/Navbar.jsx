import React, { useState , useEffect } from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import useProductsContext from '../context/ProductsContext';
import useCartContext from '../context/Cartcontext';

const Navbar = () => {

  const [sidebar, sidebarHandler] = useState(false)
  const {totalItems} = useCartContext()
  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "auto";
  }, [sidebar]);

  const navigate = useNavigate();
  const {setShowSearch} = useProductsContext()
  return (
    <div className=" flex justify-between items-center py-3.5 md:py-5 ">
      <NavLink to={""}>
        <img className="w-36 " src={assets.logo} alt="Logo" />
      </NavLink>

      <div className="hidden md:flex gap-5">
        <NavLink to={"/"}>
          <p className="mb-1 text-sm ">HOME</p>
          <hr className="w-2/4 border-none h-[1.59px]  bg-gray-700 hidden mx-auto" />
        </NavLink>
        <NavLink to={"/collection"}>
          <p className="mb-1 text-sm">COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.59px] bg-gray-700 hidden mx-auto" />
        </NavLink>
        <NavLink to={"/about"}>
          <p className="mb-1 text-sm">ABOUT</p>
          <hr className="w-2/4 border-none h-[1.59px] bg-gray-700 hidden mx-auto" />
        </NavLink>
        <NavLink to={"/contact"}>
          <p className="mb-1 text-sm">CONTACT</p>
          <hr className="w-2/4 border-none h-[1.59px] bg-gray-700 hidden mx-auto" />
        </NavLink>
      </div>

      <div className="flex  gap-3.5 md:gap-6 items-center relative">
        <div className="relative">
          <img
            onClick={() => {
              setShowSearch(true);
              navigate("/collection");
            }}
            className="w-5 cursor-pointer"
            src={assets.search_icon}
            alt=""
          />
        </div>
        <Link to={"/login"}>
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
        </Link>
        <Link to={"/cart"} className="relative w-5 cursor-pointer">
          <img className="w-full" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] ">
            {totalItems || 0}
          </p>
        </Link>
        <img
          onClick={() => {
            sidebarHandler(true);
          }}
          className="w-5 cursor-pointer block md:hidden"
          src={assets.menu_icon}
          alt=""
        />
      </div>

      {/* sidebar for small screens */}

      <div
        className={`fixed top-0 right-0 h-screen w-screen bg-[#EBEBEB] transition-transform duration-300 ease-in-out sidebar ${
          sidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul>
          <li
            onClick={() => {
              sidebarHandler(false);
            }}
            className="flex items-center justify-start p-3 gap-4 border-b cursor-pointer"
          >
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </li>
          <NavLink
            onClick={() => {
              sidebarHandler(false);
            }}
            to={"/"}
            className="flex items-center justify-start py-3 pl-6 border-b "
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => {
              sidebarHandler(false);
            }}
            to={"/collection"}
            className="flex items-center justify-start py-3 pl-6 border-b "
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => {
              sidebarHandler(false);
            }}
            to={"/about"}
            className="flex items-center justify-start py-3 pl-6 border-b "
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => {
              sidebarHandler(false);
            }}
            to={"/contact"}
            className="flex items-center justify-start py-3 pl-6 border-b "
          >
            CONTACT
          </NavLink>
          <NavLink
            onClick={() => {
              sidebarHandler(false);
            }}
            to={"/admin"}
            className="flex items-center justify-start py-3 pl-6 border-b "
          >
            ADMIN PANEL
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar
