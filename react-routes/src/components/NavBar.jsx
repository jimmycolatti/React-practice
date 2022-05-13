import { NavLink } from "react-router-dom"

const styles = {
  display: "flex",
  justifyContent: "space-evenly",
}

const activeStyle = ({ isActive }) => {
  return { color: isActive ? "Red" : "Green" }
}

const NavBar = () => {
  return (
    <>
      <div style={styles}>
        <NavLink to="/" style={activeStyle}>
          Home
        </NavLink>
        <NavLink to="profile" style={activeStyle}>
          Profile
        </NavLink>
        <NavLink to="tasks" style={activeStyle}>
          Tasks
        </NavLink>
      </div>
      <hr />
    </>
  )
}

export default NavBar
