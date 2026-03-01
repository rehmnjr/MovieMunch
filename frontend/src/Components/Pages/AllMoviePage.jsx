import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Genre map
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
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const fetchAllMovies = async () => {
  const res = await fetch("http://localhost:3000/movies/");
  const data = await res.json();
  return data.movies;
};

const AllMoviesPage = () => {
  const sectionRef = useRef(null);
  const moviesPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // TanStack Query v5 usage
  const { data: allMovies = [], isLoading, error } = useQuery({
    queryKey: ["allMovies"],
    queryFn: fetchAllMovies,
  });

  // Pagination
  const totalPages = Math.ceil(allMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = allMovies.slice(startIndex, startIndex + moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={sectionRef} className="bg-black min-h-screen text-white px-6 sm:px-12 py-12">
      <h1 className="text-4xl font-bold mb-8 text-red-500 text-center">All Movies</h1>

      {isLoading ? (
        <p className="text-center text-gray-400">Loading movies...</p>
      ) : error ? (
        <p className="text-center text-red-500">Failed to load movies.</p>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMovies.map((movie) => (
              <Card key={movie.id} className="bg-gray-900 border border-gray-700 overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1">{movie.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-2">{movie.overview}</p>
                  <p className="text-xs text-gray-400">
                    Genres: {movie.genre_ids.map((id) => genreMap[id] || "Unknown").join(", ")}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-red-500 font-semibold">
                      ⭐ {Math.trunc(movie.vote_average * 10) / 10}
                    </span>
                    <span className="text-gray-400">{movie.release_date}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center space-x-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <Button
                key={i + 1}
                variant={currentPage === i + 1 ? "default" : "outline"}
                onClick={() => handlePageChange(i + 1)}
                className="px-4 py-2 text-sm"
              >
                {i + 1}
              </Button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllMoviesPage;