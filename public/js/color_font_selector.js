(function() {

	windowHeight = function() {
		$(".site-wrapper").css("height", window.innerHeight);
	};
	window.onload = windowHeight();
	$(window).resize(function() {
		windowHeight();
	});

	$("#bg-color").on("keyup", function() {
		$("body").css("background-color", $(this).val());
	});

	$("#font-color").on("keyup", function() {
		$(".sample").css("color", $(this).val());
	});

	$("#title-font").on("keyup", function() {
		$("#sample-header").css("font-family", $(this).val());
	});

	$("#body-font").on("keyup", function() {
		$("#sample-body").css("font-family", $(this).val());
	});

})();