var ctx = document.getElementById('death_rec').getContext('2d');
var ctx_1 = document.getElementById('cases').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Jan 30', 'Feb 2', 'Feb 5', 'Feb 8', 'Feb 11', 'Feb 14', 'Feb 17', 'Feb 20', 'Feb 23', 'Feb 26', 'Feb 29',
        'Mar 3', 'Mar 6', 'Mar 9', 'Mar 12', 'Mar 15', 'Mar 18', 'Mar 21', 'Mar 24', 'Mar 27', 'Mar 30',
        'Apr 2', 'Apr 5', 'Apr 8', 'Apr 11', 'Apr 14', 'Apr 17', 'Apr 20', 'Apr 23', 'Apr 26'],
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
            107, 152, 182, 247, 335, 287, 428, 462, 501],
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
                51, 64, 96, 157, 295, 487, 613, 722, 862],
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
                    max: 1000,
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
        labels: ['Jan 30', 'Feb 2', 'Feb 5', 'Feb 8', 'Feb 11', 'Feb 14', 'Feb 17', 'Feb 20', 'Feb 23', 'Feb 26', 'Feb 29',
        'Mar 3', 'Mar 6', 'Mar 9', 'Mar 12', 'Mar 15', 'Mar 18', 'Mar 21', 'Mar 24', 'Mar 27', 'Mar 30',
        'Apr 2', 'Apr 5', 'Apr 8', 'Apr 11', 'Apr 14', 'Apr 17', 'Apr 20', 'Apr 23', 'Apr 26'],
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
            2633, 3246, 3870, 4428, 5223, 5878, 6459, 6981, 7579],
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