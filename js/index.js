$(document).ready(function(){
	var bar = $('.bar');
	var p = $('.percents');
	var interval;
	var start = 0; // start animation at 0%
	var end = parseInt(78); // stop progress bar on 78% just for demo
	var current = start;

	var countUp = function() {
  		// increment by one during each function call
  		current++;
		bar.css('width', current+'%');
		// update percents in html
  		p.html(current + "%");
  		// stop interval if we reached our goal (78%)
  		if (current === end) {
    		clearInterval(interval);
  		}
	};

	// change progress bar every 1000 / (78+1) milliseconds
	interval = setInterval(countUp, (1000 / (end + 1)));
});