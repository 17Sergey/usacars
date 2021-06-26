$(function () {
    $('.cars__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        autoplay: 2000,
        responsive: [
            {
                breakpoint: 1001,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 771,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 566,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});