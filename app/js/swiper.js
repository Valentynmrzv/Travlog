

let myImageSlider = new Swiper('.slide-img', {
	// arrow
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev'
    },
    
    breakpoints: {
        320: {
            slidesPerGroup: 1,
            slidesPerView: 1,
            simulateTouch: true,
        },
        1024: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            simulateTouch: false,
        }
    },
    
    touchAngle: 45,
    grabCursor: true,

	slideToClickedSlide: false,

	hashNavigation: {
		watchState: true,
	},

    autoHeight: false,
   
	watchOverflow: false,
	spaceBetween: 32,
	centeredSlides: false,
	initialSlide: 0,
	slidesPerColumn: 1,
	loop: true,
	loopedSlides: 0,
    freeMode: true,
    speed: 1200,
	direction: 'horizontal',
    effect: 'slide',
    preloadImages: false,
	lazy: {
		loadOnTransitionStart: false,
		loadPrevNext: false,
	},
	watchSlidesProgress: true,
	watchSlidesVisibility: true,
    observer: true,

	observeParents: true,
	observeSlideChildren: true,
});
