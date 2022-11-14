import { useReducer, Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import styles from "./ShowModal.module.scss";
import { initialState, reducer } from "./reducer"; //початкові значення та функція, яку передаємо в useReducer
import { ERROR, SUCCESS, SERVER_ERR } from "./formMessages.constants"; //повідомлення для користувача

const withUseReducer =
  (...useReducerArgs) =>
  (Component) =>
  (props) => {
    const [message, dispatch] = useReducer(...useReducerArgs);

    return <Component {...props} {...{ message, dispatch }} />;
  };

class ShowModal extends Component {
  state = {
    title: "",
    body: "",
  };

  wait = (type, payload) => {
    this.props.dispatch({ type, payload });
    setTimeout(() => {
      this.props.dispatch({ type: "initial", payload: initialState });
      if (type === "success") this.props.handleClose();
    }, 3000);
  };

  //обробка відправки данних з форми на сервер
  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(this.state.title, this.state.body);
      if (this.state.title === "" || this.state.body === "") {
        this.wait("error", ERROR);
        return;
      }

      const URL = process.env.REACT_APP_URL;
      const res = await axios.post(URL, {
        title: this.state.title,
        body: this.state.body,
        userId: 1,
      });
      if (res.status === 201) {
        this.wait("success", SUCCESS);
        this.setState({ title: "", body: "" });
      }
    } catch (err) {
      this.wait("error", SERVER_ERR);
    }
  };

  render() {
    const { show, handleClose, message } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message.error !== "" ? (
            <p className={styles.error}>{message.error}</p>
          ) : null}
          {message.success !== "" ? (
            <p className={styles.success}>{message.success}</p>
          ) : null}
          <Form onSubmit={(e) => this.handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Post title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your title"
                value={this.title}
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Post body</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                value={this.body}
                onChange={(e) => this.setState({ body: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default withUseReducer(reducer, initialState)(ShowModal);
