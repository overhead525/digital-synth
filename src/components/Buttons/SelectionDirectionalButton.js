import styled from "styled-components";
import { cycleSoundChoice } from "../../features/soundSelection/soundSelectionSlice";
import { useDispatch } from "react-redux";
import { topMenuLineHeight } from "../SynthGUI/TopMenu/_constants";

const StyledSelectionDirectionalButtonGroup = styled.div`
  display: flex;

  margin-left: 0.5rem;
`;

const StyledCF = styled.div`
  position: relative;

  width: ${topMenuLineHeight}rem;
  height: ${topMenuLineHeight}rem;

  &:active {
    box-shadow: 0 0 7.5px #43d9d9;
  }
`;

const StyledCFWithMargin = styled(StyledCF)`
  margin-right: 0.15rem;
`;

const StyledSelectionDirectionalButton = styled.img`
  width: ${topMenuLineHeight}rem;

  position: absolute;

  -webkit-transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -o-transition: opacity 0.25s ease-in-out;
  transition: opacity 0.25s ease-in-out;
`;

const StyledSelectionDirectionalButtonTop = styled(
  StyledSelectionDirectionalButton
)`
  &:hover {
    opacity: 0;
  }
`;

export const SelectionDirectionalButton = ({
  direction,
  special = "",
  updateFunction,
}) => {
  const dispatch = useDispatch();

  const specials = {
    pure: "-pure",
  };

  const checkSpecial = () => {
    if (special === "") return "";
    return specials[special];
  };

  return direction === "previous" ? (
    <StyledCFWithMargin onClick={() => updateFunction("previous")}>
      <StyledSelectionDirectionalButton
        src={`../../assets/${direction}-button${checkSpecial()}-hover.svg`}
      />
      <StyledSelectionDirectionalButtonTop
        src={`../../assets/${direction}-button${checkSpecial()}.svg`}
      />
    </StyledCFWithMargin>
  ) : (
    <StyledCF onClick={() => updateFunction("next")}>
      <StyledSelectionDirectionalButton
        src={`../../assets/${direction}-button${checkSpecial()}-hover.svg`}
      />
      <StyledSelectionDirectionalButtonTop
        src={`../../assets/${direction}-button${checkSpecial()}.svg`}
      />
    </StyledCF>
  );
};

export const SelectionDirectionalButtonGroup = (props) => {
  return (
    <StyledSelectionDirectionalButtonGroup>
      {props.children}
    </StyledSelectionDirectionalButtonGroup>
  );
};
