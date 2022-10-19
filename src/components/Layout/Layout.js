// import { useState } from "react";
// import { ContextProvider } from "../../common/context";
import styles from "./Layout.module.css";

function Layout({ children }) {

  return (
    <>
      <header className={styles.header}>menu</header>
      <section>
        <div className="container">{children}</div>
      </section>
      <footer>footer</footer>
    </>
  );
}

export default Layout;
