const express = require('express');
const { movieRouter } = require('./srs/routes/movieRouter');
const userRouter = require('../my-express crud-mysql/srs/routes/userRouter');
const app = express();
const port = 3000;


app.use('/api', movieRouter)

// app.get('/api/movies/:id',movieRouter)


app.get('/', (req, res) => {
  res.send('Hello dunia!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// app.get('/movies', getMovies);
// app.get('/movies/:id', getMoviesId);

// app.get('api/movies', getMoviesApi);
// app.get('/apimovies/:id', getMoviesbyIdApi);
