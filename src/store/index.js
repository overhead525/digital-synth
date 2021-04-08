import { configureStore } from "@reduxjs/toolkit";
import { soundSelectionReducer } from "../features/soundSelection/soundSelectionSlice";
import { soundPresetReducer } from "../features/soundPreset/soundPresetSlice";
import { visualizerReducer } from "../features/visualizer/visualizerSlice";

export default configureStore({
  reducer: {
    soundSelection: soundSelectionReducer,
    soundPreset: soundPresetReducer,
    visualizer: visualizerReducer,
  },
});
