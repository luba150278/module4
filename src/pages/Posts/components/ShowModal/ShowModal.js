import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import styles from "./ShowModal.module.scss";
import axios from "axios";

function ShowModal({ show, handleClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title === "" && body === "") {
      setError("One or more fields are empty!!!");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Post body</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
