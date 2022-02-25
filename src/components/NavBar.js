import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <nav className="NavBar">
        <NavLink to="/" end >Home</NavLink>
        <NavLink to="/apartments" end >Apartments</NavLink>
        <NavLink to="/apartments/create" end >Create</NavLink>
    </nav>
  )
}

export default NavBar;