import React, { useEffect, useState } from "react";
import DatePick from "../common/DatePick";
import "./asteroid.css";
import { Line } from "react-chartjs-2";
import setChartFunction from "../../utils/setChartFunction";
import setAvgSizeChartFunction from "../../utils/setAvgSizeChartFunction";
import setFastestChartFunction from "../../utils/setFastestChartFunction";
import setClosestChartFunction from "../../utils/setClosestChartFunction";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function AsteroidBody() {

  const [startDate, setStartDate] = useState("2023-05-01");
  const [endDate, setEndDate] = useState("2023-05-07");
  const [asteroidData, setAsteroidData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [fastestChartData, setFastestChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [closestChartData, setClosestChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [avgSizechartData, setAvgSizeChartData] = useState({
    labels: [],
    datasets: [],
  });

  async function getAsteroidData() {
    try {
      const d = await fetch(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.REACT_APP_URL}`
      );
     
      const data = await d.json();

      setAsteroidData(data.near_earth_objects);

      setFastestChartFunction(
        setFastestChartData,
        Object.keys(data.near_earth_objects).map((d) => {
          return d;
        }),
        Object.values(data.near_earth_objects)
      );
      setClosestChartFunction(
        setClosestChartData,
        Object.keys(data.near_earth_objects).map((d) => {
          return d;
        }),
        Object.values(data.near_earth_objects)
      );
      setAvgSizeChartFunction(
        setAvgSizeChartData,
        Object.keys(data.near_earth_objects).map((d) => {
          return d;
        }),
        Object.values(data.near_earth_objects)
      );
      setChartFunction(
        setChartData,
        Object.keys(data.near_earth_objects).map((d) => {
          return d;
        }),
        Object.values(data.near_earth_objects).map((d) => {
          return d.length;
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAsteroidData();
  }, []);
  console.log(startDate, endDate);
  const styleLineGraph = {
    backgroundColor: "white",
    color: "black",
    padding: "20px",
    width: "90vw",
    margin: "40px auto ",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  };
  function fetchData() {
    getAsteroidData();
  }
  return (
    <div className="asteroid-body">
      <div className="input-and-button">
        <div className="date-picker-box">
          <DatePick
            setDate={setStartDate}
            dateLabel="Start Date"
            date="2023-05-01"
            className="date-picker"
          />
          <DatePick
            setDate={setEndDate}
            dateLabel="End Date"
            date="2023-05-07"
            className="date-picker"
          />
        </div>

        <div className="input-form">
          <button type="button" onClick={() => fetchData()}>
            Submit
          </button>
        </div>
      </div>

      <div
        style={{
          color: "white",
          padding: "20px",
          width: "90vw",
          margin: "40px auto ",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={styleLineGraph}>
          <h3>No of Asteroids VS Each Day</h3>
          <Line data={chartData} />
        </div>
        <div style={styleLineGraph}>
          <h3>Fastest Asteroids in km/h VS Each Day</h3>
          <Line data={fastestChartData} />
        </div>
        <div style={styleLineGraph}>
          <h1>Closest Asteroids VS Each Day</h1>
          <Line data={closestChartData} />
        </div>
        <div style={styleLineGraph}>
          <h3>Average Size of the Asteroids in kilometers VS Each Day</h3>
          <Line data={avgSizechartData} />
        </div>
      </div>
    </div>
  );
}

export default AsteroidBody;
