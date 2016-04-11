var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			data = JSON.parse(data);
			console.log(data);
			var temp1 = data[0].temp,
				temp2 = data[0].temp,
				date = data[0].date;
			
			$("#intemp").html(date + "&deg");
			$("#outtemp").html(temp2 + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}