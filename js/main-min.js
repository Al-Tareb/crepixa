$(window).on("load",function(){$("#cookiesModal").modal("show")}),$("#check").change(function(){$(this).is(":checked")?$(".reqired-select").removeAttr("disabled"):$(".reqired-select").attr("disabled",!0)}),$("#mobile_code").intlTelInput({initialCountry:"in",separateDialCode:!0}),$(document).ready(function(){$(".minus").click(function(){var e=$(this).parent().find("input"),t=parseInt(e.val())-1;return t=t<1?1:t,e.val(t),e.change(),!1}),$(".plus").click(function(){var e=$(this).parent().find("input");return e.val(parseInt(e.val())+1),e.change(),!1})}),$(function(){"use strict";var e,t;$(window).scroll(function(){$(window).scrollTop()>100?$(".scrollTop").show():$(".scrollTop").hide()}),e="js-scroll-top",t=150,document.getElementById(e).addEventListener("click",function(){let e=window.pageYOffset,l=t/e>1?10:100,o=t/e*l,n=setInterval(function(){0===(e=window.pageYOffset)?clearInterval(n):scrollBy(0,-l)},o)}),$(document).ready(function(){$(".owl-carousel").owlCarousel({rtl:!0,loop:!0,margin:30,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,navText:['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],responsive:{0:{items:1},600:{items:2},1000:{items:4}}})});$(".choose").on("change",function(){let e;(e=>{if(e.files&&e.files[0]){const t=new FileReader;t.onload=(e=>{$("#preview").attr("src",e.target.result)}),t.readAsDataURL(e.files[0])}})(this),e=$(this).val().lastIndexOf("\\")?$(this).val().lastIndexOf("\\")+1:$(this).val().lastIndexOf("/")+1;const t=$(this).val().slice(e);$(".label").text(t)})}),document.addEventListener("DOMContentLoaded",function(){"use strict";var e=document.querySelector("[data-toggle-menu]");e.addEventListener("click",function(){e.classList.contains("toggle-menu--clicked")?e.classList.remove("toggle-menu--clicked"):e.classList.add("toggle-menu--clicked")},!1)},!1);var galleryTop=new Swiper(".gallery-top",{spaceBetween:10,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},loop:!0,loopedSlides:4}),galleryThumbs=new Swiper(".gallery-thumbs",{spaceBetween:10,centeredSlides:!0,slidesPerView:"auto",touchRatio:.2,slideToClickedSlide:!0,loop:!0,loopedSlides:4});galleryTop.controller.control=galleryThumbs,galleryThumbs.controller.control=galleryTop;