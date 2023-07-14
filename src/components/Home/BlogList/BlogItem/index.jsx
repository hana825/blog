import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const BlogItem = ({ title, content, active, onTitleClick }) => {
  const [showContent, setShowContent] = useState(false);

  const handleClick = () => {
    setShowContent(!showContent);
    onTitleClick();
  };

  return (
    <div className={`card ${active ? "active" : ""}`}>
      <div className="card-content">
        <div className="content">
          <h2 onClick={handleClick}>{title}</h2>
          {showContent && (
            <div>
              <ReactMarkdown children={content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
