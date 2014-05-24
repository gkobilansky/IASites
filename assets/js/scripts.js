/*
 * Codelander - One Page Template
 * Version: 1.1
 * Copyright 2014
 * Created by: DamterThemes
 * URL: https://wrapbootstrap.com/user/damterthemes
 * Designed and built based on Twitter Bootstrap 3.
 */
/*******************************************
IMPORTANT: To modify the code of the subscription form, edit the file php/mcapi-subscribe/js/mailing-list.js
********************************************/
/*******************************************
Local Scroll
********************************************/
jQuery('#topnav').localScroll(500);

/*******************************************
Parallax effect
********************************************/

//.parallax(xPosition, speedFactor, outerHeight) options:
//xPosition - Horizontal position of the element
//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
jQuery('#home-section').parallax("50%", 1);
jQuery('#about-section').parallax("50%", 1);
jQuery('#services-section').parallax("50%", 1);
jQuery('#our-works-section').parallax("50%", 1);
jQuery('#pricing-section').parallax("50%", 1);
jQuery('#contact-section').parallax("50%", 1);

/*******************************************
CSS animations
********************************************/
(function (jQuery) {
    "use strict";
    jQuery('.square').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated bounceIn');
        }
    });
    jQuery('.thumbnail').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated bounceIn');
        }
    });
    jQuery('.plan-1').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated fadeInLeft');
        }
    });
    jQuery('.plan-2').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated fadeInLeft');
        }
    });
    jQuery('.plan-3').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated fadeInRight');
        }
    });
    jQuery('.plan-4').bind('inview', function (event, visible) {
        if (visible === true) {
            jQuery(this).addClass('animated fadeInRight');
        }
    });
})(jQuery);

/*******************************************
Slides
********************************************/
    if(jQuery("#sequence").length)
	{
		// Sequence slide
		jQuery(document).ready(function () {
			var options = {
				nextButton: true,
				prevButton: true,
				pagination: true,
				animateStartingFrameIn: true,
				autoPlay: false,
				autoPlayDelay: 5000,
				preloader: true,
				preloadTheseFrames: [1],
				preloadTheseImages: [
					"../img/slides/home-slides/web-browser-min.png",
					"../img/slides/home-slides/screens-min.png",
                    "../img/slides/home-slides/tablet-iphone-min.png"
				]
			};
			
			var mySequence = jQuery("#sequence").sequence(options).data("sequence");
		});
	}

    // Testimonials
    jQuery('#carousel_fade_testimonials').carousel({
        interval: false,
    })

    // Contact
    jQuery(document).ready(function () {
        jQuery('#carousel_slide_contact').carousel({
            interval: false,
        });

        var clickEvent = false;
        jQuery('#carousel_slide_contact').on('click', '.nav a', function () {
            clickEvent = true;
            jQuery('.nav li').removeClass('active');
            jQuery(this).parent().addClass('active');
        }).on('slid.bs.carousel', function (e) {
            if (!clickEvent) {
                var count = $('.nav').children().length - 1;
                var current = $('.nav li.active');
                current.removeClass('active').next().addClass('active');
                var id = parseInt(current.data('slide-to'));
                if (count == id) {
                    jQuery('.nav li').first().addClass('active');
                }
            }
            clickEvent = false;
        });
    });

