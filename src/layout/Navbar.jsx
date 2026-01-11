import { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const links = [
    { link: "/", display: "Home" },
    { link: "/tours", display: "Tours" },
    { link: "/adventure", display: "Adventure" },
    { link: "/trek", display: "Trek" },
    { link: "/about", display: "About Us" },
    { link: "/blog", display: "Blog" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50  bg-white flex justify-between h-20 w-full md:px-28 px-4 p-2 border-b border-gray-300">
      <img src={Logo} alt="Logo" className="p-2 w-auto" />
      <div className="hidden md:flex justify-between font-semibold hover:text-[#004463] items-center  gap-10">
        {links.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.display}
          </Link>
        ))}
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
      {/* {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden flex flex-col items-center py-4 z-10">
          {links.map((item, index) => (
 */}
    </nav>
  );
};

export default Navbar;
