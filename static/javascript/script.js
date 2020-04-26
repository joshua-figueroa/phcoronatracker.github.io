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
    update('cases', 7579);
    update('deaths', 501);
    update('recover', 862);
    update('ofw', 1343);
    function table(link, id) {
        $.ajax({
            url: link,
            dataType: 'json',
            success: function(data) {
                for(var i = 0; i < data.length; i++) {
                    var row = $('<tr><th scope="row">' + data[i].name + '</th><td>' + data[i].cases + '</td><td>' + data[i].death +'</td><td>' + data[i].rec + '</td></tr>');
                    $(id).append(row);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }
    table('https://phcoronatracker.com/static/JSON/cases.json', '#ph_body');
    table('https://phcoronatracker.com/static/JSON/luzon.json', '#luzon_body');
    table('https://phcoronatracker.com/static/JSON/vimin.json', '#vimin_body');

    $.ajax({
        url: 'https://phcoronatracker.com/static/JSON/ncr.json',
        dataType: 'json',
        success: function(data) {
            for(var i = 0; i < data.length; i++) {
                var row = $('<tr><th scope="row">' + data[i].name + '</th><td>' + data[i].cases + '</td><td>' + data[i].death +'</td><td>' + data[i].rec + '</td><td>' + data[i].lgu + '</td></tr>');
                $('#ncr_body').append(row);
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