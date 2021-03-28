import { useEffect, useState } from "preact/hooks";
import styled from "styled-components";
import { buildVisualizer } from "./createChart";

const StyledVisualizer = styled.div`
  background-color: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100%;
`;

export const Visualizer = () => {
  const [shift, setShift] = useState(0);

  const renderChart = () => {
    const ctx = document.getElementById("myChart").getContext("2d");
    const myChart = buildVisualizer(ctx, {
      xMin: 0,
      xMax: 50,
      xStep: 0.2,
      shift: shift,
    });
  };

  useEffect(() => {
    setShift(shift + 1);
    renderChart();
  });

  return (
    <StyledVisualizer onClick={() => setShift(shift + 1)}>
      <canvas id="myChart"></canvas>
    </StyledVisualizer>
  );
};
