#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Recommended for catching common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

; Following does not work because AHK opens a new tab. News tab means having to entern name and email address etc
; URLDownloadToFile, http://www.patternlanguage.com/apl/apl1/apl1.htm, C:\2012-reference\patterns\apl1\apl1.htm

; Have your browser open and its window active the run this macro
; Downoads twenty or so pages then fails
; Manually reset the Index and resave to move through the files...

; # = windows key 

#x::

Index = 187

loop 1
{
	sourceFile := "http://www.patternlanguage.com/apl/apl" . Index . "/apl" . Index . ".htm"
	destFile := "c:\2012-reference\patterns\apl" . Index . "\apl" . Index . ".htm"

	sendinput ^l
	sleep 200
	sendinput %sourceFile%
	sleep 200
	sendinput {enter}
	sleep 2000
	sendinput ^s
	sleep 1200
	sendinput !n
	sleep 200
	sendinput %destFile%
	sleep 200
	sendinput {enter}
	sleep 2000

	Index += 1
}

Return

