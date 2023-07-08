function myFunction() {
    var sidebar = document.getElementById("responsiveNav");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}
$(document).ready(function () {

    $("#owl-example").owlCarousel({
        loop: true,
        margin: 5,
        nav: false,
        autoplay: true,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});