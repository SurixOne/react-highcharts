import "./App.css";
import DataChart from "./components/chart/DataChart";
import ColumnChart from "./components/chart/ColumnChart";

function App() {
  const readings = [100, 200, 30, 50, 167, 32, 5, 300, 351, 351, 250];
  const gradientColors = [
    {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, "rgb(255, 104, 177)"],
        [0.75, "rgba(255, 89, 172, 1)"],
        [1, "rgb(248, 250, 141)"],
      ],
    },
    {
      linearGradient: [0, 0, 0, 300],
      stops: [
        [0, "rgb(0, 255, 255)"],
        [0.75, "cyan"],
        [1, "rgb(248, 250, 141)"],
      ],
    },
  ];
  const options = {
    chart: {
      type: "area",
      backgroundColor: "transparent",
      style: {
        fontFamily: "monospace",
        color: "lightgreen",
      },
    },
    series: [
      {
        name: "Farenheit",
        data: readings.map((r) => (r * 9) / 5 + 32),
        shadow: true,
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "rgb(255, 104, 177)"],
            [0.25, "rgba(255, 192, 203, 1)"],
            [1, "rgba(255, 249, 192, 0.514)"],
          ],
        },
      },
      {
        name: "Celsius",
        data: readings,
        shadow: true,
        fillColor: {
          linearGradient: [0, 0, 0, 300],
          stops: [
            [0, "#34ebcf"],
            [0.25, "rgba(52, 235, 207, 1)"],
            [1, "rgba(161, 248, 215, 0.1)"],
          ],
        },
      },
    ],
    title: {
      text: "Area",
      style: {
        color: "lightgreen",
        font: 'bold 32px "Trebuchet MS", Verdana, sans-serif',
      },
    },
    colors: ["rgb(255, 104, 177)", "#34ebcf"],
    legend: {
      shadow: true,
      itemStyle: {
        color: "lightgreen",
      },
    },
    xAxis: {
      gridLineColor: "rgba(144, 238, 144, 0.5)",
      gridLineWidht: 2,
      tickColor: "rgba(144, 238, 144, 0.541)",
      lineColor: "lightgreen",
      labels: {
        style: {
          color: "lightgreen",
          font: "11px Trebuchet MS, Verdana, sans-serif",
        },
      },
      title: {
        style: {
          color: "lightgreen",
          fontWeight: "bold",
          fontSize: "12px",
          fontFamily: "Trebuchet MS, Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      gridLineColor: "rgba(144, 238, 144, 0.5)",
      labels: {
        style: {
          color: "lightgreen",
        },
      },
      title: {
        style: {
          color: "lightgreen",
          font: 'bold 16px "Trebuchet MS", Verdana, sans-serif',
        },
      },
    },
    labels: {
      style: {
        color: "lightgreen",
      },
    },
  };

  return (
    <div className="app">
      <div className="header">
        <span className="red">HIGH</span>
        <span className="pink">CHARTS</span>
      </div>
      <div className="charts">
        <DataChart options={options} />
        <ColumnChart
          options={{
            ...options,
            colors: gradientColors,
            chart: {
              ...options.chart,
              type: "column",
            },
            title: { ...options.title, text: "Bar" },
          }}
        />
      </div>
    </div>
  );
}

export default App;
