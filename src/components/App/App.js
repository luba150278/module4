import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Posts from "../../pages/Posts/Posts";
import Post from "../../pages/Post/Post"
import NotFound from "../../pages/NotFound/NotFound";
import { ContextProvider } from "../../common/context";

function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<Post/>} />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
