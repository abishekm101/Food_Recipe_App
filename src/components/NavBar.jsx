import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsCart2, BsCartFill, BsPerson } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlineFavorite } from "react-icons/md";
import { FaGoogleWallet } from "react-icons/fa";
// import { Link } from "react-router-dom";

const NavBar = () => {
  const [sideNav, setSideNav] = useState(false);
  console.log(sideNav);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 font-semibold">
          Food<span className="text-orange-500 font-bold">Corner</span>
        </h1>
        <div className="hidden lg:flex items-center  bg-gray-200 rounded-full text-[14px]">
          <p className="bg-orange-500 text-white rounded-full p-2 font-bold">
            Fine
          </p>
          <p className="p-2 font-bold">Taste</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="search meals"
        />
      </div>
      <button className="bg-orange-500 text-white hidden md:flex items-center px-2 rounded-full">
        <BsCartFill size={20} /> Cart
      </button>
      {sideNav ? (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h1 className="text-2xl p-4">
          Food<span className="text-orange-500 ">Corner</span>
        </h1>
        <ul className="flex flex-col p-4 text-gray-900">
          <li className="flex items-center py-3">
            <BsPerson
              size={25}
              className="mr-4 bg-orange-500 text-white rounded-full"
            />
            My Account
          </li>
          <li className="flex items-center py-3">
            <BsCart2
              size={25}
              className="mr-4 bg-orange-500 text-white rounded-full"
            />
            Cart
          </li>
          <li className="flex items-center py-3">
            <TbTruckReturn
              size={25}
              className="mr-4 bg-orange-500 text-white rounded-full"
            />
            Delivery
          </li>
          <li className="flex items-center py-3">
            <MdOutlineFavorite
              size={25}
              className="mr-4 bg-orange-500 text-white rounded-full"
            />
            Favourite
          </li>
          <li className="flex items-center py-3">
            <FaGoogleWallet
              size={25}
              className="mr-4 bg-orange-500 text-white rounded-full"
            />
            My Wallet
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
