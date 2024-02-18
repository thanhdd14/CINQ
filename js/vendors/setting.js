jQuery(function ($) {
    $('.media-list li .media-list__img').matchHeight();
});


$(function () {
	var headerHeight = $('#header').outerHeight();
	var urlHash = location.hash;
	if (urlHash) {
		$('body,html').stop().scrollTop(0);
		setTimeout(function () {
			var target = $(urlHash);
			var position = target.offset().top - headerHeight;
			$('body,html').stop().animate({scrollTop: position}, 1000);
		}, 100);
	}
	
	$('.scroll-page').click(function () {
		var href = $(this).attr("href");
		var target = $(href);
		var position = target.offset().top;
		$('body,html').stop().animate({scrollTop: position}, 1000);
	});
});