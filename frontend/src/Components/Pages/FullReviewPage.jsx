// pages/FullReview.jsx

import React from 'react';
import ReviewPage from './ReviewPage'
const FullReviewPage = () => {
  const movie = {
    title: 'Oppenheimer',
    banner:
      'https://lifestylewithsarah.com/wp-content/uploads/2023/07/banner.jpg?w=900',
    poster:
      'https://www.universalpictures.co.uk/tl_files/content/movies/oppenheimer/oppenheimer_header-mobile.jpg',
    rating: 9.2,
    genre: 'Biography / Drama / History',
    releaseDate: 'July 21, 2023',
    duration: '3h 0m',
    director: 'Christopher Nolan',
    cast: [
      { name: 'Cillian Murphy', role: 'J. Robert Oppenheimer' },
      { name: 'Emily Blunt', role: 'Katherine Oppenheimer' },
      { name: 'Matt Damon', role: 'Leslie Groves' },
      { name: 'Robert Downey Jr.', role: 'Lewis Strauss' },
    ],
    Overview: `
      "Oppenheimer" is a cinematic masterpiece that explores the psychological, moral, and scientific struggles of the man behind the atomic bomb. Christopher Nolan's direction is tight, immersive, and intense from start to finish. Cillian Murphy gives a hauntingly brilliant performance, capturing the torment and complexity of Oppenheimer. The film combines a gripping narrative with stunning visuals and a mind-bending soundscape that pulls you into the era's urgency and ethical quandaries.

      The pacing is deliberate but never slow, building tension scene after scene. Ludwig Göransson’s score adds another layer of dread and intensity. With strong performances across the board, especially from Downey Jr. and Emily Blunt, this film is not just a historical biopic—it's a profound cinematic event.

      A film that demands to be experienced in theaters.
    `,
  };

  return (
    <section className="bg-black text-white min-h-screen">
      {/* Banner */}
      <div
        className="h-72 sm:h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${movie.banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 -mt-36 sm:-mt-48 px-6 sm:px-10 lg:px-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Poster */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-64 rounded-lg shadow-lg border-2 border-gray-700"
            />
          </div>

          {/* Info + Review */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <p className="text-sm text-gray-400 mb-4">{movie.genre}</p>

            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-red-600 px-3 py-1 text-sm rounded-full">
                ⭐ {movie.rating}/10
              </span>
              <span className="text-gray-400 text-sm">
                🎬 Directed by <strong>{movie.director}</strong>
              </span>
            </div>

            <div className="flex gap-6 mb-6 text-sm text-gray-400">
              <p>📅 Release: {movie.releaseDate}</p>
              <p>⏱️ Duration: {movie.duration}</p>
            </div>

            <h2 className="text-2xl font-semibold mb-3">Full Overview</h2>
            <p className="text-gray-300 whitespace-pre-line leading-relaxed">
              {movie.Overview}
            </p>

            {/* Cast */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4">Main Cast</h3>
              <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
                {movie.cast.map((actor, index) => (
                  <li
                    key={index}
                    className="bg-gray-900 p-4 rounded-md shadow-sm"
                  >
                    <p className="font-semibold">{actor.name}</p>
                    <p className="text-sm text-gray-400 italic">
                      as {actor.role}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ReviewPage/>
    </section>
  );
};

export default FullReviewPage;
