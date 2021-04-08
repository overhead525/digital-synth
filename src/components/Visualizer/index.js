import { Component } from "preact";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

const VisualizerChart = ({ xGenerator, yGenerator }) => {
  return (
    <Line
      data={{
        datasets: [
          {
            label: "Oscillator 1",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            data: [],
          },
          {
            label: "Oscillator 2",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            data: [],
          },
        ],
      }}
      options={{
        scales: {
          xAxes: [
            {
              type: "realtime",
              realtime: {
                onRefresh: function (chart) {
                  console.log(xGenerator());
                  chart.data.datasets.forEach((dataset) => {
                    dataset.data.push({
                      x: Date.now(),
                      y: yGenerator(xGenerator()),
                    });
                  });
                },
                refresh: 1000,
                delay: 1000,
              },
            },
          ],
        },
      }}
    />
  );
};

export default VisualizerChart;
