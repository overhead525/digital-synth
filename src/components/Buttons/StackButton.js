import styled from "styled-components";

const StyledCF = styled.div`
  position: relative;
  width: 3.2rem;
`;

const StyledStackButton = styled.img`
  position: absolute;

  -webkit-transition: opacity 0.25s ease-in-out;
  -moz-transition: opacity 0.25s ease-in-out;
  -o-transition: opacity 0.25s ease-in-out;
  transition: opacity 0.25s ease-in-out;
`;

const StyledStackButtonTop = styled(StyledStackButton)`
  &:hover {
    opacity: 0;
  }
`;

export const StackButton = ({ action }) => {
  return (
    <StyledCF>
      <StyledStackButton src={`../../assets/${action}-button-hover.svg`} />
      <StyledStackButtonTop src={`../../assets/${action}-button.svg`} />
    </StyledCF>
  )
}