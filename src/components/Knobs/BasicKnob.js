import { useEffect } from "preact/hooks";
import styled from "styled-components";

const StyledBasicKnobWrapper = styled.div`
  grid-column: span 1;
  position: relative;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;

  user-drag: none;
  user-select: none;
`;

const StyledKnobLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;

  user-drag: none;
  user-select: none;
`;

const StyledKnobGhost = styled.img`
  position: absolute;
  width: 90%;
  z-index: 20;
  opacity: 0.7;
  user-select: none;

  user-drag: none;
  user-select: none;
`;

const StyledKnobBed = styled.img`
  position: absolute;
  width: 90%;
  z-index: 10;

  user-drag: none;
  user-select: none;
`;

export const BasicKnob = ({ label = "Label" }) => {
  useEffect(() => {});

  return (
    <div>
      <StyledBasicKnobWrapper>
        <StyledKnobGhost src="../../assets/ghost-blur.svg" draggable="false" />
        <StyledKnobBed src="../../assets/knob-bed.svg" id="knob" />
      </StyledBasicKnobWrapper>
      <StyledKnobLabel>{label}</StyledKnobLabel>
    </div>
  );
};
