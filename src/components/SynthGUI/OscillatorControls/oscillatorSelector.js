import styled from "styled-components";

const StyledOscillatorSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 15rem;

  padding: 0 1rem;

  background-color: #a2a7a0;
`;

const StyledArrowLeft = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.75rem 1.3rem 0.75rem 0;
  border-color: transparent #7b7d7b transparent transparent;
`;

const StyledArrowRight = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.75rem 0 0.75rem 1.3rem;
  border-color: transparent transparent transparent #7b7d7b;
`;

export const OscillatorSelector = ({ oscillator = "sine" }) => {
  return (
    <StyledOscillatorSelector>
      <StyledArrowLeft />
      <p>{oscillator}</p>
      <StyledArrowRight />
    </StyledOscillatorSelector>
  );
};
