import { Component, createRef } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import DisplayData from "../../../../components/DispalyData/DisplayData";
import InputBlock from "../../../../components/InputBlock/InputBlock";
import styles from "./PostItem.module.scss";

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.state = { inputValue: "", displayData: "" };
  }
  getInputData = (data) => {
    this.setState({ displayData: data });
  };
  changeHandler = (event) => this.setState({ inputValue: event.target.value });


  render() {
    const { item } = this.props;
    const { displayData, inputValue } = this.state;
    const { getInputData, changeHandler, ref } = this;
    const  data = {
      getInputData,
      ref,
      inputValue,
      changeHandler,
    };
    return (
      //Link - функція бібліотеки react-router-dom для навігації (не використовуємо для цього <a></a> !!! )
      <li className={cn("card", styles.card)}>
        <Link to={`/post/${item.id}`}>{item.title}</Link>
        <DisplayData displayData={displayData} isPadding={false} />
        <InputBlock data={data} />
      </li>
    );
  }
}

export default PostItem;
