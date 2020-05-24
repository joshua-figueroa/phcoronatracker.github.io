$(document).ready(function() {
    document.getElementById("filter").value = "jan";
    document.getElementById("filter-sm").value = "jan";
});
var prev = "jan";
function display(data) {
    document.getElementById(prev).style.display = "none";
    console.log(prev)
    document.getElementById(data).style.display = "block";
    prev = data;
    console.log(prev)
}