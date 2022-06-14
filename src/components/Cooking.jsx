import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Cooking = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);
  const { article_id } = useParams();
  useEffect(() => {
    getArticles(article_id)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (error)
    if (isLoading) return <h1 className="loading">Articles loading!</h1>;

  return (
    <section className="Ma">
      <h1 className="link-header">Cooking</h1>
      <ul className="Main">
        {articles.map((article) => {
          if (article.topic === "cooking")
            return (
              <li key={article.article_id} className="articleCard">
                <h3>{article.title}</h3>
                <h3>User:{article.author}</h3>
                <Link to={`/articles/${article.article_id}`}>View Article</Link>
              </li>
            );
        })}
      </ul>
    </section>
  );
};

export default Cooking;
