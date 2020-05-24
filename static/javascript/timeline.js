$('#top').hide();
$(document).ready(function() {
    document.getElementById("filter").value = "may";
    document.getElementById("filter-sm").value = "may";
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
});

var prev = "may";
function display(data) {
    document.getElementById(prev).style.display = "none";
    document.getElementById(data).style.display = "block";
    prev = data;
}