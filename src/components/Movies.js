import React from "react";
import { movies } from "../data";
import { useState } from "react"



function Movies() {
  
  const [movie, setMovies] = useState(movies)

  const genres = movie.genres

  return (
  <div>{/*{code here}*/}
    <h1>Movies Page</h1>
    {movie.map((movie) => {
      return (
        <div key={movie.title} >
          <h3>Name: {movie.title}</h3>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre) => {
              return (
                <li key={genre}> {genre} </li>
              )
            })}
          </ul>

        </div>
      )
    })}
  </div>
  )
}

export default Movies;
