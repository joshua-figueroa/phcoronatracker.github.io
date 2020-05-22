$('#top').hide();
$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 100) {
            $('#top').fadeIn(75);
        }
        else {
            $('#top').fadeOut();
        }
    });
    $('#top').on('click', function() {
        $('html, body').animate({scrollTop: 0}, "fast");
    });
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

    var ctx1 = document.getElementById('sex')
    var ctx2 = document.getElementById('active-cases')
    var chart1 = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'pie',
    
        // The data for our dataset
        data: {
            labels: ['Male', 'Female'],
            datasets: [{
                backgroundColor: ["#6CA0DC","#FF6961"],
                data: [7397, 6200]
            }]
        },
    
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        try {
                            let label = ' ' + data.labels[tooltipItem.index]
                            const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                            const sum = data.datasets[0].data.reduce((accumulator, curValue) => {
                                return accumulator + curValue;
                            });
                            
                            label += ': ' + value + ' (' + Number((value / sum) * 100).toFixed(2) + '%)'
                            
                            return label;
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            }
        }
    });
    var chart2 = new Chart(ctx2, {
        // The type of chart we want to create
        type: 'pie',
    
        // The data for our dataset
        data: {
            labels: ['Asymtomatic', 'Mild', 'Severe', 'Critical'],
            datasets: [{
                backgroundColor: ["#6CA0DC","#FFC154","#FF6961","#BE61CA"],
                data: [842, 8730, 54, 22]
            }]
        },
    
        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: true,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        try {
                            let label = ' ' + data.labels[tooltipItem.index]
                            const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]
                            const sum = data.datasets[0].data.reduce((accumulator, curValue) => {
                                return accumulator + curValue;
                            });

                            label += ': ' + value + ' (' + Number((value / sum) * 100).toFixed(2) + '%)'
                            
                            return label;
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }
            }
        }
    });

    $.fn.DataTable.ext.pager.numbers_length = 6;
    $('#example').DataTable({
        "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        "ajax": {
            "url": "https://phcoronatracker.com/static/JSON/database.json",
            "dataSrc": function(data) {
                for(var i = 0; i < data.length; i++) {
                    if(data[i].CityMunRes == "") {
                        data[i].CityMunRes = "For Validation";
                    }
                    if(data[i].ProvRes == "") {
                        data[i].ProvRes = "For Validation";
                    }
                }
                return data;
            }
        },
        "columns": [
            { "data": "CaseCode" },
            { "data": "Age" },
            { "data": "Sex" },
            { "data": "HealthStatus" },
            { "data": "CityMunRes" },
            { "data": "ProvRes" },
            { "data": "DateRepConf"}
        ],
        "order": [[ 6, "desc" ]]
    });
});