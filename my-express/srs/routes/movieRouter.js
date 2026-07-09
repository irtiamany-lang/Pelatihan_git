// const { getMovies } = require("../controllers/moviesConrollers")

const express = require ("express")
const movieRouter = express.Router()

const {
    getMovies,
    getMoviesId,
    getMoviesApi,
    getMoviesbyIdApi,
    timeMiddleware,
    tokenMiddleware,
    checkMovieIdMiddleware
}  = require("../controllers/moviesConrollers.js")

movieRouter.get('/movies', getMoviesApi)
movieRouter.get('/movies/:id',getMoviesbyIdApi)
module.exports = {movieRouter}
