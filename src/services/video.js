import API from "./api";

export const uploadVideo = async (data) =>
  (await API.post("/videos/upload", data)).data;

export const getVideos = async () =>
  (await API.get("/videos")).data;
