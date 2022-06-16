import { useEffect, useState } from "react";
import { getComments } from "../Utils/api";
import { useParams } from "react-router-dom";

const ViewComments = () => {
  const [allComments, setAllComments] = useState([]);

  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((res) => {
      setAllComments(res.comments);
    });
  }, [article_id]);

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
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
};

export default ViewComments;
