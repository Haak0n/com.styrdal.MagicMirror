<?php
$filename = "/home/pi/tempsens/templog";
$db = new SQLite3($filename) or die('Unable to open database');

$sql = "SELECT temp1, temp2, date FROM templog ORDER BY rowid DESC LIMIT 1";
$ret = $db->query($sql);
$row = $ret->fetchArray(SQLITE3_ASSOC);

$temp1 = $row['temp1'];
$temp2 = $row['temp2'];

$date = date_parse_from_format("j/mY H:i:s", $row['date']);
$year = $date['year'];
$month = $date['month'] - 1;
$day = $date['day'];
$hour = $date['hour'];
$minute = $date['minute'];
$second = $date['second'];


$table = array('temp1' => $temp1, 'temp2' => $temp2, 'date' => $date);
$jsontable = json_encode($table);

echo $jsontable;
?>