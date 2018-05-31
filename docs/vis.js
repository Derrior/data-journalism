var Chart = require("chart.js")
var colors = require('nice-color-palettes')

Chart.defaults.global.defaultFontSize = 20;

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
                }],

                yAxes: [{
                    ticks: {
                        autoSkip: true
                    }
                }]
            },

            responsiveAnimationDuration: 400,
            barThickness: 16,

            title: {
                fontSize: 18,
                fontColor: "#444",
                display: true,
                text: title

            },
            legend: {
                display: legend_shown
            }

        }});
};


neoplasms_chart = function() {
    var ctx = document.getElementById("mal-neoplasms").getContext('2d');
    var title = "Malignant neoplasms: the most suffering countries, YLD per 1m capita";
    var title_rus = ["Злокачественные новообразования: наиболее подверженные страны,", "значение YLD на 1 миллион населения"];
    var chart_data = {labels: [], datasets: [
        {
            data: [],
            backgroundColor: colors[0].concat(colors[1]).concat(colors[2]).concat(colors[3]),
        }
    ]
    };
    var loading = load_data(chart_data, "resources/neoplasms.json");
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title_rus);
    });
}

mental_disorders_chart = function() {
    var ctx = document.getElementById("mental").getContext('2d');
    var title = "Mental disorders: the most suffering countries, YLD per 1m capita";
    var title_rus = ["Психические расстройства: наиболее подверженные страны,", "значение YLD на 1 миллион населения"];
    var chart_data = {labels: [], datasets: [
        {
            data: [],
            backgroundColor: colors[4].concat(colors[1]).concat(colors[3]).concat(colors[0]),
        }
    ]
    };

    var loading = load_data(chart_data, "resources/mental.json");
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title_rus);
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
    var title_rus = "Заразные заболевания в Индии и Китае, значение YLD";
    var title_eng = "Communicable diseases in China and India, YLD";
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title_rus);
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
    var title_rus = "Незаразные заболевания в Индии и Китае, значение YLD";
    var title_eng = "Non-communicable diseases in China and India, YLD";
    return loading.then(function() {
        return create_chart(ctx, chart_data, "horizontalBar", title_rus);
    });
};

healthexp_chart = function() {

    var ctx = document.getElementById("health-exp").getContext('2d');
    var title_rus = "Финансирование медицины в USD на человека";
    var currcolors = colors[6].concat(colors[8]).concat(colors[6]).concat(colors[5]).concat(colors[6]);
    var i = 0;
    var chart_data = {labels: [], datasets: []};
    var who_data = fetch("resources/health_exp.json").then(string => string.json());
    var loading = who_data.then(data => {
        Object.entries(data).forEach(k => {
           chart_data.datasets.push({});
           chart_data.datasets[i].label = k[0];
           chart_data.datasets[i].borderColor = currcolors[i];
           chart_data.datasets[i].backgroundColor = "#aaaaaa22";
           chart_data.datasets[i].data = [];
           Object.entries(k[1]).forEach(c => {
               chart_data.datasets[i].data.push(c[1]);
               if (i == 0) {
                   chart_data.labels.push(c[0]);
               }
           });
           i++;
        });
    });

    return loading.then(function() {
        return create_chart(ctx, chart_data, "line", title_rus);
    });
};

healthexp_map = function() {

    const el = document.getElementById('exp-map');
    var map = L.map(el).setView([0, 0], 2);
     L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
            subdomains: 'abcd',
            minZoom: 1,
            maxZoom: 19
             }).addTo(map);



    var numbers_pr = fetch("resources/exp-map.json").then(string => string.json());
    var countries_pr = fetch("resources/countries.geo.json").then(string => string.json());
    countries_pr.then(countries => {
        numbers_pr.then(numbers => {
            L.geoJSON(countries, {
                style: function(feature) {
                    var name = feature.properties.name;
                    var exp_diff = numbers[name];

                    var ret = {
                        color: "#000",
                        weight: 0.35,
                        popupContent: exp_diff,
                        opacity: 0.5
                        };
                    if (exp_diff == undefined) {
                        console.log(name);
                        ret.fillColor == "#ffffff";
                    } else if (exp_diff < 0.5) {
                        ret.fillColor = "#bbbbee";
                    } else if (exp_diff < 1) {
                        ret.fillColor = "#9999ee";
                    } else if (exp_diff < 2) {
                        ret.fillColor = "#8888ee";
                    } else if (exp_diff < 4) {
                        ret.fillColor = "#6666ee";
                    } else if (exp_diff < 6) {
                        ret.fillColor = "#4444ee";
                    } else if (exp_diff < 13) {
                        ret.fillColor = "#3333ee";
                    } else {
                        ret.fillColor = "#1111ee";
                    }
                    return ret;
                },

                onEachFeature: function(feature, layer) {
                    var name = feature.properties.name;
                    var exp_diff = numbers[name];
                    var popup = name + ": " + exp_diff + "$ is maximum difference between two years";
                    if (exp_diff == undefined) {
                        popup = "No data about " + name;
                    }
                    layer.bindPopup(popup);
                }

            }).addTo(map);
        });
    });
};

var np_chart = neoplasms_chart();
var md_chart = mental_disorders_chart();
india_china_comm_chart();
india_china_ncomm_chart();
healthexp_chart();
healthexp_map();
