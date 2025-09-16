import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white h-[90vh] flex items-center">
      {/* Optional background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/52d6d1ede4b0b322e9c7a2ea/1585757840597-2O3BWHS9NZJOPRKOO8ST/reddit.jpg')" }}
      ></div>

      {/* Overlay to darken image for text readability */}
     <div className="absolute inset-0 bg-gradient-to-tr from-black/98 to-black/80"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Dive into the <span className="text-red-500">World of Cinema</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Honest reviews, top-rated picks, and everything in between. Explore the best and worst of the silver screen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#reviews"
            className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Browse Reviews
          </a>
          <a
            href="#top-rated"
            className="px-6 py-3 border border-gray-300 hover:border-white hover:text-white text-gray-300 rounded-lg transition duration-300"
          >
            Top Rated Movies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
