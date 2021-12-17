import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function ColumnChart({ options }) {
  return (
    <div className="data-chart">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
