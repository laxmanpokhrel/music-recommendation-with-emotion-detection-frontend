import axios from "axios";
const token = localStorage.getItem("token");

export const api = axios.create({
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const authenticatedApi = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});
