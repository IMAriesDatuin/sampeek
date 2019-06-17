/* -------------------------------------------------- */
/* INTERSECTION OBSERVER (LAZY LOAD)
/* -------------------------------------------------- */

var ioLazyLoad = (function ioLazyLoad($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('ioLazyLoad', '1.0', 'Aries Datuin');
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
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			container: document,
			elements_selector: '.io-lazy-load-img',
			threshold: 300,
			//thresholds: '0% 0% 0% 0%', // top, right, bottom, left
			load_delay: 0,
			auto_unobserve: true,
			data_bg: 'bg',
			data_sizes: 'sizes',
			data_src: 'src',
			data_srcset: 'srcset',
			class_loading: 'is-loading',
			class_loaded: 'is-loaded',
			class_error: 'on-error',
			use_native: false,

			callback_enter: function(element) {

				//console.log('Entered the viewport', element);
				$(element).addClass('in-view');

			},

			callback_exit: function(element) {

				//console.log('Left the viewport', element);
				$(element).removeClass('in-view');

			},

			callback_reveal: function(element) {

				//console.log('Loading: ', element);

			},

			callback_loaded: function(element) {

				//console.log('Loaded: ', element);
				$(element).closest('.io-lazy-load').addClass('is-loaded');

			},

			callback_error: function(element) {

				//console.log('Error loading: ', element);
				$(element).closest('.io-lazy-load').addClass('on-error');

			},

			callback_finish: function() {

				console.log('All elements loaded.');

			}

		};


		/* -------------------------------------------------- */
		/* INIT
		/* -------------------------------------------------- */

		var lazyLoad = new LazyLoad(options);


		/* -------------------------------------------------- */
		/* HELPERS
		/* -------------------------------------------------- */

		//ioLazyLoad.update();
		//ioLazyLoad.load(element, force);
		//ioLazyLoad.loadAll();
		//ioLazyLoad.destroy();

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
