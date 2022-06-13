import axios from "axios";
import { useParams } from "react-router-dom";
const articlesApi = axios.create({
  baseURL: "https://nc-news-jt-app.herokuapp.com/api",
});

export const getArticles = () => {
  const { article_id } = useParams;
  return articlesApi.get("/articles", {
    params: {
      article_id,
    },
  });
};
