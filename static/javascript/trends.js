const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
    
$dropdown.hover(
    function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
    },
    function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
    }
);
//canvas id
var ctx = document.getElementById('death_rec').getContext('2d');
var ctx_1 = document.getElementById('cases').getContext('2d');
var ctx_2 = document.getElementById('daily').getContext('2d');
var ctx_3 = document.getElementById('beds').getContext('2d');

//labels of line charts
var labels = ['Jan 30', 'Feb 1', 'Feb 2', 'Feb 3', 'Feb 4', 'Feb 5', 'Feb 6', 'Feb 7', 'Feb 8', 'Feb 9', 'Feb 10',
'Feb 11', 'Feb 12', 'Feb 13', 'Feb 14', 'Feb 15', 'Feb 16', 'Feb 17', 'Feb 18', 'Feb 19', 'Feb 20', 'Feb 21', 
'Feb 22', 'Feb 23', 'Feb 24', 'Feb 25', 'Feb 26', 'Feb 27', 'Feb 28', 'Feb 29', 'Mar 1', 'Mar 2', 'Mar 3', 
'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13', 'Mar 14', 
'Mar 15', 'Mar 16', 'Mar 17', 'Mar 18', 'Mar 19', 'Mar 20', 'Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25',
'Mar 26', 'Mar 27', 'Mar 28','Mar 29', 'Mar 30', 'Mar 31', 'Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5', 
'Apr 6', 'Apr 7', 'Apr 8', 'Apr 9', 'Apr 10', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 14', 'Apr 15', 'Apr 16', 
'Apr 17', 'Apr 18', 'Apr 19', 'Apr 20', 'Apr 21', 'Apr 22', 'Apr 23', 'Apr 24', 'Apr 25', 'Apr 26', 'Apr 27', 
'Apr 28', 'Apr 29', 'Apr 30', 'May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7', 'May 8', 
'May 9', 'May 10', 'May 11', 'May 12', 'May 13', 'May 14', 'May 15', 'May 16', 'May 17', 'May 18','May 19', 
'May 20', 'May 21', 'May 22', 'May 23', 'May 24', 'May 25', 'May 26','May 27', 'May 28','May 29', 'May 30', 
'May 31', 'Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6', 'Jun 7', 'Jun 8', 'Jun 9','Jun 10', 'Jun 11',
'Jun 12','Jun 13','Jun 14','Jun 15','Jun 16','Jun 17','Jun 18', 'Jun 19','Jun 20','Jun 21','Jun 22','Jun 23',
'Jun 24', 'Jun 25', 'Jun 26', 'Jun 27', 'Jun 28','Jun 29'];

//data for the charts
var cases = ['1','1','1','2','2','2','2','2','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','5','6','10','20','33','49','52','64','111','140','142','187','202','217','230','307','380','462','552','636','707','803','1075','1418','1546','2084','2311','2633','3018','3094','3246','3660','3764','3870','4076','4195','4428','4648','4932','5223','5453','5660','5878','6087','6259','6459','6599','6710','6981','7192','7294','7579','7777','7958','8212','8488','8772','8928','9223','9485','9684','10004','10343','10463','10610','10794','11086','11350','11618','11876','12091','12305','12513','12718','12942','13221','13434','13597','13777','14035','14319','14669','15049','15588','16634','17224','18086','18638','18997','19748','20382', '20626', '21340','21895','22474', '22992','23732','24175','24787','25392','25930','26420','26781','27238','27799', '28459', '29400','30052','30682','31825','32295', '33069', '34073', '34803', '35455','36438'];
var deaths = ['0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','2','5','8','12','12','14','17','17','18','19','25','33','35','38','45','54','68','71','78','88','96','107','136','144','152','163','177','182','203','221','247','297','315','335','349','362','387','397','409','428','437','446','462','477','494','501','511','530','558','568','579','603','607','623','637','658','685','696','704','719','726','751','772','790','806','817','824','831','837','842','846','857','863','868','873','886','904','921','942','950','957','960','966','974','984','987','994','1003','1011','1017','1027','1036','1052','1074','1088','1098','1103','1108','1116','1130','1150','1169','1177','1186','1204', '1212','1224','1236', '1244','1255'];
var rec = ['0','0','0','0','0','0','0','0','0','0','0','0','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','2','2','2','2','2','2','2','4','7','8','8','13','15','18','20','26','28','31','35','42','42','49','50','51','52','57','64','73','84','96','124','140','157','197','242','295','353','435','487','516','572','613','654','693','722','762','792','862','932','975','1023','1043','1084','1124','1214','1315','1408','1506','1618','1734','1842','1924','1999','2106','2251','2337','2460','2561','2635','2729','2843','2932','3000','3092','3177','3249','3323','3412','3506','3598','3720','3808','3909','3979','4063','4153','4248','4330','4441','4530','4637','4736','4895','5165','5454','5706','5954','6252','6552','6820','7090','7378','7650','7893','8143','8442','8655', '8910','9182','9430', '9686','9956']
var beds = [null, null, null, null, null, null, null, null, null, null,null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,null, null, null, null, null,null, null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, 5664, 5959, 6171, 7284, 7704, 8144, 9265, 9734, 9005, 9288, 10901, 10728, 10729, 11420, 11851, 11716, 11219, 12122, 12530, 12788, 12834, 12792, 12715, 12646, 13233, 13455, 13127, 13442, 13314, 13011, 12823, 12183, 12841, 13119, 13147, 13264, 13091, 12930, 13037, 13384, 13467, 13446, 13464, 13012, 12947, 13185, 13364, 13262, 13469, 13379, 12847, 13147, 13329, 13355, 13557, 13293, 13234, 12942, 13018, 13276, 13355, 13487, 13429, 13330, 13108, 13363, 13621, 13710, 13563, 13532, 13575, 13493, 13493, null];
var active = []

