import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import styles from "./ShowModal.module.scss";

const useFields = () => {
  const [value, setValue] = useState('');
  
}
function ShowModal({ show, handleShow, handleClose }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const URL = process.env.REACT_APP_URL;
  const handlerSubmit = async (e) => {
    e.preventDefault();
    // console.log(title, text);
    if (title !== "" && text !== "") {
      try {
        const res = await axios.post(URL + "sdfsd", {
          title,
          body: text,
          userId: 1,
        });
        if (res.status === 201) {
          setSuccess("Ok, post was created!!!");
          setTimeout(() => {
            setSuccess("");
            handleClose();
          }, 3000);

          return;
        }
        setError("Server Error!!!");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      } catch (e) {
        setError("Server Error!!!");
        setTimeout(() => {
          setError("");
        }, 3000);
        return;
      }
    }

    setError("Empty values!!!");
    setTimeout(() => {
      setError("");
    }, 3000);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {error !== "" ? <p className={styles.error}>{error}</p> : null}
        {success !== "" ? <p className={styles.success}>{success}</p> : null}
        <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Post title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Your post</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your post"
              style={{ height: "100px" }}
              row={5}
              onChange={(e) => setText(e.target.value)}
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
