import { Component } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

import Context from "../../common/context";
import content from "../../common/content";
import { Wrap, Menu, Switch } from "./Header.styles";

class Header extends Component {
  static contextType = Context;

  render() {
    const { lang, changeLang } = this.context;
    const menu = content(lang).menu;

    return (
      <header>
        <div className="container">
          <Wrap>
            <Menu>
              {menu.map((item, i) => (
                //функція бібліотеки react-router-dom для навігації (не використовуємо для цього <a></a> !!! )
                <Link to={item.link} key={`${item.title}-${i}`}>
                  {item.title}
                </Link>
              ))}
            </Menu>
            <Switch>
              UA
              <Form.Check
                type="switch"
                id="lang"
                onChange={() => changeLang(lang)} //Відстежуємо зміну мови по зміні положення світчера
              />
              EN
            </Switch>
          </Wrap>
        </div>
      </header>
    );
  }
}

export default Header;
