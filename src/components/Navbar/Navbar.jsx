import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/Foods/assets";
import { FaHamburger } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

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
      <div className="flex md:hidden items-center py-5 justify-between">
        <img className="logo h-[32px]" src={assets.logo} alt="" />
        <div>
          <div className="navbar-right flex gap-2 items-center justify-center">
            <img className="h-3" src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
              <img className="h-3" src={assets.basket_icon} alt="" />
              <div className="dot"></div>
            </div>
            <button>sign in</button>
          </div>
        </div>
        <div>
          <span
            className="z-30 md:hidden text-red-300 text-2xl"
            onClick={() => setHandleShow((prev) => !prev)} // Toggle the handleShow state
          >
            {!handleShow && <FaHamburger className="text-xl cursor-pointer" />}
          </span>

          <div
            className={`absolute xl:hidden top-0 w-[70%] py-[10rem] right-0 flex flex-col justify-center items-center bg-gray-500/20 shadow-lg backdrop-blur-lg text-white gap-2 font-semibold text-lg transform transition-transform ${
              handleShow ? "flex" : "hidden" // Toggle the visibility based on handleShow state
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            {/* Home Link */}
            <div
              className="flex justify-start items-start absolute top-5 right-[20%]"
              onClick={() => {
                setHandleShow(false);
              }}
            >
              hi
            </div>
            <div
              onClick={() => {
                setHandleShow(false);
              }}
              className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/">Home</Link>
            </div>

            {/* About Link */}
            <div
              onClick={() => {
                setHandleShow(false);
              }}
              className="w-full text-left p-4 hover:bg-gray-400 hover:text-white transition-all cursor-pointer"
            >
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
