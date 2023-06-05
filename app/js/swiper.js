let myImageSlider = new Swiper('.slide-img', {
	// arrow
	navigation: {
		nextEl: '.btn-next',
		prevEl: '.btn-prev'
    },
    simulateTouch: true,
    touchAngle: 45,
    grabCursor: true,

	slideToClickedSlide: false,

	hashNavigation: {
		watchState: true,
	},

    autoHeight: false,
    
    // slidesPerView: 3,
    // slidesPerGroup: 3,
       breakpoints: {
    320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
    },
    1024: {
        slidesPerGroup: 3,
        slidesPerView: 3,
    }
	},

	// Отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: false,

	// Отступ между слайдами
	spaceBetween: 32,

	

	// Активный слайд по центру
	centeredSlides: false,

	// Стартовый слайд.
	initialSlide: 0,

	// Мультирядность
	slidesPerColumn: 1,

	// Бесконечный слайдер
	loop: true,

	// Кол-во дублирующих слайдов
	loopedSlides: 0,

	// Свободный режим
    freeMode: true,
    
    speed: 800,

	// Вертикальный слайдер
	direction: 'horizontal',


	// Эффекты переключения слайдов.
	// Листание
    effect: 'slide',
    preloadImages: false,
	// Lazy Loading
	// (подгрузка картинок)
	lazy: {
		// Подгружать на старте
		// переключения слайда
		loadOnTransitionStart: false,
		// Подгрузить предыдущую
		// и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	// Зум картинки
	zoom: {
		// Макимальное увеличение
		maxRatio: 5,
		// Минимальное увеличение
		minRatio: 1,
    },
    observer: true,

	// Обновить свайпер
	// при изменении родительских
	// элементов слайдера
	observeParents: true,

	// Обновить свайпер
	// при изменении дочерних
	// элементов слайда
	observeSlideChildren: true,
});
