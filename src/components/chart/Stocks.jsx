import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

export default function Stocks() {
  const readings = [100, 200, 30, 50, 45, 32, 300, 351, 351, 250];
  var options = {
    series: [
      {
        name: "Celcius",
        data: readings,
      },
      {
        name: "Celcius",
        data: readings.map((r) => (r * 9) / 5 + 32),
      },
    ],
    title: {
      text: "Temperature readings",
    },
  };

  var getAndLoadPrices = (tickerString) => {
    axios.get(
      `https://api.iextrading.com/1.0/stock/${tickerString}/chart/1y`,
      (data) => {
        console.log(data);
        // options.series = response.map((day) => [day.date, day.close]);
      }
    );
  };
  getAndLoadPrices("msft");
  console.log(options.series);
  return (
    <div style={{ width: "40vw", margin: "5vw" }}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
