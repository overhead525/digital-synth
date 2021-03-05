import styled from 'styled-components';
import { Brand } from "../TopMenu/brand";
import { Controls } from "../TopMenu/controls";
import { StackButton } from "../../Buttons/StackButton"

const StyledTopMenu = styled.header`
  display: flexbox;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: #A2A6A1;
`;

export const TopMenu = () => {
  return (
    <StyledTopMenu>
      <Brand />
      <Controls>
        <StackButton action="undo" />
        <StackButton action="redo" />
      </Controls>
    </StyledTopMenu>
  )
}