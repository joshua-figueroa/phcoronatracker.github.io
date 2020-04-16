console.log("Philippines COVID-19 Tracker");

update('cases', 5660);
update('death', 362);
update('recover', 435);
update('fv', 154);
update('ca', 3309);

table('https://phcoronatracker.com/cases.json', '#ph_body');
table('https://phcoronatracker.com/ncr.json', '#ncr_body');
table('https://phcoronatracker.com/luzon.json', '#luzon_body');
table('https://phcoronatracker.com/vimin.json', '#vimin_body');

function update(id, count) {
    document.getElementById(id).innerHTML = (`${count}`);
    console.log(`${id} = ${count}`);
}
function table(link, id) {
    $.ajax({
        url: link,
        dataType: 'json',
        success: function(data) {
            for(var i = 0; i < data.length; i++) {
                var row = $('<tr><td>' + data[i].name + '</td><td>' + data[i].cases + '</td><td>' + data[i].death +'</td><td>' + data[i].rec + '</td></tr>');
                $(id).append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
}
function search(input_id, table_id) {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById(input_id);
    filter = input.value.toUpperCase();
    table = document.getElementById(table_id);
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
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