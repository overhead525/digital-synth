import { createSlice } from "@reduxjs/toolkit";

// frequencyConv is a variable assigned to convert large frequencies
// to manageable integers to be used with this function

export const yGenerators = {
  sine: (
    x,
    { amplitude = 1, phase = 0, frequencyConv = 1, verticalShift = 0 }
  ) => {
    return amplitude * Math.sin(frequencyConv * x + phase) + verticalShift;
  },
  sawtooth: (
    x,
    { amplitude = 1, phase = 0, frequencyConv = 1, verticalShift = 0 }
  ) => {
    return amplitude * ((frequencyConv * x + phase) % 1) + verticalShift;
  },
  square: (
    x,
    { amplitude = 1, phase = 0, frequencyConv = 1, verticalShift = 0 }
  ) => {
    const standardSquareFunction = (t, p, fC, vS) => {
      return (
        2 *
          (2 * Math.floor((fC * t + p) / (2 * Math.PI)) -
            Math.floor((fC * t + p) / Math.PI)) +
        1 +
        vS
      );
    };
    return (
      amplitude * standardSquareFunction(x, phase, frequencyConv, verticalShift)
    );
  },
  triangle: (
    x,
    { amplitude = 1, phase = 0, frequencyConv = 1, verticalShift = 0 }
  ) => {
    return (
      amplitude *
        (2 / Math.PI) *
        Math.asin(
          Math.sin(((2 * Math.PI) / Math.PI) * (frequencyConv * x + phase))
        ) +
      verticalShift
    );
  },
};

const defaultXGenerator = (startTime = new Date(Date.now())) => {
  const now = new Date(Date.now());
  return now.getSeconds();
};

export const visualizerSlice = createSlice({
  name: "visualizer",
  initialState: {
    xGenerator: defaultXGenerator,
    yGenerator: yGenerators.sine,
  },
  reducers: {
    changeYGenerator: (state, action) => {
      if (yGenerators[action.payload]) {
        state.yGenerator = yGenerators[action.payload];
      }
      console.error(
        new TypeError(`${action.payload} is not an option for yGenerator`)
      );
    },
  },
});

export const { changeYGenerator } = visualizerSlice.actions;

export const xGeneratorSelector = (state) => {
  return state.visualizer.xGenerator;
};

export const yGeneratorSelector = (state) => {
  return state.visualizer.yGenerator;
};

export const visualizerReducer = visualizerSlice.reducer;
