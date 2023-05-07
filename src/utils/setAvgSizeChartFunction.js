function setAvgSizeChartFunction(setAvgSizeChartData, labels, data) {
  let avgSizeData = [];
  for (let arrSingleData of data) {
    let total = 0;
    for (let curr of arrSingleData) {
      total =
        total +
        Math.ceil(
          (curr.estimated_diameter.kilometers.estimated_diameter_min +
            curr.estimated_diameter.kilometers.estimated_diameter_min) /
            2
        );
    }
    avgSizeData.push(Math.ceil(+total / arrSingleData.length));
  }
  console.log(avgSizeData, "totalll");
  setAvgSizeChartData({
    labels: labels,
    datasets: [
      {
        label: "Asteroids Datasets",
        data: avgSizeData,
        backgroundColor: "white",
        color: "white",
        borderColor: "blue",
        tension: 0.3,
        pointStyle: "circle",
        pointRadius: "5",
        pointBorderColor: "white",
        pointBackgroundColor: "blue",
        fill: {
          target: "origin",
          above: "rgb(191, 216, 238)",
          below: "#000000",
        },
      },
    ],
  });
}

export default setAvgSizeChartFunction;
