import { NavLink, Outlet } from "react-router-dom";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.wild}>© Wild Code School 2023</div>
        <ul className={styles.list}>
          <li className={styles.nav}>
            <NavLink to={{pathname: "RulesPage"}}>Rules</NavLink>
          </li>
          <li className={styles.nav}>
            <NavLink to={{pathname: "About-us"}}>About-us</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </>
  );
}

export default Footer;
