import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function DataChart({ options }) {
  return (
    <div
      className="data-chart"
      style={{ width: "calc(40vw - 100px)", margin: "5vw", padding: "50px" }}
    >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
