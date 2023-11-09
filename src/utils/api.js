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

export const fetchFilteredImages = async (limit, breedId) => {
  const breedIdsParam = breedId.join(",");
  console.log(breedIdsParam);
  const { data } = await instance.get(
    `/images/search?api_key=${api_key}&limit=${limit}&breed_ids=${breedIdsParam}`
  );
  return data;
};
