//-------------------------------POSITION-FIXED----------------------------------------------

function fixDiv() {
    var $cache = $('#info');
    if ($(window).scrollTop() > 360)
        $cache.css({'position': 'fixed', 'top': '30px'});
    else
        $cache.css({'position': 'relative', 'top': 'auto'});
}
$(window).scroll(fixDiv);
fixDiv();

//-------------------------------BUTTON-----------------------------------------------------

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//-------------------------------SMOOTH-SCROLL----------------------------------------------

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//--------------------------------------------------------------------------------------

