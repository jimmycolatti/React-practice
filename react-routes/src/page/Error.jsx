import { Link } from "react-router-dom"
import Header from "../components/Header"

const Error = () => {
  return (
    <div>
      <Header text={"404 Error Page"} />
      <button>
        <Link to="/">Go to home</Link>
      </button>
    </div>
  )
}

export default Error
