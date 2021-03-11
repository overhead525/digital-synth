import styled from "styled-components";

const StyledLogo = styled.img`
  width: 2.5rem;
`;

export const Logo = () => {
  return <StyledLogo src="../../assets/tokyo-volcano.svg" />
}