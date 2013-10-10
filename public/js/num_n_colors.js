(function(){

	window.onload = function() {
		setCellHeight();
	};

	// reset cell height upon window resize
	$(window).resize(function() {
		setCellHeight();
	});

	// set cell height
	function setCellHeight() {
		// let height equal to its width
		var cellHeight = $(".grid-cell").width();
		$(".grid-cell").css("height",cellHeight);
	}

	$(".set-colors").on("keyup","input", function() {
		var color = $(this).val();
		var num = $(this).attr("id");

		switch (num) {
			case "num_1":
				$(".color-one").css("color", color);
				break;
			case "num_2":
				$(".color-two").css("color", color);
				break;
			case "num_3":
				$(".color-three").css("color", color);
				break;
		}
	});

})();