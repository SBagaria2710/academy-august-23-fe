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

module.exports = router;
