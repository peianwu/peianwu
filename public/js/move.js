(function() {
	var eleWidth = $(".target").width(),
		eleHeight = $(".target").height();

	window.onload = function() {
		$(".full-wrap").css("height", window.innerHeight);
		$(".target").css("left", window.innerWidth/2 - eleWidth/2).css("top", window.innerHeight/2 - eleHeight/2);
	};
	$(window).resize(function() {
		$(".full-wrap").css("height", window.innerHeight);
		var resizeWidth = window.innerWidth/2 - eleWidth/2,
			resizeHeight = window.innerHeight/2 - eleHeight/2;
		var posTarget = $(".target").position();

		if (posTarget.top ===  resizeHeight && posTarget.left === resizeWidth) {
			$(".target").css("left", window.innerWidth/2 - eleWidth/2).css("top", window.innerHeight/2 - eleHeight/2);
		}
	});

	$(".target").on("mousedown", function(e) {
		var posTarget = $(this).position();
		var posX = posTarget.left,
			posY = posTarget.top;
		var diffX = e.pageX - posX,
			diffY = e.pageY - posY;

		$(this).on("mousemove", function(event) {
			$(this).css("left", (event.pageX-diffX) + "px").css("top", (event.pageY-diffY) + "px");
		});
	});

	$(".target").on("mouseup mouseleave", function() {
		$(this).unbind("mousemove");
	});

})();
