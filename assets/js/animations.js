/* ======= Animations ======= */
jQuery(document).ready(function($) {

    //Only animate elements when using non-mobile devices    
    if (jQuery.browser.mobile === false) {
    
        /* Animate elements in #Promo */
				$('.phone-holder').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInRightBig delayp1');}
        });
    				
        $('#app .title1').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp8');}
        });
        $('#app .title2').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp9');}
        });
				
        $('#app .download-area').css('opacity', 0).one('inview', function(isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delay1s');}
        });
    
        /* Animate elements in #Features */
        $('#howitworks .icon').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp4');}
        });

				$('#howitworks .title').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp4');}
        });
        
             
        /* Animate elements in #contact */
        $('#contact .title').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp1');}
        });
        
        $('#contact .intro').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp2');}
        });
        
        $('#contact .contact-form').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp3');}
        });
        
        $('#contact .social-icons').css('opacity', 0).one('inview', function(event, isInView) {
            if (isInView) {$(this).addClass('animated fadeInUp delayp4');}
        });
        
    }


});