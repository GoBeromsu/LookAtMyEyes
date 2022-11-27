var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: [],
    datasets: [
        {
            label: "Myscore",
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
        },
    ],
};
var options = {
    animation: {
        animateScale: true,
    },
    responsive: false,
    scales: {
        // yAxes: [
        //     {
        //         ticks: {
        //             beginAtZero: true,
        //         },
        //     },
        // ],
    },
};

function sendAjax(url) {
    var oReq = new XMLHttpRequest();

    oReq.open("POST", url);
    oReq.setRequestHeader("Content-Type", "application/json"); // json 형태로 보낸다
    oReq.send();

    oReq.addEventListener("load", function () {
        var result = JSON.parse(oReq.responseText);
        // console.log(result);
        var score = result.score;
        var stamp = result.stamp;
        var comp_data = data.datasets[0].data;
        console.log(result.score.length);
        for (var i = 0; i < result.score.length; i++) {
            comp_data[i] = score[i];
            data.labels[i] = stamp[i];
        }
        console.log(data);
        data.datasets[0].data = comp_data;
        myBarChart.update();
    });
}
//
var myBarChart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
});

var button = document.getElementById("sendAjax");

button.addEventListener("click", function () {
    sendAjax("http://localhost:3000/");
});
