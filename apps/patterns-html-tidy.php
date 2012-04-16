<?php
global $basepath, $content;
$basepath = "c:/2012-reference/patterns/";

function gen_content() {
	global $basepath;
	for($i = 1; $i < 254; $i++) {
	
		$original = $basepath . 'clean2/apl' . $i . '/apl' . $i . '.htm';
		$destination = $basepath . 'clean/apl' . $i . '/apl' . $i . '.htm';
		echo $i . ' ' . $original . '<br>';
		
		echo system('c:/2012-setup/htmltidy/tidy -output '. $destination . ' -w 0 --tidy-mark no --char-encoding utf8' . $original);
		
	}
}

gen_content();	  
?>