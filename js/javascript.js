function fixDiv() {
    var $cache = $('#info');
    if ($(window).scrollTop() > 320)
        $cache.css({'position': 'fixed', 'top': '30px'});
    else
        $cache.css({'position': 'relative', 'top': 'auto'});
}
$(window).scroll(fixDiv);
fixDiv();

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn'&'.fa-bars')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}