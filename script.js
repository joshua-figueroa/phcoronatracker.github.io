alert("Due to some unknown errors, DOH has not yet to released the information of patients that has died and recovered since April 2. Our data are still reflecting April 1st release. Their website is still under maintenance for the past few days. We are trying to contact them, but as of now, we still haven't received any reply.");
console.log("Philippines COVID-19 Tracker");

update('cases', 3870);
update('death', 182);
update('recover', 96);
update('pui', 1323);
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

function search_luzon() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input_luzon");
    filter = input.value.toUpperCase();
    table = document.getElementById("luzon");
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

function search_vimin() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input_vimin");
    filter = input.value.toUpperCase();
    table = document.getElementById("vimin");
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
