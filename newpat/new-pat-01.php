<?php
global $basepath, $content;
$basepath = "c:/2012-reference/patterns/newpat/";

function doIt() {
	global $basepath;
	$source = file($basepath . 'navigation-no-cats.htm');
	
	for ($i = 1; $i < count($source) + 1; $i++) {
		$destination = $basepath . 'newpat' . $i . '/newpat' . $i . '.htm';
		$contents = '<body style="font: 11pt monospace; margin-left: 110px; text-indent: -100px">' . "\n";
		$contents .= 'Pattern Number: <b>' . $i . "</b><br>\n";
		
		$line = $source[$i - 1];
		
		$pattern = '/<a\b[^>]*>(.*?)<\/a><br>/si';
		$replacement = '\\1';
		$line = preg_replace($pattern, $replacement, $line);
		
		$pos1 = strpos($line, ' ');
		$line = substr($line, $pos1 + 1);
		$contents .= '<p>Pattern Title: <b>' . $line . "</b></p>\n";;
		
		if ($i < 95) {
			$contents .= '<p>Category: <b>Towns</b>' . "</p>\n";
		} elseif ($i < 205) {
			$contents .= '<p>Category: <b>Buildings</b>' . "</p>\n";
		} else {
			$contents .= '<p>Category: <b>Construction</b>' . "</p>\n";
		}
		
		if ( $i < 2 ) { $subCat = "Regions instead of countries"; }
		elseif ( $i < 8 ) { $subCat = "Regional policies"; }
		elseif ( $i < 12 ) { $subCat = "Major structures which define the city"; }
		elseif ( $i < 16 ) { $subCat = "Communities and neighborhoods"; }
		elseif ( $i < 21 ) { $subCat = "Community networks"; }
		elseif ( $i < 28 ) { $subCat = "Character of local environments"; }
		elseif ( $i < 35 ) { $subCat = "Local centers"; }
		elseif ( $i < 41 ) { $subCat = "Housing"; }
		elseif ( $i < 49 ) { $subCat = "Work"; }
		elseif ( $i < 58 ) { $subCat = "Local road and path network"; }
		elseif ( $i < 67 ) { $subCat = "Public open land"; }
		elseif ( $i < 75 ) { $subCat = "Local common land"; }
		elseif ( $i < 80 ) { $subCat = "Transformation of the family"; }
		elseif ( $i < 87 ) { $subCat = "Transformation of work and learning"; }
		elseif ( $i < 95 ) { $subCat = "Transformation of local shops and gathering places"; }
		elseif ( $i < 104 ) { $subCat = "The overall arangement of a group of buildings"; }
		elseif ( $i < 110 ) { $subCat = "The position of individual buildings"; }
		elseif ( $i < 119 ) { $subCat = "Entrances, gardens, courtyards, roofs and terraces"; }
		elseif ( $i < 127 ) { $subCat = "Paths and squares"; }
		elseif ( $i < 136 ) { $subCat = "Gradients and connection of space"; }
		elseif ( $i < 146 ) { $subCat = "The most important areas and rooms (in a house)"; }
		elseif ( $i < 153 ) { $subCat = "The most important areas and rooms (in offices, workshops and public buildings)"; }
		elseif ( $i < 159 ) { $subCat = "Outbuildings and access to the street and gardens"; }
		elseif ( $i < 169 ) { $subCat = "Knit the inside of the building to the outside"; }
		elseif ( $i < 179 ) { $subCat = "Arrange the gardens, and the places in the gardens"; }
		elseif ( $i < 190 ) { $subCat = "Inside, attach necessary minor rooms and alcoves"; }
		elseif ( $i < 197 ) { $subCat = "Fine tune the shape and size of rooms and alcoves "; }
		elseif ( $i < 205 ) { $subCat = "Give the walls some depth"; }
		elseif ( $i < 209 ) { $subCat = "Let the structure grow directly from your plans and your conception of the buildings"; }
		elseif ( $i < 214 ) { $subCat = "Work out the complete structural layout"; }
		elseif ( $i < 221 ) { $subCat = "Mark the column locations and erect the main frame"; }
		elseif ( $i < 226 ) { $subCat = "Fix the exact positions for openings and frame them"; }
		elseif ( $i < 233 ) { $subCat = "Put in the following subsidiary patterns"; }
		elseif ( $i < 241 ) { $subCat = "Put in the surfaces and indoor details"; }
		elseif ( $i < 249 ) { $subCat = "Build outdoor details"; }
		else { $subCat = "Complete the Building"; }
		
		$contents .= '<p>Sub-Category: ' . $subCat . "</p>\n";
		
		$smmryFile = 'c:/2012-reference/patterns/smmry/apl' . $i . '/apl' . $i . '.htm';
		
		$smmry = file_get_contents($smmryFile);
		$smmryJSON = json_decode($smmry, true);
		
		// var_dump($smmryJSON);
		$smmryContent = $smmryJSON["sm_api_content"];
		$smmryArray = explode(". ",$smmryContent);
		// echo $smmryArray[0];
		for ($j = 0; $j < 6; $j++) {
			$contents .= '<p>Summary ' . ($j + 1) . ': ' . $smmryArray[$j] . ".</p>\n";
		}
		
		$smmryKeyWords = $smmryJSON["sm_api_keyword_array"];
		$keyWords = '';
		$searchKeyWords = '';
		for ($j = 0; $j < 5; $j++) {
			$keyWords .= strtolower($smmryKeyWords[$j]) . ' ';
			$searchKeyWords .= strtolower($smmryKeyWords[$j]) . '+';
		}
		$contents .= '<p>Keywords: ' . $keyWords . "</p>\n";
		
		// 
		$page = file_get_contents('c:/2012-reference/patterns/clean2/apl' . $i . '/apl' . $i . '.htm');
		$pos1 = stripos($page, 'threedots');
		$subPage = substr($page, 0, $pos1);
		
		$j = 1;
		$k = 0;
		$links = '';
		while ($j <  strlen($subPage) ) {
			$pos2 = stripos($subPage, '<a hre');
			$pos3 = stripos($subPage, '</a>');

			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish';			
			} else { 
				$j = $pos2;
				$links .= substr($subPage, $pos2, $pos3 - $pos2 + 4)  . ' ' ;
				$subPage = substr($subPage, $pos3 + 1);
				// echo strlen($page), '<br>';
			}
			$k = $k + 1;
			if ($k > 3) {break;} 
		}
		$contents .=  '<p>Up links: ' . $links . "</p>\n";
		
		$subPage = substr($page, $pos1 + 10);
		$pos1 = stripos($subPage, 'threedots');
		$subPage = substr($subPage, 0, $pos1);
		$j = 1;
		$k = 0;
		$links = '';
		while ($j <  strlen($subPage) ) {
			$pos2 = stripos($subPage, '<a hre');
			$pos3 = stripos($subPage, '</a>');

			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish';			
			} else { 
				$j = $pos2;
				$links .= substr($subPage, $pos2, $pos3 - $pos2 + 4)  . ' ' ;
				$subPage = substr($subPage, $pos3 + 1);
				// echo strlen($page), '<br>';
			}
			
			$k = $k + 1;
			if ($k > 3) {Echo 'k > 3!'; break;} 
		}		
		$contents .= '<p>Horizontal links: ' . $links . "</p>\n";
		
		$subPage = substr($page, $pos1 + 10);
		$pos1 = stripos($subPage, 'threedots');
		$subPage = substr($subPage, 0, $pos1);
		$j = 1;
		$k = 0;
		$links = '';
		while ($j <  strlen($subPage) ) {
			$pos2 = stripos($subPage, '<a hre');
			$pos3 = stripos($subPage, '</a>');

			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish';			
			} else { 
				$j = $pos2;
				$links .= substr($subPage, $pos2, $pos3 - $pos2 + 4)  . ' ' ;
				$subPage = substr($subPage, $pos3 + 1);
				// echo strlen($page), '<br>';
			}
			
			$k = $k + 1;
			if ($k > 3) {break;} 
		}		
		$contents .= '<p>Down Links: ' . $links . "</p>\n";
		
		$contents .= 'Google Image Search: <a href="https://www.google.com/search?q=' . 
		$searchKeyWords . '&hl=en&tbm=isch" target="_blank">Searching on: ' . $keyWords . '</a><br>' . "\n";
		$contents .= '</body>';
		
		echo $i . ' ' . $contents . '<br>';	
		file_put_contents($destination, $contents);
	}
}

doIt();
?>