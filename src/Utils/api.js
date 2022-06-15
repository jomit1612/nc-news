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

export const getArticlesbyId = (article_id) => {
  return articlesApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getUsers = () => {
  const { users } = useParams;
  return articlesApi.get("/users", {
    params: {
      users,
    },
  });
};

export const patchVotes = (article_id, inc_votes) => {
  return articlesApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (article_id, body, username) => {
  const resBody = { username, body };
  return articlesApi
    .get(`/articles/${article_id}/comments`, resBody)
    .then((res) => {
      return res.data;
    });
};
