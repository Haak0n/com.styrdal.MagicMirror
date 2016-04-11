var weather = {
	lang: 'en',
	params: config.weather.params,
	apiVersion: '2.5',
	apiBase: 'http://api.openweathermap.org/data/',
	weatherEndpoint: 'weather',
	forecastEndpoint: 'forecast/daily',
	updateInterval: 5000,
	iconTable: {
		'01d':'wi-day-sunny',
		'02d':'wi-day-cloudy',
		'03d':'wi-cloudy',
		'04d':'wi-cloudy-windy',
		'09d':'wi-showers',
		'10d':'wi-rain',
		'11d':'wi-thunderstorm',
		'13d':'wi-snow',
		'50d':'wi-fog',
		'01n':'wi-night-clear',
		'02n':'wi-night-cloudy',
		'03n':'wi-night-cloudy',
		'04n':'wi-night-cloudy',
		'09n':'wi-night-showers',
		'10n':'wi-night-rain',
		'11n':'wi-night-thunderstorm',
		'13n':'wi-night-snow',
		'50n':'wi-night-alt-cloudy-windy'
	},
}

roundValue = function (temperature) {
	return parseFloat(temperature).toFixed(1);
}

updateCurrentWeather = function () {
	
	$.ajax ({
		type: 'GET',
		url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.weatherEndpoint,
		dataType: 'json',
		data: weather.params,
		success: function (data) {
			var temperature = roundValue(data.main.temp);
			a
			var iconClass = weather.iconTable[data.weather[0].icon];
			var icon = '<i class="wi ' + iconClass + '"></i>';
			
			var tempHtml = icon + ' ' + temperature + '&deg';
			
			$("#temp").html(tempHtml);
			window.setTimeout(updateCurrentWeather, 5007);
		},
		error: function () {
			updateCurrentWeather();
		}
	});
}

updateForecast = function () {
	$.ajax ({
		type: 'GET',
		url: weather.apiBase + '/' + weather.apiVersion + '/' + weather.forecastEndpoint,
		dataType: 'json',
		data: weather.params,
		success: function (data) {
			var forecastHtml = '<table class="forecast-table">',
				forecastRow1 = '<tr>',
				forecastRow2 = '',
				forecastRow3 = '',
				forecastRow4 = '',
				opacity = 1;
				
			for (var i = 0, count = data.list.length; i < count; i++) {
				var forecast = data.list[i];
				
				var forecastIcon = weather.iconTable[forecast.weather[0].icon];
				
				
				var _12hours = 60 * 60 * 12 * 1000;
				if (forecast.dt < Math.floor((Date.now() - _12hours) / 1000)) continue;
				
				forecastRow1 = '<td style="opacity:' + opacity + '" class="day">' + moment(forecast.dt, 'X').format('ddd') + '</td>';
				forecastRow2 = '<td style="opacity:' + opacity + '" class="wi ' + forecastIcon + '"></td>';
				forecastRow3 = '<td style="opacity:' + opacity + '" class="temp-max">' + roundValue(forecast.temp.max) + '&deg</td>';
				forecastRow4 = '<td style="opacity:' + opacity + '" class="temp-min">' + roundValue(forecast.temp.min) + '&deg</td>';
				
				forecastHtml += forecastRow1 + forecastRow2 + forecastRow3 + forecastRow4 + '</tr>';
				
				opacity -= 0.155;
			}
			
			forecastHtml += '</tr></table>';
			
			$("#forecast").html(forecastHtml);
			window.setTimeout(updateForecast, 60023);
		},
		error: function() {
			updateForecast();
		}
	});
}
weatherInit = function () {
	updateCurrentWeather();
	window.setTimeout(updateForecast, 2000);
}