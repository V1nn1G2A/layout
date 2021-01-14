const slider = document.querySelector('.works__swiper');

let mySwiper = new Swiper(slider, {
    slidesPerView : 1,
    spaceBetween : 35,
    slideClass: 'works__slide',
    wrapperClass: 'works__wrapper',
    loop: true,
    pagination : {
        el: '.works__pagination',
        type: 'bullets',
        clickable: true,
    },
    navigation: false,
    breakpoints: {
        480 : {
            slidesPerView : 2,
            spaceBetween : 15,
        },
        680: {
            slidesPerView : 2,
            spaceBetween : 35,
        },
        1240: {
            slidesPerView : 3,
            spaceBetween : 20,
            pagination: false,
            navigation: {
                nextEl: '.works__button--next',
                prevEl: '.works__button--prev',
            }, 
        }
    }
    
})