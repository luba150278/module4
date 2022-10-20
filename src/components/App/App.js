import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../../pages/Main/Main";
import Posts from "../../pages/Posts/Posts";
import NotFound from "../../pages/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts" element={<Posts />} />
        <Route element={<NotFound/>} path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
