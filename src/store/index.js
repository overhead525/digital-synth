import { configureStore } from "@reduxjs/toolkit";
import { soundSelectionReducer } from "../features/soundSelection/soundSelectionSlice";

export default configureStore({
  reducer: {
    soundSelection: soundSelectionReducer,
  },
});
