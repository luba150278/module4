import { Component } from "react";
import Button from "react-bootstrap/Button";
import styles from "./InputBlock.module.scss";

class InputBlock extends Component {
  //По клику на кнопку - повертаємо данні з input вгору до бітьківського елементу
  render() {
    const { getInputData, ref, inputValue, changeHandler } = this.props.data;
    return (
      <div className={styles.sendData}>
        <div className={styles.inputData}>
          <label htmlFor="dataInput">Input yor data:</label>
          <input
            ref={ref}
            onChange={(e) => changeHandler(e)}
            name="dataInput"
            className={styles.inputData}
            value={inputValue}
          />
        </div>
        <Button
          variant="outline-primary"
          onClick={() => getInputData(inputValue)}
        >
          sendData
        </Button>
      </div>
    );
  }
}

export default InputBlock;
