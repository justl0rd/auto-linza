$(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.nav');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 991 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});	
});