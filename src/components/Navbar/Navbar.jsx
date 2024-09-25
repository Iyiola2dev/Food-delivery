import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/Foods/assets";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [handleShow, setHandleShow] = useState(false);

  const handleClickOpen = () => {
    setHandleShow(true);
  };

  const handleClickClose = () => {
    setHandleShow(false);
  };

  return (
    <div>
      <div className="navbar py-5 hidden  md:flex justify-between items-center ">
        <img className="logo h-[50px]" src={assets.logo} alt="" />
        <ul className="navbar-menu flex gap-6 justify-between items-center">
          <li>home</li>
          <li>menu</li>
          <li>mobile-app</li>
          <li>contact us</li>
        </ul>
        <div className="navbar-right flex gap-6   items-center justify-center">
          <img className="h-5" src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <img className="h-5" src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button>sign in</button>
        </div>
      </div>

      {/* mobile screen */}
      <div className="flex md:hidden items-center py-5 justify-between px-4">
        <img className="logo h-[32px]" src={assets.logo} alt="" />
        <div className="flex justify-center items-center gap-3">
          <div className="navbar-right flex gap-2 items-center justify-center text-red-500">
            {/* search */}
            <FaSearch className="h-3" />
            <div className="navbar-search-icon">
              {/* basket */}
              <FaBasketShopping className="h-3" />

              <div className="dot"></div>
            </div>
          </div>

          <button>
            <a
              href="#_"
              className="px-3 py-1 relative rounded group overflow-hidden font-medium bg-purple-50 text-red-500 inline-block"
            >
              <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-500 group-hover:h-full opacity-90"></span>
              <span className="relative group-hover:text-white">sign in</span>
            </a>
          </button>
      
        </div>
        <div>
          <span
            className="z-30 md:hidden text-red-500 text-2xl"
            onClick={() => setHandleShow((prev) => !prev)} // Toggle the handleShow state
          >
            {!handleShow && (
              <RxHamburgerMenu className="text-xl cursor-pointer" />
            )}
          </span>

          <div
            className={`absolute xl:hidden top-0 w-full py-[10rem] right-0 flex flex-col justify-center items-center bg-gray-500/20 shadow-lg backdrop-blur-lg text-red-500 gap-2 font-semibold text-lg transform transition-transform ${
              handleShow ? "flex" : "hidden" // Toggle the visibility based on handleShow state
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            {/* Home Link */}
            <div className="flex justify-start items-start absolute top-5 right-[20%]">
              <IoClose onClick={handleClickClose} />
            </div>
            <div
              onClick={handleClickClose}
              className="w-full text-center px-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/">Home</Link>
            </div>

            {/* menu */}
            <div
              onClick={{ handleClickClose }}
              className="w-full text-center px-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/about">Menu</Link>
            </div>

            {/* // Mobile App Link */}
            <div
              onClick={{ handleClickClose }}
              className="w-full text-center px-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/about">Mobile-app</Link>
            </div>

            {/* // Contact Us Link */}
            <div
              onClick={{ handleClickClose }}
              className="w-full text-center px-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/about">Contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
