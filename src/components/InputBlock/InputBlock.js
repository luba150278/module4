import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import styles from './InputBlock.module.scss';

function InputBlock({ getInputData }) {
  const [inputData, setInputData] = useState("");
  const ref = useRef(null);

  function changeHandler() {
    setInputData(ref.current.value);
  }
  return (
    <div className={styles.sendData}>
      <div className={styles.inputData}>
        <label htmlFor="dataInput">Input yor data:</label>
        <input
          ref={ref}
          onChange={() => changeHandler()}
          name="dataInput"
          className={styles.inputData}
        />
      </div>
      <Button variant="outline-primary" onClick={() => getInputData(inputData)}>
        sendData
      </Button>
    </div>
  );
}

export default InputBlock;
