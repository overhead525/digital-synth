import styled from "styled-components";
import { Oscillator1 } from "./oscillators";

const StyledOscillatorControls = styled.section`
  background-color: yellow;
  position: relative;
`;

const StyledContent = styled.div`
  position: absolute;

  display: grid;
  grid-template-columns: 1fr 2px 1fr 6px 1.75fr 0.2fr;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: 0.75rem 0.3rem;
`;

const StyledContentDivider = styled.div``;

export const OscillatorControls = () => {
  return (
    <StyledOscillatorControls>
      <StyledContent>
        <div style={{ backgroundColor: "blue" }}>
          <Oscillator1 />
        </div>
        <div style={{ backgroundColor: "black" }}></div>
        <div style={{ backgroundColor: "red" }}></div>
        <div></div>
        <div style={{ backgroundColor: "green" }}></div>
        <div style={{ backgroundColor: "purple" }}></div>
      </StyledContent>
    </StyledOscillatorControls>
  );
};
