import "./App.css"
import Products from "./components/Example-listOfStrings-Products"
import ProjectList from "./components/Example-listOfObjects-ProjectList"
import MovieList from "./components/MoviesList"

function App() {
  return (
    <div className="App">
      <Products />
      <hr />
      <ProjectList />
      <hr />
      <MovieList />
    </div>
  )
}

export default App
