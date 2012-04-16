<?php
global $basepath, $content;
$basepath = "c:/2012-reference/patterns/original/";
$content = "Towns<br>";

function gen_content() {
	global $content;
	for($i = 1; $i < 254; $i++) {
		$page = file_get_contents('c:/2012-reference/patterns/original/apl' . $i . '/apl' . $i . '.htm');
		$pos1 = stripos($page, '<TITLE>');
		$pos2 = stripos($page, '</TITLE>');
		$title = substr($page, $pos1 + 7, $pos2 - $pos1 - 7);	
		$title = ucwords(strtolower($title));
		$title = trim($title);
		$patterns = array();
		$patterns[0] = '/Of/';
		$patterns[1] = '/To /';
		$patterns[2] = '/And/';
		$patterns[3] = '/In /';
		$patterns[4] = '/As /';
		$patterns[5] = '/A /';
		$patterns[6] = '/The /';
		$replacements = array();
		$replacements[0] = 'of';
		$replacements[1] = 'to ';
		$replacements[2] = 'and';
		$replacements[3] = 'in ';
		$replacements[4] = 'as ';
		$replacements[5] = 'a ';
		$replacements[6] = 'the ';
		$title = preg_replace($patterns, $replacements, $title);
		$content = $content . '<a href="apl' . $i . '/apl' . $i . '.htm" target="pattern">' . $title . '</a><br>' . "\r\n";
		if ($i === 94) {$content = $content . '<br>Buildings<br>';}
		if ($i === 204) {$content = $content . '<br>Construction<br>';}
	}
}
function new_file($s,$content) {
	global $basepath;
    if (!$handle = fopen($basepath.$s, 'w')) {
      echo "Cannot open file ($s)";
      exit;
    }
    if (fwrite($handle, $content) === FALSE) {
      echo "Cannot write to file ($s)";
      exit;
    }
    // echo "<br>Success, wrote ($content) to file: $s";
    fclose($handle);
}

gen_content();
echo $content;
new_file('navigation.htm',$content);	  
?>