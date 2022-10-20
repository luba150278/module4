import styles from "./DisplayData.module.scss";

function DisplayData({ inputData }) {
  return inputData !== "" ? (
    <p className={styles.inputData}>
      Your input data: <span>{inputData}</span>
    </p>
  ) : null;
}

export default DisplayData;
