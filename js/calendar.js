var key = 'AIzaSyBCoouCCaQIQ7VDY_cAsEqhetmOr50p5Bk';
var userName = 'styrdal@gmail.com';
var limit = 5;
var updateInterval = 60 * 1000;
console.log("Hej");

function calendarInit() {
	var date = moment().format("YYYY-MM-DDTHH:mm:ss") + '%2B02:00';
	var url = 'https://www.googleapis.com/calendar/v3/calendars/' + userName + '/events?key=' + key + '&maxResults=' + limit + '&timeMin=' + date;
	var topic = '';
	var eventDate = '';
	var html = '';
	console.log(url);
	
	$.getJSON(url, function(data) {
		for (var i=0; i < limit; i++) {
			item = data['items'][i];
			
			topic = item.summary;
			eventDate = moment(item.start.dateTime).format("DD/MM HH:mm");
			
			html += eventDate + ' - ' + topic + '<br />';
		}
		
		$("#calendar").html(html);
		window.setTimeout(calendarInit, updateInterval);
	});
}