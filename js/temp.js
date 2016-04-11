var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			data = JSON.parse(data);
			var temp1 = parseFloat(data.temp.temp1).toFixed(1),
				temp2 = parseFloat(data.temp.temp2).toFixed(1),
				date = data.date;
			
			$("#intemp").html(temp1 + "&deg");
			$("#outtemp").html(temp2 + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}