$(document).ready(function() {
    var messagePush = false;
    var openMenu = true
    var heightMenu, displayMenu, newClass;
    var str, name, phone, emailBottom, textBottom = '';
    //preloader
    $(window).on('load', function() {
        $(".preloader").delay(500).fadeOut('slow');
        $(".preloader__background").delay(500).fadeOut('slow');
    });
    // JSON
    $(".messagePush").click(function() {

        name = $(".modal__openName").val();
        phone = $(".modal__openPhone").val();

        name = name + $(".footer__BoxDateName").val();
        phone = phone + $(".footer__BoxDatePhone").val();
        emailBottom = $(".footer__BoxDateEmail").val();
        textBottom = $(".footer__BoxText").val();

        if (name == '') {
            $(".footer__BoxDateName, .modal__openName").css('background', '#ff9999');
            $(".footer__BoxDateName, .modal__openName").css('box-shadow', '0 0 5px 3px #ff3333');
        } else {
            $(".footer__BoxDateName, .modal__openName").css('background', 'none');
            $(".footer__BoxDateName, .modal__openName").css('box-shadow', 'none');
        }
        if (phone == '') {
            $(".footer__BoxDatePhone, .modal__openPhone").css('background', '#ff9999');
            $(".footer__BoxDatePhone, .modal__openPhone").css('box-shadow', '0 0 5px 3px #ff3333');
        } else {
            $(".footer__BoxDatePhone, .modal__openPhone").css('background', 'none');
            $(".footer__BoxDatePhone, .modal__openPhone").css('box-shadow', 'none');
        }

        if (name && phone) {
            jQuery.ajax({
                url: "assets/php/mail.php",
                type: "POST",
                dataType: "JSON",
                data: {
                    user_name: name,
                    user_phone: phone,
                    user_email: emailBottom,
                    user_text: textBottom
                },
                success: function(data) {
                    if (data.Yes == 'yes') {
                        messagePush = true;
                    }
                }
            });
        };
    });
    // End JSON
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Open Modal
    $(".open__modal").click(function() {
        $(".overlay").css({
            display: 'block'
        });
        $(".modal").css({
            display: 'block'
        });
        $(".modal").animate({
            left: '50%'
        }, 500)
    });
    $(".overlay, .modal__close").click(function() {
        $(".modal").animate({
            left: '120%'
        }, 500, function() {
            $(".modal").css({
                display: 'none'
            });
            $(".overlay").css({
                display: 'none'
            });
        });

    });

    if (messagePush) {
        $(".modal__open, .bottomForm").fadeOut(600, displayThanksPage);

        function displayThanksPage() {
            $(".modal__open, .bottomForm, .footer__title").css(
                'display', 'none'
            );
            $(".thanksPage").css(
                'display', 'flex'
            );
        }
    };

    // End Open Modal
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Open Menu
    $(".header__phoneMenu").click(function() {
        openMenu ? heightMenu = '270px' : heightMenu = '60px';
        openMenu ? displayMenu = 'flex' : displayMenu = 'none';
        openMenu ? $(".header__phoneMenu").addClass('active') : $(".header__phoneMenu").removeClass('active');
        $(".header").animate({
            height: heightMenu
        }, 500, function() {
            $(".header__menu").css({
                display: displayMenu
            });
            openMenu = !openMenu;
        });
    });

    // End Open Menu
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Slider
    $('.section__fourthGallery').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        margin: 20,
        responsive: {
            320: {
                items: 1,
            },
            360: {
                items: 2
            },
            380: {
                items: 2
            },
            420: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    $('.section__sixthBox').owlCarousel({
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 300,
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    // End Slider
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Mask input
    $(function() {
        $(".modal__openPhone").mask("+7(999) 999-99-99");
        $(".footer__BoxDatePhone").mask("+7(999) 999-99-99");
    });
    // End Mask input
    //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // Header shadow
    $(window).scroll(function() {
        if ($(window).scrollTop() > 0) {
            $(".header").css('box-shadow', '0 0 20px 0');
        } else {
            $(".header").css('box-shadow', 'none');
        }
    });
    // Endheader shadow
});