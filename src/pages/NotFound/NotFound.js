import { Component } from "react";

import content from "../../common/content";
import Context from "../../common/context";
import Layout from "../../components/Layout/Layout";

class NotFound extends Component {
  static contextType = Context;
  render() {
    const { lang } = this.context;
    const contentData = content(lang).notFound;
    return (
      <Layout>
        <div className="innerContent">
          <h2>{contentData}</h2>
        </div>
      </Layout>
    );
  }
}

export default NotFound;
