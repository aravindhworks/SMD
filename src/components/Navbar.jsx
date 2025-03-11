import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsProductsOpen(false);
    }, 2000); // Close after 2 seconds
  };

  return (
    <nav className="bg-blue-800 text-white">
      {/* Top Contact Info */}
      <div className="container max-w-screen mx-auto p-2 text-center bg-blue-900">
  <p className="text-sm md:text-base">
    📞 +91-9551150504 <span className="mx-2">|</span> ✉️ smdequipments@gmail.com
  </p>
</div>

      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Site Name */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/images/logo.png" // Replace with your logo path
            className="h-8"
            alt="SMD Engineering Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            SMD Engineering
          </span>
        </Link>

        {/* Hamburger Menu Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div
          className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-blue-700 rounded-lg bg-blue-800 md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              {/* Products Link */}
              <Link
                to="/products"
                className="flex items-center justify-between w-full py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 md:w-auto"
              >
                Products{' '}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </Link>
              {/* Product Dropdown */}
              {isProductsOpen && (
                <div
                  id="dropdownNavbar"
                  className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <Link
                        to="/painting-booths"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Painting Booths
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/paint-shop-plants"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Paint Shop Plants
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/products/powder-coating-plants"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Powder Coating Plants
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/gallery"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/clients"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Clients
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block py-2 px-3 text-white rounded-sm hover:bg-blue-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;