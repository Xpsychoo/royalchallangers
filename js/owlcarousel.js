$('#slider').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})