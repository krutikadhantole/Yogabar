import React, { useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css"; // Your existing CSS

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const { cartCount } = useContext(CartContext);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // Scroll down
      } else {
        setShowNavbar(true); // Scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className={`bg-[#E33675] w-full p-4 fixed top-0 left-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="yogaBar" className="w-16 h-16" />
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex gap-6 items-center text-white text-lg font-semibold">
          <IoIosSearch className="text-2xl hover:scale-125 transition-transform duration-300" />
          <Link to="/Login/Login.jsx" onClick={() => setIsOpen(false)}>
            <GoPerson className="text-2xl hover:scale-125 transition-transform duration-300" />
          </Link>

          <Link to="/CartPage" className="relative">
            <BsCart4 className="text-2xl hover:scale-125 transition-transform duration-300" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="text-white text-3xl" />
            ) : (
              <HiMenu className="text-white text-3xl" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-140 items-center text-white text-lg font-semibold">
          <div className="flex gap-10 items-center mr-10">
            <Link to="/" className="relative group inline-block">
              <span>Home</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#F7A8C4] to-[#FFFFFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/Products" className="relative group inline-block">
              <span>Products</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#F7A8C4] to-[#FFFFFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/About" className="relative group inline-block">
              <span>About</span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#F7A8C4] to-[#FFFFFF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/NutritionRecommend"
              className="relative group inline-block font-bold text-[#FFEB55] leading-4 text-center hover:text-yellow-100"
            >
              <span>
                Nutrition<br></br> Recommend
              </span>
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex gap-6 items-center">
            <IoIosSearch className="text-2xl hover:scale-125 transition-transform duration-300" />
            <Link to="/Login" onClick={() => setIsOpen(false)}>
              <GoPerson className="text-2xl hover:scale-125 transition-transform duration-300" />
            </Link>

            <Link to="/CartPage" className="relative">
              <BsCart4 className="text-2xl hover:scale-125 transition-transform duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-white text-lg font-semibold">
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/Products" onClick={() => setIsOpen(false)}>
            Products
          </Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/NutritionRecommend" onClick={() => setIsOpen(false)}>
            Nutrition Recommend
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
