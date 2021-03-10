import styled from 'styled-components';

const StyledSelector = styled.div`
  background-color: #83867F;
  width: 15rem;
  padding: 0.255rem 0;
  text-align: center;

  margin-left: 0.5rem;
`;

export const Selector = ({ text }) => {
  return <StyledSelector>{text}</StyledSelector>
}