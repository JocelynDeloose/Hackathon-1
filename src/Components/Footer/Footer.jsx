import { NavLink, Outlet } from "react-router-dom";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.wild}>© Wild Code School 2023</div>
        <ul className={styles.list}>
          <li className={styles.nav}>
            <NavLink to={{ pathname: "rules" }}>Règles</NavLink>
          </li>
          <li className={styles.nav}>
            <NavLink to={{ pathname: "aboutus" }}>A propos</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default Footer;
