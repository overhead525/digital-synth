export const soundPresetInitialState = {
  presetName: "Vox Humana",
  settings: {
    oscillators: {
      1: {
        waveform: Preset_1.OscWaveform.SINE,
        knobs: {
          frequency: 440,
          keyTracking: 0.9,
          damping: 0.3,
        },
        tuning: {
          steps: 0,
          cents: 0,
        },
      },
      2: {
        waveform: Preset_1.OscWaveform.SAWTOOTH,
        knobs: {
          frequency: 262,
          pulseWidth: 0.7,
          damping: 0.3,
        },
        tuning: {
          steps: 0,
          cents: 0,
        },
      },
    },
    mixer: {
      osc1: {
        stereoPan: -0.2,
        gain: 4,
        bypass: false,
      },
      osc2: {
        stereoPan: 0.2,
        gain: 4,
        bypass: false,
      },
      sub: {
        stereoPan: 0,
        gain: 1,
        bypass: false,
      },
      noise: {
        stereoPan: 0,
        gain: 0,
        bypass: true,
      },
    },
    filter: {
      cutoff: 70,
      filterType: Preset_1.FilterType.LOWPASSFILTER,
      resonance: 20,
      drive: 40,
    },
    masterChannel: {
      stereoPan: 0,
      volume: -4,
    },
    effects: {
      delay: {
        time: 200,
        mix: 0.3,
        active: true,
      },
      reverb: {
        mix: 0.3,
        stereoWidth: 0.5,
        roomSize: 0.7,
        active: true,
      },
    },
  },
};
