document.addEventListener("DOMContentLoaded", function() {
	
	//slider contentsrt
	const swiperSliderContentsrt = new Swiper('.slider-contentsrt .swiper', {
		loop: false,
		slidesPerView: 'auto',
		spaceBetween: 0,
		autoHeight: false,
		speed: 400,
		pagination: false,
		autoplay: false,
		navigation: {
			nextEl: '.btn-action-ico.ico-arrow.ico-arrow-next.button-slider-contentsrt-next',
			prevEl: '.btn-action-ico.ico-arrow.ico-arrow-prev.button-slider-contentsrt-prev',
		},
	
	});


	//slider line
	const swiperSliderLine = new Swiper('.slider-line .swiper',
	{
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		autoHeight: false,
		speed: 4000,
		pagination: false,
		centeredSlides: true,
		allowTouchMove: false,
		autoplay: {
			delay: 0,
			disableOnInteraction: false,
		},
		navigation: false,
	});

})