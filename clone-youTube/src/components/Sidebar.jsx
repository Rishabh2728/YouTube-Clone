import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const menuItems = [
  { label: "Home", to: "/" },
  { label: "Watch", to: "/watch/demo-video" },
  { label: "Upload", to: "/upload" },
  { label: "Profile", to: "/profile" },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
