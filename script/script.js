$('#menu-btn').on('click', function () {
    $(this).toggleClass('fa-times')
    $('.header .navbar').toggleClass('active')
})

$(window).scroll(() => {
    $('#menu-btn').removeClass('fa-times')
    $('.header .navbar').removeClass('active')

})

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperAbout = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    autoHeight: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
})

let currentPackages = 5

$('.packages .load-more .btn').on('click', function () {
    const allPackages = $('.packages .box-container .box')
    console.log(allPackages)
    const load = currentPackages + 3
    const packagesLength = allPackages.length - 1

    for (let i = currentPackages; i <= load; i++) {
        allPackages[i].style.display = 'inline-block'
    }
    currentPackages += 3

    if (currentPackages >= packagesLength) {
        $('.packages .load-more .btn').css('display', 'none')
    }
}) 
