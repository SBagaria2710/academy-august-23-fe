import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    creadentials: "include",
    method: 'post',
    'Content-Type': 'application/json'
  }
});