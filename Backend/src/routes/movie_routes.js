const express = require('express');
const router = express.Router();
const { fetchAllMovies,getTrendingMovies, getMovieByID} = require('../controllers/movie_controller');

// Route: GET /movies
router.get('/movies', fetchAllMovies);
router.get('/movies/trending/:timeWindow', getTrendingMovies);
router.get('/movies/:id',getMovieByID);



module.exports = router;
