// let movies = [
//     {id: 1, title: "spiderman", year: 2002},
//     {id: 2, title: "Jhon wick", year: 2014},
//     {id: 3, title: "The Avegers", year: 2012},
//     {id: 4, title: "Logan", year: 2017}
// ]

// const getMovies = (req, res) => {
//   let {title} = req.query 

//    console.log(title)

//    if(title == undefined){
//    title = ""
//    }

//    let result = ""

//    movies.forEach((item, index) => {
//     if(item.title.toLowerCase().includes(title)) {
//     result += `<h3> ${index+1}.</br>tittle : ${item.title}<br>year : ${item.year}`
//     }
//     // if (result === "")

//     // res.send(`<h3>Data tidak ditemukan.<hbr>`)
//   })
//   res.send(result);
// }


// const getMoviesId = (req, res) => {
//   let {id} = req.params;
//   let hasil = movies.find((item) => {
//     return item.id === Number(id)
//   })
// // if(hasil){
// //   return res.send("<h3>Movie tidak dapat ditemukan</br>")
// // }
//   res.send(`<h3>Title: ${hasil.title} <br> Year: ${hasil.year}</br>`)
// }







// const getMoviesApi = (req, res) => {
//   let {title, year} = req.query 
//   // console.log(title)

//   if(title == undefined){
//    title = ""
//   }

//   // let {id, title} = req.params;
//    let result = movies.filter((item, index) => {
//     return (item.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()) && (!year || item.year == year)
//    )
//   })
//   if(!result){
//     res.json("<h3>Movie tidak dapat ditemukan</br>")
//   }
//    res.json(result)
//   }

  
// //   
// // }

// const getMoviesbyIdApi = (req, res) => {
// let {id} = req.params;
// let hasil = movies.find((item) => {
//   return item.id === Number(id)
// })
// res.json(hasil)
// }

// const loggerMiddleware = (req, res, next) => {
//   console.log("Ada request masuk")
//   next() 
// }

// const tokenMiddleware = (req, res, next) => {
//   let {token} = req.query

//   if (token === "12345"){
//     next()
//   } else {
//     res.status(401).json({
//       message: "Token tidak valid"
//     })
//   }
// }

// const checkMovieIdMiddleware = (req, res, next) => {
//   let { id } = req.params
//   let result = movies.find(item => item.id === Number(id))
//   if (result) {
//     next()
//   } else {
//     res.status(404).json({ message: "Movie tidak ditemukan"})
//   }
// }

// const timeMiddleware = (req, res, next) => {
//   console.log(new Date());
//   next()
// }

// module.exports =
// {
//     getMovies,
//     getMoviesId,
//     getMoviesApi,
//     getMoviesbyIdApi,
//     timeMiddleware,
//     tokenMiddleware,
//     checkMovieIdMiddleware
// }




const connectionPool = require("../config/db.js")

const readMovie = (req, res) => {
  let queryText = "SELECT * FROM tb_movies"

  connectionPool.query(queryText, (err, data) => {
    if(err){
      console.log(err)
      return
    }
    res.json(data)
  })
}



const readMovieByid = (req, res) => {
  let {id} = req.params
  let queryText = `SELECT * FROM tb_movies WHERE id_tb_movie = ${id}`

  connectionPool.query(queryText, (err, data) => {
    if(err){
      console.log(err)
      return
    }
    res.json(data)
  })
}

const creatMovie = (req, res) => {
  let {title, year} = req.body
  let queryText = `INSERT INTO tb_movies (title_tb_movie, year_tb_movie)
  VALUES ("${title}", ${year})`

  connectionPool.query(queryText, (err, data) => {
    if(err){
      console.log(err)
      return
    }
    res.json({'Message' : "Berhasil"})
  })
}


const updateMovie = (req, res) => {
  let {title, year} = req.body
  let {id} = req.params
  let queryText = `UPDATE tb_movies 
                  SET title_tb_movie = ?, year_tb_movie = ?
                  WHERE id_tb_movie = ?`

connectionPool.query(queryText, [title, year, id], (err) => {
  if(err){
    console.log(err)
    return
  }
  res.json({'Message' : "Berhasil"})
})
}



const deleteMovie = (req, res) => {
  let {id} = req.params
  let queryText = `DELETE FROM tb_movies 
                  WHERE id_tb_movie = ?`

connectionPool.query(queryText, [id], (err) => {
  if(err){
    console.log(err)
    return
  }
  res.json({'Message' : "Berhasil"})
})
}

module.exports = {readMovie, readMovieByid, creatMovie, updateMovie, deleteMovie}


