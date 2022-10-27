import { useState, useCallback, useReducer } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import styles from "./ShowModal.module.scss";

const URL = process.env.REACT_APP_URL;
const ERROR = "Empty values!!!";
const SUCCESS = "Ok, post was created!!!";
const SERVER = "Server Error!!!";

const useFields = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

const initialState = { error: "", success: "", server: "" };

function reducer(state, action) {
  switch (action.type) {
    case "error":
      return { ...state, error: action.payload };
    case "server":
      return { ...state, server: action.payload };
    case "success":
      return { ...state, success: action.payload };
    case "initial":
      return { ...state, ...initialState };
    default:
      throw new Error();
  }
}

function ShowModal({ show, handleShow, handleClose }) {
  const title = useFields();
  const text = useFields();

  const [message, dispatch] = useReducer(reducer, initialState);

  
  function wait(type, payload) {
    dispatch({ type, payload });
    setTimeout(() => {
      dispatch({ type: "initial", payload: initialState });
      if (type === "success") handleClose();
    }, 3000);
  }
  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (title.value !== "" && text.value !== "") {
      try {
        const res = await axios.post(URL, {
          title,
          body: text,
          userId: 1,
        });
        if (res.status === 201) {
          wait('success', SUCCESS)
          return;
        }
        wait('server', SERVER)
        return;
      } catch (e) {
        wait('server', SERVER);
        return;
      }
    }
    wait('error', ERROR)
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {message.error !== "" ? <p className={styles.error}>{message.error}</p> : null}
        {message.success !== "" ? <p className={styles.success}>{message.success}</p> : null}
        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Post title</Form.Label>
            <Form.Control type="text" placeholder="Enter title" {...title} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your post</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your post"
              style={{ height: "100px" }}
              row={5}
              {...text}
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

export default ShowModal;
