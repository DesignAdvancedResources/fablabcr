function fixDiv() {
    var $cache = $('#info');
    if ($(window).scrollTop() > 320)
        $cache.css({'position': 'fixed', 'top': '10px'});
    else
        $cache.css({'position': 'relative', 'top': 'auto'});
}
$(window).scroll(fixDiv);
fixDiv();