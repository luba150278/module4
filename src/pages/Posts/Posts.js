import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";

import Layout from "../../components/Layout/Layout";
import Context from "../../common/context";

function Posts({ getInputData }) {
  console.log(useContext(Context));
  //const { lang, changeLang } = useContext(Context);
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState("");
  const ref = useRef(null);

  function changeHandler() {
    setInputData(ref.current.value);
  }

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
    }
    getPosts();
  }, []);
  return (
    <Layout>
      <div className="container">
        {/* <button onClick={() => changeLang(lang)}>{lang}</button> */}

        <div>
          <input ref={ref} onChange={() => changeHandler()} />
          <button onClick={() => getInputData(inputData)}>getData</button>
          <ul>
            {posts.map((item, i) => (
              <li key={item.id}>
                {i + 1}. {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
