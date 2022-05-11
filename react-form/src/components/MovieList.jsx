import AddMovieForm from "./AddMovieForm"

const MovieList = () => {
  const data = [
    {
      id: "1a",
      movieName: "Ironman",
      year: 2008,
      wonOscar: false,
      genre: "Action",
    },
    {
      id: "1b",
      movieName: "Batman",
      year: 2006,
      wonOscar: true,
      genre: "Action",
    },
    {
      id: "1c",
      movieName: "Harry Potter",
      year: 2001,
      wonOscar: false,
      genre: "Fantasy",
    },
  ]

  return (
    <div>
      <h2>Movie List</h2>
      <AddMovieForm movies={data} />

      <ul style={{ textAlign: "left" }}>
        {data.map((movie) => {
          return (
            <li key={movie.id}>
              {movie.movieName}({movie.year}) - {movie.genre} -{" "}
              {movie.wonOscar ? "Oscar" : "No Oscar"}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MovieList
