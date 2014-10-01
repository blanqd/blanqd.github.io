jQuery(document).ready(function($) {

    /* ======= Scrollspy ======= */
		$('body').scrollspy({ target: '#top', offset: 100});
   
    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function(e){
        
        //store hash
        var target = this.hash;
                
        e.preventDefault();
        
		$('body').scrollTo(target, 800, {offset: -80, 'axis':'y', easing:'easeOutQuad'});
        //Collapse mobile menu after clicking
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
		
	});
	
    /* ======= Flexslider ======= */
    $('.flexslider').flexslider({
        animation: "fade",
        touch: true,
        directionNav: false,
				slideshowSpeed: 3000,
				animationSpeed: 1000,
				pauseOnHover: true
    });


});