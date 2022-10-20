import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

import cn from "classnames";
import styles from "./Post.module.scss";
import InputBlock from "../../components/InputBlock/InputBlock";
import DisplayData from "../../components/DispalyData/DisplayData";

function Post() {
  const id = useParams().id || "";
  const [data, setData] = useState({});

  const [inputData, setInputData] = useState("");
  function getInputData(data) {
    setInputData(data);
  }

  useEffect(() => {
    async function getPostData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setData(response.data);
    }
    getPostData();
  }, [id]);

  return (
    <Layout>
      <div className="container">
        <div className={cn("innerContent", styles.content)}>
          <Card style={{ width: "300px" }}>
            <Card.Img
              variant="top"
              src="https://picsum.photos/200/300"
              style={{ height: "250px" }}
            />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>{data.body}</Card.Text>
            </Card.Body>
            <DisplayData inputData={inputData} />
            <InputBlock getInputData={getInputData} />

          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
