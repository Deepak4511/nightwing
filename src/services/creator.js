import API from "./api";

export const createCreator = async (data) =>
  (await API.post("/creators/create", data)).data;

export const getCreators = async () =>
  (await API.get("/creators")).data;

export const getCreator = async (id) =>
  (await API.get(`/creators/${id}`)).data;
