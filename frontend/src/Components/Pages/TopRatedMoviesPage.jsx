import React, { useEffect, useRef, useState } from "react";

const genreMap = {
  28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy",
  80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family",
  14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music",
  9648: "Mystery", 10749: "Romance", 878: "Sci-Fi", 10770: "TV Movie",
  53: "Thriller", 10752: "War", 37: "Western",
};

const TopRatedMoviesPage = () => {
  const URL = `http://localhost:3000/movies/`;
  const [allMovies, setAllMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        const topRated = data.movies.filter((movie) => movie.vote_average >= 7.5);
        setAllMovies(topRated);
      } catch (err) {
        console.error("Error fetching top-rated movies:", err);
      }
    };
    fetchAllMovies();
  }, []);

  const maxIndex = Math.max(0, allMovies.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isHovered && allMovies.length > 0) {
      intervalRef.current = setInterval(nextSlide, 2000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, allMovies.length]);

  const totalPages = Math.ceil(allMovies.length / itemsPerPage);

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white pt-24 px-6 sm:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Top <span className="text-red-500">Rated Movies</span>
      </h2>

      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(100 / itemsPerPage) * currentIndex}%)`,
          }}
        >
          {allMovies.map((movie, index) => {
            const isCurrent =
              index >= currentIndex && index < currentIndex + itemsPerPage;

            const genres = movie.genre_ids
              .map((id) => genreMap[id])
              .filter(Boolean)
              .join(", ");

            return (
              <div
                key={movie.id}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-2"
              >
                <div
                  className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 flex flex-col h-full ${
                    isCurrent ? "hover:scale-105" : ""
                  }`}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-1 min-h-[1.5rem]">
                      {movie.title}
                    </h3>

                    <p className="text-sm text-gray-400 mb-2 line-clamp-2 min-h-[2.5rem]">
                      {movie.overview}
                    </p>

                    <p className="text-xs text-gray-400">
                      Genres: {genres || "N/A"}
                    </p>

                    <div className="flex justify-between items-center mt-2 text-sm">
                      <span className="text-red-500 font-semibold">
                        ⭐ {movie.vote_average.toFixed(1)}
                      </span>
                      <span className="text-gray-400 text-xs">
                        {movie.release_date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

    
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
        >
          ›
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => goToPage(pageIndex)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentIndex >= pageIndex * itemsPerPage &&
              currentIndex < (pageIndex + 1) * itemsPerPage
                ? "bg-red-500"
                : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMoviesPage;
