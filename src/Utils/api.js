import axios from "axios";
import { useParams } from "react-router-dom";
export const articlesApi = axios.create({
  baseURL: "https://nc-news-jt-app.herokuapp.com/api",
});

export const getArticles = () => {
  const { topic } = useParams;

  return articlesApi.get("/articles", {
    params: {
      topic,
    },
  });
};
