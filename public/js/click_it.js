(function() {
	window.onload = $(".full-wrap").css("height", window.innerHeight);
	$(window).resize(function() {
		$(".full-wrap").css("height", window.innerHeight);
	});
})();

// create module
var clickIt = {};

// define methods
	// setup
	clickIt.init = {
		"show": function() {
			var width = $(".full-wrap").width()/2 - $("#start").width()/2,
				height = $(".full-wrap").height()/2 - $("#start").height()/2;
				$("#start").css("left", width).css("top", height).css("display", "block");
		}
	};

	clickIt.game = {

		// initialize game
		

	};

	// clean up
	clickIt.cleanUp = {

		// remove pixel

		// show score
		
		// ask if to try again
	};

	clickIt.init.show();

