/*global $ */
(function($) {
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

    // Hide User Dropdown
    $(Document).on('click', function () {
        $('.userDropDown').hide();     
    });

    // User Dropdown
    $('.userDrop').on('click', function (e) {
        $('.userDropDown').toggle();    
        e.stopPropagation();
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

    // Add To Favourite 
    $('.addToFav').on('click', function () {
        $(this).find('i').toggleClass('far').toggleClass('fas');     
    });

    // Toggle Password 
    $('.showPassword').click(function(){
        let passWord = $(this).parent().find('input');
        if($(passWord).attr('type') == 'password'){
             $(passWord).prop('type', 'text');
        }else{
             $(passWord).prop('type', 'password');
        }
    });

    // Edit Filed
    $(document).on('click', '.editField' , function(){
        let filedInput = $(this).prev('input');
        if (filedInput.attr('disabled')) {
            filedInput.removeAttr('disabled'); 
            filedInput.focus(); 
        }
        else {
            filedInput.attr('disabled', 'disabled'); 
        }
    });

    // Filter Collapse
    $('.toggleCollapse').on('click', function () {
        $(this).parent().next('.filterCollapseBody').slideToggle(); 
        $(this).find('i').toggleClass('icofont-minus').toggleClass('icofont-plus'); 
    });

    // Mazad Count
    $('.mountBtn').on('click' , function(){
        let startValue = parseInt($('.mountNumber').text());
        let CountBox = $(this).parent().find('.mountNumber');
        let currentNumber = 1 ;
        
        if ($(this).hasClass('plusBtn')) {
            CountBox.text(startValue + currentNumber);
        } else {
            if(startValue > 0) CountBox.text(startValue - currentNumber);    
        }
    });

    // Thumbs OWL 
    $('.owlThumbs').owlCarousel({
        rtl: true ,
        margin: 10,
        autoplay: false,
        loop: true,
        nav: true,
        dots: false,
        autoplaySpeed : 1000,
        autoplayTimeout : 1000,
        smartSpeed: 1000 ,
        navText: ["<i class='icofont-thin-right'></i>", "<i class='icofont-thin-left'></i>"],
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });

    // Preview Active Image in Ad Slider Thumbs 
    $('#activeSlid img').attr('src' , $('.owlThumbs .owl-item.active.center img').attr('src'));

    let imagesOwl = $('.owlThumbs');
    imagesOwl.on('changed.owl.carousel', function(e) {
        let ActiveSrc = $('.owlThumbs .owl-item.active.center img').attr('src');
        $('#activeSlid img').attr('src', ActiveSrc);
    });

    $(document).on('click','.owlThumbs .owl-prev , .owlThumbs .owl-next', function(){
        let ActiveSrc = $('.owlThumbs .owl-item.active.center img').attr('src');
        $('#activeSlid img').attr('src', ActiveSrc);
    });

    $(document).on('click','.owlThumbs .item', function(){
        let ActiveSrc = $(this).find('img').attr('src');
        $('#activeSlid img').attr('src', ActiveSrc);
    });

    // Tabs List
    $('.tabBtn').on('click' , function(e){
        e.preventDefault();
        $('.tabBtn').removeClass('active');
        $(this).addClass('active');
        
        var itemId = $(this).attr("href"); 
        $('.tabContent').removeClass('show'); 
        $(itemId).addClass('show');
    });

    // Order Steps 
    $(window).on('load', function(){
        if ($('.statusStep:nth-child(4)').hasClass('finished')) {
            $('.status').addClass('allSteps');
            console.log('allSteps')
        }
        else if ($('.statusStep:nth-child(3)').hasClass('finished')) {
            $('.status').addClass('twoSteps'); 
            console.log('threeSteps')
        }
        else if ($('.statusStep:nth-child(2)').hasClass('finished')) {
            $('.status').addClass('twoSteps'); 
            console.log('twoSteps')
        }
        else if ($('.statusStep:nth-child(1)').hasClass('finished')) { 
            $('.status').addClass('oneSteps'); 
            console.log('oneSteps')
        }
    });

    // Delete Address 
    $('.deleteAddress').on('click' , function(e){
        e.preventDefault();
        $(this).parents('.address').remove();
    });

    // Delete Table Item 
    $('.deletecartItem').on('click' , function(e){
        e.preventDefault();
        $(this).parents('.mobileItem').remove();
        $(this).parents('tr').remove();
    });

    



    // Range Slider 
    $('#rangeSlider').slider({
        range: true,
        isRTL: true,
        min: 0,
        max: 1000,
        values: [ 0, 500 ],
        slide: function( event, ui ) {
            $('.minRange').text(" SR " + ui.values[0]);
            $('.maxRange').text(" SR " + ui.values[1]);
        }
    });

    $('.minRange').text(" SR " + $('#rangeSlider').slider( "values", 0 ));
    $('.maxRange').text(" SR " + $('#rangeSlider').slider( "values", 1 ));

    $('.rangeValues .min').text($('#rangeSlider').slider("option", "min") + " SR");
    $('.rangeValues .max').text($('#rangeSlider').slider("option", "max") + " SR");


    


    // Upload Avatar 
    // function uploadAvatar(input , place) {
    //     if (input.files && input.files[0]) {
    //         let reader = new FileReader();
    //         reader.onload = function(e) {
    //             let preview = place;
    //             let newSrc = e.target.result;
    //             $(preview).find('img').attr('src' , newSrc );
    //         }
    //         reader.readAsDataURL(input.files[0]);
    //     }
    // }
    // $('.uploadAvatar input').change(function() {
    //     uploadAvatar(this , $(this).parent().prev('.profileAvatarPreview'));
    // });
  

    // iniat WOW Js
    // new WOW().init();

})(jQuery);


