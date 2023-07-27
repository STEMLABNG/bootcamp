(function () {
	//===== Prealoder

	window.onload = function () {
		window.setTimeout(fadeout, 500);
	};

	function fadeout() {
		document.querySelector('.preloader').style.opacity = '0';
		document.querySelector('.preloader').style.display = 'none';
	}
	// WOW active
	new WOW().init();

	// ======== tiny slider for header
	tns({
		container: '.hero_active',
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayText: [' ', ' '],
		mouseDrag: true,
		gutter: 0,
		speed: 1000,
		nav: true,
		controlsContainer: '#controls',
		prevButton: '.previous',
		nextButton: '.next',
	});

	//======== tiny slider for tutors
	tns({
		container: '.tutors_active',
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayText: [' ', ' '],
		mouseDrag: true,
		gutter: 0,
		nav: true,
		controls: false,
		controlsText: [
			'<i class="lni lni-chevron-left prev"></i>',
			'<i class="lni lni-chevron-right next"></i>',
		],
		items: 5,
		responsive: {
			0: {
				items: 1,
			},
			570: {
				items: 2,
			},
			850: {
				items: 3,
			},
			1200: {
				items: 4,
			},
			1400: {
				items: 5,
			},
		},
	});
	//======== tiny slider for blog
	tns({
		container: '.blog_active',
		autoplay: true,
		autoplayTimeout: 3500,
		autoplayText: [' ', ' '],
		mouseDrag: true,
		gutter: 0,
		nav: true,
		controls: false,
		controlsText: [
			'<i class="lni lni-chevron-left prev"></i>',
			'<i class="lni lni-chevron-right next"></i>',
		],
		items: 5,

		responsive: {
			0: {
				items: 1,
			},
			570: {
				items: 2,
			},
			850: {
				items: 3,
			},
			1200: {
				items: 4,
			},
		},
	});
})();
