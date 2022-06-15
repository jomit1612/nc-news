import { useEffect, useState } from "react";
import { getComments } from "../Utils/api";
import { useParams } from "react-router-dom";

const ViewComments = () => {
  const [allComments, setAllComments] = useState([]);

  const { article_id } = useParams();
  useEffect(() => {
    getComments(article_id).then((res) => {
      console.log(res.comments);
      setAllComments(res.comments);
    });
  }, [article_id]);

  return (
    <>
      <section className="Ma">
        <ul className="comment">
          {allComments.map((comment) => {
            return (
              <li key={comment.article_id} className="commentCard">
                <h3>Username:{comment.author}</h3>
                <h3>Comment:{comment.body}</h3>
                <h3>Votes:{comment.votes}</h3>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default ViewComments;
