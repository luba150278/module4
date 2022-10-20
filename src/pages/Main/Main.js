import { useContext } from "react";
import content from "../../common/content";
import Context from "../../common/context";
import Layout from "../../components/Layout/Layout";

function Main() {
  const { lang } = useContext(Context);
  const contentData = content(lang).main;

  return (
    <Layout>
      <div className="innerContent">
        <h1>{contentData.title}</h1>
        <p>{contentData.content}</p>
      </div>
    </Layout>
  );
}

export default Main;
