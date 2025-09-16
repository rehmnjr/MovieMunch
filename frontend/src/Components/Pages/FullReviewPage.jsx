import React from "react";
import { useSelector } from "react-redux";
import TrendingPage from "./TrendingPage";

const FullReviewPage = () => {
  const movie = useSelector((state) => state.MovieById);

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

  if (!movie) {
    return (
      <div className="text-white text-center py-20">
        <h2>Loading movie...</h2>
      </div>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen">
      <div
        className="h-72 sm:h-96 bg-cover bg-center relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div className="relative z-10 -mt-36 sm:-mt-48 px-6 sm:px-10 lg:px-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-lg shadow-lg border-2 border-gray-700"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>

            <p className="text-sm text-gray-400 mb-4">
              {movie.genre_ids
                ?.map((id) => genreMap[id] || "Unknown")
                .join(", ") || "N/A"}
            </p>

            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-600 px-3 py-1 text-sm rounded-full">
                ⭐ {movie.vote_average} / 10
              </span>
              <span className="text-gray-400 text-sm">
                🌍 Country:{" "}
                <strong>
                  {movie.production_countries?.[0]?.name || "N/A"}
                </strong>
              </span>
            </div>

            <div className="flex gap-6 mb-6 text-sm text-gray-400">
              <p>Release: {movie.release_date}</p>
              <p>⏱️ Duration: {movie.runtime} min</p>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Full Overview</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {movie.overview}
            </p>

            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Main Cast</h3>
              <p className="text-gray-400 italic">
                Cast information is not available in the current movie object.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TrendingPage />
    </section>
  );
};

export default FullReviewPage;
