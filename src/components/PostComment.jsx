import { useState } from "react";
import { postComment } from "../Utils/api";

export const AddComment = ({ article_id }) => {
  const [commentAdded, setcommentAdded] = useState("");
  const [user, setUser] = useState("");
  const [commented, setCommented] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    postComment(article_id, user, commentAdded)
      .then((comment) => {
        setcommentAdded("");
        setUser("");
        setCommented(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return commented === true ? (
    <h1>Comment added!</h1>
  ) : (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <textarea
          rows="1"
          cols="20"
          type="text"
          placeholder="Username"
          className="username"
          value={user}
          onChange={(event) => {
            setUser(event.target.value);
          }}
        ></textarea>
        <textarea
          rows="4"
          cols="50"
          value={commentAdded}
          placeholder="Add comment"
          className="commentmade"
          onChange={(event) => {
            setcommentAdded(event.target.value);
          }}
        ></textarea>
      </label>
      <div className="submitButtonthree">
        <button type="submit" className="submitButton">
          Add comment
        </button>
      </div>
    </form>
  );
};

export default AddComment;
