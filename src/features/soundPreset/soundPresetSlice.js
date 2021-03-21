import { createSlice } from "@reduxjs/toolkit";
import { VoxHumana } from "./presets";

const presets = {
  VoxHumana,
};

export const soundPresetSlice = createSlice({
  name: "soundPreset",
  initialState: VoxHumana,
  reducers: {
    changeSoundPreset: (state, action) => {
      if (presets[action.payload]) state = presets[action.payload];
    },
    resetSoundPreset: (state) => {
      state = presets.VoxHumana;
    },
  },
});
