import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Context from "../../common/context";
import content from "../../common/content";
import styles from "./Header.module.scss";

function Header() {
  const { lang, changeLang } = useContext(Context);
  const menu = content(lang).menu;
  return (
    <header>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.menu}>
            {menu.map((item, i) => (
              <Link to={item.link} key={`${item.title}-${i}`}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className={styles.switch}>
            UA
            <Form.Check
              type="switch"
              id="lang"
              onChange={() => changeLang(lang)}
            />
            EN
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
