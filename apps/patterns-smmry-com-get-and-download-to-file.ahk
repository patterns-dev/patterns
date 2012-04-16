#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
#Warn  ; Recommended for catching common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.


; - # windows key
#x::

Index = 177


SplashTextOn, 1000, 300, smmry, The clipboard contains:`n%Index%'nStart
loop 2
{
smmryURL := "http://api.smmry.com/&SM_API_KEY=404243321856483&SM_LENGTH=6&SM_KEYWORD_COUNT=5&SM_URL=http://caper.ws/patterns/apl" . Index . "/apl" . Index . ".htm"
destFile := "c:\2012-reference\patterns\smmry\apl" . Index . "\apl" . Index . ".htm"

ControlSetText, ,The clipboard contains:`n%Index%`n%smmryURL%,smmry
sleep 1000
sendinput ^l
sleep 2000
sendinput %smmryURL%
sleep 8000
sendinput {enter}
sleep 15000
sendinput ^s
sleep 500
sendinput !n
sleep 2000
sendinput %destFile%
sleep 2000
sendinput {enter}
sleep 4000

Index += 1
}
ControlSetText, ,The clipboard contains:`n%Index%`n%smmryURL%`nFinished,smmry
Msgbox, Press OK to dismiss the SplashText
SplashTextOff

Return

