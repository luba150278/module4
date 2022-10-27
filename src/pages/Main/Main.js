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
  const message = {
    title: 'dadasd',
    body: 'sdasdas'
  }
  
  return (
    <Layout>
      <div className="innerContent">
        <h1>{contentData.title}</h1>
        <p>{contentData.content}</p>
      </div>
      <Data link={link} message={message} />
    </Layout>
  );
}

export default Main;
