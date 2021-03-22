import styled from "styled-components";
import { useState } from "preact/hooks";
import { Counter } from "../../Displays/Counter";

const StyledTuningControl = styled.div`
  grid-column: span 2;

  display: grid;
  grid-template-columns: 2.5fr 5fr 0.7fr 5fr 2.5fr;
`;

const StyledPianoIcon = styled.img`
  justify-self: start;
  opacity: 0.7;
`;

const StyledCounter = styled(Counter)``;

const StyledSpacer = styled.div`
  width: 100%;
  height: 100%;

  background-color: #3e403c;

  grid-column: 3 / span 1;
`;

export const TuningControl = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledTuningControl>
      <StyledPianoIcon src="../../../assets/piano-black-18dp.svg" />
      <StyledCounter count={count} gridPosition={2} />
      <StyledSpacer />
      <StyledCounter count={count} gridPosition={4} />
      <StyledPianoIcon src="../../../assets/piano-black-18dp.svg" />
    </StyledTuningControl>
  );
};
