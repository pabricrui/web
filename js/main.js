(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('#date').datetimepicker({
        format: 'L'
    });
    $('#time').datetimepicker({
        format: 'LT'
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // Service carousel
    $(".service-carousel-company").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        loop: false,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            }
        }
    });


    // Pricing carousel
    $(".pricing-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        loop: true,
        dots: false,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        items: 1
    });

    // add click event to all buttons with class appointment-btn
    $(".appointment-btn").click(function() {
        $(".qxCTlb").click();
    });

    // add smooth scrolling to all links
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


    // Dropdown on mouse hover
    $(document).ready(async () => {
        // const placeId = "ChIJLdM3VGHZBUgRu3V2GNgM2vc"
        // const apiKey = "AIzaSyCvSF_qfTqJ5g5R6huWUg_Eb3uUjxgyEpY"
        // const data = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`)
        // console.log("place data", data);

        // const mapApiKey = "AIzaSyCvSF_qfTqJ5g5R6huWUg_Eb3uUjxgyEpY"
        // var request = {
        //     placeId: 'ChIJLdM3VGHZBUgRu3V2GNgM2vc',
        //     fields: ['name', 'rating', 'formatted_phone_number', 'geometry']
        //   };
          
        //   service = new google.maps.places.PlacesService(map);
        //   service.getDetails(request, callback);
          
        //   function callback(place, status) {
        //     console.log("place", place);
        //     console.log("place", place);
        //     if (status == google.maps.places.PlacesServiceStatus.OK) {
        //     //   createMarker(place);
        //     }
        //   }
    });
    
    
})(jQuery);

