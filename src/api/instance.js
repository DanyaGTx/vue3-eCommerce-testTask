import axios from "axios";

const apiRoot = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export { apiRoot };
