import React from "react";
import { actors } from "../data";
import { useState } from "react"

function Actors() {

  const [actor, setActor] = useState(actors)

  return (
  <div>
    <h1>Actors Page</h1>
    {actor.map((actor) => {
      return (
        <div key={actor.name}>
          <h3>{actor.name}</h3>
          <p>Movies:</p>
          <ul>
            {actor.movies.map((movie) => {
              return (
                <li key={movie}> {movie}</li>
              )
            })}
          </ul>
        </div>
      )
    })}
  </div>
  ) 
}

export default Actors;
