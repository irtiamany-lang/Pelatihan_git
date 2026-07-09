// const { getMovies } = require("../controllers/moviesConrollers")

const express = require ("express")
const movieRouter = express.Router()

// const {
//     getMovies,
//     getMoviesId,
//     getMoviesApi,
//     getMoviesbyIdApi,
//     timeMiddleware,
//     tokenMiddleware,
//     checkMovieIdMiddleware
// }  = require("../controllers/moviesConrollers.js")
// movieRouter.get('/movies', getMoviesApi)
// movieRouter.get('/movies/:id',getMoviesbyIdApi)


const {readMovie, readMovieByid, creatMovie, updateMovie, deleteMovie} = require('../controllers/moviesConrollers.js')
const {authJWT} = require("../middleware/auth.js")

movieRouter.post('/movies', authJWT, readMovie)
movieRouter.get('/movie/:id', readMovieByid)

movieRouter.get('/movie/', creatMovie)
movieRouter.put('/movie/:id', updateMovie)

movieRouter.delete('/movie/:id',deleteMovie)

module.exports = {movieRouter}
