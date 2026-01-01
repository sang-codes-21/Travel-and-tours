import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="flex justify-between h-20 w-full px-28 py-2 border-b border-gray-300">
      <img src={Logo} alt="Logo" className="h-14 w-auto" />
      <div className="flex justify-between font-semibold hover:text-[#004463] items-center  gap-10">
        <Link to="/">Home</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/adventure">Adventure</Link>
        <Link to="/trek">Trek</Link>
        <Link to="/about">About Us</Link>
        <Link to="/blog">Blog</Link>

        <Link
          to="/contact"
          className="px-8 py-4 text-lg bg-[#004463] text-white rounded-full hover:bg-[#006080]"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
