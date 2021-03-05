import styled from 'styled-components';
import { Brand } from "../TopMenu/brand";

const StyledTopMenu = styled.header`
  display: flexbox;
  justify-items: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: #A2A6A1;
`;

export const TopMenu = () => {
  return (
    <StyledTopMenu><Brand /></StyledTopMenu>
  )
}