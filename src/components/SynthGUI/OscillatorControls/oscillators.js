import styled from "styled-components";
import { BasicKnob } from "../../Knobs/BasicKnob";
import { OscillatorSelector } from "./oscillatorSelector";

const StyledOscillatorWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1fr 2fr 1fr;

  height: 100%;
`;

const StyledOscillatorRow = styled.div`
  background-color: white;
  border: 1px solid blue;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  place-items: center;
`;

const StyledTitle = styled.div`
  letter-spacing: 3px;
  font-weight: 600;
`;

export const Oscillators = () => {
  return (
    <StyledOscillatorWrapper>
      <StyledOscillatorRow>
        <StyledTitle>OSC1</StyledTitle>
        <OscillatorSelector />
      </StyledOscillatorRow>
      <StyledOscillatorRow>
        <BasicKnob />
        <BasicKnob />
        <BasicKnob />
        <BasicKnob />
      </StyledOscillatorRow>
      <StyledOscillatorRow></StyledOscillatorRow>
      <StyledOscillatorRow>
        <StyledTitle>OSC2</StyledTitle>
      </StyledOscillatorRow>
      <StyledOscillatorRow></StyledOscillatorRow>
      <StyledOscillatorRow></StyledOscillatorRow>
    </StyledOscillatorWrapper>
  );
};
