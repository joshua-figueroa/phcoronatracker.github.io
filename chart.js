var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
let date = (months[today.getMonth()]) + ' ' +today.getDate() + ' - ' + h + ":" + m + ":" + s;
let title = 'Confirmed COVID-19 Cases as of: ' + date;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
}

let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January 30', 'February 5', 'March 15', 'March 22', 'March 29', 'April 5', 'April 6', 'April 7'],
        datasets: [{
            label: 'Number of Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(255, 255, 255)',
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointRadius: 4,
            hitRadius: 1,
            hoverRadius: 5,
            data: [1, 3, 140, 462, 1418, 3246, 3660, 3764]
        },{
            label: 'Number of Deaths',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#FF0000',
            pointBackgroundColor: '#FF0000',
            pointRadius: 4,
            hitRadius: 1,
            hoverRadius: 5,
            data: [0, 1, 8, 25, 71, 152, 163, 177]
        },{
            label: 'Number of Recoveries',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#00FF00',
            pointBackgroundColor: '#00FF00',
            pointRadius: 4,
            hitRadius: 1,
            hoverRadius: 5,
            data: [0, 1, 2, 17, 42, 64, 73, 84]
        }]
    },

    // Configuration options go here
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: title,
            fontColor: 'white',
            fontFamily: 'Arial',
            fontSize: 18
        },
        legend: {
            labels: {
                fontColor: 'white'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    fontColor: 'white',
                    fontSize: 14
                },
                gridLines: {
                    display: true,
                    color: "#6d727a"
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: 'white',
                    fontSize: 14
                },
                gridLines: {
                    display: true,
                    color: "#6d727a"
                }
            }]
        }
    }
});