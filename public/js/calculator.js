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
	var mathString = "0";

	$("div").on("click", ".button", function() {
		event.stopPropagation();
		var idVal = $(this).attr("id");
		var onDisplay = $(".output").text();
		console.log(onDisplay);

		if (idVal === "00" && (mathString === "0" || (mathString.slice(-1) !== "." && isNaN(+mathString.slice(-1))))) {
			// ignore
		} else if (mathString === "0" && !isNaN(+idVal)) {
			mathString = idVal;
		} else if (isNaN(+idVal) && isNaN(+mathString.slice(-1))) {
			mathString = mathString.substring(0,mathString.length-1) + idVal;
		} else if ((mathString === "0") && (idVal === ".")) {
			mathString = idVal;
		} else {
			mathString = mathString + idVal;
		}

		$(".output").text(mathString);
		
	});

	$("div").on("click", "#clear", function() {
		event.stopPropagation();
		mathString = "0";
		$(".output").text("0");
	});

	$("div").on("click", "#answer", function() {
		event.stopPropagation();
		var ans = eval(mathString);
		$(".output").text(ans);
		mathString = "0";
	});

	$("div").on("mouseenter", ".button", function() {
		event.stopPropagation();
		$(this).addClass("hover");
	});

	$("div").on("mouseleave", ".button", function() {
		event.stopPropagation();
		$(this).removeClass("hover");
	});

	$("div").on("mouseenter","#clear", function() {
		event.stopPropagation();
		$(this).addClass("hover");
	});

	$("div").on("mouseleave","#clear", function() {
		event.stopPropagation();
		$(this).removeClass("hover");
	});

	$("div").on("mouseenter","#answer", function() {
		event.stopPropagation();
		$(this).addClass("hover");
	});

	$("div").on("mouseleave","#answer", function() {
		event.stopPropagation();
		$(this).removeClass("hover");
	});

})();