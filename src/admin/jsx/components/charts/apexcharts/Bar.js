import React from "react";

import ReactApexChart from "react-apexcharts";

class ApexBar extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Running",
               data: [50, 18, 70, 40, 90, 70, 20, 75, 80, 25, 70, 45],
            },
            {
               name: "Cycling",
               data: [80, 40, 55, 20, 45, 30, 80, 90, 85, 90, 30, 85],
            },
         ],
         options: {
            chart: {
               type: "bar",
               height: 230,
               toolbar: {
                  show: false,
               },
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  columnWidth: "60%",
                  endingShape: "flat",
               },
            },

            colors: ["#FF9432", "#1EA7C5"],
            legend: {
               show: false,
               position: "top",
               horizontalAlign: "left",
            },
            dataLabels: {
               enabled: false,
            },
            stroke: {
               show: true,
               width: 10,
               colors: ["transparent"],
            },
            xaxis: {
               categories: [2011, 2012, 2013, 2014, 2015, 2016, 2017,2018,2019,2020,2021,2022],
            },
            responsive: [
               {
                  breakpoint: 700,
                  options: {
                     plotOptions: {
                        bar: {
                           columnWidth: "100%",
                        },
                     },
                  },
               },
            ],
         },
      };
   }

   render() {
      return (
         <div id="chart">
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="bar"
               height={430}
               // responsive={this.state.responsive}
            />
         </div>
      );
   }
}
export default ApexBar;
