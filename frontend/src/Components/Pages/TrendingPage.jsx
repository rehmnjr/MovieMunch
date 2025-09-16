import React, { useEffect, useRef, useState } from "react";

const TrendingPage = () => {
  const URL = "http://localhost:3000/movies/";
  const [trendMovie, setTrendMovie] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const intervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [timeWindow, setTimeWindow] = useState("day");

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Science Fiction",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  useEffect(() => {
    const fetchTrendingMovie = async () => {
      try {
        const res = await fetch(URL+`trending/${timeWindow}`);
        console.log(URL+`/${timeWindow}`);
        const data = await res.json();
        setTrendMovie(data.movies);
      } catch (err) {
        console.error("Error while fetching trending movies", err);
      }
    };
    fetchTrendingMovie();
  }, [timeWindow]);

  const maxIndex = Math.max(0, trendMovie.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (!isHovered && trendMovie.length > 0) {
      intervalRef.current = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered, trendMovie.length]);

  const totalPages = Math.ceil(trendMovie.length / itemsPerPage);

  const goToPage = (pageIndex) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };
  const handleClick =async(ID)=>{
    // try{
    //   const res = await fetch(URL+ID);
    //   const data = await res.json();
    //   console.log(data,ID);
    // }
    // catch(err){
    //   console.log(`Fetching ID Movie Error`,err);
    // }
    for(let i=0; i<trendMovie.length; i++){
      if(trendMovie[i].id === ID){
        console.log(trendMovie[i]);
        break;
      }
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white pt-24 px-6 sm:px-10 lg:px-20">
      <div className="flex justify-center mb-6">
        <div className="inline-flex bg-gray-800 rounded-full p-1 border border-gray-600">
          {["day", "week"].map((option) => (
            <button key={option} onClick={() => setTimeWindow(option)} className={`px-4 py-1 text-sm sm:text-base rounded-full transition-colors duration-300 font-medium
          ${
            timeWindow === option
              ? "bg-red-500 text-white"
              : "text-gray-300 hover:bg-gray-700"
          }
        `}
            >
              {option === "day" ? "Today" : "This Week"}
            </button>
          ))}
        </div>
      </div>

      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Latest <span className="text-red-500">Trending Movies</span>
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
          {trendMovie.map((movie, index) => {
            const isCurrent = index >= currentIndex && index < currentIndex + itemsPerPage;

            const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";

            const genres = movie.genre_ids.map((id) => genreMap[id]).filter(Boolean).join(", ");

            return (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 cursor-pointer"
                onClick={()=>handleClick(movie.id)}
              >
                <div
                  className={`bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 flex flex-col h-full ${isCurrent ? "hover:scale-105" : ""}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-1 line-clamp-2">
                      {movie.title}
                    </h3>

                    <div className="text-sm text-gray-400 mb-2">
                      {releaseYear} • {genres}
                    </div>

                    <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                      {movie.overview}
                    </p>

                    <div className="flex justify-between items-center mt-auto">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ⭐ {movie.vote_average.toFixed(1)} / 10
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

export default TrendingPage;
