import { Chart } from "chart.js";
import * as _ from "lodash";

const generateXValues = (xMin = 0, xMax = 50, xStep = 0.2) => {
  return _.range(xMin, xMax, xStep);
};

const generateYValues = (xVals = generateXValues(), shift = 0) => {
  return xVals.map((x) => Math.sin(x + (Math.PI / 48) * shift));
};

const defaultOptions = {
  xMin: 0,
  xMax: 50,
  xStep: 0.2,
  shift: 0,
};

export const buildVisualizer = (ctx, options = defaultOptions) => {
  return new Chart(ctx, {
    type: "line",
    data: {
      labels: generateXValues().map((val) => val.toString()),
      datasets: [
        {
          label: "My First Dataset",
          data: generateYValues(generateXValues(), options.shift),
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          lineTension: 0.1,
        },
      ],
    },
    options: {
      animation: {
        duration: 0,
      },
      elements: {
        point: {
          radius: 0,
        },
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
      },
    },
  });
};
