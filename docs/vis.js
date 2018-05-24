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

create_chart = function(ctx, data, type, title) {
    var legend_shown = (data.datasets.length > 1);
    return new Chart(ctx, {
        type: type,
        data: data,
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            },


            title: {
                display: true,
                text: title
            },
            legend: {
                display: legend_shown
            }
        }
    });
};

neoplasms_chart = function() {
    var ctx = document.getElementById("mal-neoplasms").getContext('2d');
    var title = "Malignant neoplasms: the most suffering countries, years lost due to disability per 1m capita";
    var chart_data = {labels: [], datasets: [
        {
            data: [],
            backgroundColor: colors[0].concat(colors[1]).concat(colors[2]).concat(colors[3]),
        }
    ]
    };
    var loading = load_data(chart_data, "resources/neoplasms.json");
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title);
    });
}

mental_disorders_chart = function() {
    var ctx = document.getElementById("mental").getContext('2d');
    var title = "Mental disorders: the most suffering countries, years lost due to disability per 1m capita";
    var chart_data = {labels: [], datasets: [
        {
            data: [],
            backgroundColor: colors[4].concat(colors[1]).concat(colors[3]).concat(colors[0]),
        }
    ]
    };

    var loading = load_data(chart_data, "resources/mental.json");
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title);
    });
};

india_china_comm_chart = function() {
    var ctx = document.getElementById("india_china_c").getContext('2d');
    var chart_data = {labels: [], datasets: [
        {
            label: "India",
            data: [],
            backgroundColor: colors[3][0]
        },
        {
            label: "China",
            data: [],
            backgroundColor: colors[3][2]
        }
    ]
    };

    var who_data = fetch("resources/india_china_comm.json").then(string => string.json());
    var loading = who_data.then(data => {
        Object.entries(data["India"]).forEach(k => {
           chart_data.labels.push(k[0]);
           chart_data.datasets[0].data.push(k[1]);
        });
        Object.entries(data["China"]).forEach(k => {
           chart_data.datasets[1].data.push(k[1]);
        });
    });
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", "Communicable diseases in China and India, YLD");
    });
}
india_china_ncomm_chart = function() {
    var ctx = document.getElementById("india_china_nc").getContext('2d');
    var chart_data = {labels: [], datasets: [
        {
            label: "India",
            data: [],
            backgroundColor: colors[3][0]
        },
        {
            label: "China",
            data: [],
            backgroundColor: colors[3][2]
        }
    ]
    };
    var who_data = fetch("resources/india_china_ncomm.json").then(string => string.json());
    var loading = who_data.then(data => {
        Object.entries(data["India"]).forEach(k => {
           chart_data.labels.push(k[0]);
           chart_data.datasets[0].data.push(k[1]);
        });
        Object.entries(data["China"]).forEach(k => {
           chart_data.datasets[1].data.push(k[1]);
        });
    });
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", "Non-communicable diseases in China and India, YLD");
    });
};


var np_chart = neoplasms_chart();
var md_chart = mental_disorders_chart();
india_china_comm_chart();
india_china_ncomm_chart();
