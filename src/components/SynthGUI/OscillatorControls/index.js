import styled from "styled-components";
import { Mixer } from "./mixer";
import { Oscillators } from "./oscillators";
import { Visualizer } from "./visualizer";

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

const StyledContentColumn = styled.div`
  margin: auto 0;

  height: 94%;
  max-height: 94%;
`;

export const OscillatorControls = () => {
  return (
    <StyledOscillatorControls>
      <StyledContent>
        <StyledContentColumn>
          <Oscillators />
        </StyledContentColumn>
        <div style={{ backgroundColor: "black" }}></div>
        <StyledContentColumn style={{ backgroundColor: "red" }}>
          <Mixer />
        </StyledContentColumn>
        <div></div>
        <StyledContentColumn style={{ border: "1px solid green" }}>
          <Visualizer />
        </StyledContentColumn>
        <div></div>
        <StyledContentColumn
          style={{ backgroundColor: "purple" }}
        ></StyledContentColumn>
      </StyledContent>
    </StyledOscillatorControls>
  );
};
