import Navbar from "./navbar";
import Sidebar from "./Sidebar";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <div className={styles.appShell}>
      <Navbar />
      <div className={styles.pageBody}>
        <Sidebar />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
