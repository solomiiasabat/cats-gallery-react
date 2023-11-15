import { createSelector } from "reselect";

export const selectImagesData = (state) => state.images.imagesPerPage;
export const selectCurrentPage = (state) => state.images.currentPage;
export const selectPageSize = (state) => state.images.pageSize;

export const selectCurrentPageImages = createSelector(
  [selectImagesData, selectCurrentPage, selectPageSize],
  (data, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }
);

export const selectNumsOfPages = (state) => {
  const length = state.images.imagesPerPage.length;
  return length;
};

export const selectIsLoading = (state) => state.isLoading;

export const selectLimit = (state) => state.filters.limit;

export const selectAllBreeds = (state) => state.allBreeds;

export const selectBreedId = (state) => state.filters.breedId;

export const selectHasBreed = (state) => state.filters.hasBreed;
