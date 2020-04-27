var ctx = document.getElementById('death_rec').getContext('2d');
var ctx_1 = document.getElementById('cases').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan 30', 'Feb 5', 'Mar 15', 'Mar 29', 'Apr 12', 'Apr 25', 'Apr 26', 'Apr 27'],
        datasets: [{
            label: 'Total Fatalities',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e53e3e',
            pointBackgroundColor: '#e53e3e',
            pointRadius: 4,
            hitRadius: 10,
            hoverRadius: 5,
            data: [0, 1, 8, 71, 297, 494, 501, 511],
            lineTension: 0
        },{
            label: 'Total Recoveries',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#2BA366',
            pointBackgroundColor: '#2BA366',
            pointRadius: 4,
            hitRadius: 10,
            hoverRadius: 5,
            data: [0, 1, 2, 42, 197, 792, 862, 932],
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            labels: {
                fontColor: '#333333'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: '#333333'
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }],
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 145,
                    minRotation: 35,
                    fontColor: '#333333'
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }]
        }
    }
});

var chart_1 = new Chart(ctx_1, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan 30', 'Feb 5', 'Mar 15', 'Mar 29', 'Apr 12', 'Apr 25', 'Apr 26', 'Apr 27'],
        datasets: [{
            label: 'Total Confirmed Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#236377',
            pointBackgroundColor: '#236377FF',
            pointRadius: 4,
            hitRadius: 10,
            hoverRadius: 5,
            data: [1, 3, 140, 1418, 4648, 7294, 7579, 7777],
            lineTension: 0
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
            labels: {
                fontColor: '#333333'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: '#333333'
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }],
            xAxes: [{
                ticks: {
                    autoSkip: false,
                    maxRotation: 145,
                    minRotation: 35,
                    fontColor: '#333333'
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }]
        }
    }
});