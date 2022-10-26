import { string, arrayOf, number} from 'prop-types';
function Data({ title, body, arr }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <ul>
        {arr.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

Data.defaultProps = {
  title: '',
  body: '',
  arr: [],
}
Data.propTypes = {
  title: string.isRequired,
  body: string.isRequired,
  arr: arrayOf(number).isRequired
}

export default Data;