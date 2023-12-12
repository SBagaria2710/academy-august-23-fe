import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    credentials: "include",
    method: 'post',
    'Content-Type': 'application/json',
    // authorization: `Bearer ${localStorage.getItem('token')}`
  }
});