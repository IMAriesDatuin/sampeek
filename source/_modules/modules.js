/* -------------------------------------------------- */
/* APP
/* -------------------------------------------------- */

var modules = (function modules($, window, document, undefined) {

	'use strict';

	//removeIf(production)
	get.info('modules', '1.0', 'Aries Datuin');
	//endRemoveIf(production)


	/* -------------------------------------------------- */
	/* CORE (RUN ONCE ONLY)
	/* -------------------------------------------------- */

	function core() {

		var particleGrid = new Canvas(document.getElementById('nav-panel-particle-grid')),
			particleGrid = new Canvas(document.getElementById('particle-grid'));

		$doc.foundation();
		detectBrowser();
		detectDevice();
		detectScreen();
		//listSeparator.init();
		musicPlayer.init();
		navPanel.init();
		scroll.lock();
		scrollProgress.init();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		//if(!isTouch) {
			//grayscaleDisplacement.init();
		//}

		//if(!isEdge && !isSafari) {
			//filmGrain.init();
		//}

	}


	/* -------------------------------------------------- */
	/* MODULES
	/* -------------------------------------------------- */

	function components() {

		/* -------------------------------------------------- */
		/* UTILITIES
		/* -------------------------------------------------- */

		detectTouch();
		dataAttr.color();
		//dataAttr.image();
		dataAttr.page();
		//distortionHover.init();
		headroom.init();
		io.init();
		ioLazyLoad.init();
		pageVisibility.init();
		print.init();
		//skewScroll.init();
		//smoothScroll.init('main');
		//stackOrder.init();

		Tween.delayedCall(interval.delay, onScroll.init);


		/* -------------------------------------------------- */
		/* COMPONENTS
		/* -------------------------------------------------- */

		//component.init();

		hero.init();
		//icon.init();
		logo.init();

		//commonCarousel.init('.carousel');
		//cardCarousel.init('.concerns-carousel');
		//cardCarousel.init('.procedures-carousel');
		//cardCarousel.init('.testimonials-carousel');

		Tween.delayedCall(interval.delay, parallax.init);

		//pages.init();


		/* -------------------------------------------------- */
		/* DEVICE
		/* -------------------------------------------------- */

		if(!isEdge && !isExplorer && !isTouch) {
			glitch.init();
		}


		if(!isTouch) {
			cursor.init();
			magneticCursor.init();
		}


		if(isTouch) {
			touchFeedback.init();
			waves.init();
		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		core: core,
		components: components

	};


}(jQuery, window, document));
