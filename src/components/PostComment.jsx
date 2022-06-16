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
      <input
        type="text"
        placeholder="Username"
        className="submitButtonone"
        value={user}
        onChange={(event) => {
          setUser(event.target.value);
        }}
      ></input>
      <input
        type="text"
        value={commentAdded}
        placeholder="Add comment"
        className="submitButtontwo"
        onChange={(event) => {
          setcommentAdded(event.target.value);
        }}
      ></input>
      <div className="submitButtonthree">
        <button type="submit" className="submitButton">
          <img
            src="https://img.icons8.com/ios/20/undefined/add--v1.png"
            alt="submit button for adding comment"
          />
        </button>
      </div>
    </form>
  );
};

export default AddComment;
