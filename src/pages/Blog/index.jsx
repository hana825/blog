import React, { Fragment, Component } from "react";
import Helmet from "react-helmet";
import BlogItem from "../../components/Home/BlogList/BlogItem/index";

import styles from "./styles.css";

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context("/public/posts", true, /\.md$/)).sort().reverse();

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      activePost: null,
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    try {
      const posts = await Promise.all(
        markdownFiles.map(async (file) => {
          const response = await fetch(file);
          const content = await response.text();
          const title = file.split("/").pop().replace(/\.md$/, "");

          return { title, content };
        })
      );
      this.setState({ posts });
      console.log("posts : ", posts);
    } catch (error) {
      console.error(error);
    }
  };

  handleTitleClick = (index) => {
    this.setState({ activePost: index });
  };

  render() {
    const { posts, activePost } = this.state;
    const { postTitles } = this.props;

    return (
      <Fragment>
        <Helmet title="Na" />
        <section className="hero">{/* ... title stuff */}</section>
        <section className="section">
          <div className={`container ${styles.posts}`}>
            {postTitles.map((title, idx) => (
              <BlogItem key={idx} title={title} content={posts[idx]?.content} active={activePost === idx} onTitleClick={() => this.handleTitleClick(idx)} />
            ))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Posts;
