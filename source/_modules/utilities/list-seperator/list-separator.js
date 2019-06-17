/* -------------------------------------------------- */
/* LIST SEPERATOR
/* -------------------------------------------------- */

var listSeparator = (function listSeperator($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('listSeparator', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.list-separator');


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var privateProperty = 'Hello World.',
			publicProperty = 'I am a public property.';


		/* -------------------------------------------------- */
		/* OPTIONS
		/* -------------------------------------------------- */

		var options = {
			

		};


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		var parentList = function(c, e) {

			var last,
				lastHeight;

			$('li', e).each(function(count, listItem) {

				var height = $(listItem).offset().top;

				if(typeof last !== 'undefined') {

					if(lastHeight < height) { // Is not last in line.

						$(last).addClass('no-separator');

					} else { // Is last in line.

						$(last).removeClass('no-separator');

					}

				}

				last = listItem;
				lastHeight = height;

			});

		};


		$doc.ready(function() {

			$element.each(parentList);

		});

		$win.resize(function() {

			$element.each(parentList);

		});

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init

	};


}(jQuery, window, document));
