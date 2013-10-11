(function() {

	var selectedColor;

	$("body").on("click", function(res) {
		if (typeof selectedColor === "undefined" || selectedColor === "") {
			$("div.full-wrapper").append("<div style=\"top:" + (res.pageY-15) + "px; left:" + (res.pageX - 5) + "px; background-color:" + randomColor() + ";\" class=\"size\"></div>");
			selectedColor = "";
		} else {
			$("div.full-wrapper").append("<div style=\"top:" + (res.pageY-15) + "px; left:" + (res.pageX - 5) + "px; background-color:" + selectedColor + ";\" class=\"size\"></div>");
			selectedColor = "";
		}
	});

	$("div").on("click", ".size", function() {
		event.stopPropagation();
		findStyle = $(this).attr("style");
		selectedColor = findColor(findStyle);
	});

	function findColor(string) {
		var pattern = /rgb(.*)/;
		var result = pattern.exec(string)[0];
		return result.substring(0, result.length - 1);
	}

	function randomColor() {
		var randNum = function() {
			return Math.floor(Math.random() * 255);
		};
		return "rgb(" + randNum() + "," + randNum() + "," + randNum() + ")";
	}

})();