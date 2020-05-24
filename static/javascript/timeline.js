$(document).ready(function() {
    $('#filter').find('option[value=jan]').attr('selected','selected');
    $('#filter-sm').find('option[value=jan]').attr('selected','selected');
});
var prev = "jan";
function display(data) {
    document.getElementById(prev).style.display = "none";
    console.log(prev)
    document.getElementById(data).style.display = "block";
    prev = data;
    console.log(prev)
}