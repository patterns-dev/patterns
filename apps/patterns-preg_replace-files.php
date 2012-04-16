<?php
global $basepath, $content;
$basepath = "c:/2012-reference/patterns/";

function gen_content() {
	global $basepath;
	for($i = 1; $i < 254; $i++) {
	
		$source = file_get_contents($basepath . 'tidy/apl' . $i . '/apl' . $i . '.htm');
		$destination = $basepath . 'clean2/apl' . $i . '/apl' . $i . '.htm';
		$cleaned = $source;
		
		$pattern = '/<meta(.*?)>/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned); 
		
		$pattern = '/<style\b[^>]*>(.*?)<\/style>/siu';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);  
		
		$pattern = '/<base target="_self">/';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<body(.*?)>/';
		$replacement = '<body>';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);

		$pattern = '/<body>\r\n<p>(.*?)<\/p>/si';
		$replacement = '<h1>\\1</h1>';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);		
		
		$pattern = '/<span class=\"h2class\">(.*?)<\/span>/si';
		$replacement = '\\1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<span class=\"h3class\">(.*?)<\/span>/si';
		$replacement = '\\1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<span class=\"h5class\">(.*?)<\/span>/si';
		$replacement = '\\1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<span class=\"h6class\">(.*?)<\/span>/si';
		$replacement = '\\1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<div class=\"h4class\" align=\"center\">(.*?)<\/div>/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/ align=\"center\"/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/ width=(.*?)border=\"2\"/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/ width=\"120\"/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);

		$pattern = '/\.\.\./';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);		
		
		$pattern = '/<div>(.*?)<\/div>/si';
		$replacement = "<p>\\1</p>";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	
		
		$pattern = '/<p>&nbsp;<\/p>/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	

		$pattern = '/&nbsp;/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<br>/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);

		// pattern 6 +
		
		$pattern = '/<center>(.*?)<\/center>/si';
		$replacement = '\\1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<h4>(.*?)<\/h4>/si'; // copyright only?
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	

		$pattern = '/<font color=\"#FF0000\">/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	

		$pattern = '/<font color=\"#FFFF99\">/si';
		$replacement = ' ';  // <<<<
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		// $pattern = '/\.<\/font>/si';
		// $cleaned = preg_replace($pattern, $replacement, $cleaned);

		$pattern = '/<\/font>/si';
		$replacement = '';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);		

		$pattern = '/<h3>(.*?)<\/h3>/si';
		$replacement = '<p>\\1</p>';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<h5>(.*?)<\/h5>/si';
		$replacement = '<p>\\1</p>';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	
		
		$pattern = '/<h6>(.*?)<\/h6>/si';
		$replacement = '<p>\\1</p>';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	
		
		$pattern = '/h2/si';
		$replacement = 'h1';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);	
		
		$pattern = '/\r\n\r\n/si';
		$replacement = "\r\n";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/\r\n\r\n/si';
		$replacement = "\r\n";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/\s\s\./';
		$replacement = ' ';
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/\r\n<img(.*?)>/si';
		$replacement = "\r\n<p><img\\1></p>";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
			
		$pattern = '/<p>\r\n<\/p>/si';
		$replacement = "";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<p>\r\n<p>/si';
		$replacement = "<p>";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/<\/p>\r\n<\/p>/si';
		$replacement = "</p>";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);
		
		$pattern = '/\r\n\r\n/si';
		$replacement = "\r\n";
		$cleaned = preg_replace($pattern, $replacement, $cleaned);		
		
		file_put_contents($destination, $cleaned);
		echo $i . ' ' . $cleaned . '<br>';
	}
}

gen_content();	  
?>