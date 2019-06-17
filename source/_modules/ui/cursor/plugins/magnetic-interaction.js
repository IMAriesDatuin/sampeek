/* -------------------------------------------------- */
/* MAGNETIC INTERACTION
/* -------------------------------------------------- */

var magneticCursor = (function magneticCursor($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('magneticCursor', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = document.querySelectorAll('.magnetic');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var strength = 25;


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.forEach(function (element) {

			element.addEventListener('mousemove', magnetic);

			element.addEventListener('mouseout', function (event) {

				Tween.to(event.currentTarget, 1, {x: 0, y: 0, scale: 1, ease: Elastic.easeOut});
			});
 
		});


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function magnetic(event) {

			var $self = event.currentTarget,
				bounding = $self.getBoundingClientRect();

			Tween.to($self, 1, {
				x: ((event.clientX - bounding.left) / $self.offsetWidth - 0.5) * strength,
				y: ((event.clientY - bounding.top) / $self.offsetHeight - 0.5) * strength,
				scale: 1.05,
				ease: Expo.easeOut});

		}

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
