import { NavLink } from "react-router-dom";

export default function Navbar() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : null);

  return (
    <div className="layout__navbar">
        <nav className="navbar__nav">
          <NavLink
            activeclassname="active"
            className="navbar__generaciones"
            to="/"
          >
            <img className="navbar__img1" src="/pokemon.svg"></img>
          </NavLink>
          <NavLink activeclassname="active" to="/generaciones">
            <img className="navbar__img2" src="/generations.png"></img>
          </NavLink>
        </nav>

      <span className="navbar__span"></span>
    </div>
  );
}
