import API from "../pages/api/api";
import Cookies from "js-cookie";

export const loginUser = async (data) => {
  const res = await API.post("/auth/login", data);
  if (res.data.token) {
    Cookies.set("token", res.data.token);
  }
  return res.data;
};

export const registerUser = async (data) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const logoutUser = () => {
  Cookies.remove("token");
};
