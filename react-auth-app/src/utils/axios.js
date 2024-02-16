import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_HOST,
});

export default api;

export const endpoints = {
  auth: {
    login: "/auth/login",
  },
  products: {
    list: "/auth/products",
  },
};
