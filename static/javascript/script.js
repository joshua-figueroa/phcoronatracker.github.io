$('#top').hide();       
$('#myModal').modal('show');
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

    $.ajax({
        url: 'https://phcoronatracker.com/static/JSON/cases.json',
        dataType: 'json',
        success: function(data) {
            update('name-ph', data[0].name);
            update('cases', data[0].cases);
            update('cases-ph', data[0].cases);
            update('deaths', data[0].death);
            update('death-ph', data[0].death);
            update('recover', data[0].rec);
            update('rec-ph', data[0].rec);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://phcoronatracker.com/static/JSON/mapdata.json',
        dataType: 'json',
        success: function(data) {
            for(var i = 0; i < 62; i++) {
                var row = $('<tr><th scope="row">' + data.features[i].properties.NAME_1 + '</th><td>' + data.features[i].properties.cases.toLocaleString() + '</td><td>' + data.features[i].properties.death.toLocaleString() +'</td><td>' + data.features[i].properties.rec.toLocaleString() + '</td></tr>');
                $('#ph_body').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
    
    function table(link, id) {
        $.ajax({
            url: link,
            dataType: 'json',
            success: function(data) {
                for(var i = 0; i < data.length; i++) {
                    var row = $('<tr><th scope="row">' + data[i].name + '</th><td>' + data[i].cases.toLocaleString() + '</td><td>' + data[i].death.toLocaleString() +'</td><td>' + data[i].rec.toLocaleString() + '</td></tr>');
                    $(id).append(row);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }
    table('https://phcoronatracker.com/static/JSON/luzon.json', '#luzon_body');
    table('https://phcoronatracker.com/static/JSON/vimin.json', '#vimin_body');

    $.ajax({
        url: 'https://phcoronatracker.com/static/JSON/ncr.json',
        dataType: 'json',
        success: function(data) {
            for(var i = 0; i < data.length; i++) {
                var row = $('<tr><th scope="row">' + data[i].name + '</th><td>' + data[i].cases.toLocaleString() + '</td><td>' + data[i].death.toLocaleString() +'</td><td>' + data[i].rec.toLocaleString() + '</td><td>' + data[i].lgu.toLocaleString() + '</td></tr>');
                $('#ncr_body').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://phcoronatracker.com/static/JSON/ofw.json',
        dataType: 'json',
        success: function(data) {
            update('ofw', data[0].cases);
            for(var i = 0; i < data.length; i++) {
                var row = $('<tr><th scope="row">' + data[i].name + '</th><td>' + data[i].cases.toLocaleString() + '</td><td>' + data[i].death.toLocaleString() +'</td><td>' + data[i].rec.toLocaleString() + '</td><td>' + data[i].active.toLocaleString() + '</td></tr>');
                $('#ofw_body').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
});


function update(id, count) {
    document.getElementById(id).innerHTML = (count.toLocaleString());
}

function search(input_id, tbody_id) {
    let input, filter, body, tr, td, i, txtValue;
    input = document.getElementById(input_id);
    filter = input.value.toUpperCase();
    body = document.getElementById(tbody_id);
    tr = body.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("th")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}