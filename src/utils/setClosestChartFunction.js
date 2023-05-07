

function setClosestChartFunction(setClosestChartData,labels,data){
     let closestData = [];
     for (let arrSingleData of data) {
       let closest = Number.POSITIVE_INFINITY;
       for (let curr of arrSingleData) {
         closest= Math.min(
           closest,
           curr.close_approach_data[0].epoch_date_close_approach
         );
       }
       closestData.push(closest);
     }
    setClosestChartData({
      labels: labels,
      datasets: [
        {
          label: "Asteroids Datasets",
          data: closestData,
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

export default setClosestChartFunction;