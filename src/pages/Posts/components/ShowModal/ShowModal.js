import { useState, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styles from "./ShowModal.module.scss";
import axios from "axios";

const useFormField = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => setValue(e.target.value), []);
  return { value, onChange };
};

function ShowModal({ show, handleClose }) {
  const titleField = useFormField();
  const bodyField = useFormField();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (titleField.value === "" && bodyField.value === "") {
      setError("One or more fields are empty!!!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: titleField.value,
      body: bodyField.value,
      userId: 1,
    });
    if (res.status === 201) {
      setSuccess("Post was successfully created");
      setTimeout(() => {
        setSuccess("");
        handleClose();
      }, 3000);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error !== "" ? <p className={styles.error}>{error}</p> : null}
        {success !== "" ? <p className={styles.success}>{success}</p> : null}
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
            <Form.Control
              as="textarea"
              rows={5}
              {...bodyField}
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
