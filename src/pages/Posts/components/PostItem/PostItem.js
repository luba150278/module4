import { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import cn from 'classnames';
import DisplayData from '../../../../components/DispalyData/DisplayData';
import InputBlock from '../../../../components/InputBlock/InputBlock';
import styles from './PostItem.module.scss'

function PostItem({ item }) {
  //Робимо прив'язку input, який знаходиться в дочірньому компоненті InputBlock до батьківського компонента. Використовуємо хук useRef()
  const ref = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const changeHandler = (event) => setInputValue(event.target.value); //відстежуємо зміни в input, який знаходиться в дочірньому компоненті InputBlock
  
  const [displayData, setDisplayData] = useState("");
  //Функція яка отримує данні з дочірнього компонента InputBlock по натисканню кнопки
  function getInputData(data) {
    setDisplayData(data);
  }

  const data = {
    getInputData, ref, inputValue, changeHandler
  }
  return (
    //Link - функція бібліотеки react-router-dom для навігації (не використовуємо для цього <a></a> !!! )
    <li className={cn("card", styles.card)}>
      <Link to={`/post/${item.id}`}>{item.title}</Link> 
      <DisplayData displayData={displayData} isPadding={false} />
      <InputBlock data={data} />
    </li>
  );
}

export default PostItem;
