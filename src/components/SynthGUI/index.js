import styled from "styled-components";
import { TopMenu } from "./TopMenu";
import { OscillatorControls } from "./OscillatorControls";
import { EffectControls } from "./EffectControls";
import { BottomPianoRoll } from "./BottomPianoRoll";
import { useSelector } from "react-redux";
import {
  soundOptionsSelector,
  soundSelectionSelector,
} from "../../features/soundSelection/soundSelectionSlice";

const StyledSynthGUI = styled.main`
  display: grid;
  grid-template-rows: 1fr 5.5fr 3.7fr 1.25fr;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SynthGUI = () => {
  const soundSelection = useSelector(soundSelectionSelector);

  return (
    <StyledSynthGUI className="guiWrapper">
      <TopMenu soundSelection={soundSelection} />
      <OscillatorControls />
      <EffectControls />
      <BottomPianoRoll />
    </StyledSynthGUI>
  );
};

export default SynthGUI;
