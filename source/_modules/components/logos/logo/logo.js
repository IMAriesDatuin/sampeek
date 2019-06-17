/* -------------------------------------------------- */
/* LEGAL
/* -------------------------------------------------- */

var logo = (function logo($, window, document, undefined) {

	'use strict';

	function init() {

		//removeIf(production)
		get.info('logo', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $('.logo-text');
		

		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		var mySplitText = new SplitText($element, {type: 'words, lines, chars', reduceWhiteSpace: true}), 
			$mySplitText = mySplitText.chars;


		var tl = new Timeline({paused: true});
			tl.addCallback( function(){$element.addClass('no-pointer');} )
			  .staggerTo($mySplitText, 0.5, {autoAlpha: 0, y: -50, ease: Expo.easeIn}, 0.0125)
			  .set($mySplitText, {autoAlpha: 0, y: 50})
			  //.set($element.parent(), {className: '+=is-active'})
			  //.addCallback( function(){ $element.parent().removeClass('is-active'); } )
			  //.addCallback( function(){ $element.parent().addClass('is-active'); } )
			  .staggerTo($mySplitText, 0.5, {autoAlpha: 1, y: 0, ease: Expo.easeOut}, 0.0125)
			  .addCallback( function(){ $element.removeClass('no-pointer'); } );


		/* -------------------------------------------------- */
		/* LISTENERS
		/* -------------------------------------------------- */

		$element.on('mouseenter', function(e) {

			tl.restart();

		});


		/* -------------------------------------------------- */
		/* SWUP API
		/* -------------------------------------------------- */

		/*
		document.addEventListener('swup:contentReplaced', function() {
			
			tl.play(0).delay(2);

		});
		*/

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */

	return {
		init: init

	};


}(jQuery, window, document));
