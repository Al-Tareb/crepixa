$(window).on('load', function() {
    $('#cookiesModal').modal('show');
});

$('#check').change(function(){
    if($(this).is(":checked")) {
        $('.reqired-select').removeAttr("disabled");
    } else {
        $('.reqired-select').attr("disabled", true);
    }
});
$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	// utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
});
$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });
});

$(function () {
    "use strict";
    //ScrollTo The Top
    $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('.scrollTop').show();
        } else {
            $('.scrollTop').hide();
        }
    });
    scrollTop('js-scroll-top', 150);

    function scrollTop(el, duration) {
    const target = document.getElementById(el);
    target.addEventListener('click', function() {
        let currentY = window.pageYOffset; 
        let step = duration/currentY > 1 ? 10 : 100; 
        let timeStep = duration/currentY * step; 
        let intervalId = setInterval(scrollUp, timeStep);
        function scrollUp(){
        currentY = window.pageYOffset;
        if(currentY === 0) {
            clearInterval(intervalId);
        } else {
            scrollBy( 0, -step );
        }
        }
    });
    }
    // Team slider
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            rtl: true,
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            navText: ['<i class="fas fa-chevron-right"></i>', '<i class="fas fa-chevron-left"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    });

    // PickImg
    // $("select").imagepicker();

    //Upload Img
    const readURL = (input) => {
        if (input.files && input.files[0]) {
            const reader = new FileReader()
            reader.onload = (e) => {
                $('#preview').attr('src', e.target.result)
            }
            reader.readAsDataURL(input.files[0])
        }
    }
    $('.choose').on('change', function () {
        readURL(this)
        let i
        if ($(this).val().lastIndexOf('\\')) {
            i = $(this).val().lastIndexOf('\\') + 1
        } else {
            i = $(this).val().lastIndexOf('/') + 1
        }
        const fileName = $(this).val().slice(i)
        $('.label').text(fileName)
    })

});

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    var link = document.querySelector('[data-toggle-menu]');
    link.addEventListener('click', function() {
        if (link.classList.contains('toggle-menu--clicked')) {
            link.classList.remove('toggle-menu--clicked');
        } else {
            link.classList.add('toggle-menu--clicked');
        }
    }, false);
}, false);


//testimonials Slider
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    loopedSlides: 4
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 4
});
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;


