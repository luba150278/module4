import { useParams } from "react-router-dom";
import { Component, createRef } from "react";
import axios from "axios";
import cn from "classnames";

import Card from "react-bootstrap/Card";
import Layout from "../../components/Layout/Layout";
import InputBlock from "../../components/InputBlock/InputBlock";
import DisplayData from "../../components/DispalyData/DisplayData";
import styles from "./Post.module.scss";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Post extends Component {
  state = {
    postData: {},
    inputValue: "",
    displayData: "",
  };
  ref = createRef();
  componentDidMount() {
    let { id } = this.props.params;
    this.getPostData(id);
  }
  getPostData = async (id) => {
    const URL = process.env.REACT_APP_URL;
    const response = await axios.get(`${URL}/${id}`);
    this.setState({ postData: response.data });
  };

  getInputData = (data) => {
    this.setState({ displayData: data });
  };
  changeHandler = (event) => this.setState({ inputValue: event.target.value });

  render() {
    const { postData, displayData, inputValue  } = this.state;
    const { getInputData, changeHandler, ref } = this;
    const  data = {
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
}

export default withParams(Post);
