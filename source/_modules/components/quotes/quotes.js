/* -------------------------------------------------- */
/* QUOTES
/* -------------------------------------------------- */

if ( $('.quotes').length ) {

var quotes = (function quotes($, window, document, undefined) {

	'use strict';

	function init($element) {

		//removeIf(production)
		get.info('quotes', '1.0', 'Aries Datuin');
		//endRemoveIf(production)


		/* -------------------------------------------------- */
		/* CACHE
		/* -------------------------------------------------- */

		var $element = $($element);


		/* -------------------------------------------------- */
		/* VARS
		/* -------------------------------------------------- */

		var duration = 0.5,
			stagger = 0.05,
			pause = 5, // Quote static time.
			overlap = 0.5, // Next animation start overlap.
			positionParam = 0,
			master = new Timeline({}),
			timelines = [];


		/* -------------------------------------------------- */
		/* FUNCTIONS
		/* -------------------------------------------------- */

		function playPause() {

			if ( timelines[index].paused() ) {

				//console.log('Playing...');
				timelines[index].delay(0).play(0);

			} else {

				//console.log('Pausing...');
				timelines[index].pause(0);

			}

		}
		init.playPause = playPause;



		/* -------------------------------------------------- */
		/* ANIMATIONS
		/* -------------------------------------------------- */

		// SET
		//Tween.set($element, {autoAlpha: 0});


		// MASTER
		//for (var k = 0; k < $element.length; k++) {
		$element.each(function(index) {

			var $self = $(this);


			// SPLITTEXT
			var mySplitText = new SplitText($self, {position: null, reduceWhiteSpace: true, type: 'words', wordsClass: 'split-text'}), 
				$mySplitText = mySplitText.words;


				Tween.set($mySplitText, {autoAlpha: 0, x: -50, scaleX: 0.9, className: '-=split-text-reveal'});
				//$self.find('.quotlings').prepend('<span class="quotlings-wipe"></span>');


			// TIMELINE
			var tl = new Timeline({paused: true});
				tl.staggerTo($mySplitText, 0.25, {autoAlpha: 0, x: -50, scaleX: 0.9, className: '-=split-text-reveal', ease: Expo.easeOut}, 0)
				  .staggerTo($mySplitText, duration, {autoAlpha: 1, x: 0, scaleX: 1, className: '+=split-text-reveal', ease: Expo.easeOut}, stagger)
				  .staggerTo($mySplitText, duration, {autoAlpha: 0, x: 50, scaleX: 0.9, className: '-=split-text-reveal', ease: Expo.easeInOut}, stagger, '+=' + pause)

				  //call a function to trigger the next timeline	 
				  .add(nextTimeline, '-=' + overlap);


			timelines.push(tl);

		});
		timelines[0].play();


		var index = 0;
		function nextTimeline() {

			index++;

			if(index >= timelines.length) {

				index = 0;

			}

			//console.log(index)
			timelines[index].restart();

		}
		master.timeScale(0.5);

	}


	/* -------------------------------------------------- */
	/* EXPORTS
	/* -------------------------------------------------- */
	
	return {
		init: init,

	};


}(jQuery, window, document));

}
