import styled from 'styled-components';
import { Brand } from "../TopMenu/brand";
import { Controls } from "../TopMenu/controls";
import { StackButton } from "../../Buttons/StackButton"
import { Selector } from './selector';
import { SelectionDirectionalButton, SelectionDirectionalButtonGroup } from '../../Buttons/SelectionDirectionalButton';
import { SaveButton } from "../../Buttons/SaveButton";

const StyledTopMenu = styled.header`
  display: flexbox;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;

  background: linear-gradient(90deg, rgba(162,166,161,1) 0%, rgba(202,207,201,1) 44%, rgba(162,166,161,1) 100%);
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
        <SaveButton />
      </Controls>
    </StyledTopMenu>
  )
}