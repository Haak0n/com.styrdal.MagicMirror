<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

	<head>
		<script type="text/javascript" src="https://www.google.com/jsapi"></script>
		<script type="text/javascript">
			var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
		</script>
		<title>MirrorApp</title>
		<link rel="stylesheet" type="text/css" href="main.css" />
		<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	</head>
	<body>
		<div class="maincon">
			<div class="topleft">
				<div id="hours"></div>
				<div id="point1">:</div>
				<div id="minutes"></div>
				<div id="point2">:</div>
				<div id="seconds"></div><br />
				<div id="day"></div><br />
				<div id="date"></div>
				
			</div>
			<div class="topright">
				<div class="weathercon">
					<div id="temp"></div><br />
					<div id="intemp"></div><div id="outtemp"></div><br />
					<div id="forecast"></div>
				</div>
			</div>
			<div class="bottomleft">
				<div class="newscon">
					<div id="news"></div>
				</div>
			</div>
			<div class="bottomright">
				<div class="calendarcon">
					<div id="calendar"></div>
				</div>
			</div>
		</div>
		
		<script src="js/jquery.js"></script>
		<script src="js/moment.js"></script>
		<script src="js/versioncheck.js"></script>
		<script src="js/config.js"></script>
		<script src="js/main.js"></script>
		<script src="js/time.js"></script>
		<script src="js/weather.js"></script>
		<script src="js/news.js"></script>
		<script src="js/calendar.js"></script>
		<script src="js/temp.js"></script>
	</body>
</html>