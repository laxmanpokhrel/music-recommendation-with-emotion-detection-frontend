import axios from "axios";
const { BASE_URL } = process.env;

export const api = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token");
export const authenticatedApi = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});
