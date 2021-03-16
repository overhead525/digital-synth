import styled from "styled-components";
import { Oscillators } from "./oscillators";

const StyledOscillatorControls = styled.section`
  background: linear-gradient(
    90deg,
    rgba(189, 196, 188, 1) 0%,
    rgba(202, 207, 201, 0.6143499636182599) 44%,
    rgba(189, 196, 188, 1) 100%
  );

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2px 1fr 6px 1.75fr 6px 0.2fr;

  height: 93%;
  max-height: 95%;
`;

export const OscillatorControls = () => {
  return (
    <StyledOscillatorControls>
      <StyledContent>
        <div>
          <Oscillators />
        </div>
        <div style={{ backgroundColor: "black" }}></div>
        <div style={{ backgroundColor: "red" }}></div>
        <div></div>
        <div style={{ backgroundColor: "green" }}></div>
        <div></div>
        <div style={{ backgroundColor: "purple" }}></div>
      </StyledContent>
    </StyledOscillatorControls>
  );
};
