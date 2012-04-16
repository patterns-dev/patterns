<?php
function new_folder ($s) {
  echo "Creating new folder...<br>";
  global $basepath, $dir;
  $d = $basepath.$dir.$s;
  if (is_dir($d)) {echo "Folder already exists...<br>"; return;}
  if (!mkdir($d, 0777)) {echo "Did not create folder...<br>";} else {echo "OK!<br>";}
}

for($i = 1; $i < 254; $i++){
	new_folder("C:/2012-reference/patterns/newpat/newpat" . $i);
}
?>