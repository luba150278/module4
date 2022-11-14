import { Component } from "react";

import content from "../../common/content";
import Context from "../../common/context";
import Layout from "../../components/Layout/Layout";
// import Data from "../../components/CheckTypes/Data";

class Main extends Component {
  static contextType = Context;

  render() {
    const { lang } = this.context;
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
}

export default Main;
