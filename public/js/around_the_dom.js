(function(){
	window.onload = function() {
		var windowHeight = window.innerHeight;
		$(".site-wrapper").css("height",windowHeight);
		$(".box").css("height",windowHeight * 0.80);
	};

	$(".here").on("mouseover",function(){
		var imgSrc = "../assets/img/day2/stickman.jpeg";
		var imgStick = $("img.stickman");
		var parentAdd = imgStick.closest(".here");
		if ($(this) !== parentAdd) {
			imgStick.remove();
			parentAdd.text("Go Here");

			var direction = $(this).attr("id");
			
			var newStick = $(this).text("").append("<img>").find("img");
			newStick.attr("src",imgSrc).addClass("stickman " + direction + "-rotate");
		}

	});
})();