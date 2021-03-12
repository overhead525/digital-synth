import styled from "styled-components";

const StyledOscillatorWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;

  height: 100%;
`;

const StyledOscillatorRow = styled.div`
  background-color: blue;
  border: 1px solid white;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledTitle = styled.h1`
  letter-spacing: 3px;
`;

export const Oscillator1 = () => {
  return (
    <StyledOscillatorWrapper>
      <StyledOscillatorRow>
        <StyledTitle>OSC1</StyledTitle>
      </StyledOscillatorRow>
      <StyledOscillatorRow></StyledOscillatorRow>
      <StyledOscillatorRow></StyledOscillatorRow>
    </StyledOscillatorWrapper>
  );
};
