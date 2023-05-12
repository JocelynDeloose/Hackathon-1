import { Outlet, NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

function Navbar() {
  return (
    <>
      <nav className={style.navbar}>
        <NavLink to={{ pathname: "/" }} className={style.logonav}>
          Bloody Castle
        </NavLink>
        <ul className={style.ul_navbar}>
          <li>
            <NavLink to={{ pathname: "ActivityPage" }}>Activités</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "ReservationPage" }}>Réservation</NavLink>
          </li>
          <li>
            <NavLink to={{ pathname: "ContactPage" }}>Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
