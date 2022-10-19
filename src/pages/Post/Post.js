import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import Context from "../../common/context";

function Post({ getInputData }) {
  const { lang, changeLang } = useContext(Context)
  //let name="Luba"
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState("");
  const ref = useRef(null);
  // const ref2 = useRef(null);
  function changeHandler() {
    setInputData(ref.current.value);
  }
  // function changeHandler2() {
  //   setInputData(ref2.current.value)
  // }
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
    <div className="container">
      <button onClick={()=>changeLang(lang)}>{lang}</button>


      <div>
        <input ref={ref} onChange={() => changeHandler()} />
        <button onClick={() => getInputData(inputData)}>getData</button>
        {/* <input ref={ref2} onChange={changeHandler2} />
      <p>{inputData}</p> */}

        <ul>
          {posts.map((item, i) => (
            <li key={item.id}>{i + 1}. {item.title}</li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default Post;
