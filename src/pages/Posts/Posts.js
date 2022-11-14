import { Component } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import styles from "./Posts.module.scss";
import PostItem from "./components/PostItem/PostItem";
import { Button } from "react-bootstrap";
import ShowModal from "../../components/ShowModal/ShowModal";

class Posts extends Component {
  //state = { posts: [], show: false };
  constructor(props) {
    super(props);
    // Не вызывайте здесь this.setState()!
    this.state = { posts: [], show: false };
    // this.handleClose = this.handleClose.bind(this);
    // this.handleShow = this.handleClose.bind(this);
  }

  componentDidMount() {
    this.mounted = true;
    const URL = process.env.REACT_APP_URL;
    const posts = async () => {
      const res = await axios.get(URL);
      this.setState({ posts: res.data.slice(0, 20) });
    }
    posts();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  render() {
    const { show, posts } = this.state;
    return (
      <Layout>
        <div className="innerContent">
          <Button
            onClick={() => {
              this.handleShow();
            }}
            variant="primary"
          >
            Add new post
          </Button>
          <ShowModal
            show={show}
            handleShow={this.handleShow}
            handleClose={this.handleClose}
          />
          <ul className={styles.posts}>
            {posts.map((item) => (
              <PostItem item={item} key={item.id} />
            ))}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default Posts;
