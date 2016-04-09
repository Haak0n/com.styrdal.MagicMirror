var time = {
	updateInterval: 1000,
};

time.updateTime = function () {
	
	setInterval( function() {
		$("#date").html(moment().format('DD/MM/YYYY'));
	}, this.updateInterval);
	
	setInterval( function() {
		$("#day").html(moment().format('dddd'));
	}, this.updateInterval);
	
	setInterval( function() {	
		$("#seconds").html(moment().format('ss'));
	}, this.updateInterval);
	
	setInterval( function() {
		$("#minutes").html(moment().format('mm'));
	}, this.updateInterval);
	
	setInterval( function() {
		$("#hours").html(moment().format('HH'));
	}, this.updateInterval);
	
}

time.init = function () {
	this.updateTime();
}