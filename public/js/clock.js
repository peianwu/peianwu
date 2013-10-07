(function(){

	var newHeight = function() {
		$(".site-wrapper").css("height", window.innerHeight+"px");
	};

	window.onload = newHeight;
	$(window).resize(newHeight);

	var date1 = new Date();
	var date2 = new Date();

	// add one second to time
	function addOneSecond(d){
		d.setSeconds(d.getSeconds() + 1);
		return d;
	}

	// refresh time display using .setInterval
	function intervalTime() {$("#interval").text(clockFormat.call(addOneSecond(date1)));}
	intervalTime();

	// run interval loop
	var loopInterval = setInterval(intervalTime, 1000);

	// refresh time display using .setTimeout
	function timeoutTime() {
		$("#timeout").text(clockFormat.call(addOneSecond(date2)));
		loopTimeout = setTimeout(timeoutTime, 1000);
	}
	// run timeout loop
	timeoutTime();

	// format time to clock-like format
	function clockFormat(){
		var hours = this.getHours();
		var minutes = this.getMinutes();
		var seconds = this.getSeconds();

		if (hours < 10) { hours = "0" + hours;}
		if (minutes < 10) { minutes = "0" + minutes;}
		if (seconds < 10) { seconds = "0" + seconds;}

		return hours + ":" + minutes + ":" + seconds;
	}

})();