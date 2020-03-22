console.log("Philippines COVID-19 Tracker");

update('cases', 380);
update('death', 25);
update('recover', 17);
update('pui', 593);
update('pum', 6321);

function update(id, count) {
    document.getElementById(id).innerHTML = (`${count}`);
    console.log(`${id} = ${count}`);
}

function search_ph() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input_ph");
    filter = input.value.toUpperCase();
    table = document.getElementById("ph");
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

function search_ncr() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input_ncr");
    filter = input.value.toUpperCase();
    table = document.getElementById("ncr");
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