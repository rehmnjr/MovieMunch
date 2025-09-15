const express = require('express');
const router = express.Router();
const { fetchAllMovies } = require('../controllers/movie_controller');

// Route: GET /movies
router.get('/movies', fetchAllMovies);

module.exports = router;
