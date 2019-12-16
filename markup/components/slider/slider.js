$(document).ready(function() {
	
	var swiper = new Swiper('.swiper-container', {
		effect: 'coverflow',
		grabCursor: false,
		centeredSlides: true,
		slidesPerView: 'auto',
		loop: true,

		coverflowEffect: {
			rotate: 0,
			stretch: 220,
			depth: 400,
			modifier: 1,
			slideShadows : false,
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},

	});

});