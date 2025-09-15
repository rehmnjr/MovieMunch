// pages/Reviews.jsx

import React from 'react';

const reviews = [
  {
    title: 'Oppenheimer',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjA5ZTI1YjctYjFkOS00Mzk1LTlhYjMtNzcxNTE2MzE2YTk1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 9.2,
    summary:
      'A hauntingly beautiful biopic that explores the mind behind the atomic bomb. Christopher Nolan delivers a masterclass in tension and storytelling.',
  },
  {
    title: 'Dune: Part Two',
    poster:
      'https://m.media-amazon.com/images/M/MV5BZjdkNTM1NzYtOGE4NS00YjRlLWJmZDgtOGYwYmQ3NzZkNGNkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg',
    rating: 8.7,
    summary:
      'A visually stunning continuation of Denis Villeneuve’s space epic. Dune: Part Two is ambitious, emotional, and cinematic on every level.',
  },
  {
    title: 'Barbie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2NlM2U1M2YtOTBhYy00YzI4LTgzNGEtYzNlNzQzN2Y1ZDkzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
    rating: 7.6,
    summary:
      'Barbie is surprisingly profound, funny, and full of social commentary wrapped in pink perfection. Greta Gerwig redefines expectations.',
  },
];

const ReviewPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-800 text-white pt-24 px-6 sm:px-10 lg:px-20">
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
        Latest <span className="text-red-500">Movie Reviews</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((movie, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{movie.summary}</p>
              <div className="flex justify-between items-center">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ {movie.rating}/10
                </span>
                <a
                  href="#"
                  className="text-red-400 hover:underline text-sm"
                >
                  Read full review →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewPage;
