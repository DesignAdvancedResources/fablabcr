//-------------------------------POSITION-FIXED----------------------------------------------

$(document).ready(function() {

    function fixDiv() {
        var $cache = $('#info');
        if ($(window).scrollTop() > $('.section').offset().top-50)
            $cache.css({'position': 'fixed', 'top': '30px'});
        else
            $cache.css({'position': 'relative', 'top': 'auto'});
    }

    $(window).scroll(fixDiv);
    fixDiv();
});

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

//-------------------------------BUTTON-----------------------------------------------------


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

$(document).ready(function (){
    $("button").click(function(){
        $("#myDropdown").slideToggle(1000);
    });
});

function autoScroll(){
    if ($('#myDropdown').hasClass('show')){

        $('html, body').animate({
            scrollTop: $("#button").offset().top
        }, 1000);
    }
    else {
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 1000);

    }
};