import styled from "styled-components";
import { TopMenu } from "./TopMenu";
import { OscillatorControls } from "./OscillatorControls";
import { EffectControls } from "./EffectControls";
import { BottomPianoRoll } from "./BottomPianoRoll";
import { useSelector } from "react-redux";

const StyledSynthGUI = styled.main`
  display: grid;
  grid-template-rows: 1fr 5fr 4fr 1.25fr;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const SynthGUI = () => {
  const soundSelection = useSelector(
    // @ts-ignore
    (state) => state.soundSelection.currentSoundChoice
  );

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
