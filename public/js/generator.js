(function() {

	window.onload = function() {
		$(".full-wrap").css("height", window.innerHeight);
	};
	$(window).resize(function() {
		$(".full-wrap").css("height", window.innerHeight);
		
	});

	var svgCircle = {
		startPos: {
			xPos: randX,
			yPos: randY;
		}
		radius: 5,
		color: function() { return randHex(); },
		velocity: ;
	};

	// create random hex color
	function randHex() {
		var hexText = "";
		for (var i = 0; i < 3; i ++ ) {
			hexText += randHexNum();
			if (i===2) { return "#" + hexText }
		}
		function randHexNum() {
			return Math.floor(Math.random() * 256).toString(16);
		}
	}

	// assign random starting velocity
	

})();

