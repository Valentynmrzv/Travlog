

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


let myImageSliderRew = new Swiper('.reviews-swiper', {
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты
		dynamicBullets: true,
		// Кастомные буллеты
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		
		/*
		// Фракция
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
		*/
		// Прогрессбар
		//type: 'progressbar'
	},
	slidesPerGroup: 1,
	slidesPerView: 1,
	simulateTouch: true,
	// Чувствительность свайпа
	touchRatio: 1,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	spaceBetween: 30,
	centeredSlides: false,
	loop: true,
	speed: 800,
	effect: 'slide',

	observer: true,
	observeParents: true,
	observeSlideChildren: true,

});
