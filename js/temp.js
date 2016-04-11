var updateInterval = 5 * 1000;

function tempInit () {
	
	$.ajax ({
		url: 'gettemp.php',
		datatype: 'json',
		success: function(data) {
			var temp1 = data.temp1,
				temp2 = data.temp2,
				date = data.date;
			
			console.log(temp1);
			console.log(temp2);
			console.log(date);
			
			$("#intemp").html(temp1 + "&deg");
			$("#outtemp").html(temp2 + "&deg");
		}
	});
	
	window.setTimeout(tempInit, updateInterval);
}
		