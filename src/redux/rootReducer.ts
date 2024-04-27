import { combineReducers } from "@reduxjs/toolkit";
import { fireStoreApi } from "./services/apiSlice";

export const rootReducer = combineReducers({
  [fireStoreApi.reducerPath]: fireStoreApi.reducer,
});