import { createSlice } from "@reduxjs/toolkit";

export const soundSelectionSlice = createSlice({
  name: "soundSelection",
  initialState: {
    soundChoices: ["sine", "sawtooth", "square", "triangle"],
    currentSoundChoice: "sine",
  },
  reducers: {
    changeSoundChoice: (state, action) => {
      state.currentSoundChoice = action.payload;
    },
    resetSoundChoice: (state) => {
      state.currentSoundChoice = "sine";
    },
  },
});

export const {
  changeSoundChoice,
  resetSoundChoice,
} = soundSelectionSlice.actions;

export const soundSelectionReducer = soundSelectionSlice.reducer;
