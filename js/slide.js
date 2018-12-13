$(function () {
	$('.slider__items').slick({
		dots: true,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		responsive: true,
	    appendArrows: $('.your-class-arrow'),
	    prevArrow: '<button class="prev slider-arrow-style" type="button" class="btn-juliet"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
	    nextArrow: '<button class="next slider-arrow-style" type="button" class="btn-juliet"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>'
	});
});