/* -------------------------------------------------- */
/* INTERSECTION OBSERVER
/* -------------------------------------------------- */

var io = (function reveal($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('io', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		//removeIf(production)
		function log(eventName, element) {

			console.log(Date.now(), eventName, element.getAttribute('data-src'));

		}
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		Tween.set($('.io'), {autoAlpha: 0});


		// HEADLINE
		function revealHeadline(element) {

			if ( $(element).find('.io-headline').length ) {

				var mySplitText = new SplitText($(element).find('.io-headline').find('.headline-title'), {position: null, reduceWhiteSpace: true, type: 'words', wordsClass: 'split-text'}), 
					$mySplitText = mySplitText.words;

				var tl = new Timeline({paused: true});
					tl

					  // SUBTITLE
					  .fromTo($(element).find('.io-headline').find('.headline-subtitle'), 2, {autoAlpha: 0, x: -50},
																							 {autoAlpha: 1, x: 0, ease: Expo.easeOut}, 'group-01')


					  // TITLE
					  .staggerFromTo($mySplitText, 1, {autoAlpha: 0, x: -50, className: '-=io-headline-reveal'},
													  {autoAlpha: 1, x: 0, className: '+=io-headline-reveal', ease: Expo.easeOut}, 0.15, 'group-01+=0.5')



					  // REVERT TEXT
					  .addCallback(function() { mySplitText.revert() });


					tl.delay(0.5).play();

			}

		}


		// COPY
		function revealCopy(element) {

			if ( $(element).find('.io-copy').length ) {

				var mySplitText = new SplitText($(element).find('.io-copy'), {position: null, reduceWhiteSpace: true, type: 'lines', linesClass: 'split-text'}), 
					$mySplitText = mySplitText.lines;

				var tl = new Timeline({paused: true, onComplete: function() { mySplitText.revert() } });
					tl

					  // DEFAULT
					  .staggerFromTo($mySplitText, 2, {autoAlpha: 0, y: 75, className: '-=io-copy-reveal'},
													  {autoAlpha: 1, y: 0, className: '+=io-copy-reveal', ease: Expo.easeOut}, 0.075)


					  // REVERT TEXT
					  .addCallback(function() { mySplitText.revert() });


					  // ALT
					  //.fromTo($(element).find('p').not('.io-copy'), 2, {autoAlpha: 0, y: 25, className: '-=io-copy-reveal'},
																	   //{autoAlpha: 1, y: 0, className: '+=io-copy-reveal', ease: Expo.easeOut});


					tl.delay(1.25).play();

			}

		}


		// LIST
		function revealList(element) {

			var tl = new Timeline({paused: true, onComplete: function() { /*mySplitText.revert()*/ } });
				tl

				  // UL
				  .fromTo($(element).find('.io-list'), 1, {autoAlpha: 0, x: -25},
										 				  {autoAlpha: 1, x: 0, ease: Expo.easeOut}, 'group-01')

				  // LIST ITEMS
				  .staggerFromTo($(element).find('.io-list').children(), 1, {autoAlpha: 0, x: -25, className: '-=io-list-reveal'},
																			{autoAlpha: 1, x: 0, className: '+=io-list-reveal', ease: Expo.easeOut}, 0.12, 'group-01');


				tl.delay(0).play();

		}


		// BUTTONS
		function revealElement(element) {

			var tl = new Timeline({paused: true, onComplete: function() { /*mySplitText.revert()*/ } });
				tl.fromTo($(element).find('.io-button'), 1, {autoAlpha: 0, className: '-=io-button-reveal'},
														 	{autoAlpha: 1, className: '+=io-button-reveal', ease: Expo.easeOut});


				tl.delay(1.5).play();

		}


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.io',
			threshold: 300,
			//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			//load_delay: 100,
			auto_unobserve: true,
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');


				// CONTAINER
				Tween.to($(element), 0.5, {autoAlpha: 1, ease: Expo.easeOut});

				revealHeadline(element);
				revealCopy(element);
				revealList(element);
				revealElement(element);

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//lazyLoad.update();
		//lazyLoad.load(element, force);
		//lazyLoad.loadAll();
		//lazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
