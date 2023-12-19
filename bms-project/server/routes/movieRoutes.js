const router = require("express").Router();
const Movie = require("../models/movieModel");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/add-movie", authMiddleware, async (request, response) => {
  try {
    const newMovie = new Movie(request.body);
    await newMovie.save();
    response.status(200).send({
      success: true,
      message: "Movie added successfully"
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.get("/get-all-movies", authMiddleware, async (_, response) => {
  try {
    const movies = await Movie.find();
    response.send({
      success: true,
      message: "Movies Fetched Successfully",
      data: movies
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.put("/update-movie", authMiddleware, async (request, response) => {
  try {
    await Movie.findByIdAndUpdate(request.body.movieId, request.body);
    response.send({
      success: true,
      message: "Movie Updated Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.delete("/delete-movie", authMiddleware, async (request, response) => {
  try {
    await Movie.findByIdAndDelete(request.query.movieId);
    response.send({
      success: true,
      message: "Movie Deleted Successfully",
    });
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

router.get("/get-movie-by-id/:movieId", authMiddleware, async (request, response) => {
  try {
    const movie = await Movie.findById(request.params.movieId);
    if (movie) {
      response.status(200).send({
        success: true,
        message: "Movie Fetched Successfully",
        data: movie
      });
    } else {
      response.status(404).send({
        success: false,
        message: "Movie Not found"
      });
    }
  } catch (err) {
    response.status(500).send({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
