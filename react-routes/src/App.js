import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar"
import Home from "./page/Home"
import Profile from "./page/Profile"
import TaskDetail from "./page/TaskDetail"
import Tasks from "./page/Tasks"
import Error from "./page/Error"

function App() {
  const [user, setUser] = useState("Jimmy")

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile user={user} />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="tasks/:taskId" element={<TaskDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
