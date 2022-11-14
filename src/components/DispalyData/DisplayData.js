import cn from "classnames";
import { Component } from "react";
import styles from "./DisplayData.module.scss";

class DisplayData extends Component {
  //Використовуємо умовний рендерінг
  render(){
    const { displayData, isPadding } = this.props;
    return displayData !== "" ? (
      <p className={cn(styles.inputData, { [styles.isPadding]: isPadding })}>
        Your input data: <span>{displayData}</span>
      </p>
    ) : null;
  }
}

export default DisplayData;
