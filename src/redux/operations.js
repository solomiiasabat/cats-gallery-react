import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../utils/api";

export const getImages = createAsyncThunk(
  "images/fetchImages",
  async ({ limit, hasBreed }, { rejectWithValue }) => {
    try {
      const filter = {
        limit: limit,
        hasBreed: hasBreed,
      };
      return await api.fetchImages(filter);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllBreeds = createAsyncThunk(
  "filters/fetchAllBreeds",
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchAllBreeds();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getFilteredImages = createAsyncThunk(
  "images/fetchFilteredImages",
  async ({ limit, breedId, hasBreed }, { rejectWithValue }) => {
    try {
      const filter = {
        limit: limit,
        breedId: breedId,
        hasBreed: hasBreed,
      };
      return await api.fetchFilteredImages(filter);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
