/*global $ */
$(document).ready(function ($) {
    'use strict';
 
    // Open navbarSide when button is clicked
    $('.navBtn').on('click', function () {
        $('.headerNav').addClass('show');
        $('.headerOverlay').addClass('show');
        $('body').toggleClass('stopScroll');
    });

    $('.headerOverlay').on('click', function () {
        $(this).removeClass('show'); 
        $('.headerNav').removeClass('show');     
        $('body').removeClass('stopScroll');
    });

    // Header Owl
    $('.owlHeader').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar,
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

    function startProgressBar() {
        // apply keyframe animation
        $('.sliderProgress').css({
          width: "100%",
          transition: "width 5000ms"
        });
    }
      
    function resetProgressBar() {
        $('.sliderProgress').css({
          width: 0,
          transition: "width 0s"
        });
    }
    
    // Cats Owl
    $('.owlCats').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
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
    });

    // Auctions Owl
    $('.owlAuctions').owlCarousel({
        rtl: true,
        margin: 0,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
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
    });

    // Best Owl
    $('.owlBest').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: true,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
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
    });

    // Sponsors Owl
    $('.owlSponsors').owlCarousel({
        rtl: true,
        margin: 20,
        autoplay: true,
        loop: true,
        nav: false,
        dots:false,
        navText: ["<i class='icofont-simple-right'></i>", "<i class='icofont-simple-left'></i>"],
        autoplaySpeed : 2000,
        autoplayTimeout : 2000,
        smartSpeed: 2000 ,
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
    });

    $('.addToFav').on('click', function () {
        $(this).find('i').toggleClass('far').toggleClass('fas');     
    });

    // INPUT ANIMATION 
    // $('.filedInput').each(function() { 
    //     if ($(this).val() != "") {
    //         $(this).parent('.field').addClass('focused');   
    //     }
    // });

    // $('.filedInput').focus(function(){
    //     $(this).parent().addClass('focused');
    // });

    // $('.filedInput').focusout(function(){
    //     if($(this).val() === "")
    //     $(this).parent('.field').removeClass('focused');
    // });

    // iniat WOW Js
    new WOW().init();

});


