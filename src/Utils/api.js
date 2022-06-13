import axios from "axios";

const articlesApi = axios.create({
  baseURL: "https://nc-news-jt-app.herokuapp.com/api",
});
export const getArticles = () => {
  return articlesApi.get("/articles").then(({ data }) => {
    console.log(data);
  });
};
