import React, { useState, useEffect } from "react";
import Header from "../../components/Home/Header";
import Blog from "../../pages/Blog";

const Home = () => {
  const [postTitles, setPostTitles] = useState([]);

  useEffect(() => {
    const fetchPostTitles = () => {
      try {
        const context = require.context("/public/posts", true, /\.md$/);
        const markdownFiles = context.keys();
        const titles = markdownFiles.map((file) => {
          const fileName = file.replace(/^.*[\\\/]/, "");
          const title = fileName.replace(/\.md$/, "");
          return title;
        });
        setPostTitles(titles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPostTitles();
  }, []);

  return (
    <div>
      <Header />
      <Blog postTitles={postTitles} />
    </div>
  );
};

export default Home;
