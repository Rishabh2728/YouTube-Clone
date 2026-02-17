import Navbar from "./navbar";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.appShell}>
      <Navbar />
      <main className={styles.mainContent}>{children}</main>
    </div>
  );
}

export default Layout;
