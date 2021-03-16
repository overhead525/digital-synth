import styled from "styled-components";

const StyledBasicKnobWrapper = styled.div`
  grid-column: span 1;
  position: relative;
  display: grid;
  place-items: center;
  width: 3.5rem;
  height: 3.5rem;
`;

const StyledKnobLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StyledKnobGhost = styled.img`
  position: absolute;
  width: 90%;
  z-index: 20;
  opacity: 0.7;
  user-select: none;

  &::after,
  &::before {
    user-select: none;
  }
`;

const StyledKnobBed = styled.img`
  position: absolute;
  width: 90%;
  z-index: 10;
`;

export const BasicKnob = ({ label = "Label" }) => {
  const knob = document
    .getElementById("knob-ghost")
    .addEventListener("drag", (e) => {
      e.preventDefault();
    });

  return (
    <div>
      <StyledBasicKnobWrapper>
        <StyledKnobGhost
          src="../../assets/ghost-blur.svg"
          draggable="false"
          id="knob-ghost"
        />
        <StyledKnobBed src="../../assets/knob-bed.svg" draggable="false" />
      </StyledBasicKnobWrapper>
      <StyledKnobLabel>{label}</StyledKnobLabel>
    </div>
  );
};
