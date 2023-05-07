
function setChartFunction(setChartData,labels,data){
setChartData({
  labels: labels,
  datasets: [
    {
      label: "Asteroids Datasets",
      data: data,
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
export default setChartFunction;