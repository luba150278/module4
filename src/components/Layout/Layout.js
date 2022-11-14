import cn from "classnames";
import { Component } from "react";

import content from "../../common/content";
import Context from "../../common/context";
import Header from "../Header/Header";
import styles from "./Layout.module.scss";

class Layout extends Component {
  static contextType = Context;

  render() {
    const { lang } = this.context;
    const footerData = content(lang).footer; //Отрмуємо контент для футера в залежності від мови
    const { children } = this.props;
    return (
      <div className={styles.body}>
        <Header />
        <section>
          <div className="container">{children}</div>
        </section>
        <footer>
          <div className="container">
            <div className={cn(styles["footer-wrap"], styles.wrap)}>
              {footerData}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;
