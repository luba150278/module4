import { useState } from "react";
import Post from './pages/Post/Post';
import Layout from './components/Layout/Layout';
import { ContextProvider } from './common/context';

import './App.css';

function App() {
  // const { lang } = useContext(Context);
  const [data, setData] = useState('');

  function getInputData(data) {
    setData(data);
  }
  const [lang, setLang] = useState(
    window.localStorage.getItem("lang")
      ? window.localStorage.getItem("lang")
      : "UA"
  );
  const changeLang = (currentLang) => {
    if (currentLang === "UA") {
      window.localStorage.setItem("lang", "EN");
    } else {
      window.localStorage.setItem("lang", "UA");
    }
    setLang(window.localStorage.getItem("lang"));
  };
  return (
    <Layout>
      <ContextProvider value={{ lang, changeLang }}>
     
      <div>data: {data}</div>
      <Post getInputData={getInputData} />
      </ContextProvider>
    </Layout>
  );
}

export default App;
