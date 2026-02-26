import React, { useEffect, useState } from 'react';

const genreMap = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Sci-Fi',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const AllMoviePage = () => {
  const URL = `http://localhost:3000/movies/`;
  const [allMovies, setAllMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const moviesPerPage = 20;

  useEffect(() => {
    const fetchAllMovies = async () => {
      try {
        setLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        setAllMovies(data.movies);
      } catch (err) {
        console.error('AllMovieFetch Error: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllMovies();
  }, []);

  const totalPages = Math.ceil(allMovies.length / moviesPerPage);
  const startIndex = (currentPage - 1) * moviesPerPage;
  const currentMovies = allMovies.slice(startIndex, startIndex + moviesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 sm:px-12 py-12">
      <h1 className="text-4xl font-bold mb-8 text-red-500 text-center">All Movies</h1>

      {loading ? (
        <p className="text-center text-gray-400">Loading movies...</p>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMovies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700 transition-transform hover:scale-105"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-4 flex flex-col justify-between h-[200px]">
                  <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1">{movie.title}</h2>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-2">{movie.overview}</p>
                  <p className="text-xs text-gray-400">
                    Genres:{' '}
                    {movie.genre_ids
                      .map((id) => genreMap[id] || 'Unknown')
                      .join(', ')}
                  </p>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-red-500 font-semibold">
                      ⭐ {movie.vote_average.toFixed(1)}
                    </span>
                    <span className="text-gray-400">{movie.release_date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div className="mt-12 flex justify-center space-x-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-md border border-gray-600 text-sm ${
                  currentPage === i + 1
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllMoviePage;
