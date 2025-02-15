import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <button
        className="navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link reloadDocument className={`nav-link ${styles.navLink}`} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link reloadDocument className={`nav-link ${styles.navLink}`} to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link reloadDocument className={`nav-link ${styles.navLink}`} to="/experience">
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
