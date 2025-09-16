require('dotenv').config();
const NodeCache = require('node-cache');
const cache = new NodeCache();

const API_URL = "https://api.themoviedb.org/3/discover/movie";
const LIMIT = 4;

const fetchAllMovies = async (req, res) => {
  const cacheKey = 'allMovies';

  const cachedData = cache.get(cacheKey);
  if (cachedData) {
    console.log("Serving movies from cache");
    return res.status(200).json({ status: 1, movies: cachedData });
  }

  let allMovies = [];

  try {
    for (let page = 1; page <= LIMIT; page++) {
      const response = await fetch(`${API_URL}?page=${page}&sort_by=popularity.desc`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`TMDb API Error on page ${page}:`, errorText);
        return res.status(response.status).send({ status: 0, error: "TMDb API Error" });
      }

      const data = await response.json();
      console.log(`Fetched page ${page} with ${data.results.length} movies`);
      allMovies.push(...data.results);
      await new Promise((resolve) => setTimeout(resolve, 200));
    }

    cache.set(cacheKey, allMovies, 600);

    res.status(200).send({ status: 1, movies: allMovies });
  } catch (err) {
    console.error("Fetching error:", err);
    res.status(500).send({ status: 0, error: "Failed to fetch movie data." });
  }
};


const getTrendingMovies = async (req, res) => {
  const cacheKey = 'trendingMovies';
  const cachedData = cache.get(cacheKey);
  const {timeWindow} = req.params;
  if (cachedData) {
    console.log("Serving trending movies from cache");
    return res.status(200).json({ status: 1, count: cachedData.length, movies: cachedData });
  }

  try {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/${timeWindow}`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("TMDb Error:", errText);
      return res.status(response.status).json({ status: 0, error: "TMDb API Error" });
    }

    const data = await response.json();

    cache.set(cacheKey, data.results, 600);

    res.status(200).json({ status: 1, count: data.results.length, movies: data.results });
  } catch (err) {
    console.error("Fetching trending movies failed:", err);
    res.status(500).json({ status: 0, error: "Server error" });
  }
};


const getMovieByID = async (req, res) => {
  const {id} = req.params;

  try {
    const fetchRes = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
        Accept: "application/json",
      },
    });

    if (!fetchRes.ok) {
      const errorText = await fetchRes.text();
      console.error(`TMDB API Error: ${errorText}`);
      return res.status(fetchRes.status).send({ status: 0, error: "TMDB API Error" });
    }

    const data = await fetchRes.json();
    res.send({ status: 1, movie: data });
  } catch (err) {
    console.error("Error fetching movie by ID:", err);
    res.status(500).send({ status: 0, error: "Internal Server Error" });
  }
};

module.exports = {
  fetchAllMovies,
  getTrendingMovies,
  getMovieByID
};

