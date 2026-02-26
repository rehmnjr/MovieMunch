const express = require('express');
const cors =require('cors');
const app =express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const movieRoutes = require('./routes/movie_routes');
app.use('/', movieRoutes);


app.get('/', (req, res) => {
  res.send("Backend is working baby...");
});

module.exports = app;
