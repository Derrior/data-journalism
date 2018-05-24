var Chart = require("chart.js")
var colors = require('nice-color-palettes')

Chart.defaults.global.defaultFontSize = 16;

load_data = function(chart_data, name) {
    var who_data = fetch(name).then(string => string.json());
    var loading = who_data.then(data => Object.entries(data).forEach(function(k, v) {
           chart_data.labels.push(k[0]);
           chart_data.datasets[0].data.push(k[1]);
    }));
    return loading;
};

create_chart = function(ctx, data) {
    var myChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
};

neoplasms_chart = function() {
    var ctx = document.getElementById("mal-neoplasms").getContext('2d');
    var chart_data = {labels: [], datasets: [
        {
            label: "Malignant neoplasms: the most suffering countries, years lost due to disability per 1m capita",
            data: [],
            backgroundColor: colors[0].concat(colors[1]).concat(colors[2]).concat(colors[3]),
        }
    ]
    };
    var loading = load_data(chart_data, "resourses/neoplasms.json");
    loading.then(function() {
        create_chart(ctx, chart_data);
    });
}

mental_disorders_chart = function() {
    var ctx = document.getElementById("mental").getContext('2d');
    var chart_data = {labels: [], datasets: [
        {
            label: "Mental disorders: the most suffering countries, years lost due to disability per 1m capita",
            data: [],
            backgroundColor: colors[4].concat(colors[1]).concat(colors[3]).concat(colors[0]),
        }
    ]
    };

    var loading = load_data(chart_data, "resourses/mental.json");
    loading.then(function() {
        create_chart(ctx, chart_data);
    });
};

neoplasms_chart();
mental_disorders_chart();
