import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "My First dataset",
      data: [
        50,
        35,
        10,
        45,
        40,
        50,
        60,
        35,
        10,
        50,
        34,
        35,
        50,
        35,
        10,
        45,
        40,
        50,
        60,
        35,
        10,
        50,
        34,
        35,
        60,
        35,
        10,
        50,
        34,
        35,
      ],
      borderColor: "rgba(47, 76, 221, 1)",
      borderWidth: "0",
      barThickness: "7.1",
      backgroundColor: "rgba(47, 76, 221, 1)",
      minBarLength: 10,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins : {
    legend: {
      display: false,
    },
  },
  scales: {
    y: 
      {
        grid: {
          color: "rgba(233,236,255,1)",
          drawBorder: true,
        },
        ticks: {
          fontColor: "#3e4954",
          max: 60,
          min: 0,
          stepSize: 20,
        },
      },
    x: 
      {
        barPercentage: 0.3,

        grid: {
          display: false,
          zeroLineColor: "transparent",
        },
        ticks: {
          stepSize: 20,
          fontColor: "#3e4954",
          fontFamily: "Nunito, sans-serif",
        },
      },
  },
  tooltips: {
    mode: "index",
    intersect: false,
    titleFontColor: "#888",
    bodyFontColor: "#555",
    titleFontSize: 12,
    bodyFontSize: 15,
    backgroundColor: "rgba(255,255,255,1)",
    displayColors: true,
    xPadding: 10,
    yPadding: 7,
    borderColor: "rgba(220, 220, 220, 1)",
    borderWidth: 1,
    caretSize: 6,
    caretPadding: 10,
  },
};

class ActiveChart2 extends Component {
  render() {
    return (
      <div style={{ height: "190px" }}>
        <Bar data={data} height={190} options={options} />
      </div>
    );
  }
}

export default ActiveChart2;
