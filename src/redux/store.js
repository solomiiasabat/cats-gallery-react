import { configureStore } from "@reduxjs/toolkit";

import imagesReducer from "./slice";

const store = configureStore({
  reducer: imagesReducer,
});

export default store;
