import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  xGeneratorSelector,
  yGeneratorSelector,
} from "../../../features/visualizer/visualizerSlice";

const StyledVisualizer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
`;

export const Visualizer = () => {
  const xGenerator = useSelector(xGeneratorSelector);
  const yGenerator = useSelector(yGeneratorSelector);

  return <StyledVisualizer></StyledVisualizer>;
};
