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
    
    $.fn.DataTable.ext.pager.numbers_length = 6;
    $('#example').DataTable({
        "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        "ajax": {
            "url": "https://phcoronatracker.com/static/JSON/database.json",
            "dataSrc": function(data) {
                for(var i = 0; i < data.length; i++) {
                    if(data[i].Admitted == "Yes") {
                        data[i].Admitted = "Admitted";
                    } 
                    else if(data[i].Admitted == "No" || data[i].Admitted == "") {
                        if(data[i].RemovalType == "") {
                            data[i].Admitted = "For Validation"
                        }
                        else {
                            data[i].Admitted = data[i].RemovalType;
                        }
                    }
                    if(data[i].ProvCityRes == "") {
                        data[i].ProvCityRes = "For Validation";
                    }
                    if(data[i].RegionRes == "") {
                        data[i].RegionRes = "For Validation";
                    }
                }
                return data;
            }
        },
        "columns": [
            { "data": "CaseCode" },
            { "data": "Age" },
            { "data": "Sex" },
            { "data": "Admitted" },
            { "data": "ProvCityRes" },
            { "data": "RegionRes" },
            { "data": "DateRepConf"}
        ]
    });
});