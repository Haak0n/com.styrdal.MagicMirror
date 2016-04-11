<?php
$filename = "/home/pi/tempsens/templog";
$db = new SQLite3($filename) or die('Unable to open database');

$sql = "SELECT temp1, temp2, date FROM templog ORDER BY rowid DESC LIMIT 1";
$ret = $db->query($sql);
$row = $ret->fetchArray(SQLITE3_ASSOC);

$temp1 = $row['temp1'];
$temp2 = $row['temp2'];

$date = date_parse_from_format("j/mY H:i:s", $row['date']);
$year = $dateparse['year'];
$month = $dateparse['month'] - 1;
$day = $dateparse['day'];
$hour = $dateparse['hour'];
$minute = $dateparse['minute'];
$second = $dateparse['second'];


$table = array('temp1' => $temp1, 'temp2' => $temp2, 'date' => $date);
$jsontable = json_encode($table);

echo $jsontable;
?>