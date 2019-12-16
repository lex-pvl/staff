let overlay = $('.overlay'),
	popup = $('.popup'),
	join = $('#join'),
	close = $('.popup-close');

join.on('click', function(){
	overlay.show();
	popup.toggleClass('popup-active');
	$('body').css('overflow-y', 'hidden');
});

overlay.on('click', function() {
	overlay.hide();
	popup.removeClass('popup-active');
	$('body').css('overflow-y', 'scroll');
});

close.on('click', function() {
	overlay.hide();
	popup.removeClass('popup-active');
	$('body').css('overflow-y', 'scroll');
});