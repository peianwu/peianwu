(function() {

	windowHeight = function() {
		$(".site-wrapper").css("height", window.innerHeight);
	};
	window.onload = function() {
		windowHeight();
		$("#bg-color").val("#3ca938");
		$("#font-color").val("#000")
		$("body").css("background-color", "#3ca938");
		$("#title-font").val("Palatino");
		$("#sample-header").css("font-family", "Palatino");
		$("#body-font").val("Candara");
		$("#sample-body").css("font-family", "Candara");

	};

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