import { useContext } from "react";

import content from "../../common/content";
import Context from "../../common/context";
import Layout from "../../components/Layout/Layout";
import Data from "../../components/CheckTypes/Data";

function Main() {
  // Приймаємо глобальне значення lang за допомогою хука useContext
  const { lang } = useContext(Context);
  // Отримуємо конент для сторінки в залежності від мови
  const contentData = content(lang).main;
  
  const link = '/posts';
  const body = 'А ці данні ідуть з батька';
  const arr = [1,2,3,4]
  
  
  return (
    <Layout>
      <div className="innerContent">
        <h1>{contentData.title}</h1>
        <p>{contentData.content}</p>
      </div>
      <Data link={link} body={body} arr={arr} />
    </Layout>
  );
}

export default Main;
