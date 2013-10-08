(function() {

	var windowHeight = function() { $(".site-wrapper").css("height", window.innerHeight+"px");};

	window.onload = windowHeight();
	$(window).resize(function() {
		windowHeight();
	});

	function getOS() {
		if (navigator.appVersion.indexOf("Win")!=-1) {
			$("#ms").attr("src","../assets/img/day5/win_logo_color.png");
			$(".os").text("indows! Just like the everyone else.");
		} else
		if (navigator.appVersion.indexOf("Mac")!=-1) {
			$("#mac").attr("src","../assets/img/day5/mac_logo.png");
			$(".os").text("Mac! Me too!");
		} else
		if (navigator.appVersion.indexOf("Linux")!=-1) {
			$("#linux").attr("src","../assets/img/day5/linux_logo.png");
			$(".os").text("Linux! Aren't you special.");
		} else {
			$(".os").text("None of the above.");
		}
	}

	getOS();

})();
