require('dotenv').config();


const API_URL = "https://api.themoviedb.org/3/discover/movie";
const LIMIT = 4;

const fetchAllMovies = async (req,res) => {
  let allMovies = [];
  for (let page = 1; page <= LIMIT; page++) {
    try {
      const response = await fetch(`${API_URL}?page=${page}&sort_by=popularity.desc`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`,
            Accept: "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(`Fetched page ${page} with ${data.results.length} movies`);
      allMovies.push(...data.results);
      res.send({ status: 1, movie: allMovies});
      await new Promise((resolve) => setTimeout(resolve, 200));
    } catch (err) {
      console.log("Fetching error:", err);
      res.status(500).send({ status: 0, error: "Failed to fetch movie data." });
    }
  }
};

module.exports ={fetchAllMovies}