import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../utils/api";

export const getImages = createAsyncThunk(
  "images/fetchImages",
  async (limit, { rejectWithValue }) => {
    try {
      return await api.fetchImages(limit);
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
