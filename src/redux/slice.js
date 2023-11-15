import { createSlice } from "@reduxjs/toolkit";
import { getImages, getAllBreeds, getFilteredImages } from "./operations";

const initialState = {
  images: {
    numsOfPages: 0,
    imagesPerPage: [],
    currentPage: 1,
    pageSize: 5,
  },
  allBreeds: [],
  filters: {
    limit: 10,
    breedId: [],
    hasBreed: true,
  },
  isLoading: false,
  error: null,
};

const picturesSlice = createSlice({
  name: "pictures",
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.filters.limit = action.payload;
      state.images.currentPage = 1;
    },
    setBreedId: (state, action) => {
      state.filters.breedId = action.payload;
      state.images.currentPage = 1;
    },
    setHasBreed: (state, action) => {
      state.filters.hasBreed = action.payload;
      state.images.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.images.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, { payload }) => {
        state.images.count = payload.length;
        state.images.imagesPerPage = payload;
        state.isLoading = false;
      })
      .addCase(getImages.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getAllBreeds.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBreeds.fulfilled, (state, { payload }) => {
        state.allBreeds = payload;
        state.isLoading = false;
      })
      .addCase(getAllBreeds.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(getFilteredImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFilteredImages.fulfilled, (state, { payload }) => {
        state.images.count = payload.length;
        state.images.imagesPerPage = payload;
        // state.images.currentPage = 1;
        state.isLoading = false;
      })
      .addCase(getFilteredImages.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { setLimit, setBreedId, setHasBreed, setCurrentPage } =
  picturesSlice.actions;

export default picturesSlice.reducer;
