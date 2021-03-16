import styled from "styled-components";

const StyledOscillatorSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  width: 15rem;

  padding: 0 1rem;

  background-color: #a2a7a0;
`;

const StyledText = styled.p`
  line-height: 20%;
`;

export const OscillatorSelector = ({ oscillator = "sine" }) => {
  return (
    <StyledOscillatorSelector>
      <StyledText>{oscillator}</StyledText>
    </StyledOscillatorSelector>
  );
};
