import React, { useState } from 'react';

import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiGrid, FiMenu, FiX, FiMapPin, FiPhone } from "react-icons/fi";
import logoImg from '../../assets/logo.svg';
import CompareImg from '../../assets/icon-compare.svg';
import headPhnImg from '../../assets/icon-headphone.svg';

import hotImg from '../../assets/icon-hot.svg';
import Header from './Header';
import { NavLink } from 'react-router';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" border-b border-gray-300 bg-white">
      {/* Announcement Bar */}
      <div className="bg-[#2AA66D] text-white text-sm text-center py-2 lg:hidden block">
        Grand opening, <span className="font-semibold">up to 15% off</span> all items. Only 3 days left!
      </div>

      {/* Top header (desktop only) */}
      <div className="hidden md:block">
        <Header></Header>
      </div>

      {/* Main Section */}
      <div className="flex justify-between items-center py-3 px-4 lg:px-3  mx-auto container">
        {/* Left: Menu Button (Mobile) */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <FiMenu />
        </button>

        {/* Logo */}
        <div className="flex items-center">
          <img src={logoImg} alt="Nest Logo" className="w-28 sm:w-36" />
        </div>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:flex items-center border rounded w-full md:max-w-[500px] px-3 py-2">
          <select className="text-sm outline-none text-gray-600 border-r pr-2">
            <option>All Categories</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Beverages</option>
          </select>
          <input
            type="text"
            placeholder="Search for items..."
            className="flex-1 outline-none px-3 text-sm"
          />
          <FiSearch className="text-gray-500 text-lg" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4 text-gray-700">
          {/* Wishlist */}
          <div className="relative">
            <FiHeart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs rounded-full px-[6px]">4</span>
          </div>

          {/* Cart */}
          <div className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-[#3BB77E] text-white text-xs rounded-full px-[6px]">2</span>
          </div>

          {/* Account (desktop only) */}
          <div className="hidden md:flex items-center gap-1">
            <FiUser className="text-xl" />
            <span className="hidden sm:inline">Account</span>
          </div>
        </div>
      </div>

      {/* Desktop Bottom Menu */}
      <div className="hidden md:flex items-center justify-between mx-auto
       container px-4 lg:px-3 py-3 border-t border-gray-200 bg-white">
        <button className="flex items-center gap-2 bg-[#3BB77E] text-white px-4 py-2 rounded-md hover:bg-green-600 transition text-sm md:text-base">
          <FiGrid />
          <span className="font-medium">Browse All Categories</span>
        </button>

        <ul className="flex items-center gap-6 lg:gap-6 font-medium text-gray-700">
        
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#3BB77E] font-semibold" : "font-semibold"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-[#3BB77E] font-semibold" : "font-semibold"}>About</NavLink></li>
          <li><NavLink to="/shop" className={({ isActive }) => isActive ? "text-[#3BB77E] font-semibold" : "font-semibold"}>Shop</NavLink></li>
          
         
          <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#3BB77E] font-semibold" : "font-semibold"}>Blog</NavLink></li>
          
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#3BB77E] font-semibold" : "font-semibold"}>Contact</NavLink></li>
        </ul>

        {/* Phone */}
        <div className="flex items-center gap-2 text-green-600 font-bold text-sm lg:text-xl">
          <img src={headPhnImg} alt="" />
          <div>
            <p>1900 - 888</p>
            <p className="text-gray-500 text-xs font-normal">24/7 Support Center</p>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 w-72 h-full bg-white z-50 shadow-md p-5 overflow-y-auto transition-transform duration-300">
            <div className="flex justify-between items-center mb-5">
              <img src={logoImg} alt="Nest Logo" className="w-32" />
              <button onClick={() => setMobileMenuOpen(false)} className="text-2xl text-gray-600">
                <FiX />
              </button>
            </div>

            {/* Search */}
            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
              <FiSearch className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Search for items..."
                className="flex-1 outline-none text-sm"
              />
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col gap-4 font-medium text-gray-700">
              <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</NavLink></li>
              <li><NavLink to="/vendors" onClick={() => setMobileMenuOpen(false)}>Vendors</NavLink></li>
              <li><NavLink to="/mega" onClick={() => setMobileMenuOpen(false)}>Mega Menu</NavLink></li>
              <li><NavLink to="/blog" onClick={() => setMobileMenuOpen(false)}>Blog</NavLink></li>
              <li><NavLink to="/pages" onClick={() => setMobileMenuOpen(false)}>Pages</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
            </ul>

            {/* Contact info */}
            <div className="mt-6 border-t pt-4 text-gray-600 text-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FiMapPin /> <span>Our location</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser /> <span>Log In / Sign Up</span>
              </div>
              <div className="flex items-center gap-2">
                <FiPhone /> <span>(+01) - 2345 - 6789</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
