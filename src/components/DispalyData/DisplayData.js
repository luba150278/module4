import cn from "classnames";
import styles from "./DisplayData.module.scss";

function DisplayData({ displayData, isPadding }) {
  //Використовуємо умовний рендерінг
  return displayData !== "" ? (
    <p className={cn(styles.inputData, { [styles.isPadding]: isPadding })}>
      Your input data: <span>{displayData}</span>
    </p>
  ) : null;
}

export default DisplayData;
