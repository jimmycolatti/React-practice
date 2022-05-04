import { useState } from "react"

// import the array of movie objects
import moviesData from "../movies-data.json"

function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData)

  const deleteMovie = (movieId) => {
    // console.log(movieId)

    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId
    })

    setMovies(filteredMovies)
  }

  return (
    <div>
      <h2>Movie List</h2>

      {movies.map((movie) => {
        return (
          <div key={movie._id}>
            <h3>{movie.title} </h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>
            <button onClick={() => deleteMovie(movie._id)}> Delete </button>
          </div>
        )
      })}
    </div>
  )
}

export default MovieList
