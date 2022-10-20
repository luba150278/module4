import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import cn from "classnames";
import styles from "./Posts.module.scss";
import InputBlock from "../../components/InputBlock/InputBlock";
import DisplayData from "../../components/DispalyData/DisplayData";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState("");
  function getInputData(data) {
    setInputData(data);
  }

  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 20));
    }
    getPosts();
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="innerContent">
          <ul className={styles.posts}>
            {posts.map((item, i) => (
              <li key={item.id} className={cn("card", styles.card)}>
                <Link to={`/post/${item.id}`} >
                  {item.title}
                </Link>
                <DisplayData inputData={inputData} />
                <InputBlock getInputData={getInputData} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default Posts;
