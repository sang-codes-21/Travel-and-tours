import { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex justify-between h-20 w-full md:px-28 px-4 p-2 border-b border-gray-300">
      <img src={Logo} alt="Logo" className="p-2 w-auto" />
      <div className="hidden md:flex justify-between font-semibold hover:text-[#004463] items-center  gap-10">
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

      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
