import { useState } from "react"

const AddMovieForm = ({ movies }) => {
  const defaultFormData = {
    id: "2b",
    movieName: "Aquaman",
    year: 1900,
    wonOscar: true,
    genre: "Drama",
  }

  const [newMovie, setNewMovie] = useState(defaultFormData)

  const changeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submit")
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Movie Name</label>
        <input
          type="text"
          value={newMovie.movieName}
          onChange={changeHandler}
          name="movieName"
        />

        <label>Release Year</label>
        <input
          type="number"
          value={newMovie.year}
          onChange={changeHandler}
          name="year"
        />

        <label>Won Oscar</label>
        <input
          type="checkbox"
          value={newMovie.wonOscar}
          onChange={changeHandler}
          name="wonOscar"
        />

        <label>Genre: </label>
        <select value={newMovie.genre} onChange={changeHandler} name="genre">
          <option>Action</option>
          <option>Comedy</option>
          <option>Drama</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AddMovieForm
