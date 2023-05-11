import { NavLink } from "react-router-dom";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.wild}>© Wild Code School 2023</div>
      <div>
        <ul className={styles.list}>
          <li className={styles.nav}>
            <NavLink to="/Rules">Rules</NavLink>
          </li>
          <li className={styles.nav}>
            <NavLink to="/About-us">About-us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
