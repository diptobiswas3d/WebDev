import React from "react";
function Post() {
  return (
    <div className="post">
      <img src="Thumbnail.png" alt="thumbnail" height="150" />
      <div className="text">
        <h2 className="post-heading">How to become a Pkmn Prof</h2>
        <div className="post-info">
          <h3 className="post-writer">Gary Oak</h3>
          <h4 className="post-time">00:00:00</h4>
        </div>
        <p className="post-summary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
          excepturi impedit? Commodi facere voluptate quod soluta vel provident.
          Quasi aspernatur maxime rem, doloremque quibusdam necessitatibus?
        </p>
      </div>
    </div>
  );
}

export default Post;
