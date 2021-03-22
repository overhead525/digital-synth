import styled from "styled-components";
import { SelectionDirectionalButton } from "../../Buttons/SelectionDirectionalButton";

const StyledOscillatorSelector = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;

  grid-column: 2 / span 3;

  width: 100%;

  background-color: #a2a7a0;
`;

const StyledText = styled.p`
  line-height: 20%;
`;

export const OscillatorSelector = (
  { oscillator = "sine" },
  onUpdateFunction = () => {}
) => {
  return (
    <StyledOscillatorSelector>
      <SelectionDirectionalButton direction="previous" special="pure" />
      <StyledText>{oscillator}</StyledText>
      <SelectionDirectionalButton direction="next" special="pure" />
    </StyledOscillatorSelector>
  );
};
