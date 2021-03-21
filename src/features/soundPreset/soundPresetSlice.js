import { createSlice } from "@reduxjs/toolkit";
import { EPiano1, LatelyBass, PPGChoir, VoxHumana } from "./presets";

const presets = {
  "Vox Humana": VoxHumana,
  "PPG Choir": PPGChoir,
  "E. Piano 1": EPiano1,
  "Lately Bass": LatelyBass,
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

export const { changeSoundPreset, resetSoundPreset } = soundPresetSlice.actions;

export const soundPresetReducer = soundPresetSlice.reducer;
