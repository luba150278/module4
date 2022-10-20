import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import cn from "classnames";

import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout/Layout";
import InputBlock from "../../components/InputBlock/InputBlock";
import DisplayData from "../../components/DispalyData/DisplayData";
import styles from "./Post.module.scss";

function Post() {
  const id = useParams().id || ""; //Функція бібліотеки react-router-dom, яка дозволяє отримувати параметри (id ы нашому випадку) з дінамічного URL

  //Звертаємося за данними про пост на сервер за допомогою хука useEffect , присвоюємо данні змінній postData
  const [postData, setPostData] = useState({});
  //Зверніть увагу в массиві залежносей хука вказан id!!!
  useEffect(() => {
    async function getPostData() {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPostData(response.data);
    }
    getPostData();
  }, [id]);

  const ref = useRef(null); //Робимо прив'язку input, який знаходиться в дочірньому компоненті InputBlock до батьківського компонента. Використовуємо хук useRef()

  const [inputValue, setInputValue] = useState(""); //данні введені в input
  const changeHandler = (event) => setInputValue(event.target.value); //відстежуємо зміни в input, який знаходиться в дочірньому компоненті InputBlock

  const [displayData, setDisplayData] = useState("");
  //Функція яка отримує данні з дочірнього компонента InputBlock по натисканню кнопки
  function getInputData(data) {
    setDisplayData(data);
  }
  const data = {
    getInputData,
    ref,
    inputValue,
    changeHandler,
  };

  return (
    <Layout>
      <div className={cn("innerContent", styles.content)}>
        <Card style={{ width: "300px" }}>
          <Card.Img
            variant="top"
            src="https://picsum.photos/200/300" //Рандомна картинка для фану :-)
            style={{ height: "250px" }}
          />
          <Card.Body>
            <Card.Title>{postData.title}</Card.Title>
            <Card.Text>{postData.body}</Card.Text>
          </Card.Body>
          <DisplayData displayData={displayData} isPadding />
          <InputBlock data={data} />
        </Card>
      </div>
    </Layout>
  );
}

export default Post;
