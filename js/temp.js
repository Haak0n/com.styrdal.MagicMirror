var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			console.log(data);
			var temp1 = data.temp,
				temp2 = data.temp,
				date = data.date;
			
			$("#intemp").html(date + "&deg");
			$("#outtemp").html(temp2 + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}