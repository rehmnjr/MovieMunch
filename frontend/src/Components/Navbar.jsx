import React, { useState } from 'react';
import { FaFilm, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center">
            <FaFilm className="text-red-500 text-2xl mr-2" />
            <span className="font-bold text-xl tracking-wide">MovieMunch</span>
          </div>

  
          <div className="hidden md:flex space-x-10">
            <a href="#" className="hover:text-red-400 transition">Home</a>
            <a href="#" className="hover:text-red-400 transition">Reviews</a>
            <a href="#" className="hover:text-red-400 transition">Top Rated</a>
            <a href="#" className="hover:text-red-400 transition">Genres</a>
            <a href="#" className="hover:text-red-400 transition">About</a>
          </div>


          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-3 py-1 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400 text-sm"
            />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>


      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-black bg-opacity-90 text-sm">
          <a href="#" className="block hover:text-red-400">Home</a>
          <a href="#" className="block hover:text-red-400">Reviews</a>
          <a href="#" className="block hover:text-red-400">Top Rated</a>
          <a href="#" className="block hover:text-red-400">Genres</a>
          <a href="#" className="block hover:text-red-400">About</a>
          <input
            type="text"
            placeholder="Search movies..."
            className="w-full mt-2 px-3 py-1 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
