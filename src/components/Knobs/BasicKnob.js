import styled from "styled-components";

const StyledBasicKnobWrapper = styled.div`
  grid-column: span 1;
  position: relative;
  display: grid;
  place-items: center;
`;

const StyledKnobBed = styled.img`
  width: 2.6rem;
  z-index: 10;
`;

const StyledKnob = styled.img`
  position: absolute;
  z-index: 20;
  width: 70%;
  left: 0.6rem;
`;

const StyledKnobLabel = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
`;

const StyledKnobGhost = styled.img`
  margin-top: -0.5rem;
  position: absolute;
  object-fit: cover;
  blur: 4px;
  opacity: 0.8;
  z-index: 30;
`;

const StyledGridDiv = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

export const BasicKnob = ({ label = "Label" }) => {
  return (
    <StyledBasicKnobWrapper>
      <StyledKnobGhost src="../../assets/ghost-blur.svg" />
      <StyledGridDiv>
        <StyledKnob src="../../assets/knob.svg" />
        <StyledKnobBed src="../../assets/knob-bed.svg" />
      </StyledGridDiv>
      <StyledKnobLabel>{label}</StyledKnobLabel>
    </StyledBasicKnobWrapper>
  );
};
