$('#top').hide();
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

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
    );
});