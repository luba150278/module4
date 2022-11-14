import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post/Post";
import NotFound from "../../pages/NotFound/NotFound";
import { ContextProvider } from "../../common/context";

class App extends Component {
  // Створюємо змінну lang - буде передавати мову в будь-який компонент, через конекст
  // Створюємо функцію changeLang(currentLang), яка буде відстежувати зміну мови користувачем
  // window.localStorage - звертаємость до локального хранилища браузера та зберігаєм інформацію про обрану мову
  state = {
    lang: window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "UA"
  }

  changeLang = (currentLang) => {
    if (currentLang === "UA") {
      window.localStorage.setItem("lang", "EN");
    } else {
      window.localStorage.setItem("lang", "UA");
    }
    this.setState((prevState) => ({ lang:  window.localStorage.getItem("lang")}))
  };

  render() {
    const { lang } = this.state
    const { changeLang } = this
    return (
      //ContextProvider - передає конекстні об'єкти (lang, changeLang ) глобально
      // BrowserRouter, Routes, Route - функції бібліотеки react-router-dom
      <ContextProvider value={{ lang, changeLang }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    );
  }
}

export default App;
