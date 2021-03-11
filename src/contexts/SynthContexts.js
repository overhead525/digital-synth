import { createContext } from "preact";

export const soundChoices = [
  'sine',
  'square',
  'sawtooth',
  'triangle'
]

export const SoundSelectionContext = createContext(soundChoices[0]);