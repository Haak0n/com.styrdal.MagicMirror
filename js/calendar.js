var key = 'AIzaSyBCoouCCaQIQ7VDY_cAsEqhetmOr50p5Bk';
var userName = 'styrdal@gmail.com';
var limit = 6;
var updateInterval = 60 * 1000;

function calendarInit() {
	var date = moment().format("YYYY-MM-DDTHH:mm:ss") + '%2B02:00';
	var url = 'https://www.googleapis.com/calendar/v3/calendars/' + userName + '/events?key=' + key + '&maxResults=' + limit + '&timeMin=' + date;
	var topic = '';
	var eventDate = '';
	var html = '<table class=calendar>';
	var opacity = 1;
	
	$.getJSON(url, function(data) {
		for (var i=0; i < limit; i++) {
			item = data['items'][i];
			
			item.sort(function(a,b){
				// Turn your strings into dates, and then subtract them
				// to get a value that is either negative, positive, or zero.
				return new Date(b.date) - new Date(a.date);
			});
			
			eventTopic = item.summary;
			eventTimeStamp = moment(item.start.dateTime)
			eventDate = eventTimeStamp.format("DD/MM");
			eventTime = eventTimeStamp.format("HH:mm");
			eventDay = eventTimeStamp.format("ddd");
			
			
			html += '<tr><td style="opacity:' + opacity + '" class="eventday">' + eventDay + '</td>';
			html += '<td style="opacity:' + opacity + '" class="eventdate">' + eventDate + '</td>';
			html += '<td style="opacity:' + opacity + '" class="eventtopic">' + eventTopic + '</td>';
			html += '<td style="opacity:' + opacity + '" class="eventtime">' + eventTime + '</td></tr>';
			opacity -= 0.155;
		}
		html += '</table>';
		$("#calendar").html(html);
		window.setTimeout(calendarInit, updateInterval);
	});
}