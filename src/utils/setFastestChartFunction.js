function setFastestChartFunction(setFastestChartData,labels,data){
  let fastestData=[];
    for(let arrSingleData of data){
      let speed=-1;
      for(let curr of arrSingleData){
       speed=Math.max(speed,curr.close_approach_data[0].relative_velocity.kilometers_per_hour)
    }
  fastestData.push(speed);
}
setFastestChartData({
  labels: labels,
  datasets: [
    {
      label: "Asteroids Datasets",
      data: fastestData,
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
export default setFastestChartFunction;