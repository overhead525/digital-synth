import styled from "styled-components";
import { TopMenu } from "./TopMenu";
import { OscillatorControls } from "./OscillatorControls";
import { EffectControls } from "./EffectControls";
import { BottomPianoRoll } from "./BottomPianoRoll";

const StyledSynthGUI = styled.main`
  display: grid;
  grid-template-rows: 1fr 4fr 4.25fr 1.25fr;

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const SynthGUI = () => {
  return (
    <StyledSynthGUI className="guiWrapper">
      <TopMenu />
      <OscillatorControls />
      <EffectControls />
      <BottomPianoRoll />
    </StyledSynthGUI>
  )
}

export default SynthGUI;