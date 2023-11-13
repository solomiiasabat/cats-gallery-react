import axios from "axios";
import { api_key } from "./constants";

const instance = axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
});

export const fetchImages = async ({ limit, hasBreed }) => {
  let params = { limit };

  if (hasBreed) {
    params.has_breeds = 1;
  }

  const { data } = await instance.get(`/images/search?api_key=${api_key}`, {
    params,
  });
  return data;
};

export const fetchAllBreeds = async () => {
  const { data } = await instance.get(`/breeds?api_key=${api_key}`);
  return data;
};

export const fetchFilteredImages = async (filter) => {
  let params = { limit: filter.limit };

  if (filter.hasBreed) {
    params.has_breeds = 1;
  } else {
    params.has_breeds = 0;
  }

  if (
    filter.breedId &&
    filter.breedId.length > 0 &&
    !filter.breedId.includes("all")
  ) {
    params.breed_ids = filter.breedId.join(",");
  }

  const { data } = await instance.get(`/images/search?api_key=${api_key}`, {
    params,
  });
  return data;
};
