<?php
$patternNames = file('pattern-names.txt');

$menu = 'var menuSourceString =';
$menu .= ' \'<a href="../newpat0/new-patterns-introduction.htm">Introduction</a><br><br>\' +' . "\n" . ' \'Towns<br>\' +' . "\n";

for ($i = 1; $i < count($patternNames); $i++) {
	$line = trim($patternNames[$i]);
	// $line = htmlentities($line);  // not working ?!?
	
	$pattern = '/\'/si';
	$replacement = '&apos;';
	$line = preg_replace($pattern, $replacement, $line);
	
	echo $i . ' ' . $line . '<br>';
	if ($i == 95) {
		$menu .= '\'<br>Buildings<br>\' +' . "\n";
	} elseif ($i == 205) {
		$menu .= '\'<br>Construction<br>\' +' . "\n";
	}
	$menu .= '\'<a href="../newpat' . $i . '/newpat' . $i . '.htm#pat' . $i . '" id="pat' . $i . '" >' . $i . ' ' . $line . '</a><br>\' +' . "\n";
}
$menu .= '\' \'; ' . "\n";

$menu .= 'document.body.style.backgroundColor = \'#ccc\';'  . "\n";
$menu .= 'document.body.style.font = \'12pt monospace\'; ' . "\n";
$menu .= 'document.body.style.overflow = \'hidden\'; ' . "\n\n";

$menu .= 'var sheet = document.createElement(\'style\'); ' . "\n";
$menu .= 'document.body.appendChild(sheet); ' . "\n";
$menu .= 'sheet.innerHTML = "h1 {display: inline;} ' .
	'#content {border: 2px inset; height: 90%; left: 23%; overflow: auto; ' .
	'padding: 0.5% 0.5% 0.5% 120px; position: absolute; text-indent: -110px; top: 5%; width: 65%} "; ' . "\n\n";

$menu .= 'var container = document.createElement( "div" ); ' . "\n";
$menu .= 'document.body.appendChild( container ); ' . "\n";
$menu .= 'container.style.left = "1%"; ' . "\n";
$menu .= 'container.style.position = "absolute"; ' . "\n";
$menu .= 'container.style.top = "5px"; ' . "\n";
$menu .= 'container.style.width = "100%"; ' . "\n";
$menu .= 'container.innerHTML = "<h1>New Patterns </h1>a preliminary mockup / \'wireframe\' / work in progress"; ' . "\n\n";

$menu .= 'var menu = document.createElement( "div" ); ' . "\n";
$menu .= 'document.body.appendChild( menu ); ' . "\n";
$menu .= 'menu.style.border = "2px inset"; ' . "\n";
$menu .= 'menu.style.height = "90%"; ' . "\n";
$menu .= 'menu.style.left = "1%"; ' . "\n";
$menu .= 'menu.style.padding = "0.5%"; ' . "\n";
$menu .= 'menu.style.overflow = "auto"; ' . "\n";
//$menu .= 'menu.style.overflowX = "hidden"; ' . "\n";
$menu .= 'menu.style.position = "absolute"; ' . "\n";
$menu .= 'menu.style.top = "5%"; ' . "\n";
$menu .= 'menu.style.width = "20%"; ' . "\n";
$menu .= 'menu.innerHTML= menuSourceString; ' . "\n\n";

// echo $menu;
file_put_contents('../newpat/make-menu.js', $menu);
?>