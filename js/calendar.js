	var key = 'AIzaSyBCoouCCaQIQ7VDY_cAsEqhetmOr50p5Bk';
	var userName = 'styrdal@gmail.com';
	var limit = 5;

function calendarInit() {
	var date = moment().format();
	var url = 'https://www.googleapis.com/calendar/v3/calendars/' + userName + '/events?key=' + key + '&maxResults=' + limit + '&timeMin=' + date;
	var topic = '';
	var eventDate = '';
	var html = '';
	console.log(url);
	
	$.getJSON(url, function(data) {
		for (i in data[items]) {
			item = data[items][i];
			
			topic = item.summary;
			eventDate = moment(item.start.dateTime).format("dd/mm");
			
			html += eventDate + ' - ' + topic + '<br />';
		}
		
		$("#calendar").html(html);
	});
}