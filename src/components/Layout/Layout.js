import { useState } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../common/context";
import cn from "classnames";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  const [lang, setLang] = useState(
    window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "UA"
  );
  //console.log(lang)
  const changeLang = (currentLang) => {
    if (currentLang === "UA") {
      window.localStorage.setItem("lang", "EN");
    } else {
      window.localStorage.setItem("lang", "UA");
    }
    setLang(window.localStorage.getItem("lang"));
  };
  return (
    <ContextProvider value={{ lang, changeLang }}>
      <header>
        <div className="container">
          <div className={cn(styles["header-wrap"], styles.wrap)}>
            <Link to="/">Home</Link>
            <Link to="*">Not Found</Link>
          </div>
        </div>
      </header>
      <section>
        <div className="container">{children}</div>
      </section>
      <footer>
        <div className="container">
          <div className={cn(styles["footer-wrap"], styles.wrap) }>footer</div>
        </div>
      </footer>
    </ContextProvider>
  );
}

export default Layout;
