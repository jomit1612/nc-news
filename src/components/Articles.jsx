import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    getArticles()
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
      <ul className="Main">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articleCard">
              <h3>{article.title}</h3>
              <h3>User:{article.author}</h3>
              <h3>Topic:{article.topic}</h3>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Articles;
