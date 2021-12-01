import axios from "axios";

const instance = axios.create({
  // baseURL: "https://www.2embed.ru/embed/imdb/movie?id=",
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
