/*
* Codelander - One Page Template
* Version: 1.1
* Copyright 2014
* Created by: DamterThemes
* URL: https://wrapbootstrap.com/user/damterthemes
* Designed and built based on Twitter Bootstrap 3.
*/

/* Styles Switcher */
window.console = window.console || (function () {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function () {};
    return c;
})();

(function (jQuery) {


    jQuery(document).ready(function (jQuery) {

        // Color Changer
		jQuery(".orange").click(function () {
            jQuery("#colors").attr("href", "./assets/css/colors/orange.css");
            return false;
        });
		
        jQuery(".blue").click(function () {
            jQuery("#colors").attr("href", "./assets/css/colors/blue.css");
            return false;
        });

        jQuery(".green").click(function () {
            jQuery("#colors").attr("href", "./assets/css/colors/green.css");
            return false;
        });   

       	jQuery(".black").click(function () {
            jQuery("#colors").attr("href", "./assets/css/colors/black.css");
            return false;
        });

        jQuery(".red").click(function () {
            jQuery("#colors").attr("href", "./assets/css/colors/red.css");
            return false;
        });
     


        // Layout Switcher
        jQuery(".boxed").click(function () {
            jQuery("#layout").attr("href", "assets/css/boxed.css");		
            return false;
        });

        jQuery("#layout-switcher").on('change', function () {
            jQuery('#layout').attr('href', jQuery(this).val() + '.css');
			jQuery('#topnav').toggleClass('container',jQuery(this).children(':selected').text()=='Boxed');
        });;


        // Style Switcher	
        jQuery('#style-switcher').animate({
            left: '-195px'
        });

        jQuery('#style-switcher h2 a').click(function (e) {
            e.preventDefault();
            var div = jQuery('#style-switcher');
            console.log(div.css('left'));
            if (div.css('left') === '-195px') {
                jQuery('#style-switcher').animate({
                    left: '0px'
                });
            } else {
                jQuery('#style-switcher').animate({
                    left: '-195px'
                });
            }
        })

        jQuery('.colors li a').click(function (e) {
            e.preventDefault();
            jQuery(this).parent().parent().find('a').removeClass('active');
            jQuery(this).addClass('active');
        })

        jQuery('.bg li a').click(function (e) {
            e.preventDefault();
            jQuery(this).parent().parent().find('a').removeClass('active');
            jQuery(this).addClass('active');
            var bg = jQuery(this).css('backgroundImage');
            jQuery('body').css('backgroundImage', bg)
        })

        jQuery('.bgsolid li a').click(function (e) {
            e.preventDefault();
            jQuery(this).parent().parent().find('a').removeClass('active');
            jQuery(this).addClass('active');
            var bg = jQuery(this).css('backgroundColor');
            jQuery('body').css('backgroundColor', bg).css('backgroundImage', 'none')
        })

        jQuery('#reset a').click(function (e) {
            var bg = jQuery(this).css('backgroundImage');
            jQuery('body').css('backgroundImage', 'url()')
        })
    });
})(jQuery);