var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			data = JSON.parse(data);
			var inTemp = parseFloat(data.temp.in).toFixed(1),
				outTemp = parseFloat(data.temp.out).toFixed(1),
				date = data.date;
			
			$("#intemp").html(inTemp + "&deg");
			$("#outtemp").html(outTemp + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}