import axios from "axios";
import { api_key } from "./constants";

const instance = axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
});

export const fetchImages = async (limit) => {
  const { data } = await instance.get(
    `/images/search?api_key=${api_key}&limit=${limit}`
  );
  return data;
};

export const fetchAllBreeds = async () => {
  const { data } = await instance.get(`/breeds?api_key=${api_key}`);
  return data;
};
