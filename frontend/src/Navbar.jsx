import { NavLink } from "react-router-dom";

export default function Navbar() {


  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        TrackingBot
      </NavLink>
      <ul>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about">
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}