import { useState, useCallback, useReducer } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import styles from "./ShowModal.module.scss";
import { initialState, reducer } from "./reducer"; //початкові значення та функція, яку передаємо в useReducer
import { ERROR, SUCCESS, SERVER_ERR } from "./formMessages.constants"; //повідомлення для користувача

//Хук для керування полями форми
const useFormField = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

function ShowModal({ show, handleClose }) {
  const URL = process.env.REACT_APP_URL;
  const titleField = useFormField();
  const bodyField = useFormField();
  const [message, dispatch] = useReducer(reducer, initialState); //використовуюмо вбудований хук для відображення повідомлень на формі

  //Функція  для звертання до редьюсера та відображення, а потім приховання повідомлень
  function wait(type, payload) {
    dispatch({ type, payload });
    setTimeout(() => {
      dispatch({ type: "initial", payload: initialState });
      if (type === "success") handleClose();
    }, 3000);
  }

  //обробка відправки данних з форми на сервер
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (titleField.value === "" || bodyField.value === "") {
        wait("error", ERROR);
        return;
      }

      const res = await axios.post(URL, {
        title: titleField.value,
        body: bodyField.value,
        userId: 1,
      });
      if (res.status === 201) {
        wait("success", SUCCESS);
      }
    } catch (err) {
      wait("error", SERVER_ERR);
    }
  };

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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Post title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your title"
              {...titleField}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post body</Form.Label>
            <Form.Control as="textarea" rows={5} {...bodyField} />
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
