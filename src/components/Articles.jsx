import { useEffect, useState } from "react";
import { getArticles } from "../Utils/api";
// import { useParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res.data.articles);
    });
  }, []);

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
