import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import styles from "./Posts.module.scss";
import PostItem from "./components/PostItem/PostItem";
import ShowModal from "./components/ShowModal/ShowModal";
import { Button } from "react-bootstrap";

function Posts() {
  //Звертаємося за данними про пост на сервер за допомогою хука useEffect, присвоюємо данні змінній posts
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data.slice(0, 20));
    }
    getPosts();
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Layout>
      <div className="innerContent">
        <Button onClick={()=>{handleShow()}} variant="primary">Add new post</Button>
        <ShowModal show={show} handleShow={handleShow} handleClose={handleClose} />
        <ul className={styles.posts}>
          {posts.map((item) => (
            <PostItem item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default Posts;
