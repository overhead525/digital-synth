import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import {
  changeSoundChoice,
  soundOptionsSelector,
  soundSelectionSelector,
} from "../../../features/soundSelection/soundSelectionSlice";
import { useSelector, useDispatch } from "react-redux";
import { changeSoundPreset } from "../../../features/soundPreset/soundPresetSlice";

const StyledSelectorContainer = styled.div`
  margin-left: 0.5rem;
  cursor: pointer;
`;

const StyledSelectorHeader = styled.div`
  background-color: #83867f;
  width: 15rem;
  padding: 0.255rem 0;
  text-align: center;

  box-shadow: inset 0px 0px 10px 0px #43d9d9;
`;

const StyledSelectorList = styled.div`
  width: 15rem;
  text-align: center;

  position: absolute;

  z-index: 10;

  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.58);
`;

const StyledSelectorListComponent = styled.div`
  width: 100%;
  background-color: #83867f;

  &:hover {
    box-shadow: inset 0px 0px 10px 0px #43d9d9;
  }
`;

export const Selector = ({ text }) => {
  const [isListOpen, setIsListOpen] = useState(false);
  const soundChoices = useSelector(soundOptionsSelector);
  const currentSoundChoice = useSelector(soundSelectionSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(() => changeSoundPreset(currentSoundChoice));
  }, [currentSoundChoice]);

  if (isListOpen)
    window.addEventListener("click", (e) => {
      if (!(e.target.id.valueOf() === "selector")) {
        setIsListOpen(false);
      }
    });

  const renderComponents = (arr = []) => {
    return arr.map((element) => (
      <StyledSelectorListComponent
        id="selector"
        onClick={() => dispatch(changeSoundChoice(element))}
      >
        {element}
      </StyledSelectorListComponent>
    ));
  };

  return (
    <StyledSelectorContainer id="selector">
      <StyledSelectorHeader
        id="selector"
        onClick={() =>
          isListOpen ? setIsListOpen(false) : setIsListOpen(true)
        }
      >
        {text}
      </StyledSelectorHeader>
      {isListOpen ? (
        <StyledSelectorList id="selector" onClick={() => setIsListOpen(false)}>
          {renderComponents(soundChoices)}
        </StyledSelectorList>
      ) : null}
    </StyledSelectorContainer>
  );
};
