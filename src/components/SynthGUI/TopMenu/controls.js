import styled from 'styled-components';

const StyledControls = styled.nav`
  display: flexbox;
  justify-content: flex-end;
  align-items: center;

  padding-right: 0.65rem;

  max-width: 48%;
`;

export const Controls = (props) => {
  return <StyledControls>{props.children}</StyledControls>
}