import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false); // close menu when clicking a link

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src="./logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-gray-700 border-gray-400"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto
          bg-white md:bg-transparent shadow-md md:shadow-none
          text-gray-700 font-medium text-sm md:text-base items-center
          space-y-4 md:space-y-0 md:space-x-6 px-6 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out z-40`}
        >
          {[
            'Home',
            'About',
            'Floor Plans',
            'Amenities',
            'Gallery',
            'Specifications',
            'Projects',
            'Contact',
          ].map((item) => (
            <li key={item}>
              <a
                href="#"
                onClick={handleLinkClick}
                className={`hover:text-blue-600 transition-colors duration-200 p-2 rounded-md ${
                  item === 'Home' ? 'text-white bg-black' : ''
                }`}
              >
                {item}
              </a>
            </li>
          ))}

          {/* Company Logo at the End */}
          <li className="flex items-center space-x-2 mt-2 md:mt-0">
            <img src="./logo2.png" alt="Company Logo" className="h-12" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
