$(document).ready(function() {
    document.getElementById("filter").value = "may";
    document.getElementById("filter-sm").value = "may";
});
var prev = "may";
function display(data) {
    document.getElementById(prev).style.display = "none";
    document.getElementById(data).style.display = "block";
    prev = data;
}