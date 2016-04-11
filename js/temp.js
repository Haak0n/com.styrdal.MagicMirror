var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			data = JSON.parse(data);
			console.log(data);
			var temp1 = data.temp.temp1,
				temp2 = data.temp.temp2,
				date = data.date;
			
			$("#intemp").html(date + "&deg");
			$("#outtemp").html(temp2 + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}