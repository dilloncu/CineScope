import React from "react";
import NewForm from "../NewForm/NewForm";
import "./RenderForms.css";

export default function RenderForms({
  comments,
  handleDeleteComment,
  handleUpdateComment,
}) {
  return (
    <div>
      <div>
        {comments.map((comment, key) => {
          return (
            <div key={comment._id}>
              {
                <div className="m-container">
                  <div className="Container">
                    <p
                      className="s-container"
                      onClick={() => handleDeleteComment(comment._id)}
                    >
                      X
                    </p>
                    <p className="name">{comment.name}</p>
                    <p className="views">{comment.comment}</p>
                  </div>
                </div>
              }

              <NewForm onSubmitFunc={handleUpdateComment} comment={comment} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
