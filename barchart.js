<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Getting Started with Chart JS with www.chartjs3.com</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      .chartMenu {
        width: 100vw;
        height: 40px;
        background: #1a1a1a;
        color: rgba(54, 162, 235, 1);
      }
      .chartMenu p {
        padding: 10px;
        font-size: 20px;
      }
      .chartCard {
        width: 100vw;
        height: calc(100vh - 40px);
        background: rgba(54, 162, 235, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .chartBox {
        width: 700px;
        padding: 20px;
        border-radius: 20px;
        border: solid 3px rgba(54, 162, 235, 1);
        background: white;
      }
    </style>
  </head>
  <body>
    <div class="chartMenu">
      <p>WWW.CHARTJS3.COM (Chart JS <span id="chartVersion"></span>)</p>
    </div>
    <div class="chartCard">
      <div class="chartBox">
        <canvas id="myChart"></canvas>
        <input
          type="date"
          id="startdate"
          onchange="filterData()"
          value="2021-08-25"
        />
        <input
          type="date"
          id="enddate"
          onchange="filterData()"
          value="2021-08-31"
        />
      </div>
    </div>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/chart.js/dist/chart.umd.min.js"
    ></script>
    <script>
      // setup
      const dates = [
        "2021-08-25",
        "2021-08-26",
        "2021-08-27",
        "2021-08-28",
        "2021-08-29",
        "2021-08-30",
        "2021-08-31",
      ];
      const datapoints = [18, 12, 6, 9, 12, 3, 9];
      const data = {
        labels: dates,
        datasets: [
          {
            label: "Weekly Sales",
            data: datapoints,
            backgroundColor: [
              "rgba(255, 26, 104, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(0, 0, 0, 0.2)",
            ],
            borderColor: [
              "rgba(255, 26, 104, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(0, 0, 0, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      // config
      const config = {
        type: "bar",
        data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      // render init block
      const myChart = new Chart(document.getElementById("myChart"), config);

      function filterData() {
        const dates2 = [...dates];
        console.log(dates2);
        const startdate = document.getElementById("startdate");
        const enddate = document.getElementById("enddate");

        //get the index number in array
        const indexstartdate = dates2.indexOf(startdate.value);
        const indexenddate = dates2.indexOf(enddate.value);

        //slice the array only showing the selected section
        const filterDate = dates2.slice(indexstartdate, indexenddate + 1);

        // replace the labels in the chart
        myChart.config.data.labels = filterDate;

        const datapoints2 = [...datapoints];
        const filterDataPoints = datapoints2.slice(
          indexstartdate,
          indexenddate + 1
        );
        myChart.config.data.datasets[0].data = filterDataPoints;
        myChart.update();
      }

      // Instantly assign Chart.js version
      const chartVersion = document.getElementById("chartVersion");
      chartVersion.innerText = Chart.version;
    </script>
  </body>
</html>
