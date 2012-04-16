<?php
// scrapes images off a web site
global $basepath, $content;
$basepath = "c:/2012-reference/patterns/original/";
$content = "";

function gen_content() {
	global $content;
	for($i = 244; $i < 254; $i++) {

		$page = file_get_contents('c:/2012-reference/patterns/original/apl' . $i . '/apl' . $i . '.htm');
		$finished = false;
		while (!$finished) {
			$pos1 = stripos($page, 'SRC=');
			if ($pos1 < 5) {
				$finished = true;			
			} else {
				$tmp = substr($page, $pos1 + 5, 3);
				// echo $tmp . '<br>';
				
				if ($tmp <> '../') {
					$pos2 = stripos($page, '.jpg');
					if ($pos2 < $pos1 +  25) {
						$image = substr($page, $pos1 + 5, $pos2 - $pos1 - 1);	
						echo $image . '<br>'; // . ' ' . $pos1 . '<br>-' . $pos2 . '<br>';
						$content = $content . $image . '<br>';				
					} else {
						$pos2 = stripos($page, '.gif');
						if ($pos2 < $pos1 +  20) {
							$image = substr($page, $pos1 + 5, $pos2 - $pos1 - 1);	
							//echo $image . '<br>'; // . ' ' . $pos1 . '<br>-' . $pos2 . '<br>';
							$content = $content . $image . '<br>';				
						}
					}
					$source = file_get_contents('http://www.patternlanguage.com/apl/apl' . $i . '/' . $image);
					$destination = 'c:/2012-reference/patterns/original/apl' . $i . '/' . $image;
					file_put_contents($destination, $source);
				}
				$page = substr($page, $pos1 + 25);
			}
		}
		
	}
}
function new_file($s,$content) {
	global $basepath;
    if (!$handle = fopen($basepath . $s, 'w')) {
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
// new_file('1try.htm',$content);	  
?>