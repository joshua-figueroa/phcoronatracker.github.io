alert("Due to some unknown errors, DOH has yet to release the information of patients (April 2 - April 4) that has died/recovered. Our data are still reflecting April 1st release. We will coordinate with them as soon as possible.");
console.log("Philippines COVID-19 Tracker");

update('cases', 3094);
update('death', 144);
update('recover', 57);
update('pui', 1209);
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