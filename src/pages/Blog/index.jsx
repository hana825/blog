import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import styles from './styles.css';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('/public/posts', true, /\.md$/))
  .sort()
  .reverse();


  // TODO : 여기부터 다시
class WhatsNew extends Component {
  state = {
    posts: [],
  }

  async componentDidMount() {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
      .catch((err) => console.error(err));

    this.setState((state) => ({ ...state, posts }));
  }

  render() {
    /* eslint-disable react/no-array-index-key */
    const { posts } = this.state;

    return (
      <Fragment>
        <Helmet title="What's New" />
        <section className="hero">
          ... title stuff
        </section>
        <section className="section">
          <div className={`container ${styles.posts}`}>
            {
              posts.map((post, idx) => (
                <div className="card" key={idx}>
                  <div className="card-content">
                    <div className="content">
                      <ReactMarkdown source={post} />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </section>
      </Fragment>
    );
    /* eslint-enable react/no-array-index-key */
  }
}

export default WhatsNew;