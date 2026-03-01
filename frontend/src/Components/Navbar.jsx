import React, { useState, useEffect } from "react";
import { FaFilm, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ sections }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleSearchQuery = (e) => {
    setQuery(e.target.value);
  };

  const scrollToSection = (ref) => {
    if (!ref?.current) return;
    const yOffset = -80;
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false); 
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => console.log(query), 800);
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <FaFilm className="text-red-500 text-2xl mr-2" />
            <span className="font-bold text-xl tracking-wide">MovieMunch</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-10">
            <button className="hover:text-red-400 transition" onClick={() => scrollToSection(sections.heroRef)}>Home</button>
            <button className="hover:text-red-400 transition" onClick={() => scrollToSection(sections.trendingRef)}>Trending</button>
            <button className="hover:text-red-400 transition" onClick={() => scrollToSection(sections.topRatedRef)}>Top Rated</button>
            <button className="hover:text-red-400 transition" onClick={() => scrollToSection(sections.allMovieRef)}>All Movies</button>
            <button className="hover:text-red-400 transition">About</button>
          </div>

          {/* Desktop search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search movies..."
              className="px-3 py-1 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400 text-sm"
              onChange={handleSearchQuery}
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black bg-opacity-90 text-sm ${
          menuOpen ? "max-h-screen px-4 pt-2 pb-4 space-y-2" : "max-h-0 px-4 pt-0 pb-0"
        }`}
      >
        <button className="block w-full text-left hover:text-red-400 transition" onClick={() => scrollToSection(sections.heroRef)}>Home</button>
        <button className="block w-full text-left hover:text-red-400 transition" onClick={() => scrollToSection(sections.trendingRef)}>Trending</button>
        <button className="block w-full text-left hover:text-red-400 transition" onClick={() => scrollToSection(sections.topRatedRef)}>Top Rated</button>
        <button className="block w-full text-left hover:text-red-400 transition" onClick={() => scrollToSection(sections.allMovieRef)}>All Movies</button>
        <button className="block w-full text-left hover:text-red-400 transition" onClick={() => scrollToSection(sections.trendingRef)}>About</button>

        {/* Mobile search */}
        <input
          type="text"
          placeholder="Search movies..."
          className="w-full mt-2 px-3 py-1 rounded-md bg-gray-700 placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400"
          onChange={handleSearchQuery}
        />
      </div>
    </nav>
  );
};

export default Navbar;