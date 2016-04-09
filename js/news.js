google.load("feeds", "1");

var feedUrl = 'http://feeds.bbci.co.uk/news/world/rss.xml';
var feedLimit = 4;
var html = '';
var div = document.getElementById('news');
var updateInterval = 60 * 5 * 1000;

function newsInit() {
	var feed = new google.feeds.Feed(feedUrl);
	feed.setNumEntries(feedLimit);
	feed.load(displayFeed);
	window.setTimeout(newsInit, updateInterval);
}

function displayFeed(result) {
	if (!result.error) {
		var feedEntries = result.feed.entries;		
		for (var i=0; i < feedEntries.length; i++) {
			html += '<a class="topic">' + feedEntries[i].title + '</a><br />';
			html += '<a class="text">' + feedEntries[i].contentSnippet + '<a/><p />';
		}
		div.innerHTML=html;
		html = '';
	}
	else {
		alert("Error fetching feeds!");
	}
}