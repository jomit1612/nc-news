import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Coding = () => {
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
  }, [article_id]);

  if (error)
    if (isLoading) return <h1 className="loading">Articles loading!</h1>;

  return (
    <section className="Ma">
      <h1 className="link-header">Coding</h1>
      <ul className="Main">
        {articles.map((article) => {
          if (article.topic === "coding")
            return (
              <li key={article.article_id} className="articleCard">
                <h3>{article.title}</h3>
                <h3>User:{article.author}</h3>
                <Link to={`/articles/${article.article_id}`}>
                  <img
                    src="https://img.icons8.com/clouds/100/undefined/news.png"
                    alt="link to read article"
                  />
                </Link>
              </li>
            );
        })}
      </ul>
    </section>
  );
};

export default Coding;
