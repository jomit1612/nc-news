import { useEffect, useState } from "react";
import { getArticlesbyId } from "../Utils/api";
import { useParams } from "react-router-dom";
import Votes from "../components/Votes";
import { Link } from "react-router-dom";

const ViewArticle = () => {
  const [articles, setArticles] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();
  useEffect(() => {
    getArticlesbyId(article_id)
      .then((res) => {
        setArticles(res.article);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [article_id]);

  if (error) return <h1 className="error-message">404 article not found</h1>;
  if (isLoading) return <h1 className="loading">Articles loading!</h1>;

  return (
    <section className="Ma">
      <ul className="individualArt">
        <li key={articles.article_id} className="individual">
          <h3>Title: {articles.title}</h3>
          <h3>User:{articles.author}</h3>
          <h3>Topic:{articles.topic}</h3>
          <h3>{articles.body}</h3>
          <h3>Comments:{articles.comment_count}</h3>
          <Votes votes={articles.votes} article_id={articles.article_id} />
          <button>
            <Link to={`/articles/${article_id}/comments`}>View Comments</Link>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default ViewArticle;
