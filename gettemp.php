<?php
$filename = "/home/pi/tempsens/templog";
$db = new SQLite3($filename) or die('Unable to open database');

$sql = "SELECT temp1, temp2, date FROM templog ORDER BY rowid DESC LIMIT 1";
$ret = $db->query($sql);
$row = $ret->fetchArray(SQLITE3_ASSOC);

$temp1 = $row['temp1'];
$temp2 = $row['temp2'];

$date =  $row['date'];

$table = array();
$table['temp'] = array('temp1' => $temp1, 'temp2' => $temp2);
$table['date'] = $date;

$jsontable = json_encode($table);

echo $jsontable;
?>