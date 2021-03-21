import { configureStore } from "@reduxjs/toolkit";
import { soundSelectionReducer } from "../features/soundSelection/soundSelectionSlice";
import { soundPresetReducer } from "../features/soundPreset/soundPresetSlice";

export default configureStore({
  reducer: {
    soundSelection: soundSelectionReducer,
    soundPreset: soundPresetReducer,
  },
});
