import React from "react";
import Comment from "./Comment";

function Post({ key, post }) {
  return (
    <div className="post" key={key}>
      <div className="content">
        <div className="post-header">
          <img src={post.author.avatar} alt="Avatar" />
          <div className="post-info">
            <span>{post.author.name}</span>
            <small>{post.date}</small>
          </div>
        </div>
        <p>{post.content}</p>
      </div>
      <ul className="comment-list">
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </div>
  );
}

export default Post;
