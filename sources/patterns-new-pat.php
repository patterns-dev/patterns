<?php

function doIt() {

	$patternNames = file('pattern-names.txt');
	
	for ($i = 1; $i < count($patternNames); $i++) {
		$destination = '../newpat/newpat' . $i . '/newpat' . $i . '.htm';
		
		$contents = '<div id="content">' . "\n";
		$contents .= '<p><i>Titles and categories scraped by algorithm from on-line sources:</i></p>' . "\n";
		$contents .= 'Pattern Number: <b>' . $i . "</b><br>\n";
		
		$name = trim($patternNames[$i]);
		
		$contents .= '<p>Pattern Title: <b>' . $name . "</b></p>\n";;
		
		if ($i < 95) {
			$contents .= '<p>Category: <b>Towns</b>' . "</p>\n";
		} elseif ($i < 205) {
			$contents .= '<p>Category: <b>Buildings</b>' . "</p>\n";
		} else {
			$contents .= '<p>Category: <b>Construction</b>' . "</p>\n";
		}
		
		// used separate PHP file to build these
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
		
		// opens a cleaned up version of the orginal source. 
		$page = file_get_contents('../clean2/apl' . $i . '/apl' . $i . '.htm');
		$pos1 = stripos($page, 'threedots');
		$subPage = substr($page, 0, $pos1);
		$j = 1;
		$k = 0;
		$links = '';
		while ($j < strlen($subPage) ) {
			$pos2 = stripos($subPage, '../apl');
			$pos3 = stripos(substr($subPage, $pos2 + 5), '/apl');
			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish<br>' . "\n";			
			} else { 
				$j = $pos2;
				$linkID = substr($subPage, $pos2 + 6, $pos3 - 1);
				$links .=  '<a href="../newpat' . $linkID . '/newpat'  . $linkID . '.htm#pat' . $linkID . '">' . $linkID . ' ' . trim($patternNames[$linkID]) . '</a> ';
				$subPage = substr($subPage, $pos2 + 10);
			}
			// echo $i . ' Up links: ' . $pos2  . ' ' . $pos3 . ' ~ ' .$links . "<br>\n";
			$k = $k + 1;
			// just to break a possible infinite loop...
			if ($k > 20) {
				echo 'Up k > 20! ~ ' . $pos2 . ' ' . substr($subPage, 0, 50) . '<br>'; 
				break;
			} 
		}		
		$contents .=  '<p>Up links: ' . $links . "</p>\n";
		
		$subPage = substr($page, $pos1 + 10);
		$pos1 = stripos($subPage, 'threedots');
		$subPage = substr($subPage, 0, $pos1);
		$j = 1;
		$k = 0;
		$links = '';
		
		while ($j < strlen($subPage) ) {
			$pos2 = stripos($subPage, '../apl');
			$pos3 = stripos(substr($subPage, $pos2 + 5), '/apl');

			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish Up links<br>' . "\n";			
			} else { 
				$j = $pos2;
				$linkID = substr($subPage, $pos2 + 6, $pos3 - 1);
				$links .=  '<a href="../newpat' . $linkID . '/newpat'  . $linkID . '.htm#pat' . $linkID . '">' . $linkID . ' ' . trim($patternNames[$linkID]) . '</a> ';
				$subPage = substr($subPage, $pos2 + 10);
			}
			// echo $i . ' Horizontal links: ' . $pos2  . ' ' . $pos3 . ' ~ ' .$links . "<br>\n";
			$k = $k + 1;
			// just to break a possible infinite loop...
			if ($k > 25) {
				echo 'Up k > 20! ~ ' . $pos2 . ' ' . substr($subPage, 0, 50) . '<br>'; 
				break;
			} 
		}		
		$contents .= '<p>Horizontal links: ' . $links . "</p>\n";
		
		$pos1 = strripos($page, 'threedots');
		$subPage = substr($page, $pos1);
		$j = 1;
		$k = 0;
		$links = '';
		
		while ($j < strlen($subPage) ) {
			$pos2 = stripos($subPage, '../apl');
			$pos3 = stripos(substr($subPage, $pos2 + 5), '/apl');

			if ($pos2 === false) {
				$j = $pos1 + 100;
				// echo $i, ' finish<br>' . "\n";			
			} else { 
				$j = $pos2;
				$linkID = substr($subPage, $pos2 + 6, $pos3 - 1);
				$links .=  '<a href="../newpat' . $linkID . '/newpat'  . $linkID . '.htm#pat' . $linkID . '" >' . $linkID . ' ' . trim($patternNames[$linkID]) . '</a> ';
				$subPage = substr($subPage, $pos2 + 10);
			}
			// echo $i . ' Down links: ' . $pos2  . ' ' . $pos3 . ' ~ ' .$links . "<br>\n";
			$k = $k + 1;
			// just to break a possible infinite loop...
			if ($k > 25) {
				echo 'Up k > 20! ~ ' . $pos2 . ' ' . substr($subPage, 0, 50) . '<br>'; 
				break;
			} 
		}		
		$contents .= '<p>Down links: ' . $links . "</p>\n";
		
		$contents .= '<p>Link to source: <a href="http://www.patternlanguage.com/apl/apl' . $i .
		'/apl' . $i . '.htm" target="_blank" > http://www.patternlanguage.com/apl/apl' . $i .
		'/apl' . $i . '.htm</a> - requires US $5/month subscription to access</p>' . "\n";

		$contents .= '<p>Link to Google Books: <a href="http://books.google.com/books?id=hwAHmktpk5IC&q=' .
		$i . '+' . $name . '" target="_blank">' . $i . ' ' . $name . '</a> - look for result showing just pattern number and title</p><br>' . "\n";		
		
		
		$contents .= '<p><i>Summaries of content, keywords and links generated by algorithms. Thank you <a href="http://smmry.com/" target="_blank">smmry.com</a>:</i></p>' . "\n";
		
		$smmryFile = '../smmry/apl' . $i . '/apl' . $i . '.htm';
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
		
		$contents .= 'Google Image Search: <a href="https://www.google.com/search?q=' . 
		$searchKeyWords . '&hl=en&tbm=isch" target="_blank">Searching on: ' . $keyWords . '</a><br>' . "\n";
		$contents .= "</div>\n";
		$contents .= "</body>\n</html>";
		
		echo $i . ' ' . $contents . '<br>';	
		
		$header = "<!doctype html>\n<html>\n<head>\n";
		$header .= "<title>Pattern " . $i . ' ~ '. $name . "</title>\n";
		$header .= "</head>\n";
		$header .= "<body id='" . $i . "'>\n<script src='../make-menu.js'></script>\n";
		file_put_contents($destination, $header . $contents);
	}
}

doIt();
?>