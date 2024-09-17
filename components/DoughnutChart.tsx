"use client";

import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Banks",
        data: [1250, 3000, 500, 700],
        backgroundColor: ["#0747b6", "#2265d8", "#2f91fa", "#175CD3"],
      },
    ],
    labels: ["Bank A", "Bank B", "Bank C", "Bank D"],
  };
  return (
    <Doughnut
      data={data}
      options={{
        responsive: true,
        cutout: "60%",
        plugins: { legend: { display: false } },
      }}
    />
  );
};

export default DoughnutChart;
