import React from "react";

const Footer = () => {
  return (
    <footer className="w-full px-16 py-8 bg-gray-800 text-white flex md:flex-row flex-col  text-center justify-around gap-6">
      <div className="md:w-1/4 w-full mb-4 md:mb-0">
        <h2 className="text-xl font-bold mb-2">About Us</h2>
        <p className="text-sm">
          Global Rising Travel provides curated travel experiences, expert
          guides, and unforgettable journeys worldwide.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
        <ul className="text-sm space-y-1">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/tours" className="hover:underline">
              Tours
            </a>
          </li>

          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-1/4 w-full ">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>

        <p className="text-sm">Email:info@globalrisingtravel.com</p>
        <p className="text-sm">01-4481261 / 01-4481262</p>
        <p className="text-sm">Boudha-6, Tushalchowk Kathmandu, Nepal</p>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-2">We Accept</h2>
        <div className="flex justify-center space-x-4">
          <img
            src="https://img.icons8.com/color/48/000000/visa.png"
            alt="Visa"
          />
          <img
            src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
            alt="MasterCard"
          />
          <img
            src="https://img.icons8.com/color/48/000000/paypal.png"
            alt="PayPal"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
