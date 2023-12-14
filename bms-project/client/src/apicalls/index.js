import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    withCredentials: true,
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('token')}`
  }
});