/*******************************************
Contact form
********************************************/

    //Validations
    var name, email, phone, subject, message;
    jQuery("#send-contact").click(function () {
        jQuery(".error").hide();
        var form = jQuery(this).closest('#ajax-contacts');
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailaddressVal = jQuery(form).find("[name=email]").val();
        var nameVal = jQuery(form).find("[name=name]").val();
        var phoneVal = jQuery(form).find("[name=phone]").val();
        var subjectVal = jQuery(form).find("[name=subject]").val();
        var messageVal = jQuery(form).find("[name=message]").val();

        if (nameVal == '' || subjectVal == '' || messageVal == '' || phoneVal == '') {
            jQuery("#message-contact").html("<div class='alert alert-danger'>All fields are required</div>");
            return false;
        }

        if (emailaddressVal == '') {
            jQuery("#message-contact").html('<div class="alert alert-danger">Enter your email address before submitting.</div>');
            return false;
        } else if (!emailReg.test(emailaddressVal)) {
            jQuery("#message-contact").html("<div class='alert alert-danger'>That is not an email address.&nbsp;  Typo?</div>");
            return false;
        } else {
            email = escape(emailaddressVal);
        }

        name = escape(nameVal);
        subject = escape(subjectVal);
        message = escape(messageVal);
        phone = escape(phoneVal);
    });

    //Sending...
    jQuery('#ajax-contacts').submit(function () {
        jQuery("#message-contact").html("<div class='alert alert-danger'>Sending message...</div>");
        jQuery.ajax({
            type: 'POST',
            url: 'php/contact/contact.php',
            data: 'email=' + email + '&name=' + name + '&subject=' + subject + '&message=' + message + '&phone=' + phone,
            success: function (msg) {
                jQuery('#message-contact').html(msg);
            },
            error: function () {
                jQuery("#message-contact").html("<div class='alert alert-danger'>Error while sending the message</div>");
            }
        });
        return false;
    });



/*******************************************
prettyPhoto Initialization
********************************************/

jQuery("a.prettyPhoto").prettyPhoto();

/*******************************************
Sliding graph
********************************************/

jQuery(document).ready(function ($) {
    function isScrolledIntoView(id) {
        var elem = "#" + id;
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        if ($(elem).length > 0) {
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
        }

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }



    function sliding_horizontal_graph(id, speed) {
        jQuery("#" + id + " li span").each(function (i) {
            var j = i + 1;
            var cur_li = $("#" + id + " li:nth-child(" + j + ") span");
            var w = cur_li.attr("title");
            cur_li.animate({
                width: w + "%"
            }, speed);
        })
    }

    function graph_init(id, speed) {
        jQuery(window).scroll(function () {
            if (isScrolledIntoView(id)) {
                sliding_horizontal_graph(id, speed);
            } else {
                //$("#" + id + " li span").css("width", "0");
            }
        })

        if (isScrolledIntoView(id)) {
            sliding_horizontal_graph(id, speed);
        }
    }

    graph_init("skills", 1000);

});

/*******************************************
Faqs
********************************************/

jQuery('.collapse').on('show.bs.collapse', function () {
    var id = jQuery(this).attr('id');
    jQuery('a[href="#' + id + '"]').closest('.panel-heading').addClass('active-faq');
    jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-minus"></i>');
});
jQuery('.collapse').on('hide.bs.collapse', function () {
    var id = jQuery(this).attr('id');
    jQuery('a[href="#' + id + '"]').closest('.panel-heading').removeClass('active-faq');
    jQuery('a[href="#' + id + '"] .panel-title span').html('<i class="glyphicon glyphicon-plus"></i>');
});

/*******************************************
Placeholder
********************************************/

jQuery('input, textarea').placeholder();

/*******************************************
Go to top button
********************************************/

jQuery(document).ready(function () {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.to-top').fadeIn(duration);
        } else {
            jQuery('.to-top').fadeOut(duration);
        }
    });

    jQuery('.to-top').click(function (event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    })
});
/*******************************************
Our Works (isotope plugin)
********************************************/

jQuery.noConflict()(function ($) {
    var $container = $('#container-our-works');

    if ($container.length) {
        $container.waitForImages(function () {

            // initialize isotope
            $container.isotope({
                itemSelector: '.box-work',
                layoutMode: 'fitRows',
                resizable: false,
                // set columnWidth to a percentage of container width
                masonry: { columnWidth: $container.width() / 4 }
            });

            function reload_portfolio()
            {
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector
                });
                $('#filters a').removeClass('active');
				$(this).addClass('active').siblings().removeClass('active all');

                return false;
            }
            // filter items when filter link is clicked
            $('#filters a').click(reload_portfolio);

            $(window).resize(function(){
                reload_portfolio();
            })

        }, null, true);
    }

//Navbar automatic collapse on click item
jQuery('.navbar-collapse').on('click','a',function(){
    if($('.navbar-toggle').css('display')!='none')
    {
        jQuery('.navbar-toggle').trigger('click');
    }   
})
});