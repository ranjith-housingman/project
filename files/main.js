(function($) {
	"use strict";
		
/*Home Header*/
$(window).on("scroll", function() {
	if($(window).scrollTop() > 365) {
		$("#header-home").addClass("active");
	} else {
	   $("#header-home").removeClass("active");
	}
});

$(function() {
	  $('a[href*=#go]:not([href=#])').click(function() {

	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 54
	        }, 700);
	        return false;
	      }
	  });
	});
	
})(jQuery);