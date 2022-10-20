import { useState, useContext } from "react";
import Context from "../../common/context";
//import Layout from "../../components/Layout/Layout";
import Layout from "../../components/Layout/Layout";
import Posts from '../Posts/Posts';

function Main() {
  // const { lang } = useContext(Context);
   console.log(useContext(Context))
  const [data, setData] = useState("");
  function getInputData(data) {
    setData(data);
  }
  return (
    <Layout>
      <div><code>&lt;BrowserRouter&gt;&lt;Routes&gt;
      &lt;Route path="/" element=&lcub;&lt;Main /&gt;&rcub; /&gt;
      &lt;Route element=&lcub;&lt;NotFound/&gt;&rcub; path="*" /&gt;
      &lt;/Routes&gt;
      &lt;/BrowserRouter&gt;</code></div>
      {/* <Posts getInputData={getInputData} /> */}
    </Layout>
  );
}

export default Main;
