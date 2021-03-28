import styled from "styled-components";

const StyledVisualizer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
`;

export const Visualizer = () => {
  return (
    <StyledVisualizer>
      <canvas id="myChart"></canvas>
    </StyledVisualizer>
  );
};
