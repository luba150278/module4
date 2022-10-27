import { string, arrayOf, number } from "prop-types";
import { Link } from "react-router-dom";
function Data({ link, title, body, arr }) {
  return (
    <div>
      <h2>Демо роботи з PropTypes, та створення посилань на сторінки</h2>
      <h3>{title}</h3>
      <p>{body}</p>
      <ul>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Посилання на сторінку постів</p>
      <Link to={link}>posts</Link>
    </div>
  );
}

Data.defaultProps = {
  title: "Заголовок по замовчуванню",
  body: "",
  arr: [],
};
Data.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  arr: arrayOf(number).isRequired,
  link: string,
};

export default Data;
