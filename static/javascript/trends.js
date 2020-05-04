var ctx = document.getElementById('death_rec').getContext('2d');
var ctx_1 = document.getElementById('cases').getContext('2d');
var labels = ['Jan 30', 'Feb 2', 'Feb 5', 'Feb 8', 'Feb 11', 'Feb 14', 'Feb 17', 'Feb 20', 'Feb 23', 'Feb 26', 'Feb 29',
'Mar 3', 'Mar 6', 'Mar 9', 'Mar 12', 'Mar 15', 'Mar 18', 'Mar 21', 'Mar 24', 'Mar 27', 'Mar 30',
'Apr 2', 'Apr 5', 'Apr 8', 'Apr 11', 'Apr 14', 'Apr 17', 'Apr 20', 'Apr 23', 'Apr 26', 'Apr 29',
'May 2'];
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Fatalities',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e53e3e',
            pointBackgroundColor: '#e53e3e',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
            1, 1, 1, 2, 11, 17, 19, 35, 54, 78,
            107, 152, 182, 247, 335, 287, 428, 462, 501, 558,
            603],
            lineTension: 0
        },{
            label: 'Total Recoveries',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#2BA366',
            pointBackgroundColor: '#2BA366',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: [
                0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 
                1, 1, 1, 2, 2, 5, 13, 20, 31, 42,
                51, 64, 96, 157, 295, 487, 613, 722, 862, 1023,
                1124],
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
                type: 'logarithmic',
                ticks: {
                    min: 0,
                    max: 10000,
                    fontColor: '#333333',
                    callback: function (value, index, values) {
                        return Number(value.toString());//pass tick values as a string into Number function
                    }
                },
                afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
                    chartObj.ticks = [];
                    chartObj.ticks.push(0);
                    chartObj.ticks.push(1);
                    chartObj.ticks.push(10);
                    chartObj.ticks.push(100);
                    chartObj.ticks.push(1000);
                    chartObj.ticks.push(10000);
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#333333',
                    maxTicksLimit: 8.1
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
        labels: labels,
        datasets: [{
            label: 'Total Confirmed Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#236377',
            pointBackgroundColor: '#236377FF',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 
            3, 5, 20, 52, 140, 202, 307, 552, 803, 1546,
            2633, 3246, 3870, 4428, 5223, 5878, 6459, 6981, 7579, 8212, 
            8928],
            lineTension: 0
        },{
            label: 'Active Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e3d400',
            pointBackgroundColor: '#e3d400',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: [1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 
            1, 3, 18, 48, 127, 180, 275, 497, 718, 1426, 
            2475, 3030, 3592, 4024, 4593, 5104, 5418, 5797, 6216, 6631,
            7201],
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
                type: 'logarithmic',
                ticks: {
                    min: 1,
                    max: 10000,
                    fontColor: '#333333',
                    callback: function (value, index, values) {
                        return Number(value.toString());//pass tick values as a string into Number function
                    }
                },
                afterBuildTicks: function (chartObj) { //Build ticks labelling as per your need
                    chartObj.ticks = [];
                    chartObj.ticks.push(1);
                    chartObj.ticks.push(10);
                    chartObj.ticks.push(100);
                    chartObj.ticks.push(1000);
                    chartObj.ticks.push(10000);
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: '#333333',
                    maxTicksLimit: 8.1
                },
                gridLines: {
                    display: true,
                    color: "#BEBEBE"
                }
            }]
        }
        
    }
});