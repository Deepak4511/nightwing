import axios from "axios";
// import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

// API.interceptors.request.use((req) => {
//   const token = Cookies.get("token");
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   return req;
// });

export default api;
