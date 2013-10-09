(function() {

	var windowHeight = function() {$(".site-wrapper").css("height", (window.innerHeight * 2/3) + "px");};
	var buttonDim = $(".site-wrapper").width()/4;
	// console.log(buttonDim);

	$("window").resize(function(){
		// windowHeight();
	});

	window.onload = function() {
		// windowHeight();
		var buttonValues = ["00", "0", ".", "3", "2", "1", "6", "5", "4", "9", "8", "7"];
		var operatorTypes = ["/", "*", "-", "+"];

		for (var i = 0, count = buttonValues.length; i < count; i ++ ) {
			$(".digits").prepend("<div id=\"" + (buttonValues[i]) + "\">" + buttonValues[i] + "</div>");
		}

		for (i = 0, count = operatorTypes.length; i < count; i ++ ) {
			$(".operators").prepend("<div id=\"" + (operatorTypes[i]) + "\">" + operatorTypes[i] + "</div>");
		}

		$(".digits").children().addClass("button").addClass("container");
		$(".operators").children().addClass("button").addClass("container");
		$(".button").css("width", buttonDim + "px");
		$(".button").css("height", (buttonDim * 3/4) + "px");
	};

	// true if last command was non-numeric
	// false if last command was a number
	var clearNext = false;
	// true if last command was non-numeric
	// false if last command was a number
	var wasOperator = false;
	var mathString = "";

	$("div").on("click", ".button", function() {
		event.stopPropagation();
		var idVal = $(this).attr("id");
		var onDisplay = $(".output").text();
		console.log(onDisplay);

		if (clearNext === false && typeof (+idVal) === "number") {
			if (onDisplay === "0") {
				$(".output").text(idVal);
				mathString = mathString + idVal;
			} else {
				$(".output").text(onDisplay + idVal);
				mathString = mathString + idVal;
			}
		} else if (clearNext === false && typeof (+idVal) !== "number") {
			// don't update display output
			if (idVal === "." && mathString.length === 0) {
				mathString = idVal;
				$(".output").text(idVal);
				wasOperator = false;
			} else if (wasOperator === true) {
				mathString = mathString.length === 0 ? "" : mathString.substring(0, mathString.length - 1) + idVal;
				wasOperator = true;
			} else {
				mathString = mathString + idVal;
				wasOperator = true;
			}
		
		} else if (clearNext === true && typeof (+idVal) === "number") {
			mathString = mathString + idVal;
			$(".output").text(idVal);
			clearNext = false;
			wasOperator = false;
		} else if (clearNext === true && typeof (+idVal) !== "number") {
			if (idVal === "." && mathString.length === 0) {
				mathString = idVal;
				$(".output").text(idVal);
				wasOperator = false;
				clearNext = false;
			} else {
				mathString = mathString.length === 0 ? "" : mathString.substring(0, mathString.length - 1) + idVal;
				wasOperator = true;
			}
		}
	});

	$("div").on("click", "#clear", function() {
		event.stopPropagation();
		mathString = "";
		clearNext = false;
		wasOperator = false;
		$(".output").text("0");
	});

	$("div").on("click", "#answer", function() {
		event.stopPropagation();
		var ans = eval(mathString);
		$(".output").text(ans);
		mathString = "";
		wasOperator = false;
		clearNext = true;
	});

})();