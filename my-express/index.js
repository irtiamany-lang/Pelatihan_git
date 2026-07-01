const express = require('express');
const app = express();
const port = 3000;

let movies = [
    {id: 1, title: "Spider-Man", year: 2001},
    {id: 1, title: "John Wick", year: 2014},
    {id: 1, title: "The Avengers", year: 2012},
    {id: 1, title: "Logan", year: 2017}
]

const getMovies = (req, res) => {
    let {title} = req.query
    
    
    if(title == undefined){
        title = ""
    }
console.log(title)
    let result = ""

    movies.forEach((item, index) => {
        if(item.title.toLowerCase().includes(title)){
            result += `<H1>${index + 1}. <br>tittle : ${item.title} : ${item.year}`
        }
})

        if (result === ""){
        res.send(`<h1>Data tidak ditemukan.<hbr>`)
        }
        res.send(result);
   
  } 
    
const getMoviesbyId = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })

res.send(`${hasil.id}`)
}


const getMoviesApi = (req, res) => {
    let {title} = req.query
    console.log(title)
    if(title == undefined){
        title = ""
    }
    let result = movies.filter((item, index) =>{
      return item.title.toLowerCase().includes(title.toLowerCase())
    })
       res.json(result)
   
  } 
    
const getMoviesbyId = (req, res) => {
  let {id} = req.params;
  let hasil = movies.find((item) => {
    return item.id === Number(id)
  })

res.send(`<h3>Title: ${hasil.title} <br> Year: ${hasil.year}</br>`)
}



app.get('/movies', getMovies);
app.get('/moviesbyId', getMoviesbyId);

app.get('api/movies', getMovies);
app.get('/movies/:id', getMoviesbyId);


    
     










app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});