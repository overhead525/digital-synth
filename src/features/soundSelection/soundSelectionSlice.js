import { createSlice } from "@reduxjs/toolkit";

export const soundSelectionSlice = createSlice({
  name: "soundSelection",
  initialState: {
    soundChoices: ["Vox Humana", "PPG Choir", "E. Piano 1", "Lately Bass"],
    currentSoundChoice: "Vox Humana",
  },
  reducers: {
    changeSoundChoice: (state, action) => {
      state.currentSoundChoice = action.payload;
    },
    cycleSoundChoice: (state, action) => {
      const direction = action.payload;
      if (direction === "next") {
        /*
        // if not at the end
        if (currentIndex < state.soundChoices.length - 1) {
          state.currentSoundChoice = state.soundChoices[currentIndex + 1];
        } else {
          state.currentSoundChoice = state.soundChoices[0];
        }
        */
      } else if (direction === "previous") {
        /*
        // if not at the beginning
        if (!(currentIndex === 0)) {
          state.currentSoundChoice = state.soundChoices[currentIndex - 1];
        } else {
          state.currentSoundChoice =
            state.soundChoices[state.soundChoices.length - 1];
        }
        */
      }
      console.log(state.currentSoundChoice);
    },
    resetSoundChoice: (state) => {
      state.currentSoundChoice = "Vox Humana";
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
