var Chart = require("chart.js")
var colors = require('nice-color-palettes')

Chart.defaults.global.defaultFontSize = 16;
var ctx = document.getElementById("mal-neoplasms").getContext('2d');
var chart_data = {labels: [], datasets: [
    {
        label: "Malignant neoplasms: the most suffering countries",
        data: [],
        backgroundColor: colors[0].concat(colors[1]).concat(colors[2]).concat(colors[3]),
    }
]
};
var who_data = fetch("resourses/neoplasms.json").then(string => string.json());
var loading = who_data.then(data => Object.entries(data).forEach(function(k, v) {
       chart_data.labels.push(k[0]);
       chart_data.datasets[0].data.push(k[1]);
}));
loading.then(function() {console.log(chart_data);}).then(function() {
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: chart_data,
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
})});


