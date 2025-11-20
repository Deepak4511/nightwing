import API from "./api";

export const uploadReel = async (data) =>
  (await API.post("/reels/upload", data)).data;

export const getReels = async () =>
  (await API.get("/reels")).data;
