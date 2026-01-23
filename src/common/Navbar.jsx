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
    <nav className=" sticky top-0 z-50  bg-white flex  h-20  mx-auto p-2 border-b border-gray-300">
      <div className=" w-full px-28 flex justify-between  h-full items-center ">
        <img src={Logo} alt="Logo" className="p-2 h-20 w-34" />
        <div className="hidden lg:flex justify-between font-semibold hover:text-[#004463] items-center  gap-10">
          {links.map((item, index) => (
            <Link to={item.link} key={index}>
              {item.display}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-8 py-3 text-lg bg-[#004463] text-white rounded-full hover:bg-[#006080]"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t border-gray-300 shadow-md md:hidden flex flex-col items-center  z-10">
          {links.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="px-4 py-3 text-lg hover:text-[#004463] border-b w-full "
              onClick={() => setMenuOpen(false)}
            >
              {item.display}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-4 py-3 text-lg hover:text-[#004463] border-b w-full "
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