//computation of active cases
for(var i = 0; i < cases.length; i++) {
    var j = cases[i] - deaths[i] - rec[i];
    active.push(j);
}

//array with an index of -1
function daily(data) {
    let total = []
    for(var i in data) {
        if(data[i-1] == null || data[i-1] == undefined) {
            data[i-1] = 0;
        }
        total.push(data[i] - data[i-1]);
    }
    return total;
}

let annotation = {
    annotations: [{
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: "Mar 16",
        borderColor: "black",
        borderDash: [5, 6],
        borderDashOffset: 15,
        label: {
            content: "Luzon ECQ",
            enabled: true,
            position: "top"
        }
    }, {
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: "May 16",
        borderColor: "black",
        borderDash: [5, 6],
        borderDashOffset: 15,
        label: {
            content: "GCQ, MECQ",
            enabled: true,
            position: "middle",
            xAdjust: -45
        }
    }, {
        type: "line",
        mode: "vertical",
        scaleID: "x-axis-0",
        value: "Jun 1",
        borderColor: "black",
        borderDash: [5, 6],
        borderDashOffset: 15,
        label: {
            content: "NCR GCQ",
            enabled: true,
            yAdjust: -90,
            xAdjust: -40
        }
    }]
}

//update to linear scale button
function update_linear(chart, linear_id, log_id) {
    $(linear_id).removeClass('btn-info').addClass('btn-secondary')
    $(log_id).removeClass('btn-secondary').addClass('btn-info')

    chart.options = {
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
                    fontColor: '#333333'
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
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    };
    chart.update();
}

//update to log scale button
function update_log(chart, linear_id, log_id) {
    $(linear_id).removeClass('btn-secondary').addClass('btn-info')
    $(log_id).removeClass('btn-info').addClass('btn-secondary')
    
    chart.options = {
        responsive: true,
        maintainAspectRatio: true,
        spanGaps: true,
        legend: {
            labels: {
                fontColor: '#333333'
            }
        },
        scales: {
            yAxes: [{
                type: "logarithmic",
                ticks: {
                    min: 0,
                    max: 100000,
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
                    chartObj.ticks.push(100000);
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
        }, 
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    };

    chart.update()
}

var chart = new Chart(ctx, {
    animationEnabled: true,
	zoomEnabled: true,
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'Total Deaths',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e53e3e',
            pointBackgroundColor: '#e53e3e',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: deaths,
            lineTension: 0
        },{
            label: 'Total Recoveries',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#2BA366',
            pointBackgroundColor: '#2BA366',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: rec,
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
                    fontColor: '#333333'
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
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    }
});

var chart_1 = new Chart(ctx_1, {
    animationEnabled: true,
	zoomEnabled: true,
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
            data: cases,
            lineTension: 0
        },{
            label: 'Active Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e3d400',
            pointBackgroundColor: '#e3d400',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: active,
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
                    fontColor: '#333333'
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
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    }
});

var chart_2 = new Chart(ctx_2, {
    animationEnabled: true,
	zoomEnabled: true,
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'New Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#236377',
            pointBackgroundColor: '#236377FF',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: daily(cases),
            lineTension: 0
        }, {
            label: 'New Deaths',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e53e3e',
            pointBackgroundColor: '#e53e3e',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: daily(deaths),
            lineTension: 0
        }, {
            label: 'New Recoveries',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#2BA366',
            pointBackgroundColor: '#2BA366',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: daily(rec),
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
                    fontColor: '#333333'
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
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    }
});

var chart_3 = new Chart(ctx_3, {
    animationEnabled: true,
	zoomEnabled: true,
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: labels,
        datasets: [{
            label: 'Active Cases',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#e3d400',
            pointBackgroundColor: '#e3d400',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: active,
            lineTension: 0
        }, {
            label: 'Bed Capacity',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: '#236377',
            pointBackgroundColor: '#236377FF',
            pointRadius: 0,
            hitRadius: 10,
            hoverRadius: 5,
            data: beds,
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
                    fontColor: '#333333'
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
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            titleFontSize: 14,
            titleFontColor: '#F5F5F5',
            titleMarginBottom: 10,
            bodyFontColor: '#F5F5F5',
            bodySpacing: 6
        },
        hover: {
            mode: 'index',
            intersect: false
        },
        pan: {
            enabled: true,
            mode: 'xy',
            
            rangeMin: {
                // Format of min pan range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max pan range depends on scale type
                x: null,
                y: null
            },
 
            // On category scale, factor of pan velocity
            speed: 20,
 
            // Minimal pan distance required before actually applying pan
            threshold: 10,
        }, 
        zoom: {
            enabled: true,
            drag: true,
            mode: 'xy',

            rangeMin: {
                // Format of min zoom range depends on scale type
                x: null,
                y: null
            },
            rangeMax: {
                // Format of max zoom range depends on scale type
                x: null,
                y: null
            },
 
            // Speed of zoom via mouse wheel
            // (percentage of zoom on a wheel event)
            speed: 0.1,
 
            // Minimal zoom distance required before actually applying zoom
            threshold: 2,
 
            // On category scale, minimal zoom level before actually applying zoom
            sensitivity: 3
        },
        annotation: annotation
    }
});