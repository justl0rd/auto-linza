$(function () {
	/*Modal window*/
	$('.callback__open').click(function(){
		$('.callback').addClass('callback-active');
		$('.callback-block').addClass('callback-active');
		$('.callback-block__bg').click(function(){
			$('.callback-block').removeClass('callback-active');
		});
	});

	/*Scroll To*/
	$("a.scroll-to").click(function (e) {
		e.preventDefault();
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$("body,html").animate({scrollTop: destination }, 800);
	});
});
