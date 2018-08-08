$(document).ready(function() {
	$('#slideshow-w').Peppermint({
		dots: true,
		slideshow: true,
		speed: 500,
		slideshowInterval: 5000,
		stopSlideshowAfterInteraction: true,
	});
	var $comments = $('#comments');
	$comments.Peppermint({
		dots: false,
		slideshow: false,
		speed: 500,
		slideshowInterval: 5000,
		stopSlideshowAfterInteraction: true,
	});
	$(".comment-right").click($comments.data('Peppermint').next);
	$(".comment-left").click($comments.data('Peppermint').prev);

	$("#menu-top .btn-bars").click(function(e){
		e.preventDefault();
		$("body").addClass("open-menu");
	});
	$("#menu-top .close, #menu-top li>a").click(function(e){
		e.preventDefault();
		$("body").removeClass("open-menu");
	});
	$(".links-scroll, #menu-top li>a").click(function(e){
		e.preventDefault();
		var el = $(this).attr('href');
		console.log($(el).offset().top);
		$("html, body").animate({
			scrollTop: $(el).offset().top
		}, 800);
	});
});