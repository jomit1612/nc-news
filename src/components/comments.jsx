import { useEffect, useState } from "react";
import { getComments } from "../Utils/api";
import { useParams } from "react-router-dom";
import { deleteComment } from "../Utils/api";

const ViewComments = () => {
  const [allComments, setAllComments] = useState([]);

  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((res) => {
      setAllComments(res.comments);
    });
  }, [article_id]);

  const removeComment = (comment_id) => {
    deleteComment(comment_id).then(setAllComments(allComments));
  };

  return (
    <>
      <section className="Ma">
        <ol className="comment">
          {allComments.map((comment) => {
            return (
              <li key={comment.comment_id} className="commentCard">
                <h3>Username:{comment.author}</h3>
                <h3>Comment:{comment.body}</h3>
                <h3>Votes:{comment.votes}</h3>
                <button
                  className="delete"
                  onClick={() => {
                    removeComment(comment.comment_id);
                  }}
                >
                  Delete Comment
                </button>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default ViewComments;
