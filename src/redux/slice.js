import { createSlice } from "@reduxjs/toolkit";
import { getImages, getAllBreeds } from "./operations";

const initialState = {
  images: [],
  allBreeds: [],
  filters: {
    limit: 10,
    breedId: [],
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
    },
    setBreedId: (state, action) => {
      state.filters.breedId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, { payload }) => {
        state.images = payload;
        state.isLoading = false;
      })
      .addCase(getImages.rejected, (state, { payload }) => {
        isLoading = false;
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
        isLoading = false;
        state.error = payload;
      });
  },
});

export const { setLimit, setBreedId } = picturesSlice.actions;

export default picturesSlice.reducer;
