<?php 
$pull = shell_exec('git pull 2>&1');
echo $pull;
$cmd = 'set';

echo "<pre>".shell_exec($cmd)."</pre>";
?>

asdasdasd