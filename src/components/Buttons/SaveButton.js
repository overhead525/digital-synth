import styled from "styled-components";

import { topMenuLineHeight } from "../SynthGUI/TopMenu/_constants";

const StyledCF = styled.div`
  position: relative;

  width: ${topMenuLineHeight}rem;
  height: ${topMenuLineHeight}rem;

  margin-left: 0.5rem;

  &:active {
    box-shadow: 0 0 7.5px #43D9D9;
  }
`;

const StyledSaveButton = styled.img`
  width: ${topMenuLineHeight}rem;

  position: absolute;

  -webkit-transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -o-transition: opacity 0.25s ease-in-out;
  transition: opacity 0.25s ease-in-out;
`;

const StyledSaveButtonTop = styled(StyledSaveButton)`
  &:hover {
    opacity: 0;
  }
`;

export const SaveButton = () => {
  return (
    <StyledCF>
      <StyledSaveButton src="../../assets/save-button-hover.svg" />
      <StyledSaveButtonTop src="../../assets/save-button.svg" />
    </StyledCF>
  )
}