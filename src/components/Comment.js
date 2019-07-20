import React from "react";

function Comment({ key, comment }) {
  return (
    <li className="comment" key={key}>
      <img src={comment.author.avatar} alt="Avatar" />
      <div className="text-comment">
        <p>
          {comment.author.name} {comment.content}
        </p>
      </div>
    </li>
  );
}

export default Comment;
