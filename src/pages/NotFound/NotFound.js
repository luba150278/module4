import { useContext } from "react";

import content from "../../common/content";
import Context from "../../common/context";
import Layout from "../../components/Layout/Layout";

function NotFound() {
  // Приймаємо глобальне значення lang за допомогою хука useContext
  const { lang } = useContext(Context);
  // Отримуємо конент для сторінки в залежності від мови
  const contentData = content(lang).notFound;
  return (
    <Layout>
      <div className="innerContent">
        <h2>{contentData}</h2>
      </div>
    </Layout>
  );
}

export default NotFound;
