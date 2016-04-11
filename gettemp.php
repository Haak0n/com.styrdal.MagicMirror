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
$table['cols'] = array(
	array('id' => "A", 'label' => 'Time', 'type' => 'date'),
	array('id' => "B", 'label' => 'Outside Temperature', 'type' => 'number'),
	array('id' => "c", 'label' => 'Inside Temperature', 'type' => 'number')
	);
	
$temp = array();
$temp[] = array('v' => $date);
$temp[] = array('v' => $row['temp1']);
$temp[] = array('v' => $row['temp2']);
$rows[] = array('c' => $temp);


$table['rows'] = $rows;
$jsontable = json_encode($table);

echo $jsontable;
?>