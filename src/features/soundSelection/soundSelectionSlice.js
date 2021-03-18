import { createSlice } from "@reduxjs/toolkit";

export const soundSelectionSlice = createSlice({
  name: "soundSelection",
  initialState: {
    soundChoices: ["Vox Humana", "PPG Choir", "E. Piano 1", "Lately Bass"],
    currentSoundChoice: "Vox Humana",
    count: 0,
  },
  reducers: {
    changeSoundChoice: (state, action) => {
      state.currentSoundChoice = action.payload;
      state.count = state.soundChoices.indexOf(state.currentSoundChoice);
    },
    cycleSoundChoice: (state, action) => {
      const direction = action.payload;
      if (direction === "next" && state.count < state.soundChoices.length - 1) {
        state.count += 1;
      } else if (direction === "previous" && state.count > 0) {
        state.count -= 1;
      }
      state.currentSoundChoice = state.soundChoices[state.count];
    },
    resetSoundChoice: (state) => {
      state.currentSoundChoice = state.soundChoices[0];
      state.count = 0;
    },
  },
});

export const {
  changeSoundChoice,
  cycleSoundChoice,
  resetSoundChoice,
} = soundSelectionSlice.actions;

export const soundSelectionSelector = (state) =>
  state.soundSelection.currentSoundChoice;

export const soundOptionsSelector = (state) =>
  state.soundSelection.soundChoices;

export const soundSelectionReducer = soundSelectionSlice.reducer;
