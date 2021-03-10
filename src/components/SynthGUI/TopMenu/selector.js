import styled from 'styled-components';

const StyledSelector = styled.div`
  background-color: #83867F;
  width: 10rem;
  padding: 0.5rem 0;
  text-align: center;
`;

export const Selector = ({ text }) => {
  return <StyledSelector>{text}</StyledSelector>
}