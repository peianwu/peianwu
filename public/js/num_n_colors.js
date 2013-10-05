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
		console.log("pressed " + $(this).attr('id'));
		var color = $(this).val();
		console.log("text = " + color);
		var num = $(this).attr("id");
		console.log(num);
		switch (num) {
			case "num_1":
				console.log(color);
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