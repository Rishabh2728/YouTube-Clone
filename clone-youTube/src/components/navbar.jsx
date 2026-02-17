import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.left}>
        <button className={styles.iconButton} type="button" aria-label="Menu">
          <span className={styles.icon}>☰</span>
        </button>
        <Link to="/" className={styles.brand}>
          <span className={styles.logo}>YT</span>
          <span className={styles.brandText}>YouTube</span>
        </Link>
      </div>

      <form className={styles.searchWrap}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchInput}
          aria-label="Search videos"
        />
        <button className={styles.searchButton} type="submit" aria-label="Search">
          Search
        </button>
      </form>

      <div className={styles.right}>
        <Link className={styles.actionButton} to="/upload">
          Upload
        </Link>
        <Link className={styles.avatar} to="/profile" aria-label="Profile">
          R
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
