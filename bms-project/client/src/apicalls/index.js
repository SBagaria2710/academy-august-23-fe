import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    withCredentials: true,
    method: 'post',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});