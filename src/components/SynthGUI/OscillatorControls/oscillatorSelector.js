import styled from "styled-components";
import { SelectionDirectionalButton } from "../../Buttons/SelectionDirectionalButton";

const StyledOscillatorSelector = styled.div`
  display: flex;
  justify-content: space-between;
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
      <SelectionDirectionalButton direction="previous" special="pure" />
      <StyledText>{oscillator}</StyledText>
      <SelectionDirectionalButton direction="next" special="pure" />
    </StyledOscillatorSelector>
  );
};
