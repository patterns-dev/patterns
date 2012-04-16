<?php
global $sourcesPath, $content;
$sourcesPath = "c:/2012-reference/patterns/sources/";

function doIt() {
	global $sourcesPath;
	$source = file($sourcesPath . 'aplbullets.htm');
	$destination = $sourcesPath . 'cats.htm';
	$cat = 'Regional policies';
	$content = 'if ( $i < 2 ) { $subCat = "Regions instead of countries"; }' . "\n";
	for($i = 0; $i < count($source); $i++) {
		$line = $source[$i];
		$pattern = "/span class=h3class/";  // new sub-cat
		if ( preg_match($pattern, $line ) ) {
			$previousCat = $cat;
			$pattern = '/<span\b[^>]*>(.*?)<\/span>/smi';
			$replacement = '\\1';
			$cat = preg_replace($pattern, $replacement, $line);
			$cat = substr($cat, 2, strlen($cat) - 3);
			// echo $i . ' ' . ' ' . $line . '<br>';	
		}
		
		$pattern = "/span class=h5class/";
		if ( preg_match($pattern, $line ) ) {
			$pattern = '/<p><a\b[^>]*>(.*?)<\/a>/smi';
			$replacement = '\\1';
			$line = preg_replace($pattern, $replacement, $source[$i + 1]);
			$pos1 = strpos($line, ' ');
			$number = substr($line, 0, $pos1);
			if ($number > 2) {
				$content .= 'elseif ( $i < ' . $number . ' ) { $subCat = "' . $previousCat . '"; }' . "\n";
			}
		}
	}	
	$content .= 'else { $subCat = "Complete the Building"; }' . "\n";
	file_put_contents($destination, $content);
	echo $content;
}

doIt();

?>	