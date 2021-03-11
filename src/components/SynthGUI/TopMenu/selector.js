import { useState } from "preact/hooks";
import styled from 'styled-components';

import { soundChoices } from "../../../contexts/SynthContexts";

const StyledSelectorContainer = styled.div`
  margin-left: 0.5rem;
`;

const StyledSelectorHeader = styled.div`
  background-color: #83867F;
  width: 15rem;
  padding: 0.255rem 0;
  text-align: center;

  box-shadow: inset 0px 0px 10px 0px #43D9D9;
`;

const StyledSelectorList = styled.div`
  width: 15rem;
  text-align: center;

  position: absolute;

  z-index: 10;
`;

const StyledSelectorListComponent = styled.div`
  width: 100%;
  background-color: #83867F; 
`;

const StyledSelectorListComponentCurrent = styled(StyledSelectorListComponent)`
  
`;

export const Selector = ({ text }) => {
  const [isListOpen, setIsListOpen] = useState(false);

  if (isListOpen) window.addEventListener("click", e => {
    if (!(e.target.id.valueOf() === "selector")) {
      setIsListOpen(false);
    }
  })

  const renderComponents = (arr = []) => {
    return arr.map(element => <StyledSelectorListComponentCurrent id="selector">{element}</StyledSelectorListComponentCurrent>)
  }

  return (
    <StyledSelectorContainer id="selector">
      <StyledSelectorHeader id="selector" onClick={() => isListOpen ? setIsListOpen(false) : setIsListOpen(true)}>
        {text}
      </StyledSelectorHeader>
      {
      isListOpen ? 
        (
          <StyledSelectorList id="selector" onClick={() => setIsListOpen(false)}>
            {renderComponents(soundChoices)}
          </StyledSelectorList>
        ) : null
      }
    </StyledSelectorContainer>
  );
}