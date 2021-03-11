import styled from 'styled-components';
import { Brand } from "../TopMenu/brand";
import { Controls } from "../TopMenu/controls";
import { StackButton } from "../../Buttons/StackButton"
import { Selector } from './selector';
import { SelectionDirectionalButton, SelectionDirectionalButtonGroup } from '../../Buttons/SelectionDirectionalButton';

const StyledTopMenu = styled.header`
  display: flexbox;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  background-color: #A2A6A1;
`;

export const TopMenu = ({ soundSelection }) => {
  return (
    <StyledTopMenu>
      <Brand />
      <Controls>
        <StackButton action="undo" />
        <StackButton action="redo" />
        <Selector text={soundSelection} />
        <SelectionDirectionalButtonGroup>
          <SelectionDirectionalButton direction="previous" />
          <SelectionDirectionalButton direction="next" />
        </SelectionDirectionalButtonGroup>
      </Controls>
    </StyledTopMenu>
  )
}